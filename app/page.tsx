"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft, Armchair, CookingPot, DoorOpen, Check, Building2 } from "lucide-react"
import { useRef } from "react"

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Bespoke Furniture & Cabinetry",
      description:
        "Transform your home with custom handcrafted furniture, including wardrobes, storage units, desks, media centers, and display cabinets—designed to fit your space perfectly.",
      icon: "🪑",
      bg: "bg-[#8b572a]",
      textColor: "text-white",
    },
    {
      title: "Kitchen Carpentry Services",
      description:
        "Create your dream kitchen with custom carpentry—handmade cabinets, solid wood worktops, islands, pantries, and tailored storage solutions built just for you.",
      icon: "🍽️",
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Doors & Windows",
      description:
        "Enhance your home with bespoke internal doors, expert external door and sash window restoration, and custom window frames—complete with quality fittings.",
      icon: "🚪",
      bg: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Architectural Joinery",
      description:
        "Add charm with custom cornices, ceiling roses, and timber mouldings crafted to perfection by experienced joiners.",
      icon: "🛠️",
      bg: "bg-white",
      textColor: "text-black",
    },
  ];
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#925422] py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`/${Math.floor(Math.random() * 8) + 1}.png`}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-[#855024] opacity-40"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Bespoke Carpentry & Joinery Services in London</h1>
          <p className="mb-8 text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your space with Shay Joinery – London's trusted specialists in carpentry and joinery. From custom
            kitchens to handcrafted furniture, we bring over 20+ years of expertise to every project.
          </p>
          <Link href="/contact" className="inline-block bg-[#d4ac29] hover:bg-[#c39c25] text-black py-3 px-8 rounded-full font-semibold">
            Get Started
          </Link>
        </div>
      </section>

      <section className="bg-[#f5f5f0] section-padding">
        <div className="container">
          <div className="mb-4">
            <h2 className="text-lg text-gray-600">About Us</h2>
          </div>
          <div className="max-w-xl">
            <h3 className="section-title">Building with Heart, Crafting with Skill.</h3>
            <p className="text-gray-700 mb-6">
              Shay Joinery provides professional commercial joinery services throughout London. We've completed office
              fit-outs in Canary Wharf, restaurant interiors in Soho, and retail displays in Covent Garden. Our
              commercial carpentry team understands the importance of durability, functionality, and aesthetic appeal in
              business environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <Image
                src="/1.png"
                alt="Our workshop"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h4 className="font-bold text-xl mb-4">Our Vision</h4>
              <ul className="space-y-4">
                <VisionItem title="Craftsmanship" description="Every piece showcases meticulous attention to detail" />
                <VisionItem title="Sustainability" description="We source timber from certified sustainable forests" />
                <VisionItem
                  title="Innovation"
                  description="Combining traditional joinery techniques with modern technology"
                />
                <VisionItem title="Customer Focus" description="Your satisfaction drives everything we do" />
                <VisionItem
                  title="Local Expertise"
                  description="Deep knowledge of London properties and building regulations"
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-[#f5f5f0] py-16 relative">
      <div className="absolute right-0 top-0 h-full w-[300px] bg-contain bg-no-repeat bg-right" style={{ backgroundImage: 'url("/ornament.png")' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-[#b46931] font-medium mb-2">Our Services</p>
        <h2 className="text-3xl font-bold text-[#1b1b1b] mb-4">
          Custom Furniture & Interior <br />
          Woodwork Built to Last.
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Our skilled London joiners combine time-honoured techniques with
          contemporary innovation to deliver
        </p>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`min-w-[280px] p-6 rounded-md shadow-sm ${
                item.bg
              } ${item.textColor}`}
            >
              <div className="text-3xl mb-4 bg-white w-10 h-10 rounded-full flex items-center justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-80">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6 top-0 relative z-10 space-x-4">
          <button className="w-10 h-10 rounded-full bg-[#e4cc7f] text-white flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#b49d2f] text-white flex items-center justify-center">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>

      {/* Gallery Section */}
      <section className="bg-[#f5f5f0] section-padding">
        <div className="container">
          <h2 className="text-center text-xl mb-6">Gallery</h2>
          <h3 className="text-center section-title mb-10">Get To Know Us</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <Image
                src="/3.png"
                alt="Factory interior"
                width={300}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/4.png"
                alt="Living room with shelves"
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/5.png"
                alt="Living room with shelves (smaller crop)"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/6.png"
                alt="Hands working with wood"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/6.png"
                alt="Workshop machines"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="col-span-full">
              <Image
                src="/4.png"
                alt="Modern luxury living room"
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-[#f5f5f0] section-padding">
        <div className="container">
          <h2 className="text-center text-lg text-gray-600 mb-2">Testimonials</h2>
          <h3 className="text-center section-title mb-10">What Our Customer Says!!</h3>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TestimonialCard
                quote="Shay Joinery transformed our Victorian terrace with beautiful bespoke carpentry. Their attention to detail is exceptional."
                name="Sarah M"
                location="Clapham"
                image="/7.png"
              />
              <TestimonialCard
                quote="Professional, reliable, and incredibly skilled. The fitted wardrobes they created maximised every inch of our bedroom."
                name="James T"
                location="Islington"
                image="/8.png"
              />
            </div>

            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="w-12 h-12 bg-[#a67c52] rounded-full flex items-center justify-center mb-4">
        {icon === "furniture" && <Armchair className="w-6 h-6 text-white" />}
        {icon === "kitchen" && <CookingPot className="w-6 h-6 text-white" />}
        {icon === "door" && <DoorOpen className="w-6 h-6 text-white" />}
        {icon === "building" && <Building2 className="w-6 h-6 text-white" />}
      </div>
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function VisionItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="flex items-start">
      <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-[#5a7d2a] flex items-center justify-center">
        <Check className="w-3 h-3 text-white" />
      </div>
      <div>
        <h5 className="font-bold">{title}:</h5>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  )
}

function TestimonialCard({
  quote,
  name,
  location,
  image,
}: { quote: string; name: string; location: string; image: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-gray-700 mb-4">"{quote}"</p>
      <div className="flex items-center">
        <Image src={image || "/placeholder.svg"} alt={name} width={40} height={40} className="rounded-full mr-3" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
      </div>
    </div>
  )
}
