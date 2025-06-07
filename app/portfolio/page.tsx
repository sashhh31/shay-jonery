import React from 'react';
import { Calendar, Clock, User, DollarSign } from 'lucide-react';
import Image from "next/image";

const CarpentryProjectsPage = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: "Belgravia Townhouse Restoration",
      client: "Laing O'Rourke",
      value: "£15000",
      startedOn: "Apr 10, 2024",
      completedOn: "Ongoing",
      image: `/${Math.floor(Math.random() * 8) + 1}.png`,
      status: "ongoing",
      description: "Complete restoration of a historic townhouse in Belgravia, including custom joinery, period-accurate moldings, and bespoke furniture pieces."
    },
    {
      id: 2,
      title: "Modern Kitchen Design, Notting Hill",
      client: "Laing O'Rourke",
      value: "£15000",
      startedOn: "Apr 10, 2024",
      completedOn: "Ongoing",
      image: `/${Math.floor(Math.random() * 8) + 1}.png`,
      status: "ongoing",
      description: "Contemporary kitchen renovation featuring custom cabinetry, integrated appliances, and a unique breakfast bar design with premium materials."
    }
  ];

  const completedProjects = [
    {
      id: 1,
      title: "City of London Office Fit-out",
      client: "Laing O'Rourke",
      value: "£15000",
      startedOn: "Apr 10, 2024",
      completedOn: "Apr 10, 2025",
      image: `/${Math.floor(Math.random() * 8) + 1}.png`,
      description: "Modern office space transformation with custom-built workstations, meeting room furniture, and reception area joinery."
    },
    {
      id: 2,
      title: "Shoreditch Restaurant Interior",
      client: "Laing O'Rourke",
      value: "£15000",
      startedOn: "Apr 10, 2024",
      completedOn: "Apr 10, 2025",
      image: `/${Math.floor(Math.random() * 8) + 1}.png`,
      description: "Industrial-chic restaurant interior featuring custom banquette seating, bar counter, and decorative wooden elements."
    },
    {
      id: 3,
      title: "Hampstead Family Home",
      client: "Laing O'Rourke",
      value: "£15000",
      startedOn: "Apr 10, 2024",
      completedOn: "Apr 10, 2025",
      image: `/${Math.floor(Math.random() * 8) + 1}.png`,
      description: "Complete home renovation including custom wardrobes, built-in storage solutions, and bespoke furniture pieces."
    },
    {
      id: 4,
      title: "Office Partitioning",
      client: "Laing O'Rourke",
      value: "£15000",
      startedOn: "Apr 10, 2024",
      completedOn: "Apr 10, 2025",
      image: `/${Math.floor(Math.random() * 8) + 1}.png`,
      description: "Modern office space division using custom-designed wooden partitions with integrated storage and display features."
    },
    {
      id: 5,
      title: "Comfort Bedroom Set",
      client: "Laing O'Rourke",
      value: "£15000",
      startedOn: "Apr 10, 2024",
      completedOn: "Apr 10, 2025",
      image: `/${Math.floor(Math.random() * 8) + 1}.png`,
      description: "Handcrafted bedroom furniture set including a king-size bed frame, matching nightstands, and custom wardrobe units."
    },
    {
      id: 6,
      title: "Garden Grove Pergola",
      client: "Laing O'Rourke",
      value: "£15000",
      startedOn: "Apr 10, 2024",
      completedOn: "Apr 10, 2025",
      image: `/${Math.floor(Math.random() * 8) + 1}.png`,
      description: "Custom-designed outdoor pergola with integrated seating and decorative wooden elements, perfect for garden entertainment."
    },
    {
      id: 7,
      title: "Vintage Vanity Project",
      client: "Laing O'Rourke",
      value: "£15000",
      startedOn: "Apr 10, 2024",
      completedOn: "Apr 10, 2025",
      image: `/${Math.floor(Math.random() * 8) + 1}.png`,
      description: "Restoration and customization of a vintage vanity unit with modern amenities while preserving its classic charm."
    },
    {
      id: 8,
      title: "Loft Shelving System",
      client: "Laing O'Rourke",
      value: "£15000",
      startedOn: "Apr 10, 2024",
      completedOn: "Apr 10, 2025",
      image: `/${Math.floor(Math.random() * 8) + 1}.png`,
      description: "Custom-designed shelving system for a loft conversion, maximizing storage while maintaining aesthetic appeal."
    },
    {
      id: 9,
      title: "Heritage Door Restoration",
      client: "Laing O'Rourke",
      value: "£15000",
      startedOn: "Apr 10, 2024",
      completedOn: "Apr 10, 2025",
      image: `/${Math.floor(Math.random() * 8) + 1}.png`,
      description: "Complete restoration of period doors, including structural repairs, decorative molding restoration, and traditional finishing techniques."
    }
  ];

  const ProjectCard = ({ project, isOngoing = false }: { project: any, isOngoing: boolean }) => (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-amber-50">
      <div className="relative">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isOngoing && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Ongoing
          </div>
        )}
      </div>
      
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-amber-800 transition-colors duration-300">{project.title}</h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center group-hover:text-amber-700 transition-colors duration-300">
            <User className="w-4 h-4 mr-2 text-amber-600" />
            <span className="font-medium">Client:</span>
            <span className="ml-2 text-blue-600 group-hover:text-blue-700">{project.client}</span>
          </div>
          
          <div className="flex items-center group-hover:text-amber-700 transition-colors duration-300">
            <DollarSign className="w-4 h-4 mr-2 text-amber-600" />
            <span className="font-medium">Value:</span>
            <span className="ml-2">{project.value}</span>
          </div>
          
          <div className="flex items-center group-hover:text-amber-700 transition-colors duration-300">
            <Calendar className="w-4 h-4 mr-2 text-amber-600" />
            <span className="font-medium">Started On:</span>
            <span className="ml-2">{project.startedOn}</span>
          </div>
          
          <div className="flex items-center group-hover:text-amber-700 transition-colors duration-300">
            <Clock className="w-4 h-4 mr-2 text-amber-600" />
            <span className="font-medium">Completed On:</span>
            <span className={`ml-2 ${project.completedOn === 'Ongoing' ? 'text-orange-600 font-semibold' : ''}`}>
              {project.completedOn}
            </span>
          </div>
        </div>

        {/* Description overlay on hover */}
        <div className="absolute inset-0 bg-amber-50 bg-opacity-95 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
          <p className="text-gray-700 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#855024] py-24 text-white overflow-hidden">
        <Image
          src={`/${Math.floor(Math.random() * 8) + 1}.png`}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-[#855024] opacity-60"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our London Carpentry & Joinery Projects
          </h1>
          <p className="text-lg md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Discover our portfolio, showcasing exceptional carpentry and joinery work throughout 
            London. From luxury residential projects in Kensington to commercial fit-outs in the city, 
            each project demonstrates our commitment to quality craftsmanship.
          </p>
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Ongoing Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {ongoingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isOngoing={true} />
          ))}
        </div>
      </div>

      {/* Completed Projects Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">All Completed Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isOngoing={false} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-amber-600 to-amber-800"></div>
    </div>
  );
};

export default CarpentryProjectsPage;