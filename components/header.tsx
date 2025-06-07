import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Clock } from "lucide-react"

export default function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#5a7d2a] text-white py-2">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>Monday - Friday 9 AM - 5 PM</span>
            </div>
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-1" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>2489 Gafforth Lane, LA</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-white hover:text-gray-200">
              <span className="text-sm">LinkedIn</span>
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              <span className="text-sm">Twitter</span>
            </Link>
            <Link href="#" className="text-white hover:text-gray-200">
              <span className="text-sm">Facebook</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#855024] py-4 shadow-sm">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="mb-4 md:mb-0">
              <Image
                src="/logo.png"
                alt="Shay Joinery Ltd Logo"
                width={60}
                height={60}
                className="mr-3"
              />

          </Link>

          <nav>
            <ul className="flex flex-wrap text-white justify-center space-x-1 md:space-x-6">
              <NavItem href="/" label="Home" />
              <NavItem href="/about-us"  label="About Us" />
              <NavItem href="/our-services" label="Our Services" />
              <NavItem href="/portfolio" label="Portfolio" />
              <NavItem href="/contact-us" label="Contact Us" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="block px-3 py-2 text-white hover:text-[#5a7d2a] font-medium transition-colors">
        {label}
      </Link>
    </li>
  )
}
