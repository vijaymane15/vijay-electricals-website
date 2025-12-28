
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import ProductsGrid from '@/components/products/ProductsGrid';
import { Separator } from '@/components/ui/separator';

const Products = () => {
  // Product data with image URLs for each product
  const products = [
    {
      id: 1,
      title: "APFC Panel",
      description: "Automatic Power Factor Control (APFC) Panels help in improving the power factor, thus saving energy and reducing electricity costs. Our APFC panels are designed with the latest technology to ensure optimal performance and reliability.",
      gradientClass: "bg-gradient-to-br from-orange-50 to-red-100",
      imageUrl: "/lovable-uploads/apfc.png"
    },
    {
      id: 2,
      title: "HT Panel",
      description: "High Tension (HT) Panels are designed for receiving, controlling, and distributing electrical power at voltages above 1000V. Our HT panels feature vacuum circuit breakers (VCB), SF6 circuit breakers, protective relays, and metering equipment. Built to IS 12729 standards, they ensure safe and reliable power distribution for industries, substations, and large commercial complexes with capacities ranging from 11kV to 33kV.",
      gradientClass: "bg-gradient-to-br from-orange-50 to-red-100",
      imageUrl: "/lovable-uploads/HT.png"
    },
    {
      id: 3,
      title: "LT Panel",
      description: "Low Tension (LT) Panels are essential for power distribution at voltages below 1000V, typically 415V/440V. Our LT panels include Motor Control Centers (MCC), Power Control Centers (PCC), and distribution boards. Equipped with ACBs, MCCBs, contactors, and overload relays, they provide comprehensive motor control, power distribution, and protection for industrial machinery, HVAC systems, and commercial buildings.",
      gradientClass: "bg-gradient-to-br from-orange-50 to-red-100",
      imageUrl: "/lovable-uploads/LT.png"
    },
    {
      id: 4,
      title: "STP Panel",
      description: "Sewage Treatment Plant (STP) Panels are specialized control systems for automating sewage treatment processes. Our STP panels feature PLC/SCADA integration, VFDs for pump control, level sensors, and pH monitoring systems. They automate screening, aeration, settling, and disinfection processes, ensuring efficient treatment of domestic and industrial wastewater while meeting pollution control board standards.",
      gradientClass: "bg-gradient-to-br from-orange-50 to-red-100",
      imageUrl: "/lovable-uploads/STP.png"
    },
    {
      id: 5,
      title: "ETP Panel",
      description: "Effluent Treatment Plant (ETP) Panels provide advanced automation for industrial wastewater treatment. Our ETP panels incorporate chemical dosing controls, pH balancing systems, flow meters, and multi-stage treatment monitoring. Designed for textile, pharmaceutical, chemical, and manufacturing industries, they ensure treated effluent meets discharge standards while optimizing chemical usage and energy consumption.",
      gradientClass: "bg-gradient-to-br from-orange-50 to-red-100",
      imageUrl: "/lovable-uploads/ETP.png"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-brand-black mb-4">Our Products</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We offer a wide range of electrical panels and components designed for various industrial and commercial applications.
          </p>
        </div>
        
        <Separator className="my-8" />

        {/* Products Grid */}
        <div className="mt-16">
          <ProductsGrid products={products} />
        </div>

        {/* Additional Information */}
        <div className="mt-24 bg-gradient-to-r from-gray-50 to-gray-100 p-12 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-black mb-6">Custom Solutions</h2>
            <p className="text-lg text-gray-700 mb-8">
              Beyond our standard product range, we also provide custom-designed electrical panels and solutions 
              tailored to your specific requirements. Our team of experts works closely with you to understand your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
