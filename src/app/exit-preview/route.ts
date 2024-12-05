// src/app/api/exit-draft/route.ts
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Disable draft mode
    draftMode().disable();

    // Redirect to home or any other page
    const baseUrl = request.headers.get("origin") || "https://storyblok-travel-website.vercel.app";
    const url = new URL("/", baseUrl);

    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Error in /api/exit-draft:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}