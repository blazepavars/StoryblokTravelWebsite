import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "/";

  if (secret !== process.env.NEXT_PUBLIC_PREVIEW_SECRET) {
    return new NextResponse("Invalid token", { status: 401 });
  }

  const response = NextResponse.redirect(slug);
  response.cookies.set("sb-preview", "1", { path: "/" });

  return response;
}