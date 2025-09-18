import React from "react";
import type { PropertyProps } from "@/interfaces";


const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
return (
<div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
<div className="relative h-48 md:h-40 lg:h-48 bg-gray-200">
<img
src={property.image}
alt={property.name}
className="object-cover w-full h-full"
/>
{property.discount && (
<span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
{property.discount}% OFF
</span>
)}
</div>


<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold">{property.name}</h3>
<p className="text-sm text-gray-500">
{property.address.city}, {property.address.state}
</p>
</div>


<div className="text-right">
<div className="text-sm text-gray-500">From</div>
<div className="font-bold text-lg">${property.price}</div>
</div>
</div>


<div className="mt-3 flex items-center justify-between">
<div className="flex items-center space-x-2 text-sm text-gray-600">
<div className="flex items-center">⭐ {property.rating}</div>
<div>•</div>
<div>{property.offers.bed} bd</div>
<div>·</div>
<div>{property.offers.occupants} pax</div>
</div>


<button className="text-sm text-indigo-600">View</button>
</div>
</div>
</div>
);
};


export default PropertyCard;