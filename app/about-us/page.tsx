import Image from "next/image"

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#855024] py-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`/${Math.floor(Math.random() * 8) + 1}.png`}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-[#855024] opacity-60"></div>
        </div>
        <div className="container relative z-10 text-center md:text-left md:max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Master Craftsmen in London Carpentry & Joinery</h1>
          <p className="mb-8 text-lg">
            Whether you need custom furniture making in London or professional carpentry services for your renovation
            project, Shay Joinery delivers exceptional quality and attention to detail.
          </p>
        </div>
      </section>

      {/* About Us Section */}
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

      {/* Traditional & Modern Section */}
      <section className="bg-[#f5f5f0] section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="section-title">We are tradional & modern joinery business</h3>
              <p className="text-gray-700 mb-6">
                Based in Islington, our fully equipped London joinery workshop features state-of-the-art machinery
                alongside traditional hand tools. The combination enables us to handle projects of any size while
                maintaining the precision and quality that distinguish handmade joinery.
              </p>
              <a href="/contact-us" className="text-[#5a7d2a] font-medium hover:underline">
                Contact Us
              </a>
            </div>
            <div>
              <Image
                src="/2.png"
                alt="Our workshop"
                width={400}
                height={100}
                className="w-full h-auto rounded-lg"
              />
            </div>
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
    </>
  )
}

function VisionItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="flex items-start">
      <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-[#5a7d2a] flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 h-3"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <h5 className="font-bold">{title}:</h5>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  )
}
