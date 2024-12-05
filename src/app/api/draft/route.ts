import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug") || "/";

    // Enable draft mode
    draftMode().enable();

    // Redirect to the slug with `_storyblok=1` appended
    const url = new URL(slug, `${request.headers.get("origin")}`);
    url.searchParams.set("_storyblok", "1");

    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Error in /api/draft:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}