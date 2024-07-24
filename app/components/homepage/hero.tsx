import Image from "next/image";
import BeSvg from "../svg/icons/be-svg";
import FacebookSvg from "../svg/icons/facebook-svg";
import InstaSvg from "../svg/icons/insta-svg";
import MailSvg from "../svg/icons/mail-svg";
import TwitterSvg from "../svg/icons/twitter-svg";
import Button from "../ui/button";
import Link from "next/link";

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
      <div className="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-8 px-4 py-8 max-w-7xl mx-auto">
        <Image
          src="/profile-image.png"
          alt="Profile"
          width={300}
          height={300}
        />
        <div className="flex-grow flex justify-between flex-col gap-4 mt-8">
          <span className="space-y-3 text-center md:text-start">
            <h2 className="text-3xl md:text-5xl font-bold ">JOHN DOE</h2>
            <p className="text-gray-600 font-medium text-xl">
              Journalist / News Anchor
            </p>
          </span>
          <div>
            <form className="flex items-center flex-col sm:flex-row gap-3">
              <input
                name="email"
                type="email"
                autoComplete="off"
                placeholder="Email"
                className="flex-grow  px-4 py-2 md:px-6 md:py-4 border border-gray-300 bg-background2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button>
                Subscribe Now
                <MailSvg />
              </Button>
            </form>
          </div>
        </div>
        <div className="flex md:flex-col items-center justify-evenly md:justify-start space-y-1 px-8 md:px-0">
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
    </div>
  );
}
