// src/components/RecommendedTour.tsx
import Link from "next/link";

export const RecommendedTour = ({ story }: { story: any }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        {story.content.main_image?.filename && (
          <img
            src={story.content.main_image.filename}
            alt={story.content.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
          {story.content.name}
        </h3>
        {story.content.location && (
          <p className="text-sm text-gray-600 mt-1">
            Location: {story.content.location}
          </p>
        )}
        {story.content.price && (
          <p className="text-green-600 font-semibold mt-2">
            {Number(story.content.price).toLocaleString("en-US", {
              style: "currency",
              currency: "CAD",
              minimumFractionDigits: 0,
            })}
          </p>
        )}
        {story.content.description && (
          <p className="text-gray-600 mt-2 line-clamp-2">
            {story.content.description}
          </p>
        )}
        <div className="mt-4">
          <Link
            href={`/${story.full_slug}`}
            className="inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-colors duration-300"
          >
            View Tour
          </Link>
        </div>
      </div>
    </div>
  );
};