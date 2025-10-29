interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    location: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        <p className="text-gray-700 text-sm line-clamp-2">{property.description}</p>
        <p className="text-indigo-600 font-bold mt-3">${property.price}/night</p>
      </div>
    </div>
  );
}
