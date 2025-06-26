import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenuButton() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-700"
            >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
    );
}