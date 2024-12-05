import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const GET = (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  // Return error if slug parameter is missing
  if (!slug) {
    return new Response("Missing slug parameter", { status: 400 });
  }

  draftMode().enable();

  // Handle root slug ("/") explicitly
  const redirectURL = slug === "/" ? "/" : `/${slug}`;

  console.log(`Redirecting to: ${redirectURL}`); // Debugging log

  return redirect(redirectURL);
};