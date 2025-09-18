import type { NextPage } from "next";
"Beachfront",
"Pet Friendly",
"Mountain View",
"Pool",
"Free WiFi",
];


const Home: NextPage = () => {
const [activeFilter, setActiveFilter] = useState<string | null>(null);


const filteredList = (PROPERTYLISTINGSAMPLE as PropertyProps[]).filter((p) => {
if (!activeFilter) return true;
const key = activeFilter.toLowerCase();
return (
p.category.join(" ").toLowerCase().includes(key) ||
p.name.toLowerCase().includes(key) ||
p.address.city.toLowerCase().includes(key)
);
});


return (
<div>
<section
className="relative h-64 md:h-96 flex items-center"
style={{ backgroundImage: `url(${BACKGROUND_IMAGE})`, backgroundSize: "cover" }}
>
<div className="absolute inset-0 bg-black opacity-30"></div>
<div className="container mx-auto relative z-10 px-4 text-white">
<h1 className="text-3xl md:text-5xl font-bold">Find your favorite place here!</h1>
<p className="mt-2 text-sm md:text-lg">The best prices for over 2 million properties worldwide.</p>
</div>
</section>


<section className="container mx-auto px-4 py-6">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold">Filters</h2>
<div className="text-sm text-gray-500">{filteredList.length} properties</div>
</div>


<div className="mt-4 flex gap-3 flex-wrap">
{filterLabels.map((label) => (
<Pill
key={label}
label={label}
active={activeFilter === label}
onClick={() => setActiveFilter((s) => (s === label ? null : label))}
/>
))}
</div>


<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{filteredList.map((property) => (
<PropertyCard key={property.name} property={property} />
))}
</div>
</section>
</div>
);
};


export default Home;