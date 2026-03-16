export default function AboutPage() {
  return (
    <main className="min-h-screen font-roboto">
      <section className="bg-[#2A248F] py-20 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
            About Us
          </h1>
          <p className="text-xl text-slate-300">
            Alix and Shanta is a non-profit organization dedicated to supporting
            veterans and homeless individuals through community engagement,
            advocacy, and direct action. Our mission is to provide resources,
            support, and opportunities for those who have served our country and
            are in need.
          </p>
        </div>
      </section>

      {/* Story Section: Direct Narration */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-[#2A248F] uppercase mb-6 tracking-tight">
                Our <span className="text-[#C3002B]">Journey</span>
              </h2>

              <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                <p>
                  For years, we worked quietly, doing what we could with what we
                  had. To us, helping wasn&apos;t a &quot;project&quot;—it was
                  simply our daily life. We used our **own personal funds** to
                  provide hot meals, warm clothes, and a moment of dignity to
                  those the streets had forgotten.
                </p>

                <blockquote className="border-l-4 border-[#C3002B] pl-6 italic text-[#2A248F] font-medium text-xl py-2">
                  &quot;We could no longer just walk by. Every coat given and every
                  meal shared was a promise to not look away.&quot;
                </blockquote>

                <p>
                  Today, we have reached the limit of what we can carry alone.
                  The need is growing faster than our personal resources, but
                  our will to help is stronger than ever.
                </p>

                <p className="font-bold text-slate-900 italic">
                  We created this platform to invite you in. What started as our
                  private mission can now become a community-backed force for
                  good, allowing us to help at a scale we never thought
                  possible.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://imgs.search.brave.com/Khzm-9j2XCXgRwwTv_DIGoEKHRXgp8dxCYtCiAySNqs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MTE5OTkyNy9waG90/by9ibGFjay13b21h/bi12b2x1bnRlZXIt/cGFja2luZy1kb25h/dGlvbi1ib3hlcy1p/bi1jaGFyaXR5LWZv/b2QtYmFuay5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RnZP/RkxHMnZHNXdaUjRH/RlFBb25HOXdMcWdL/bFdOVzFVVDduSXhf/MXpWTT0"
                  alt="A helping hand"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Personalized Signed Note */}
              <div className="absolute -bottom-6 -left-6 bg-[#2A248F] text-white p-6 rounded-xl shadow-xl">
                <p className="font-bold text-lg mb-1 italic">
                  &quot;Helping, together&quot;
                </p>
                <p className="text-[#C3002B] font-black uppercase tracking-widest text-sm">
                  Alix & Shanta
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
