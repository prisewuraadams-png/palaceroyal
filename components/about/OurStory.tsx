"use client";

import { Play } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { useState } from "react";

export default function OurStory() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative bg-black">
      <div className="relative h-[85vh] overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/campus-video-poster.jpg"
        >
          <source src="/videos/palace-story.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B0712]/90 via-[#4A0B1F]/65 to-black/40" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-8 lg:px-12">

            <FadeUp>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
                Our Story
              </p>

              <div className="mt-5 h-16 w-px bg-[#D4AF37]" />

              <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                Every Child.
                <br />
                Every Dream.
                <br />
                Every Opportunity.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-white/80">
                Step inside Palace Royal International School and experience a
                learning community where excellence, faith and global
                opportunities come together every day.
              </p>
            </FadeUp>

            {/* Play Button */}
            <FadeUp>
              <button
                onClick={() => setPlaying(true)}
                className="group mt-12 flex items-center gap-5"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]">
                  <Play
                    size={34}
                    className="text-white group-hover:text-[#5A001A]"
                    fill="currentColor"
                  />
                </div>

                <div className="text-left">
                  <p className="font-bold text-white">Play Our Story</p>
                  <p className="text-white/70">
                    Watch a 30-second campus film
                  </p>
                </div>
              </button>
            </FadeUp>

          </div>
        </div>

      </div>

      {/* Modal Placeholder */}
      {playing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setPlaying(false)}
        >
          <div className="aspect-video w-full max-w-5xl overflow-hidden rounded-3xl bg-black">
            <video controls autoPlay className="h-full w-full">
              <source src="/videos/palace-story.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}