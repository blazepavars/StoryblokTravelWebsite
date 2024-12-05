import { getStoryblokApi } from "@storyblok/react/rsc";
import { Page } from "@/components/Page";

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories/home`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    resolve_relations: "recommended_tours.tours",
  });

  console.log("Fetched home page:", response.data.story); // Debugging
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();

  console.log("Story content passed to Page component:", story.content); // Debugging

  return (
    <div>
      <Page blok={story.content} />
    </div>
  );
};

export default HomePage;