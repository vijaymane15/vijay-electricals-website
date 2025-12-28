import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProjectGallery from '@/components/gallery/ProjectGallery';

const Index = () => {
  // Updated gallery images to include all 11 images
  const galleryImages = [
    { 
      src: "/lovable-uploads/9e9294a0-10d1-43cd-9244-3810fa8e291d.png", 
      alt: "Electrical Installation", 
      caption: "Professional Outdoor Electrical Connection Installation" 
    },
    { 
      src: "/lovable-uploads/b5a333b7-c87b-4c1e-a534-59f73eea77f9.png", 
      alt: "Industrial Electrical Infrastructure", 
      caption: "Complete Industrial Power Distribution Setup" 
    },
    { 
      src: "/lovable-uploads/5266c70c-57c8-4448-8528-21d2c4f9f8bd.png", 
      alt: "Industrial Electrical Work", 
      caption: "High-Voltage Equipment Installation" 
    },
    { 
      src: "/lovable-uploads/spcollege.jpeg", 
      alt: "Control Panel Installation", 
      caption: "CCTV installation" 
    },
    { 
      src: "/lovable-uploads/3abf661f-d3e7-40d3-bb41-276d2197ea2a.png", 
      alt: "Control Panel", 
      caption: "Smart Power Factor Control Solutions" 
    },
    { 
      src: "/lovable-uploads/vedantapfc.jpeg", 
      alt: "Control Cabinet", 
      caption: "APFC Panel" 
    },
    { 
      src: "/lovable-uploads/9bc29382-e89f-4a09-b9f3-551dd535fdd8.png", 
      alt: "Electrical Meter Installation", 
      caption: "Smart Metering Solutions" 
    },
    { 
      src: "/lovable-uploads/4396c65c-0c4b-4864-9b72-7df56b1bd0be.png", 
      alt: "Electrical Wiring", 
      caption: "Precision Electrical Wiring Setup" 
    },
    { 
      src: "/lovable-uploads/850bf34e-812b-4790-8f9a-a933f9571715.png", 
      alt: "Electrical Components", 
      caption: "Award for best Electrical Service Provider" 
    }
  ];

  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-brand-black">
              Empowering Electrical Solutions!
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                VIJAY <span className="text-brand-red">ELECTRICALS</span>
              </h2>
              
              <p className="text-lg text-gray-700">
                is a trusted name in the realm of electrical services, catering to both residential and industrial needs. 
                Our team of skilled professionals is dedicated to delivering top-notch solutions, ensuring the safety 
                and efficiency of electrical systems. From wiring and installations to troubleshooting and maintenance, 
                VIJAY ELECTRICALS is your reliable partner for all things electric. Experience quality service and 
                unmatched expertise with us.
              </p>
              
              <p className="text-xl font-bold">CONTACT US NOW!</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
  <a
    href="public/Vijay Electricals Profile.pdf"
    download = "Vijay Electricals Profile.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="outline"
      className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
    >
      Download our profile
    </Button>
  </a>

  <Link to="/contact">
    <Button className="bg-brand-red hover:bg-brand-red/90 text-brand-white">
      Contact us
    </Button>
  </Link>
</div>

          </div>
          
          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/a03c2ddc-2fee-4eba-bc4b-7dd33894223a.png" 
              alt="Electrician with light bulb" 
              className="w-full max-w-xl object-contain"
            />
          </div>
        </div>
        
        {/* Project Gallery Section */}
        <div className="mt-20">
          <ProjectGallery 
            images={galleryImages} 
            title="Our Extensive Project Gallery" 
            subtitle="Explore our comprehensive range of electrical installations and advanced technological solutions"
          />
        </div>

        {/* Decorative Circuit Background - Optional */}
        <div className="absolute top-0 right-0 -z-10 opacity-10 hidden lg:block">
          <img 
            src="/lovable-uploads/2af154d1-6329-4c6e-b9e5-13ea426a1957.png" 
            alt="Circuit background" 
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
