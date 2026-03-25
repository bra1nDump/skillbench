import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

import { makeUnsubToken } from "@/app/api/subscribe/route";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const token = typeof body.token === "string" ? body.token : "";

    if (!email || !token) {
      return NextResponse.json({ error: "Missing email or token" }, { status: 400 });
    }

    const expected = makeUnsubToken(email);

    if (token !== expected) {
      return NextResponse.json({ error: "Invalid unsubscribe link" }, { status: 403 });
    }

    const wasMember = await redis.srem("subscribers:emails", email);

    if (!wasMember) {
      return NextResponse.json({ error: "Email not found in subscribers" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
