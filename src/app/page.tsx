// src/app/page.tsx
import { getStoryblokApi } from "@storyblok/react/rsc";
import { Page } from "@/components/Page";
import { draftMode } from "next/headers";

const fetchHomePage = async () => {
  const isDraft = draftMode().isEnabled;
  const version = isDraft ? "draft" : "published";

  const client = getStoryblokApi();
  const response = await client.get("cdn/stories/home", {
    version,
    resolve_relations: "recommended_tours.tours",
  });

  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();

  if (!story) {
    console.error("Home page story not found.");
    return <p>Sorry, no content available.</p>;
  }

  return (
    <div>
      <Page blok={story.content} />
    </div>
  );
};

export default HomePage;