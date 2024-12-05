import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") || "/";

  // Enable draft mode so we fetch draft content
  draftMode().enable();

  // Ensure baseUrl is not null
  const baseUrl = request.headers.get("origin") || "https://your-default-domain.com";
  const url = new URL(slug, baseUrl);
  url.searchParams.set("_storyblok", "1");

  return NextResponse.redirect(url);
}