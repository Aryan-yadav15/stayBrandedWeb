export default function BentoGrid() {
    return (
      <div className="px-4 md:px-20 pb-10">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[1400px] h-[1000px] grid grid-cols-1 md:grid-cols-5 md:grid-rows-7 gap-4 p-4 bg-[#F7F4EB] rounded-3xl">
            {/* Visual Branding - Large Left Panel */}
            <div className="md:col-span-3 md:row-span-full relative group overflow-hidden rounded-3xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2940&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-0 p-8 text-white">
                <h2 className="text-4xl font-bold mb-2">Visual Branding</h2>
                <p className="text-gray-200">
                  Visual Systems, Styleguides, and Logos everyone will remember (even a fish).
                </p>
              </div>
            </div>
  
            {/* Web - Top Right */}
            <div className="md:col-span-2 md:row-span-3 relative group overflow-hidden rounded-3xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-purple-950/60 group-hover:bg-purple-950/50 transition-colors" />
              <div className="absolute bottom-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">Web</h2>
                <p className="text-gray-200 text-sm">
                  Websites so easy to use. Even a caveman could interact with (chopsticks are optional).
                </p>
              </div>
            </div>
  
            {/* 2D - Middle Right */}
            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=2940&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/50 transition-colors" />
              <div className="absolute bottom-0 p-4 text-white">
                <h2 className="text-2xl font-bold mb-1">2D</h2>
                <p className="text-gray-200 text-xs">Flat Design & Art Direction that grab attention.</p>
              </div>
            </div>
  
            {/* Motion - Middle Right */}
            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 p-4 text-white">
                <h2 className="text-2xl font-bold mb-1">Motion</h2>
                <p className="text-gray-200 text-xs">Moving Things to keep living beings glued to the screen.</p>
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
              <div className="absolute inset-0 bg-emerald-950/60 group-hover:bg-emerald-950/50 transition-colors" />
              <div className="absolute bottom-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-1">3D</h2>
                <p className="text-gray-200 text-sm">Creations that makes ideas pop (no 3D glasses required).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  