import { getStoryblokApi } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

export const dynamic = "force-dynamic";

const fetchTourData = async (slug: string) => {
  const mode = draftMode().isEnabled ? "draft" : "published";
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories/tours/${slug}`, { version: mode });
  return response.data.story;
};

const ToursPage = async ({ params }: { params: { slug: string } }) => {
  const story = await fetchTourData(params.slug);
  if (!story) {
    return <p>Tour not found.</p>;
  }
  return <div>{/* Render your tour using draft/published data as needed */}</div>;
};

export default ToursPage;