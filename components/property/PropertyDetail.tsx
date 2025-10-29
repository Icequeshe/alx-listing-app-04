interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    location: string;
    amenities?: string[];
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-lg text-indigo-600 font-semibold mb-4">${property.price}/night</p>

      <p className="text-gray-700 leading-relaxed mb-6">{property.description}</p>

      {property.amenities && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Amenities</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
