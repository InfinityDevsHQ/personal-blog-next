import Link from "next/link";
import MailSvg from "../svg/icons/mail-svg";

export default function Newsletter() {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-2 md:flex-row items-center space-y-4 md:space-y-0 px-4">
        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Email"
          className="w-full md:w-3/4 px-4 py-2 md:px-6 md:py-4 rounded-md text-black"
        />
        <Link
          href="/"
          className="bg-[#1E293B] hover:bg-gray-700 flex items-center px-4 py-2 md:px-6 md:py-4 text-white font-semibold rounded-lg focus:outline-none  transition duration-300 ease-in-out "
        >
          SUBSCRIBE NOW
          <MailSvg />
        </Link>
      </div>
    </div>
  );
}
