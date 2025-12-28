
import React from 'react';
// import Navbar from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';



import Navbar from "@/components/layout/Navbar";
import { MessageSquareQuote } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />

      <div className="container mx-auto px-4 py-24 flex justify-center">
        <div className="bg-white shadow-lg rounded-xl p-10 max-w-xl text-center">
          <MessageSquareQuote className="mx-auto h-12 w-12 text-brand-red mb-4" />

          <h1 className="text-3xl font-bold mb-4">
            Testimonials Coming Soon
          </h1>

          <p className="text-gray-600">
            We are in the process of gathering testimonials from our clients.
            Their experiences and feedback will be displayed here shortly.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Your trust and support mean a lot to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;


// const Testimonials = () => {
//   const testimonials = [
//     {
//       company: "Kirloskar Industries Pvt. Ltd.",
//       name: "Rajesh Patil",
//       role: "Plant Manager",
//       quote: "Vijay Electricals has been our trusted partner for industrial electrical solutions for over 10 years. Their expertise in panel manufacturing and maintenance is exceptional.",
//       rating: 5
//     },
//     {
//       company: "BOSCH",
//       name: "Sunil Sharma",
//       role: "Facility Head",
//       quote: "Professional, reliable, and always on time. The team at Vijay Electricals understands industrial requirements perfectly. Highly recommended for any electrical project.",
//       rating: 5
//     },
//     {
//       company: "TATA Prestolite Electric",
//       name: "Anil Kulkarni",
//       role: "Operations Manager",
//       quote: "We've worked with many contractors, but Vijay Electricals stands out for their quality work and commitment to safety standards. Their APFC panels have significantly improved our power factor.",
//       rating: 5
//     },
//     {
//       company: "State Health Laboratory",
//       name: "Dr. Meera Joshi",
//       role: "Director",
//       quote: "For sensitive laboratory environments, electrical work needs precision. Vijay Electricals delivered flawless installation with minimal disruption to our operations.",
//       rating: 5
//     },
//     {
//       company: "Aastha Hospital",
//       name: "Dr. Pradeep Deshmukh",
//       role: "Administrator",
//       quote: "Hospital electrical systems require 24/7 reliability. Vijay Electricals installed our backup systems and has been maintaining them excellently. Their emergency response is outstanding.",
//       rating: 5
//     },
//     {
//       company: "Edward Co. Ltd. (Atlas Copco)",
//       name: "Vikram Mehta",
//       role: "Technical Manager",
//       quote: "The electrical audit they conducted helped us identify critical issues and save on energy costs. Their team is knowledgeable and provides practical solutions.",
//       rating: 5
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="relative bg-gray-900 py-20">
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//               Client <span className="text-brand-red">Testimonials</span>
//             </h1>
//             <p className="text-xl text-gray-300 mb-8">
//               Don't just take our word for it. Here's what our valued clients have to say about working with Vijay Electricals.
//             </p>
//             <div className="flex items-center justify-center gap-2">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} className="h-8 w-8 fill-brand-red text-brand-red" />
//               ))}
//             </div>
//             <p className="text-gray-400 mt-4">Trusted by 100+ satisfied clients</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Grid */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
//               <div className="w-24 h-1 bg-brand-red mx-auto"></div>
//             </div>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <Card 
//                   key={index} 
//                   className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
//                 >
//                   <CardContent className="p-8">
//                     <div className="flex items-center gap-1 mb-6">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star key={i} className="h-5 w-5 fill-brand-red text-brand-red" />
//                       ))}
//                     </div>
                    
//                     <div className="relative mb-6">
//                       <Quote className="h-10 w-10 text-brand-red/20 absolute -top-2 -left-2" />
//                       <p className="text-gray-600 leading-relaxed relative z-10 pl-6">
//                         "{testimonial.quote}"
//                       </p>
//                     </div>
                    
//                     <div className="border-t border-gray-100 pt-6">
//                       <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
//                       <p className="text-brand-red font-medium">{testimonial.role}</p>
//                       <p className="text-gray-500 text-sm mt-1">{testimonial.company}</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gray-900">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//               <div>
//                 <div className="text-4xl font-bold text-brand-red mb-2">100+</div>
//                 <div className="text-gray-300">Happy Clients</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-brand-red mb-2">500+</div>
//                 <div className="text-gray-300">Projects Completed</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-brand-red mb-2">30+</div>
//                 <div className="text-gray-300">Years Experience</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-brand-red mb-2">100%</div>
//                 <div className="text-gray-300">Satisfaction Rate</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Ready to Experience Our Service?
//             </h2>
//             <p className="text-xl text-gray-600 mb-8">
//               Join our growing list of satisfied clients. Let us handle your electrical needs with professionalism and expertise.
//             </p>
//             <Link to="/contact">
//               <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 text-lg font-semibold rounded-lg">
//                 Get Your Free Quote Today
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Testimonials;
