
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { IndianRupee, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const APFCPanel = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      {/* APFC Hero Section */}
      <div className="bg-black py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Why Do You Need an APFC Panel</h1>
          <p className="text-xl text-center">Enhancing Efficiency, Reducing Costs, and Ensuring Stability</p>
        </div>
      </div>
      
      {/* Attention Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-red mb-6">Yes! You Heard It Right</h2>
          <p className="text-2xl text-gray-800 mb-16">APFC panel reduces your electricity bills.</p>
          
          {/* Benefits Section */}
          <div className="max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Enhance Efficiency, Lower Costs</h3>
                <p className="text-lg text-gray-700">
                  Automatic Power Factor Correction (APFC) panels are crucial for businesses aiming to 
                  reduce electricity costs and optimize energy usage. Power Factor (PF) is a measure of how 
                  effectively electrical power is used; the closer your PF is to 1, the more efficient your 
                  electrical system becomes.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="/lovable-uploads/efficiency.svg" 
                  alt="Electrical warning sign" 
                  className="w-40 h-40 max-w-md mx-auto"
                />
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Reduce Your Electricity Bill</h3>
                <p className="text-lg text-gray-700">
                  When your power factor is low, your electrical system draws more current to do the same 
                  amount of work, leading to higher electricity bills. By maintaining an optimal power factor, 
                  APFC panels reduce the amount of reactive power, lowering your overall energy 
                  consumption and significantly cutting costs on your electricity bill.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <IndianRupee size={160} className="text-black" />
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Avoid Penalties & Improve System Stability</h3>
                <p className="text-lg text-gray-700">
                  Utilities often impose penalties on businesses with low power factors. With an APFC panel, 
                  you can avoid these penalties and ensure your electrical system runs smoothly, preventing 
                  voltage drops and reducing strain on your equipment.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-40 h-40 text-green-500">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Sustainable and Smart Investment</h3>
                <p className="text-lg text-gray-700">
                  Investing in an APFC panel is a sustainable choice that offers quick returns on investment. 
                  Most businesses see payback within 6-18 months, depending on their power factor and 
                  usage patterns. It's a smart step toward a more energy-efficient and cost-effective operation.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-yellow-400 flex items-center justify-center">
                    <IndianRupee size={64} className="text-black" />
                  </div>
                  <div className="absolute -right-4 -top-4 bg-black rounded-full w-8 h-8 flex items-center justify-center text-white text-xl font-bold">+</div>
                  <div className="absolute -left-4 -bottom-4 bg-black rounded-full w-8 h-8 flex items-center justify-center text-white text-xl font-bold">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Technical Details Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-red mb-12">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">1</span>
                Advanced Controller
              </h4>
              <p className="text-gray-700">
                Our APFC panels feature microprocessor-based controllers with digital display of various electrical parameters including voltage, current, power factor, and more.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">2</span>
                Capacitor Banks
              </h4>
              <p className="text-gray-700">
                High-quality capacitor banks with self-healing technology and built-in protection against overvoltage and harmonics for extended operational life.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">3</span>
                Protection Features
              </h4>
              <p className="text-gray-700">
                Comprehensive protection including overcurrent, short circuit, phase failure, and thermal overload protection to ensure safety and reliability.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">4</span>
                Monitoring & Alerts
              </h4>
              <p className="text-gray-700">
                Real-time monitoring with alert systems for power factor deviations, component failures, and maintenance requirements.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="mt-4 group bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 hover:shadow-md transition-all duration-300"
            >
              Back to Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Power System?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today for a custom APFC solution tailored to your specific needs and requirements.
          </p>
          <Button 
            variant="default"
            className="bg-brand-red hover:bg-red-600 text-white"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default APFCPanel;
