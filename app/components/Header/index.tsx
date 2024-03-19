import Link from "next/link";

function Header() {
  return (
    <header className="z-10 w-full bg-black shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
        <h1 className="font-sans text-3xl font-bold text-white">
          <Link href="/" className="hover:text-yellow-200 transition-colors">
            Lifting my mood now
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/about"
                className="text-white hover:text-yellow-200 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-white hover:text-yellow-200 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-yellow-200 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
