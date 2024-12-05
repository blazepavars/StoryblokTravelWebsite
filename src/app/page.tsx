import { getStoryblokApi } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
import { Page } from "@/components/Page";

const fetchHomePage = async () => {
  const { isEnabled } = draftMode(); // Check if draft mode is enabled
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories`, {
    version: isEnabled ? "draft" : "published",
    starts_with: "", // Fetch the root story
  });

  return response.data.stories?.[0]; // Return the first matching story
};

const HomePage = async () => {
  const story = await fetchHomePage();

  if (!story) {
    return <p>Page not found</p>; // Handle missing content gracefully
  }

  return (
    <div>
      <Page blok={story.content} />
    </div>
  );
};

export default HomePage;