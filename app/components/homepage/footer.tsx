import Link from "next/link";

import BeSvg from "../svg/icons/be-svg";
import ChevronRight from "../svg/icons/chevron-right";
import FacebookSvg from "../svg/icons/facebook-svg";
import InstaSvg from "../svg/icons/insta-svg";
import TwitterSvg from "../svg/icons/twitter-svg";
import NavLogo from "../svg/logos/logo-svg";
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
const Footer = () => {
  return (
    <footer>
      {/* Links Section */}
      <div className="bg-background2 text-black px-4 py-12 md:p-12">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 items-center space-y-4 md:space-y-0 px-4">
          <div className="order-1">
            <NavLogo />
          </div>

          <div className="space-y-2 order-3 md:order-2">
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Disclaimer"].map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="flex items-center gap-1 hover:underline pb-1"
                  >
                    <ChevronRight />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 order-4 md:order-3">
            <h4 className="font-bold mb-2">Menu</h4>
            <ul className="space-y-2">
              {["Home", "Blog"].map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="flex items-center gap-1 hover:underline pb-1"
                  >
                    <ChevronRight />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-2  md:gap-4 order-2 md:order-4 md:pt-4">
            {SocialIcons.map((icon) => (
              <Link
                key={icon.id}
                href="#"
                className="text-gray-700 hover:text-gray-700 size-6"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
