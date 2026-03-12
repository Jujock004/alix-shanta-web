export default function OurActions() {
  const actions = [
    {
      title: "Providing essential needs",
      image:
        "https://plus.unsplash.com/premium_photo-1683140523610-13deecbd20b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFzaWMlMjBuZWVkfGVufDB8fDB8fHww",
    },
    {
      title: "Collecting food",
      image:
        "https://media.istockphoto.com/id/1435451322/fr/photo/b%C3%A9n%C3%A9vole-m%C3%A9connaissable-organisant-des-dons-dans-des-bo%C3%AEtes-portant-des-gants-de-protection.jpg?s=612x612&w=0&k=20&c=gXcm4HVyCUN8NTO8lrWivinKBLOgl5pRQA4LtYtuxNc=",
    },
    {
      title: "Support and community",
      image:
        "https://media.istockphoto.com/id/2182250916/fr/photo/concept-de-travail-d%C3%A9quipe-avec-des-mains-diverses-qui-se-rejoignent-symbolisant-lunit%C3%A9-la.jpg?s=612x612&w=0&k=20&c=nNcmlsfxSovV0bHor0S8RY3JUuy5Q3xm05TyOV8r9xQ=",
    },
  ];
  return (
    <section className="py-20 bg-white font-roboto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Titre identique à ta capture */}
        <h2 className="text-2xl font-bold text-center mb-10 uppercase tracking-tight text-slate-800">
          Our Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {actions.map((action, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Conteneur Image avec les bords arrondis de ta capture */}
              <div className="w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-sm">
                <img
                  src={action.image}
                  alt={action.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Texte sous l'image */}
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                {action.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
