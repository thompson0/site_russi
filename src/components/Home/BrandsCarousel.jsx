"use client";

import Image from "next/image";

const brands = [
  { name: "Hyundai", logo: "/logos/hyundai.png" },
  { name: "Chery", logo: "/logos/chery.png" },
  { name: "Honda", logo: "/logos/honda.png" },
  { name: "Ford", logo: "/logos/ford.png" },
  { name: "Chevrolet", logo: "/logos/chevrolet.png" },
  { name: "Subaru", logo: "/logos/subaru.png" },
  { name: "Toyota", logo: "/logos/toyota.png" },
  { name: "Volkswagen", logo: "/logos/volkswagen.png" },
  { name: "GWM", logo: "/logos/gwm.png" },
];

export default function BrandsCarousel() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider">
            Parceiros
          </span>
          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Marcas que Atendemos
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-800 to-transparent z-10" />

        <div className="flex animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-10"
            >
              <div className="w-36 h-28 sm:w-44 sm:h-32 lg:w-52 lg:h-36 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4 sm:p-5 hover:scale-110 transition-transform duration-300 cursor-default">
                <Image
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  width={180}
                  height={120}
                  className="object-contain max-h-full max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
