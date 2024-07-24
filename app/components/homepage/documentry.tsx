import Image from "next/image";
import ChevronRight from "../svg/icons/chevron-right";
import Button from "../ui/button";
import Heading from "./heading";

export default function Documentaries() {
  return (
    <section className="bg-backgroundPrimary text-primary">
      <div className="max-w-7xl mx-auto px-4 py-16 ">
        <Heading>VIDEO DOCUMENTARIES</Heading>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/2">
            <Image
              width={1920}
              height={1080}
              src="/documentry.png"
              alt="Vintage car with people"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="bg-black text-white inline-block px-2 py-1 mb-2">
                INSPIRE
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4">
                What is Difference Between UI & UX Design
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur. Aenean aliquam duis
                vulputate dui vel ligula. Amet urna amet aenean lorem non
                consectetur nec risus mauris. Quis at in condimentum libero. Est
                et morbi id interdum nam sollicitudin tristique mattis enim.
              </p>
              <p className="text-gray-500 text-sm">Dec 08, 2023</p>
            </div>
            <span className="w-44 mt-3 md:mt-6">
              <Button>
                FULL STORY
                <ChevronRight />
              </Button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
