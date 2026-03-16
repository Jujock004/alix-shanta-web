import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A248F] text-white pt-16 pb-8 font-roboto">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grille Principale */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Colonne 1 : Identité */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">
              Alix and Shanta
            </h3>
            {/* Texte en gris clair pour plus de douceur sur le bleu */}
            <p className="text-slate-300 text-sm leading-relaxed">
              Dedicated to serving those who served. Providing food, shelter,
              and community support to veterans and neighbors in need.
            </p>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="hover:text-white transition-colors"
                >
                  Our Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Nous aider */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">
              Support Us
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              {/* Le rouge ressort très bien sur le bleu marine */}
              <li>
                <Link
                  href="/donate"
                  className="text-[#C3002B] font-bold hover:brightness-110"
                >
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="hover:text-white transition-colors"
                >
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="hover:text-white transition-colors"
                >
                  Partner with us
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact Direct */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white border-b border-white/10 pb-2 inline-block">
              Contact
            </h4>
            <address className="not-italic text-sm text-slate-300 space-y-2">
              <p>Email: contact@alixshanta.org</p>
              <p>Location: Washington, D.C.</p>
              <div className="flex gap-4 mt-6">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C3002B] transition-all cursor-pointer border border-white/5">
                  f
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C3002B] transition-all cursor-pointer border border-white/5">
                  in
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Ligne de copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {currentYear} Alix and Shanta Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
