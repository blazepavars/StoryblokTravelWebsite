import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";

const fetchTourFinderPage = async () => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/tools/tour-finder", {
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
  });
  return data.story;
};

const TourFinderPage = async () => {
  const story = await fetchTourFinderPage();
  return (
    <div>
      <StoryblokComponent story={story} />
    </div>
  );
};

export default TourFinderPage;
