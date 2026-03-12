const stats = [
  { label: "collected from donation", value: "$ 2,000" },
  { label: "people in need supported", value: "300+" },
  { label: "meals served", value: "4,000+" },
];

export default function KeyImpact() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10 uppercase tracking-tight text-slate-800">
          Key Impact
        </h2>

        {/* Grille responsive : 1 colonne sur mobile, 3 sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Le cercle orange de ta maquette */}
              <div className="w-40 h-40 rounded-full bg-[#C3002B] flex flex-col items-center justify-center text-white text-center p-4 shadow-lg transform hover:scale-105 transition-transform">
                <span className="text-xl font-bold">{stat.value}</span>
                <span className="text-[14px] font-medium uppercase mt-1 leading-tight">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
