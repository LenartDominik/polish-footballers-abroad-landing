import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Nieprawidłowy adres e-mail" },
        { status: 400 },
      );
    }

    const { email } = result.data;

    const { error } = await supabase
      .from("waitlist")
      .insert({ email });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Ten email jest już na liście" },
          { status: 409 },
        );
      }
      return NextResponse.json(
        { error: "Coś poszło nie tak" },
        { status: 500 },
      );
    }

    try {
      await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
          },
          body: JSON.stringify({
            email,
            groups: [process.env.MAILERLITE_GROUP_ID],
          }),
        },
      );
    } catch {
      // MailerLite failure doesn't block the subscription
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Coś poszło nie tak" },
      { status: 500 },
    );
  }
}
