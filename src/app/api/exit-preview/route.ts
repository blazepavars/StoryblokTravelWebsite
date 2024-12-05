import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Create an absolute URL for the redirection
  const url = new URL("/", request.url);

  const response = NextResponse.redirect(url);

  // Delete the 'sb-preview' cookie
  response.cookies.set("sb-preview", "", { path: "/", maxAge: 0 });

  return response;
}