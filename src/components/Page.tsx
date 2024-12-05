import { StoryblokComponent } from "@storyblok/react/rsc";

export const Page = (params: any) => {
  const blocks = params.blok?.blocks || [];

  return (
    <main>
      {/* If this component itself is a blok and has _editable */}
      {params.blok?._editable && (
        <div
          dangerouslySetInnerHTML={{ __html: params.blok._editable }}
        />
      )}

      {blocks.length > 0 ? (
        blocks.map((blok: any) => (
          <div key={blok._uid}>
            {/* Output the _editable HTML comment before this block */}
            {blok._editable && (
              <div
                dangerouslySetInnerHTML={{ __html: blok._editable }}
              />
            )}
            {/* Render the blok */}
            <StoryblokComponent blok={blok} />
          </div>
        ))
      ) : (
        <p>No content available.</p>
      )}
    </main>
  );
};