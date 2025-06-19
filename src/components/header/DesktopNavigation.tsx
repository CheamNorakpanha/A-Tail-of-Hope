import { Link } from "react-scroll"

export default function DesktopNavigation() {
    return (
        <nav className="hidden md:flex items-center space-x-8">
            <Link to="about" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700 mr-0">
                About
            </Link>
            <Link to="team" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700">Team
            </Link>
            <Link to="issue" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700">
                The Issue
            </Link>
            <Link to="mission" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700">
                Our Mission
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-65} className="text-md font-medium transition-colors hover:text-yellow-700">
                Contact
            </Link>
        </nav>
    )
}