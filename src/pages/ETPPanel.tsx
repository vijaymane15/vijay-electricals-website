
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Factory, FlaskConical, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ETPPanel = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-black py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">ETP Control Panels</h1>
          <p className="text-xl text-center">Advanced Automation for Industrial Effluent Treatment</p>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-red mb-6">Industrial Wastewater Treatment Solutions</h2>
          <p className="text-2xl text-gray-800 mb-16">Customized for Textile, Pharma, Chemical & Manufacturing Industries</p>
          
          <div className="max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Multi-Stage Treatment Control</h3>
                <p className="text-lg text-gray-700">
                  Industrial effluents require complex multi-stage treatment including primary settling, 
                  chemical treatment, biological treatment, and tertiary filtration. Our ETP panels 
                  coordinate all stages seamlessly, ensuring consistent treatment quality regardless 
                  of variations in inlet effluent characteristics.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Factory size={160} className="text-gray-700" />
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Precise Chemical Dosing</h3>
                <p className="text-lg text-gray-700">
                  Automated chemical dosing systems for coagulants, flocculants, pH adjusters, and 
                  disinfectants. Dosing pumps are controlled based on real-time sensor feedback, 
                  optimizing chemical usage while ensuring treated effluent meets discharge standards.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <FlaskConical size={160} className="text-purple-600" />
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Industry-Specific Solutions</h3>
                <p className="text-lg text-gray-700">
                  Different industries produce different types of effluents. Our ETP panels are 
                  customized for textile dyeing wastewater, pharmaceutical process water, chemical 
                  plant discharge, food processing waste, and more. Each system is designed to 
                  handle specific pollutants effectively.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">Textile</div>
                  <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold">Pharma</div>
                  <div className="w-20 h-20 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 font-bold">Chemical</div>
                  <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">Food</div>
                </div>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-brand-red mb-6">Data Logging & Reporting</h3>
                <p className="text-lg text-gray-700">
                  Comprehensive data logging captures all process parameters, chemical consumption, 
                  and equipment run hours. Generate daily, weekly, and monthly reports for internal 
                  review and regulatory compliance. Historical data helps optimize plant performance 
                  over time.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <BarChart3 size={160} className="text-brand-red" />
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
                Advanced PLC System
              </h4>
              <p className="text-gray-700">
                High-performance PLC with analog I/O for sensor integration. PID control loops for pH, flow, and level control. Recipe management for different effluent types.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">2</span>
                Chemical Dosing Control
              </h4>
              <p className="text-gray-700">
                Automated dosing pumps with flow proportional control. pH-based dosing for acid/alkali. Jar test correlation for optimal coagulant dosing.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">3</span>
                Online Analyzers
              </h4>
              <p className="text-gray-700">
                Online COD/BOD analyzers, TSS meters, color sensors, and conductivity meters. Automatic sample conditioning and calibration verification.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-brand-red rounded-full w-8 h-8 flex items-center justify-center text-white mr-3">4</span>
                SCADA Integration
              </h4>
              <p className="text-gray-700">
                Full SCADA capability with centralized monitoring, trend analysis, automatic report generation, and integration with plant-wide DCS systems.
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
          <h2 className="text-3xl font-bold mb-6">Looking for an ETP Panel Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team specializes in ETP automation for all types of industrial effluents. Contact us for a site assessment and customized proposal.
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

export default ETPPanel;
