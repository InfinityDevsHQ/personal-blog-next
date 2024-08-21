import Link from "next/link";

import MailSvg from "../svg/icons/mail-svg";

export default function Newsletter() {
  return (
    <div className="bg-black text-white px-4 py-12 md:p-12">
      <div className="mx-auto flex flex-col gap-2 md:gap-5 md:flex-row items-center space-y-4 md:space-y-0">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 md:px-6 md:py-4 rounded-md text-black"
        />
        <Link
          href="/"
          className="bg-[#1E293B] hover:bg-gray-700 flex items-center px-4 py-2 md:p-5 text-white font-semibold rounded-lg focus:outline-none  transition duration-300 ease-in-out text-nowrap"
        >
          SUBSCRIBE NOW
          <MailSvg />
        </Link>
      </div>
    </div>
  );
}
