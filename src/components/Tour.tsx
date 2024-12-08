import { renderRichText } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react/rsc";

export const Tour = ({ blok }: { blok: any }) => {
  console.log("Props received by Tour component:", blok);

  return (
    <div {...storyblokEditable(blok)} className="container mx-auto px-6 lg:px-8 py-12 space-y-12">
      {/* Tour Name */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        {blok.name}
      </h1>

      {/* Introduction */}
      {blok.body && (
        <div
          className="prose md:prose-lg mx-auto text-gray-700 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: renderRichText(blok.body) }}
        ></div>
      )}

      {/* Main Image */}
      {blok.main_image?.filename && (
        <div className="flex justify-center mb-8">
          <img
            src={blok.main_image.filename}
            alt={blok.name}
            className="w-full max-w-4xl h-auto rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Tour Details */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
        {blok.description && (
          <p className="text-gray-700 leading-relaxed">{blok.description}</p>
        )}

        {blok.location && (
          <p className="text-gray-600">
            <strong>Location:</strong> {blok.location}
          </p>
        )}

        {blok.price && (
          <p className="text-green-600 text-xl font-bold">
            {Number(blok.price).toLocaleString("en-US", {
              style: "currency",
              currency: "CAD",
              minimumFractionDigits: 0,
            })}
          </p>
        )}
      </div>
    </div>
  );
};