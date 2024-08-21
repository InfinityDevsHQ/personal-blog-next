import Image from "next/image";
import Link from "next/link";

import BeSvg from "../svg/icons/be-svg";
import FacebookSvg from "../svg/icons/facebook-svg";
import InstaSvg from "../svg/icons/insta-svg";
import MailSvg from "../svg/icons/mail-svg";
import TwitterSvg from "../svg/icons/twitter-svg";
import Button from "../ui/button";

const SocialIcons = [
  {
    id: 1,
    icon: <BeSvg />,
  },
  {
    id: 2,
    icon: <FacebookSvg />,
  },
  {
    id: 3,
    icon: <InstaSvg />,
  },
  {
    id: 4,
    icon: <TwitterSvg />,
  },
];

export default function Hero() {
  return (
    <div className=" bg-backgroundPrimary text-primary">
      <div className="flex flex-col md:flex-row gap-4 md:gap-2.5 lg:gap-5 items-center md:text-start px-4 py-8 md:py-5 md:px-14 lg:py-8 mx-auto">
        <Image
          src="/profile-image.png"
          alt="Profile"
          width={260}
          height={260}
        />
        <div className="flex-grow flex justify-between flex-col gap-4 p-2.5">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="space-y-5 text-center md:text-start">
              <h2 className="text-3xl md:text-5xl font-bold ">JOHN DOE</h2>
              <p className="text-gray-600 text-xl">Journalist / News Anchor</p>
            </div>
            <div className="flex md:flex-col items-center justify-evenly md:justify-start space-y-1 px-8 md:px-0 md:pr-10">
              {SocialIcons.map((icon) => (
                <Link
                  key={icon.id}
                  href="/"
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <svg
                    className="size-7 md:size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {icon.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <form className="flex items-center flex-col sm:flex-row gap-5">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow px-4 py-2 md:p-5 border border-gray-300 bg-background2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button>
                <span className="hidden lg:block">Subscribe Now</span>
                <span className="block lg:hidden">Subscribe</span>
                <MailSvg />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
