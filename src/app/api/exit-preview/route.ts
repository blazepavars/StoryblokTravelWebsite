import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect("/");

  // Correctly delete the 'sb-preview' cookie
  response.cookies.set("sb-preview", "", { path: "/", maxAge: 0 });

  return response;
}