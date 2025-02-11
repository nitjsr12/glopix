"use client";

import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1536440136628-849c177e76a1"
        >
          <source src="https://player.https://youtu.be/kQ0P2kJa624?feature=shared.com/external/562626557.hd.mp4?s=1e07a21f7a5b4d7f7947d77f7e21c44f77e41fb9&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
      </div>
      
      <div className="relative h-full flex items-center px-4 md:px-8  pt-5 lg:px-12">
        <div className="max-w-4xl space-y-8">
          {/* Inspirational Quotes */}
          <div className="space-y-4">
            <blockquote className="border-l-4 border-red-600 pl-6 text-xl md:text-2xl text-gray-200 italic">
              "The best way to predict the future is to create it."
              <footer className="text-lg text-gray-400 mt-2">— Ratan Tata</footer>
            </blockquote>
            
            <blockquote className="border-l-4 border-red-600 pl-4 text-xl md:text-2xl text-gray-200 italic">
              "Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action."
              <footer className="text-lg text-gray-400 mt-2">— Dr. APJ Abdul Kalam</footer>
            </blockquote>
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Experience the rich diversity of Indian cinema with our curated collection of regional masterpieces. 
            From Bhojpuri to Bengali, we bring you stories that celebrate our culture and heritage.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
              <Play className="mr-2 h-5 w-5" /> Watch Now
            </Button>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600/10 px-8">
                <Info className="mr-2 h-5 w-5" /> Our Story
              </Button>
            </Link>
          </div>

          {/* Make in India Badge */}
  
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[2px] h-16 bg-gradient-to-b from-red-600 to-transparent" />
      </div>
    </div>
  );
}