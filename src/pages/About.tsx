
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Users, Award, Target } from 'lucide-react';

const About = () => {
  const clients = [
    "Kirloskar Industries Pvt. Ltd.",
    "Korrocoat Polymers", 
    "State Health Laboratory",
    "SD Tronics Pvt. Ltd.",
    "Tor.ai",
    "BOSCH",
    "TATA Prestolite Electric",
    "Vedant Equip Sales and Service",
    "TACO",
    "Aastha Hospital",
    "Edward Co. Ltd. (Atlas Copco)",
    "Vrindavan Co-op Housing Society"
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "25+ Years Experience",
      description: "Professional electrical services with over two decades of expertise"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer-Centric",
      description: "Tailored solutions for domestic, industrial, and commercial needs"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Standards",
      description: "Every project completed to the highest professional standards"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Complete Solutions",
      description: "Audits, inspections, maintenance, and panel manufacturing"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="mb-6">
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  About <span className="text-brand-red">Vijay Electricals</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                  Lighting Up Lives with Professional Electrical Solutions
                </p>
                <Badge variant="secondary" className="text-lg py-3 px-8 bg-brand-red text-white hover:bg-brand-red/90">
                  Pune & Pimpri-Chinchwad Area
                </Badge>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-brand-red mb-2">30+</div>
                      <div className="text-gray-600 font-medium">Years Experience</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-brand-red mb-2">500+</div>
                      <div className="text-gray-600 font-medium">Projects Done</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-brand-red mb-2">100%</div>
                      <div className="text-gray-600 font-medium">Satisfaction</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="text-3xl font-bold text-brand-red mb-2">24/7</div>
                      <div className="text-gray-600 font-medium">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="w-24 h-1 bg-brand-red mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p className="text-lg">
                      We are a well-known electrical contractor, supervisor, and wireman serving the Pune and 
                      Pimpri-Chinchwad area. Whether you require domestic, industrial, or commercial 
                      electrical installation, we are here to help.
                    </p>
                    <p className="text-lg">
                      Our company is owned and managed by professionals in the trade with over 30 years of 
                      experience. We are fully committed to delivering professional and affordable electrical 
                      services.
                    </p>
                    <p className="text-lg">
                      Our expertise spans across various sectors, ensuring high-quality service tailored to your 
                      specific needs. We pride ourselves on our customer-centric approach, ensuring that 
                      every project is completed to the highest standards. We carry out all aspects of 
                      electrical work, including audits, inspections, maintenance, and manufacturing of various panels.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-2xl font-bold text-brand-red mb-2">100+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-2xl font-bold text-brand-red mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-2xl font-bold text-brand-red mb-2">30+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <div className="w-24 h-1 bg-brand-red mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We deliver excellence through professional expertise and customer-focused solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl hover:bg-white transition-all duration-300 group">
                  <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Trusted Clients</h2>
              <div className="w-24 h-1 bg-brand-red mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                We're proud to serve leading companies across various industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group border-l-4 border-brand-red">
                  <h3 className="font-semibold text-gray-900 text-center group-hover:text-brand-red transition-colors">
                    {client}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
