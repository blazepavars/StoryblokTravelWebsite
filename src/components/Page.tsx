"use client";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export const Page = (params: any) => {
  const blocks = params.blok?.blocks || [];

  return (
    <main>
      {blocks.length > 0 ? (
        blocks.map((blok: any) => (
          <div key={blok._uid} {...storyblokEditable(blok)}>
            <StoryblokComponent blok={blok} />
          </div>
        ))
      ) : (
        <p>No content available.</p>
      )}
    </main>
  );
};