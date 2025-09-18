import Link from "next/link";
import React from "react";


const Header: React.FC = () => {
return (
<header className="bg-white shadow-sm">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center space-x-4">
<Link href="/">
<a className="text-2xl font-bold">AlxListing</a>
</Link>


<nav className="hidden md:flex items-center space-x-3 text-sm text-gray-600">
<a className="hover:text-gray-900">Rooms</a>
<a className="hover:text-gray-900">Villas</a>
<a className="hover:text-gray-900">Mansions</a>
<a className="hover:text-gray-900">Countryside</a>
</nav>
</div>


<div className="flex-1 px-4">
<div className="max-w-xl mx-auto">
<label className="relative block">
<input
className="w-full border rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
placeholder="Search city, state or property name"
/>
</label>
</div>
</div>


<div className="flex items-center space-x-3">
<button className="text-sm">Sign in</button>
<button className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm">Sign up</button>
</div>
</div>
</header>
);
};


export default Header;