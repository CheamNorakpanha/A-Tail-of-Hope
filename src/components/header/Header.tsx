import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import Logo from './Logo'
import DesktopNavigation from './DesktopNavigation'
import GetInvolvedButton from './GetInvolvedButton'
import MobileNavigation from './MobileNavigation'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <Logo />

                {/* Desktop Navigation */}
                <DesktopNavigation />

                {/* Get Involved Button */}
                <GetInvolvedButton />

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <MobileNavigation />
            )}
        </div>
    )
}

export default Header