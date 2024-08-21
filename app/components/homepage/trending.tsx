import Image from "next/image";
import HotSvg from "../svg/icons/hot-svg";
import Heading from "./heading";

const sideArticles = [
  {
    id: 1,
    image: "/trending-2.png",
  },
  {
    id: 2,
    image: "/trending-3.png",
  },
];

export default function Trending() {
  return (
    <section className="text-primary">
      <div className="px-4 md:px-0 mx-auto">
        <Heading>
          It&apos;s Hot
          <HotSvg />
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 bg-backgroundPrimary p-4 md:p-8 lg:p-12">
          {/* Main article */}
          <div className="md:col-span-2 hover:cursor-pointer">
            <Image
              width={1920}
              height={1080}
              src="/trending-1.png"
              alt="Vintage car with people"
              className="w-full h-auto mb-4"
            />
            <div className="bg-black text-white inline-block px-2 py-1 mb-2">
              INSPIRE
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              What is Difference Between UI & UX Design
            </h2>
            <p className="text-paragraph text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              aliquam duis vulputate dui vel ligula. Amet urna amet dapibus
              lorem non consectetur nec risus mauris. Quis at in condimentum
              libero. Est et morbi id interdum nam sollicitudin tristique mollis
              enim.
            </p>
          </div>

          {/* Side articles */}
          <div className="space-y-4">
            {sideArticles.map((article) => (
              <div key={article.id} className="hover:cursor-pointer">
                <Image
                  width={1920}
                  height={1080}
                  src={article.image}
                  alt="Blue vintage car"
                  className="w-full h-40 lg:h-full lg:w-full  object-cover mb-2"
                />
                <div className="bg-black text-white inline-block px-2 py-1 mb-2">
                  INSPIRE
                </div>
                <h3 className="text-2xl md:text-xl font-bold mb-1">
                  What is Difference Between UI & UX Design
                </h3>
                <p className="text-xs text-paragraph">Dec 08, 2023</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
