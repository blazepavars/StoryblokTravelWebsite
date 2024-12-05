import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug") || "/";
    
    // Enable draft mode
    draftMode().enable();

    // Construct the URL with _storyblok=1
    const baseUrl = request.headers.get("origin") || "https://storyblok-travel-website.vercel.app";
    const url = new URL(slug, baseUrl);
    url.searchParams.set("_storyblok", "1");

    // Log the URL for debugging
    console.log("Redirecting to:", url.toString());

    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Error in /api/draft:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}