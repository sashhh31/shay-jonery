import Link from "next/link"
import { Instagram, Facebook, Linkedin } from "lucide-react"
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#5a7d2a] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
          <Link href="/" className="mb-4 md:mb-0">
              <Image
                src="/logo.png"
                alt="Shay Joinery Ltd Logo"
                width={60}
                height={60}
                className="mr-3 mb-6"
              />

          </Link>            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque mauris leo quis ultricies venenatis.
              Vivamus ut metus sed gravida et porta in tellus.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-white hover:text-gray-200">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <FooterLink href="#" label="Bespoke Furniture & Cabinetry" />
              <FooterLink href="#" label="Kitchen Carpentry Services" />
              <FooterLink href="#" label="Doors & Windows" />
              <FooterLink href="#" label="Architectural Joinery" />
              <FooterLink href="#" label="Commercial Joinery Services" />
              <FooterLink href="#" label="Flooring Services" />
              <FooterLink href="#" label="Additional Services" />
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <FooterLink href="/about-us" label="About Us" />
              <FooterLink href="/our-services" label="Our Services" />
              <FooterLink href="/contact-us" label="Contact Us" />
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <FooterLink href="#" label="Privacy Policy" />
              <FooterLink href="#" label="Terms of Service" />
              <FooterLink href="#" label="Code of Conduct" />
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#6b8e3b] py-4">
        <div className="container">
          <p className="text-sm text-center">© 2025 Shay Joinery Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-sm hover:underline">
        {label}
      </Link>
    </li>
  )
}
