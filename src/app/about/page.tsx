const team = [
  {
    name: "Shanta Terry",
    role: "President | Case Manager | Outreach Director",
    bio: [
      "Shanta leads with a lifelong commitment to empowering individuals and strengthening communities. With an educational background in Human Services and more than 20 years of experience in case management, she has devoted her career to helping families, children, and veterans achieve a better quality of life.",
      "Her passion for service was sparked after witnessing firsthand the resilience of underserved communities abroad. This inspired her to create meaningful change—offering life strategies and resources to those facing everyday challenges. She has collaborated with major organizations like Warrior Helping Warriors and Catholic Charities to extend her impact.",
      "From leading Financial Mentorship programs to organizing the Annual Thanksgiving Feast for over 100 community members, Shanta believes that even small acts of support can open the door to long-term stability and hope.",
    ],
    image: "/shanta.jpg",
  },
  {
    name: "Alix Ganga",
    role: "Vice President",
    bio: [
      "Throughout his professional career in information technology, Alix has remained deeply passionate about using his skills to make a meaningful difference. He believes that a smile is contagious and that even the smallest act of kindness can have a powerful impact.",
      "Extensive travel has strengthened his empathy and reinforced his belief in giving back. For Alix, offering a helping hand is not just an action, but a way of life, rooted in the idea that we are all connected.",
      "At the Foundation, Alix provides strategic and logistical leadership, ensuring the organization remains impactful, efficient, and community-centered for years to come.",
    ],
    image: "/alix.jpg",
  },
  {
    name: "Toni Alvarado",
    role: "Lead Outreach & Program Coordinator (Volunteer)",
    bio: [
      "Toni serves as a key connector between the Foundation and the communities we serve. She leads outreach efforts, builds community partnerships, and coordinates programs that advance awareness and empathy.",
      "Working closely with volunteers and partners, Toni ensures our initiatives are well-organized, inclusive, and perfectly aligned with our mission to uplift individuals through advocacy and action.",
    ],
    image: "/toni.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen font-roboto">
      <section className="bg-[#2A248F] py-20 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
            About Us
          </h1>
          <p className="text-xl text-slate-300">
            Take A Walk In My Shoes Too is built on a bedrock of over 20 years
            of expertise in human services. Our team transforms professional
            experience into structured, compassionate outreach to support
            families, veterans, and underserved communities.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-32">
            {team.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
              >
                {/* Image Capsule */}
                <div className="w-full md:w-1/3">
                  <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border-b-8 border-[#C3002B]">
                    <div className="absolute inset-0 bg-[#2A248F]/10 z-10"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 space-y-6">
                  <div>
                    <h2 className="text-3xl font-black text-[#2A248F] uppercase leading-none">
                      {member.name}
                    </h2>
                    <p className="text-[#C3002B] font-bold uppercase tracking-widest text-sm mt-2">
                      {member.role}
                    </p>
                  </div>

                  <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                    {member.bio.map((para, pIndex) => (
                      <p key={pIndex}>{para}</p>
                    ))}
                  </div>

                  {/* Signature line pour le style */}
                  <div className="pt-4">
                    <div className="h-1 w-20 bg-[#2A248F]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Bottom CTA */}
      <section className="bg-slate-50 py-20 border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-[#C3002B] font-bold uppercase tracking-widest text-sm mb-2">
            Vision
          </h2>
          <h3 className="text-4xl font-black text-[#2A248F] uppercase mb-6">
            Leading with Empathy
          </h3>
          <p className="text-slate-600 mb-8 italic">
            At Take a Walk in My Shoes Too Foundation, we envision a world where
            empathy guides every interaction and compassion shapes the way we
            live, work, and lead. Our goal is to inspire understanding and
            kindness in individuals and communities alike, creating a ripple
            effect of positive change that strengthens society as a whole.
          </p>
          <a
            href="/donate"
            className="inline-block bg-[#C3002B] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-[#2A248F] transition-colors shadow-lg"
          >
            Support our action
          </a>
        </div>
      </section>
    </main>
  );
}
