import Image from "next/image";
import ChevronRight from "../svg/icons/chevron-right";
import Button from "../ui/button";
import Heading from "./heading";

export default function Documentaries() {
  return (
    <section className="text-primary">
      <div className="mx-auto px-4 md:px-0">
        <Heading>VIDEO DOCUMENTARIES</Heading>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 bg-backgroundPrimary  p-4 md:p-8 lg:p-12">
          <div className="w-full">
            <Image
              width={1920}
              height={1080}
              src="/documentry.png"
              alt="Vintage car with people"
              className="w-full h-auto object-cover lg:h-[422px]:"
            />
          </div>

          <div className="w-full flex flex-col justify-between gap-4 md:gap-8 lg:gap-40">
            <div>
              <div className="bg-black text-white inline-block px-2 py-1 mb-2">
                INSPIRE
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                What is Difference Between UI & UX Design
              </h3>
              <p className="text-paragraph mb-2">
                Lorem ipsum dolor sit amet consectetur. Aenean aliquam duis
                vulputate dui vel ligula. Amet urna amet aenean lorem non
                consectetur nec risus mauris. Quis at in condimentum libero. Est
                et morbi id interdum nam sollicitudin tristique mattis enim.
              </p>
              <p className="text-paragraph text-sm">Dec 08, 2023</p>
            </div>
            <span className="w-40 self-end text-nowrap">
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
