import { StoryblokComponent } from "@storyblok/react/rsc";

export const Page = (params: any) => {
  const blocks = params.blok?.blocks || [];

  return (
    <main>
      {blocks.length > 0 ? (
        blocks.map((blok: any) => (
          <div key={blok._uid}>
            {blok._editable && (
              <div dangerouslySetInnerHTML={{ __html: blok._editable }} />
            )}
            <StoryblokComponent blok={blok} />
          </div>
        ))
      ) : (
        <p>No content available.</p>
      )}
    </main>
  );
};