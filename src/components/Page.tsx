import { StoryblokComponent} from "@storyblok/react/rsc";

export const Page = (params: any) => {
  console.log("Params received by Page component:", params);
  const blocks = params.blok?.blocks || []; // Fallback to empty array if blocks is undefined

  return (
    <main>
      {blocks.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      )) || <p>No content available.</p>}
    </main>
  );
};