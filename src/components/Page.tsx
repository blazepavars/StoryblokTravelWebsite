import { StoryblokComponent } from "@storyblok/react/rsc";
import { storyblokEditable } from "@storyblok/react/rsc";

export const Page = (params: any) => {
  console.log("Params received by Page component:", params);
  const blocks = params.blok?.blocks || [];

  return (
    <main {...storyblokEditable(params.blok)}>
      {blocks.length > 0 ? (
        blocks.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      ) : (
        <p>No content available.</p>
      )}
    </main>
  );
};