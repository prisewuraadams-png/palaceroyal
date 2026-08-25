"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryItem = {
  id: number;
  src: string;
  title: string;
  category: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gallery/graduation1.jpg",
    title: "Graduation & Awards Day",
    category: "Graduation",
  },
  {
    id: 2,
    src: "/images/gallery/graduation2.jpg",
    title: "Graduation & Awards Day",
    category: "Graduation",
  },
  {
    id: 3,
    src: "/images/gallery/graduation3.jpg",
    title: "Celebrating Achievement",
    category: "Graduation",
  },
  {
    id: 4,
    src: "/images/gallery/school1.jpg",
    title: "Life at Palace Royal",
    category: "School Life",
  },
  {
    id: 5,
    src: "/images/gallery/school2.jpg",
    title: "Learning Together",
    category: "Academics",
  },
  {
    id: 6,
    src: "/images/gallery/event1.jpg",
    title: "School Events",
    category: "Events",
  },
  {
    id: 7,
    src: "/images/gallery/event2.jpg",
    title: "Celebrating Together",
    category: "Events",
  },
  {
    id: 8,
    src: "/images/gallery/sports1.jpg",
    title: "Sports & Activities",
    category: "Sports",
  },
  {
    id: 9,
    src: "/images/gallery/sports2.jpg",
    title: "Developing Young Talent",
    category: "Sports",
  },
  {
    id: 10,
    src: "/images/gallery/visit1.jpg",
    title: "Educational Visit",
    category: "Educational Visits",
  },
  {
    id: 11,
    src: "/images/gallery/visit2.jpg",
    title: "Learning Beyond the Classroom",
    category: "Educational Visits",
  },
  {
    id: 12,
    src: "/images/gallery/school3.jpg",
    title: "Our School Community",
    category: "School Life",
  },
];

const categories = [
  "All",
  "School Life",
  "Academics",
  "Events",
  "Sports",
  "Graduation",
  "Educational Visits",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  const currentIndex = selectedImage
    ? filteredImages.findIndex(
        (item) => item.id === selectedImage.id
      )
    : -1;

  const showPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      currentIndex === 0
        ? filteredImages.length - 1
        : currentIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      currentIndex === filteredImages.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <main className="bg-[#FAF8F6]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-[#5A001A] px-6 pb-20 pt-32 text-white lg:px-12">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            Our Gallery
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Life at
            <span className="text-[#D4AF37]">
              {" "}Palace Royal
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Explore moments of learning, achievement, creativity,
            celebration and community from life at Palace Royal
            International School.
          </p>

        </div>

      </section>


      {/* =====================================================
          CATEGORY FILTER
      ====================================================== */}
      <section className="sticky top-20 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-md">

        <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-5 lg:px-12">

          <div className="flex min-w-max gap-3">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#5A001A] text-white"
                    : "bg-[#FAF8F6] text-gray-600 hover:bg-[#D4AF37] hover:text-[#5A001A]"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PINTEREST STYLE GALLERY
      ====================================================== */}
      <section className="px-4 py-16 sm:px-6 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">

            {filteredImages.map((item) => (

              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group mb-5 block w-full overflow-hidden rounded-[24px] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative w-full overflow-hidden">

                  <Image
                    src={item.src}
                    alt={item.title}
                    width={900}
                    height={1200}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#3A0817]/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100">

                    <div className="p-5">

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                        {item.category}
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-white">
                        {item.title}
                      </h3>

                    </div>

                  </div>

                </div>

              </button>

            ))}

          </div>


          {filteredImages.length === 0 && (
            <div className="py-24 text-center">

              <h3 className="text-2xl font-bold text-[#3A0817]">
                No photos available
              </h3>

              <p className="mt-3 text-gray-600">
                More photos will be added soon.
              </p>

            </div>
          )}

        </div>

      </section>


      {/* =====================================================
          CLOSING CTA
      ====================================================== */}
      <section className="bg-[#3A0817] px-6 py-24 text-center text-white lg:px-12">

        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Every Moment Matters
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl">
            Every Moment.
            <span className="block text-[#D4AF37]">
              Every Milestone.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            From the classroom to the stage, every experience contributes
            to the growth, confidence and character of our learners.
          </p>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX
      ====================================================== */}
      {selectedImage && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >

          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-20 text-3xl font-light text-white transition hover:text-[#D4AF37]"
            aria-label="Close gallery"
          >
            ×
          </button>


          {/* Previous */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 px-5 py-3 text-3xl text-white backdrop-blur transition hover:bg-[#D4AF37] hover:text-[#5A001A]"
              aria-label="Previous image"
            >
              ‹
            </button>
          )}


          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >

            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1600}
              height={1200}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
              priority
            />

            <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">

              <div className="text-center sm:text-left">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  {selectedImage.category}
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  {selectedImage.title}
                </h3>

              </div>


              <a
                href={selectedImage.src}
                download
                onClick={(event) => event.stopPropagation()}
                className="rounded-full bg-[#D4AF37] px-7 py-3 font-bold text-[#5A001A] transition hover:bg-[#e5c04a]"
              >
                Download Image
              </a>

            </div>

          </div>


          {/* Next */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 px-5 py-3 text-3xl text-white backdrop-blur transition hover:bg-[#D4AF37] hover:text-[#5A001A]"
              aria-label="Next image"
            >
              ›
            </button>
          )}

        </div>

      )}

    </main>
  );
}