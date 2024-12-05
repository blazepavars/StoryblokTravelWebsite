import { getStoryblokApi } from "@storyblok/react/rsc";
import { Tour } from "@/components/Tour";

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories/tours/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

const fetchAllTourSlugs = async () => {
  const client = getStoryblokApi();
  const response = await client.get("cdn/stories", {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    content_type: "tour",
    starts_with: "tours/",
  });

  return response.data.stories.map((story: any) => story.slug);
};

export async function generateStaticParams() {
  const slugs = await fetchAllTourSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

const ToursPage = async ({ params }: { params: { slug: string } }) => {
  const story = await fetchTourPage(params.slug);

  return (
    <div>
      <Tour blok={story.content} />
    </div>
  );
};

export default ToursPage;