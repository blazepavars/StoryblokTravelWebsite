import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug") || "/"; // Ensure slug is always a string
    const baseUrl = request.headers.get("origin") ?? "https://storyblok-travel-website.vercel.app/"; // Ensure baseUrl is a string

    // Enable draft mode
    draftMode().enable();

    const url = new URL(slug, baseUrl);
    url.searchParams.set("_storyblok", "1");

    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Error in /api/draft:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}