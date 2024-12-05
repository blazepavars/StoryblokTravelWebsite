export const Feature = ({ blok }: { blok: any }) => {
    return (
      <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
        {/* Icon or Image */}
        {blok.icon && (
          <div className="mb-4">
            <img
              src={blok.icon}
              alt={`${blok.headline} icon`}
              className="w-12 h-12 object-cover"
            />
          </div>
        )}
        {/* Headline */}
        <h3 className="text-xl font-bold text-blue-900 mb-2">
          {blok.headline}
        </h3>
        {/* Content */}
        <p className="text-gray-700 mb-4">{blok.content}</p>
        {/* Call to Action */}
        {blok.cta && blok.cta_link && (
          <a
            href={blok.cta_link}
            className="text-blue-600 font-semibold hover:underline mt-auto"
          >
            {blok.cta} →
          </a>
        )}
      </div>
    );
  };