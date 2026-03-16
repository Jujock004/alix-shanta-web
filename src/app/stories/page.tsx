export default function StoriesPage() {
  const allStories = [
    {
      id: 1,
      title: "A Night on 5th Ave: More Than Just a Meal",
      excerpt:
        "Last Tuesday, we met Mark. Beyond the hot soup, what he really needed was someone to listen to his story of service...",
      date: "March 12, 2026",
      category: "Field Report",
      image:
        "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?q=80&w=800",
    },
    {
      id: 2,
      title: "How Your Donations Turned Into 200 Blankets",
      excerpt:
        "The cold front was hitting hard. Thanks to our new supporters, we were able to distribute high-quality thermal blankets in record time.",
      date: "Feb 28, 2026",
      category: "Impact",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800",
    },
    {
      id: 3,
      title: "Our Transition: From Personal Funds to Community Support",
      excerpt:
        "We share why we decided to open our mission to the world and what it means for the future of our neighborhood.",
      date: "Feb 15, 2026",
      category: "Announcements",
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800",
    },
  ];
  return (
    <main className="min-h-screen bg-slate-50 font-roboto">
      {/* Header de la page */}
      <section className="bg-[#2A248F] pt-24 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Our Stories
          </h1>
          <p className="text-xl text-slate-300">
            Direct reports from the field and updates on our shared mission.
          </p>
        </div>
      </section>

      {/* Grille d'articles */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {allStories.map((story) => (
              <article
                key={story.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
              >
                {/* Image avec Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C3002B] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8">
                  <div className="text-slate-400 text-xs font-bold mb-3 uppercase tracking-widest">
                    {story.date}
                  </div>
                  <h2 className="text-2xl font-black text-[#2A248F] mb-4 leading-tight group-hover:text-[#C3002B] transition-colors">
                    {story.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {story.excerpt}
                  </p>
                  <button className="flex items-center text-[#2A248F] font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Story <span className="ml-2">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
