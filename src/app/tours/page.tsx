import { getStoryblokApi } from "@storyblok/react/rsc";
import { Page } from "@/components/Page";
import { RecommendedTour } from "@/components/RecommendedTour";

const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories/tours`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    resolve_relations: "recommended_tours.tours",
  });

  console.log("Fetched Tours page:", JSON.stringify(response.data.story, null, 2)); // Debugging
  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories`, {
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    starts_with: "tours/", // Fetches all stories under "tours"
  });

  console.log("Fetched all tours:", JSON.stringify(response.data.stories, null, 2)); // Debugging
  return response.data.stories; // Returns an array of stories
};

const ToursPage = async () => {
  console.log("Rendering ToursPage...");
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  if (!story) {
    console.error("Tours page story not found.");
    return <p>Sorry, the Tours page content is missing.</p>;
  }

  if (!tours || tours.length === 0) {
    console.error("No tours found.");
    return (
      <div>
        <Page blok={story.content} />
        <p>No tours available.</p>
      </div>
    );
  }

  console.log("Story passed to Page component:", JSON.stringify(story.content, null, 2)); // Debugging
  console.log("All tours passed to RecommendedTour:", JSON.stringify(tours, null, 2)); // Debugging

  return (
    <div className="py-12 bg-gray-50">
      {/* Render Page Content */}
      <Page blok={story.content} />

      {/* Recommended Tours Section */}
      <section className="container mx-auto px-6 lg:px-8 mt-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Explore Our Tours
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour: any) => (
            <div
              key={tour.uuid}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <RecommendedTour story={tour} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ToursPage;