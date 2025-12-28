
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { 
  Cable, 
  Lightbulb, 
  ShieldCheck, 
  CircuitBoard, 
  FileCheck, 
  Settings, 
  Rocket, 
  CalendarCheck,
  ArrowRight,
  Star
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
  isContact?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, featured = false, isContact = false }) => {
  return (
    <Card className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl ${
      isContact
        ? 'bg-gradient-to-br from-accent to-accent/80 text-accent-foreground border-accent'
        : featured 
        ? 'bg-gradient-to-br from-accent to-accent/80 text-accent-foreground border-accent' 
        : 'bg-card border-border hover:border-accent/50'
    }`}>
      <CardContent className="p-8">
        {featured && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1 bg-background/20 px-2 py-1 rounded-full">
              <Star className="h-3 w-3 fill-current" />
              <span className="text-xs font-medium">Popular</span>
            </div>
          </div>
        )}
        
        <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${
          isContact
            ? 'bg-background/20 text-accent-foreground'
            : featured 
            ? 'bg-background/20 text-accent-foreground' 
            : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground'
        }`}>
          {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8" })}
        </div>
        
        <h3 className={`text-xl font-bold mb-4 ${
          isContact ? 'text-accent-foreground' : featured ? 'text-accent-foreground' : 'text-foreground'
        }`}>
          {title}
        </h3>
        
        <p className={`text-sm leading-relaxed mb-6 ${
          isContact ? 'text-accent-foreground/90' : featured ? 'text-accent-foreground/90' : 'text-muted-foreground'
        }`}>
          {description}
        </p>
        
<Button
  asChild
  variant={isContact ? "secondary" : featured ? "secondary" : "outline"}
  size="sm"
  className="group/btn w-full justify-between"
>
  <Link to="/contact">
    {isContact ? "Contact Us" : "Get a Quote"}
    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
  </Link>
</Button>

      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Manufacturing of Control Panels",
      description: "Designing and fabricating customized control panels that manage and automate electrical systems for industrial and commercial applications.",
      icon: <CircuitBoard className="h-10 w-10" />,
      featured: true
    },
    {
      title: "Wiring and Rewiring",
      description: "Installing new electrical wiring or upgrading existing systems in residential, commercial, or industrial buildings to ensure safe and efficient power distribution.",
      icon: <Cable className="h-10 w-10" />
    },
    {
      title: "Electrical Domestic Repairs",
      description: "Providing repair services for electrical issues in homes, including fixing faulty wiring, outlets, lighting, and other domestic electrical systems.",
      icon: <Lightbulb className="h-10 w-10" />
    },
    {
      title: "Electrical Safety Audits",
      description: "Comprehensive electrical safety audits to ensure compliance with industry standards and identify potential risks in your electrical systems.",
      icon: <ShieldCheck className="h-10 w-10" />
    },
    {
      title: "Electrical Contract and Inspection",
      description: "Comprehensive electrical contracts and thorough inspections to ensure safety and compliance in all electrical installations.",
      icon: <FileCheck className="h-10 w-10" />
    },
    {
      title: "Installation and Maintenance",
      description: "Expert installation and maintenance services to keep your electrical systems running efficiently and safely.",
      icon: <Settings className="h-10 w-10" />
    },
    {
      title: "Turnkey Projects",
      description: "End-to-end electrical solutions for your projects, delivered with precision and expertise from conception to completion.",
      icon: <Rocket className="h-10 w-10" />
    },
    {
      title: "Annual Maintenance Contracts",
      description: "Regular maintenance services under an annual contract to keep electrical systems running smoothly and reduce downtime.",
      icon: <CalendarCheck className="h-10 w-10" />
    },
    {
      title: "Need Something Else?",
      description: "Can't find the specific electrical service you're looking for? We offer custom solutions tailored to your unique requirements.",
      icon: <Settings className="h-10 w-10" />,
      isContact: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-background text-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Professional electrical solutions for residential, commercial, and industrial needs
          </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
              ✓ Licensed & Certified
            </div>
            <div className="bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
              ✓ 24/7 Emergency Service
            </div>
            <div className="bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
              ✓ Quality Guaranteed
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              featured={service.featured}
              isContact={service.isContact}
            />
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-accent/5 border border-accent/20 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <ShieldCheck className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
              <p className="text-muted-foreground">Our certified electricians bring years of industry experience to every project.</p>
            </div>
            <div className="text-center group">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <Star className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">We use only premium materials and follow stringent quality standards.</p>
            </div>
            <div className="text-center group">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <CalendarCheck className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
              <p className="text-muted-foreground">Our commitment to excellent service has earned us loyal customers.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-accent to-accent/90 text-accent-foreground p-12 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a consultation and free quote!
          </p>
<Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
  <Link to="/contact">
    Get in Touch
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
</Button>

        </div>
      </div>
    </div>
  );
};

export default Services;
