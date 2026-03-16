"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen font-roboto">
      {/* Hero simple pour la page contact */}
      <section className="bg-[#2A248F] py-20 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-300">
            Have a question or want to get involved? We&apos;d love to hear from
            you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Formulaire de contact */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase mb-2 text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-md border border-slate-200 focus:border-[#C3002B] focus:ring-2 focus:ring-[#C3002B]/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase mb-2 text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-md border border-slate-200 focus:border-[#C3002B] focus:ring-2 focus:ring-[#C3002B]/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase mb-2 text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-slate-200 focus:border-[#C3002B] focus:ring-2 focus:ring-[#C3002B]/20 outline-none transition-all"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button className="cursor-pointer w-full bg-[#C3002B] text-white font-black py-4 rounded-md hover:bg-[#a10024] transition-colors shadow-lg uppercase tracking-wider">
                  Send Message
                </button>
              </form>
            </div>

            {/* Infos de contact & Carte (simulée) */}
            <div className="flex flex-col justify-center">
              <div className="mb-10">
                <h2 className="text-2xl font-black text-[#2A248F] uppercase mb-6">
                  Reach Out Directly
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[#C3002B] text-xl font-bold">@</div>
                    <div>
                      <h3 className="font-bold text-slate-900">Email</h3>
                      <p className="text-slate-600">contact@alixshanta.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-[#C3002B] text-xl font-bold">📍</div>
                    <div>
                      <h3 className="font-bold text-slate-900">Location</h3>
                      <p className="text-slate-600">
                        Washington, D.C.
                        <br />
                        Available for local support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box de réassurance */}
              <div className="p-6 bg-[#2A248F]/5 border-l-4 border-[#C3002B] rounded-r-lg">
                <p className="text-slate-700 italic">
                  &quot;We&apos;ll try to respond within 24-48 hours. Thank you
                  for your patience and your support.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
