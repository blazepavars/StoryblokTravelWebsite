import { StoryblokComponent } from "@storyblok/react";

export const Grid = ({ blok }: { blok: any }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          {blok.headline}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.items.map((nestedBlok: any) => (
            <div
              key={nestedBlok._uid}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-shadow duration-300"
            >
              <StoryblokComponent blok={nestedBlok} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};