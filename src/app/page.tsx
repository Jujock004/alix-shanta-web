import KeyImpact from "@/components/home/KeyImpact";
import OurActions from "@/components/home/OurActions";
import RecentEvents from "@/components/home/RecentEvents";
import Link from "next/link";

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
            Together, <br /> Every Step Matters
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-100 max-w-2xl mx-auto font-medium drop-shadow-lg">
            Creating change, one step at a time. Join us in our mission.
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
      <OurActions />
      {/* Section : Meet the People Behind the Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center gap-12">
            {/* Visuel : Duo ou Logo */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#C3002B]/10 rounded-full blur-2xl"></div>
                <img
                  src="/logo-removebg-preview.png"
                  alt="Foundation Leadership"
                  width={280}
                  height={280}
                  className="relative z-10 w-auto h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Contenu Texte */}
            <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
              <h2 className="text-[#C3002B] font-bold uppercase tracking-[0.3em] text-sm">
                Our Leadership
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#2A248F] uppercase leading-tight">
                Meet the People <br />
                <span className="text-slate-400 font-light italic">
                  Behind the Mission
                </span>
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                The Foundation is built on a bedrock of over 20 years of
                expertise in human services. Our team transforms professional
                experience into structured, compassionate outreach to support
                families, veterans, and underserved communities.
              </p>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-[#2A248F] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-[#C3002B] transition-all group"
                >
                  Discover Our Story
                  <span className="group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <KeyImpact />
      <RecentEvents />
    </main>
  );
}
