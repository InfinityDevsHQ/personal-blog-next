import Link from "next/link";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/"
      className="flex items-center px-4 py-2 md:px-6 md:py-4 bg-primary text-white font-semibold rounded-lg focus:outline-none hover:bg-primary/90 transition duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
}
