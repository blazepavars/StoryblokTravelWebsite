export const Testimonial = ({ blok }: { blok: any }) => {
  const stars = blok.rating ?? 5;

  return (
    <div>
      {/* Output _editable comment if available */}
      {blok._editable && (
        <div
          dangerouslySetInnerHTML={{ __html: blok._editable }}
        />
      )}

      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <p className="text-gray-700 italic mb-4">"{blok.comment}"</p>
        <p className="text-blue-900 font-semibold text-right">- {blok.name}</p>
        <div className="mt-4 flex">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                index < stars ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};