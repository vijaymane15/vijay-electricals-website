
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Droplets, Activity, Leaf } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";


const STPPanel = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-black py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">STP Control Panels</h1>
          <p className="text-xl text-center">Automated Solutions for Sewage Treatment Plants</p>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-red mb-6">Efficient Sewage Treatment Automation</h2>
          <p className="text-2xl text-gray-800 mb-16">PLC-based control for residential & commercial STPs</p>
          
          <div className="max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Complete Process Automation</h3>
                <p className="text-lg text-gray-700">
                  Our STP panels automate the entire sewage treatment process including screening, 
                  equalization, aeration, settling, and disinfection. PLC-based control ensures 
                  precise timing and sequencing of pumps, blowers, and chemical dosing systems 
                  for optimal treatment efficiency.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Droplets size={160} className="text-blue-500" />
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Real-Time Monitoring</h3>
                <p className="text-lg text-gray-700">
                  Integrated sensors continuously monitor critical parameters like pH, dissolved oxygen, 
                  turbidity, and flow rates. The HMI touchscreen displays real-time data and trends, 
                  allowing operators to monitor plant performance and make adjustments as needed.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Activity size={160} className="text-green-600" />
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Energy Efficient Operation</h3>
                <p className="text-lg text-gray-700">
                  VFD-controlled blowers and pumps adjust speed based on actual demand, reducing 
                  energy consumption by 25-40%. Intelligent scheduling ensures equipment runs only 
                  when needed, further optimizing power usage while maintaining treatment quality.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full border-8 border-green-500 flex items-center justify-center">
                    <span className="text-3xl font-bold text-green-600">-40%</span>
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-600">Energy Savings</span>
                </div>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Regulatory Compliance</h3>
                <p className="text-lg text-gray-700">
                  Our STP panels help you meet Pollution Control Board standards with automated 
                  data logging and report generation. Treated water quality parameters are recorded 
                  for audit purposes, ensuring you always have documentation ready for inspections.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Leaf size={160} className="text-green-500" />
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
                PLC Controller
              </h4>
              <p className="text-gray-700">
                Industrial-grade PLC from Siemens/Allen Bradley/Delta with expandable I/O modules. Supports Modbus, Profinet, and Ethernet/IP communication protocols.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">2</span>
                HMI Interface
              </h4>
              <p className="text-gray-700">
                7" to 15" color touchscreen HMI with graphical process visualization, trend graphs, alarm management, and multi-level password protection.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">3</span>
                Instrumentation
              </h4>
              <p className="text-gray-700">
                pH sensors, DO meters, turbidity sensors, ultrasonic level transmitters, and electromagnetic flow meters for comprehensive process monitoring.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">4</span>
                Remote Access
              </h4>
              <p className="text-gray-700">
                Optional GSM/GPRS module for SMS alerts and remote monitoring. SCADA integration available for centralized control of multiple STP sites.
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
          <h2 className="text-3xl font-bold mb-6">Need an STP Panel for Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We design STP panels for capacities ranging from 10 KLD to 5 MLD. Get a customized solution for your requirements.
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

export default STPPanel;
