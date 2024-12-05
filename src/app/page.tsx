import { getStoryblokApi } from "@storyblok/react/rsc";
import { Page } from "@/components/Page";
import { draftMode } from "next/headers";

export const dynamic = "force-dynamic";

const fetchHomePage = async () => {
  const mode = draftMode().isEnabled ? "draft" : "published";
  const client = getStoryblokApi();
  const response = await client.get("cdn/stories/home", {
    version: mode,
    resolve_relations: "recommended_tours.tours",
  });

  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();
  return (
    <div>
      <Page blok={story.content} />
    </div>
  );
};

export default HomePage;