export default function BentoGrid() {
  return (
    <div className="px-4 md:px-20 pb-10">
      <div className="flex flex-col justify-center pl-3 bg-[#F7F4EB] rounded-3xl">
        <div className="p-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute h-5 w-5 animate-ping bg-lime-400 rounded-full"></div>
              <div className="h-5 w-5 bg-lime-600 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-lime-600">{"{01} —"}</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#1F1704]">
                Our Expertise
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl mt-4 font-bold text-lime-500 drop-shadow-lg">
            Crafting Digital Excellence
          </h1>
          <p className="text-lg md:text-md mt-4 text-lime-700 max-w-4xl">
            Where pixel-perfect design meets strategic innovation - we transform
            concepts into unforgettable brand experiences through
            multidisciplinary expertise.
          </p>
        </div>
        <div className="w-full max-w-[1400px] h-[1000px] grid grid-cols-1 md:grid-cols-5 md:grid-rows-7 gap-4 p-4  rounded-3xl">
          {/* Branding Strategy - Large Left Panel */}
          <div className="md:col-span-3 md:row-span-full relative group overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2940&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-0 p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">Branding Strategy</h2>
              <p className="text-gray-200">
                We craft unique, compelling brand identities that resonate with your audience and stand out in the market.
              </p>
            </div>
          </div>

          {/* Digital Marketing - Top Right */}
          <div className="md:col-span-2 md:row-span-3 relative group overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-purple-950/60 group-hover:bg-purple-950/50 transition-colors" />
            <div className="absolute bottom-0 p-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Digital Marketing</h2>
              <p className="text-gray-200 text-sm">
                From social media to SEO, we design impactful marketing strategies that drive engagement and growth.
              </p>
            </div>
          </div>

          {/* SMMA - Middle Right */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=2940&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/50 transition-colors" />
            <div className="absolute bottom-0 p-4 text-white">
              <h2 className="text-2xl font-bold mb-1">SMMA</h2>
              <p className="text-gray-200 text-xs">
                We manage and grow your social presence, creating content that connects and converts.
              </p>
            </div>
          </div>

          {/* Web & App Development - Middle Right */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-0 p-4 text-white">
              <h2 className="text-2xl font-bold mb-1">Web & App Development</h2>
              <p className="text-gray-200 text-xs">
                We build user-friendly, scalable websites and apps that elevate your brand’s digital experience and growth.
              </p>
            </div>
          </div>

          {/* 3D - Bottom Right */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1633245091570-cd62f7f116a3?q=80&w=2940&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-lime-950/60 group-hover:bg-lime-950/50 transition-colors" />
            <div className="absolute bottom-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-1">3D</h2>
              <p className="text-gray-200 text-sm">
                Creations that makes ideas pop (no 3D glasses required).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}