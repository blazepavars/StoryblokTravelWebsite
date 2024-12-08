import { renderRichText } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react/rsc";

export const Tour = ({ blok }: { blok: any }) => {
  return (
    <div {...storyblokEditable(blok)} className="container mx-auto px-6 lg:px-8 py-12 space-y-12">
      {blok._editable && (
        <div dangerouslySetInnerHTML={{ __html: blok._editable }} />
      )}
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        {blok.name}
      </h1>
      {blok.body && (
        <div
          className="prose md:prose-lg mx-auto text-gray-700 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: renderRichText(blok.body) }}
        ></div>
      )}
    </div>
  );
};