import React from 'react';
import { Target, Zap, Shield, Award, CheckCircle, Users, Hammer, Home, DoorOpen, Building, ChevronLeft, ChevronRight, PlaneTakeoff, Lightbulb, MapPin } from 'lucide-react';
import ServicesSection from '../test/page';
import Image from "next/image";

const CarpentryServicesPage = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "On Target",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      iconBg: "bg-amber-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficient",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      iconBg: "bg-amber-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Full Support",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      iconBg: "bg-amber-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Guarantee",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      iconBg: "bg-amber-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Safe and Secure",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      iconBg: "bg-amber-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trusted",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      iconBg: "bg-amber-600"
    }
  ];

  const services = [
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Bespoke Furniture & Cabinetry",
      description: "Transform your space with our handcrafted furniture, including wardrobes, storage units, desks, and custom-built kitchen cabinets—designed to fit your space perfectly.",
      bgColor: "bg-amber-800"
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Kitchen Carpentry Services",
      description: "Create your dream kitchen with custom carpentry—handmade kitchen units, breakfast bars, islands, pantries, and tailored storage solutions built just for you.",
      bgColor: "bg-amber-700"
    },
    {
      icon: <DoorOpen className="w-12 h-12" />,
      title: "Doors & Windows",
      description: "Enhance your home with bespoke internal doors, expert external door installations, and beautiful custom window frames—complete with quality fittings.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      iconColor: "text-amber-700"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Arch",
      description: "Add character to your home with custom architectural features and decorative elements.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      iconColor: "text-amber-700"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Planning",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      bgColor: "bg-[#8B572A]",
      textColor: "text-white"
    },
    {
      number: "02",
      title: "Brainstorming",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      bgColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      number: "03",
      title: "Targeting",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      bgColor: "bg-white",
      textColor: "text-gray-800"
    }
  ];

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
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Carpentry & Joinery Services in London
          </h1>
          <p className="text-xl md:text-lg text-gray-200 leading-relaxed">
            Stay Joinery offers comprehensive carpentry and joinery services 
            throughout Greater London. Our skilled craftsmen deliver exceptional 
            results, from bespoke furniture to commercial fit-outs.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-amber-600 font-semibold mb-2">Features</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Develop ideas into solutions for your business
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley.
            </p>
          </div>

          {/* Company Logo Watermark */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-10">
            <div className="w-32 h-32 rounded-full border-4 border-amber-300 flex items-center justify-center">
              <span className="text-2xl font-bold text-amber-600">SJ</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${feature.bgColor} ${feature.textColor || 'text-white'} shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-600 hover:text-white group`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                  feature.iconBg || 'bg-white bg-opacity-20'
                } ${feature.textColor === 'text-gray-800' ? 'text-white group-hover:text-white' : ''} group-hover:bg-white group-hover:bg-opacity-20`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white">{feature.title}</h3>
                <p className="opacity-90 group-hover:text-white group-hover:opacity-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServicesSection />

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-base text-gray-500 font-medium mb-2">How We Works</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Started With Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem Ipsum has been the industry's standard dummy text ever since 
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className={`relative p-8 rounded-lg shadow-md ${step.bgColor} ${step.textColor}`}>
                <div className={`absolute -bottom-8 -left-8 text-[10rem] font-extrabold z-0 ${step.bgColor === 'bg-white' ? 'text-gray-200 opacity-80' : 'text-white opacity-10'}`}>
                  {step.number}
                </div>
                <h3 className="relative z-10 text-xl font-semibold mb-3">{step.title}</h3>
                <p className="relative z-10 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-amber-600 to-amber-800"></div>
    </div>
  );
};

export default CarpentryServicesPage;