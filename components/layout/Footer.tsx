import React from "react";


const Footer: React.FC = () => {
return (
<footer className="bg-gray-100 mt-8">
<div className="container mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row md:justify-between">
<div>
<div className="font-semibold">AlxListing</div>
<div>© {new Date().getFullYear()} AlxListing. All rights reserved.</div>
</div>


<div className="mt-4 md:mt-0 grid grid-cols-2 gap-2 md:grid-cols-4">
<div>
<div className="font-medium">Company</div>
<div>About</div>
<div>Careers</div>
</div>


<div>
<div className="font-medium">Support</div>
<div>Contact</div>
<div>Help center</div>
</div>


<div>
<div className="font-medium">Legal</div>
<div>Terms</div>
<div>Privacy</div>
</div>


<div>
<div className="font-medium">Social</div>
<div>Twitter</div>
<div>Instagram</div>
</div>
</div>
</div>
</footer>
);
};


export default Footer;