import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const slug = searchParams.get("slug") || "/";

    console.log("Received secret:", secret);
    console.log("Expected secret:", process.env.NEXT_PUBLIC_PREVIEW_SECRET);
    console.log("Received slug:", slug);

    // Check if the secret matches
    if (secret !== process.env.NEXT_PUBLIC_PREVIEW_SECRET) {
      console.error("Invalid secret provided.");
      return new NextResponse("Invalid token", { status: 401 });
    }

    // Construct absolute URL for redirect
    const baseUrl = `${request.headers.get("host")?.startsWith("http") ? "" : "https://"}${request.headers.get("host")}`;
    const redirectUrl = new URL(slug, baseUrl);

    console.log("Redirecting to:", redirectUrl.toString());

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set("sb-preview", "1", { path: "/" });

    return response;
  } catch (error) {
    console.error("Error in /api/preview:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}