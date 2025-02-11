import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      
      {/* About Section */}
      <section className="py-16 px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src="/about-image.jpg" alt="About Glopixs" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 text-center md:text-left md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-gray-300 mb-8">
            Glopixs is more than just a streaming platform – we're a passionate community 
            dedicated to celebrating the rich diversity of global cinema.
          </p>
          <Link href="/about">
            <Button className="bg-red-600 hover:bg-red-700 flex items-center">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-300">
              Inspired by Ratan Tata’s Legacy, we believe in inclusive growth and innovation.
              We aim to reshape the entertainment landscape by making global cinema accessible.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/vision-image.jpg" alt="Our Vision" width={500} height={500} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From transforming the Tata Group into a global powerhouse to pioneering affordable innovation with the Nano car, 
            Ratan Tata's impact transcends business metrics. Through digital transformation and sustainable practices, 
            we continue this legacy of creating meaningful change.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll respond ASAP.
          </p>
          <Link href="/contact">
            <Button className="bg-red-600 hover:bg-red-700 flex items-center">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
