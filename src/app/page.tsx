import { getStoryblokApi } from "@storyblok/react/rsc";
import { Page } from "@/components/Page";

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories/home`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
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