"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const ShayJoineryContact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Furniture',
    propertyLocation: '',
    projectDescription: ''
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch with London's<br />
            Expert Carpenters
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Ready to discuss your carpentry or joinery project? Contact Shay Joinery today
            for a free consultation and quote. Our London-based team is here to bring your
            vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
            <h3 className="text-4xl font-bold text-navy-900">Say hay to us!</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Project Type</label>
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 appearance-none"
                  >
                    <option value="Furniture">Furniture</option>
                    <option value="Kitchen Carpentry">Kitchen Carpentry</option>
                    <option value="Doors & Windows">Doors & Windows</option>
                    <option value="Architectural Joinery">Architectural Joinery</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Property Location</label>
                <input
                  type="text"
                  name="propertyLocation"
                  value={formData.propertyLocation}
                  onChange={handleInputChange}
                  placeholder="Enter your Property Location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Project Description</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-vertical"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-800 transition-colors"
              >
                Send Messages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Addresses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-gray-600 mb-2">Addresses</p>
            <h2 className="text-4xl font-bold text-gray-900">Our Office Addresses</h2>
          </div>

          <div className="flex flex-wrap justify-center mb-8 space-x-4">
            <button className="px-6 py-2 bg-amber-700 text-white rounded-full">Central London</button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full">North London</button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full">South London</button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full">East London</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-medium text-gray-600 mb-2">Phone number</h3>
              <p className="text-gray-900 font-medium">
                07949 296795 /<br />
                07973 282475
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-medium text-gray-600 mb-2">Email Address</h3>
              <p className="text-gray-900 font-medium">shay.joineryltd@gmail.com</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-medium text-gray-600 mb-2">Office Address</h3>
              <p className="text-gray-900 font-medium">
                Railway Arch 467, Bow<br />
                Common Lane, London E3<br />
                4BN / E3 4BH
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShayJoineryContact;