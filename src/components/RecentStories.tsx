export default function RecentStories() {
  const stories = [
    {
      title: "Hot Meals Distribution",
      category: "Food Support",
      date: "March 10, 2026",
      image:
        "https://media.istockphoto.com/id/641609394/fr/photo/volontaires-servent-les-gens-de-soupe-populaire.webp?a=1&b=1&s=612x612&w=0&k=20&c=D855ZCjy79Fbv2rM4F72Y869efH_0QsDbjWCci3uSQU=",
      description:
        "Our volunteers served over 150 hot meals to veterans and neighbors in need this weekend.",
    },
    {
      title: "Winter Gear Drive",
      category: "Donation",
      date: "Feb 24, 2026",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800",
      description:
        "Thanks to your donations, we distributed 200 high-quality blankets and coats to combat the cold.",
    },
    {
      title: "Veteran Housing Project",
      category: "Housing",
      date: "Jan 15, 2026",
      image:
        "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?q=80&w=800",
      description:
        "A major milestone: we helped two veterans move into their permanent housing this month.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* En-tête de section */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[#C3002B] font-bold uppercase tracking-widest text-sm mb-2">
              Impact in action
            </h2>
            <h3 className="text-4xl font-black text-[#2A248F] uppercase tracking-tighter">
              Recent Stories
            </h3>
          </div>
          <button className="cursor-pointer hidden md:block text-[#2A248F] font-bold border-b-2 border-[#2A248F] hover:text-[#C3002B] hover:border-[#C3002B] transition-all pb-1">
            VIEW ALL STORIES
          </button>
        </div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image avec Overlay au survol */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#2A248F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-8">
                <time className="text-slate-400 text-xs font-medium">
                  {story.date}
                </time>
                <h4 className="text-xl font-bold text-slate-800 mt-2 mb-4 group-hover:text-[#2A248F] transition-colors">
                  {story.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {story.description}
                </p>
                <button className="flex items-center text-[#C3002B] font-black text-xs uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Read Full Story <span className="ml-2">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
