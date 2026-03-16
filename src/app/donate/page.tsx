import DonorboxWidget from "@/components/DonorboxWidget";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white font-roboto">
      {/* Header simple & impactant */}
      <section className="bg-[#2A248F] py-20 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Join Our <span className="text-[#C3002B]">Mission</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            After years of helping with our own funds, we are opening our doors
            to the community. Every dollar goes directly to those in need.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Texte et Impact (Gauche - 5 colonnes) */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-black text-[#2A248F] uppercase mb-6 tracking-tight">
                  Why your support matters
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We are Alix and Shanta. For us, this isn't a charity—it's a
                  commitment. By donating today, you're not just giving money;
                  you're providing a warm meal, a dry blanket, and a moment of
                  hope to someone who feels forgotten.
                </p>
              </div>

              {/* Rappel visuel des coûts */}
              <div className="space-y-4">
                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-[#C3002B]">
                  <p className="text-[#2A248F] font-bold">100% Transparency</p>
                  <p className="text-sm text-slate-500">
                    We personally cover all administrative fees so your donation
                    reaches the street entirely.
                  </p>
                </div>
              </div>
            </div>

            {/* Widget Donorbox (Droite - 7 colonnes) */}
            <div className="lg:col-span-7">
              <DonorboxWidget />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
