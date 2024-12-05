import { getStoryblokApi } from "@storyblok/react/rsc";
import { Tour } from "@/components/Tour";
import { draftMode } from "next/headers";

const mode = draftMode().isEnabled ? "draft" : "published";

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories/tours/${slug}`, {
    version: mode,
  });
  return response.data.story;
};

const fetchAllTourSlugs = async () => {
  const client = getStoryblokApi();
  const response = await client.get("cdn/stories", {
    version: mode,
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