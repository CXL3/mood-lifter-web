import Link from "next/link";

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-10 flex1 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
        <h1
          className="font-sans text-3xl font-bold text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
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
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-yellow-200 transition-colors"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="text-white hover:text-yellow-200 transition-colors"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
