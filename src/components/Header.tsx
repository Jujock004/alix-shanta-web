import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#2A248F] border-b border-slate-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-white">
            ALIX AND SHANTA
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-white font-bold hover:text-[#C3002B]"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white font-bold hover:text-[#C3002B]"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white font-bold hover:text-[#C3002B]"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="bg-[#C3002B] hover:bg-[#d1405e] px-8 py-3 rounded-md font-bold transition shadow-lg text-white"
                >
                  DONATE
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
