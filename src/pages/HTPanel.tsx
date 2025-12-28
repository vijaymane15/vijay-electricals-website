
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Zap, Shield, Gauge } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";


const HTPanel = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-black py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">High Tension (HT) Panels</h1>
          <p className="text-xl text-center">Reliable Power Distribution for High Voltage Applications</p>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-red mb-6">Power Your Industry with Confidence</h2>
          <p className="text-2xl text-gray-800 mb-16">HT Panels designed for voltages from 11kV to 33kV</p>
          
          <div className="max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">High Voltage Power Distribution</h3>
                <p className="text-lg text-gray-700">
                  High Tension panels are engineered to handle power distribution at voltages above 1000V, 
                  typically ranging from 11kV to 33kV. These panels serve as the backbone of industrial 
                  power infrastructure, receiving power from utility transformers and distributing it 
                  safely throughout your facility.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Zap size={160} className="text-brand-red" />
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Advanced Circuit Protection</h3>
                <p className="text-lg text-gray-700">
                  Our HT panels incorporate Vacuum Circuit Breakers (VCB) and SF6 Circuit Breakers 
                  for superior interrupting capacity. These breakers can handle fault currents up to 
                  40kA, ensuring your equipment and personnel are protected from electrical faults 
                  and short circuits.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Shield size={160} className="text-black" />
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Intelligent Metering & Monitoring</h3>
                <p className="text-lg text-gray-700">
                  Equipped with digital multifunction meters, our HT panels provide real-time monitoring 
                  of voltage, current, power factor, energy consumption, and harmonics. This data helps 
                  optimize power usage and identify potential issues before they become critical.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Gauge size={160} className="text-green-600" />
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Built to IS Standards</h3>
                <p className="text-lg text-gray-700">
                  All our HT panels are designed and manufactured in compliance with IS 12729 standards. 
                  This ensures consistent quality, safety, and reliability. Each panel undergoes rigorous 
                  testing including high voltage withstand, temperature rise, and short circuit tests.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">IS 12729</span>
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
                Vacuum Circuit Breakers
              </h4>
              <p className="text-gray-700">
                Indoor VCBs with rated voltage up to 36kV, breaking capacity up to 40kA, and motorized/spring charged operating mechanism for reliable operation.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">2</span>
                Protection Relays
              </h4>
              <p className="text-gray-700">
                Numerical protection relays for overcurrent, earth fault, differential protection, and directional protection with programmable settings and event logging.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">3</span>
                Metering Equipment
              </h4>
              <p className="text-gray-700">
                Class 0.5 accuracy CT/PT operated meters for billing and monitoring. Optional AMR compatibility for remote meter reading and energy management.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">4</span>
                Safety Interlocks
              </h4>
              <p className="text-gray-700">
                Key interlocks, door interlocks, and earthing switches ensure safe operation during maintenance. Arc flash protection available as optional feature.
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
          <h2 className="text-3xl font-bold mb-6">Need a Custom HT Panel Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our engineers can design HT panels tailored to your specific voltage, capacity, and application requirements.
          </p>
<Button
  asChild
  variant="default"
  className="bg-brand-red hover:bg-red-600 text-white"
>
  <Link to="/contact">
    Contact Us
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</Button>

        </div>
      </div>
    </div>
  );
};

export default HTPanel;
