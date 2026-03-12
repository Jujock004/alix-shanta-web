import KeyImpact from "@/components/home/KeyImpact";
import RecentStories from "@/components/RecentStories";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section (Bannière) */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(92, 88, 167, 0.6), rgba(56, 52, 129, 0.6)), url('https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2000')`,
          }}
        ></div>
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter drop-shadow-2xl">
            Serving Those <br /> Who Served
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-100 max-w-2xl mx-auto font-medium drop-shadow-lg">
            Helping veterans and homeless people through community support and
            direct action.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#C3002B] hover:bg-[#d1405e] text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-xl uppercase cursor-pointer">
              Donate Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg transition-all uppercase cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <KeyImpact />
      <RecentStories />
    </main>
  );
}
