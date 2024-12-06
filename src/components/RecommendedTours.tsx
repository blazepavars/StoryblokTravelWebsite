import { RecommendedTour } from "./RecommendedTour";
import { storyblokEditable } from "@storyblok/react/rsc";

export const RecommendedTours = (params: any) => {
  return (
    <section {...storyblokEditable(params.blok)} className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          {params.blok.headline}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {params.blok.tours.map((tour: any) => (
            <RecommendedTour story={tour} key={tour.content._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};