
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Settings, Cpu, Power } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const LTPanel = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-black py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Low Tension (LT) Panels</h1>
          <p className="text-xl text-center">Complete Motor Control & Power Distribution Solutions</p>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-red mb-6">Control Your Industrial Operations</h2>
          <p className="text-2xl text-gray-800 mb-16">MCC, PCC & Distribution Boards for 415V/440V Applications</p>
          
          <div className="max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Motor Control Centers (MCC)</h3>
                <p className="text-lg text-gray-700">
                  Our Motor Control Centers provide centralized control for multiple motors in your facility. 
                  Each motor starter compartment includes contactors, overload relays, and protection devices, 
                  allowing individual motor control while maintaining system-wide coordination and protection.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Settings size={160} className="text-brand-red animate-spin-slow" style={{ animation: 'spin 8s linear infinite' }} />
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Power Control Centers (PCC)</h3>
                <p className="text-lg text-gray-700">
                  PCCs serve as the main distribution hub, receiving power from transformers and 
                  distributing it to various MCCs and sub-distribution boards. Equipped with ACBs 
                  (Air Circuit Breakers) rated up to 6300A, our PCCs ensure reliable power distribution 
                  across your entire facility.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Power size={160} className="text-black" />
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Intelligent Automation Ready</h3>
                <p className="text-lg text-gray-700">
                  Our LT panels can be integrated with PLC/SCADA systems for remote monitoring and control. 
                  Variable Frequency Drives (VFDs) can be incorporated for energy-efficient motor speed control, 
                  reducing energy consumption by up to 30% in variable load applications.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Cpu size={160} className="text-blue-600" />
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Modular & Expandable Design</h3>
                <p className="text-lg text-gray-700">
                  Our draw-out type MCCs allow easy maintenance and quick replacement of faulty units 
                  without shutting down the entire panel. The modular design means you can easily add 
                  new motor starters as your facility expands, protecting your investment for the future.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="flex gap-2">
                  <div className="w-16 h-32 bg-gray-300 rounded"></div>
                  <div className="w-16 h-32 bg-gray-400 rounded"></div>
                  <div className="w-16 h-32 bg-brand-red rounded"></div>
                  <div className="w-16 h-32 bg-gray-200 rounded border-2 border-dashed border-gray-400"></div>
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
                Circuit Breakers
              </h4>
              <p className="text-gray-700">
                ACBs up to 6300A, MCCBs from 16A to 1600A with adjustable thermal-magnetic or electronic trip units. All breakers are from reputed manufacturers.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">2</span>
                Motor Starters
              </h4>
              <p className="text-gray-700">
                DOL, Star-Delta, and Soft Starters available. VFD integration for variable speed control. Overload protection with class 10/20/30 options.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">3</span>
                Busbar System
              </h4>
              <p className="text-gray-700">
                Electrolytic grade copper/aluminum busbars with proper support insulators. Short circuit withstand capacity up to 65kA for 1 second.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">4</span>
                Enclosure
              </h4>
              <p className="text-gray-700">
                CRCA sheet construction with powder coating. IP54/IP55 protection available. Compartmentalized design for enhanced safety during maintenance.
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
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Motor Control System?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us design an LT panel solution that meets your exact specifications and operational requirements.
          </p>
          <Button 
            variant="default"
            className="bg-brand-red hover:bg-red-600 text-white"
            onClick={() => window.location.href = '/contact'}
          >
            Get a Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LTPanel;
