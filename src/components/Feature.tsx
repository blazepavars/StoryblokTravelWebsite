import { storyblokEditable } from "@storyblok/react/rsc";

export const Feature = (params: any) => {
    return (
      <div {...storyblokEditable(params.blok)} className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
        {/* Icon or Image */}
        {params.blok.icon && (
          <div className="mb-4">
            <img
              src={params.blok.icon}
              alt={`${params.blok.headline} icon`}
              className="w-12 h-12 object-cover"
            />
          </div>
        )}
        {/* Headline */}
        <h3 className="text-xl font-bold text-blue-900 mb-2">
          {params.blok.headline}
        </h3>
        {/* Content */}
        <p className="text-gray-700 mb-4">{params.blok.content}</p>
        {/* Call to Action */}
        {params.blok.cta && params.blok.cta_link && (
          <a
            href={params.blok.cta_link}
            className="text-blue-600 font-semibold hover:underline mt-auto"
          >
            {params.blok.cta} →
          </a>
        )}
      </div>
    );
  };