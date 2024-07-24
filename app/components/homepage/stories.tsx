import Image from "next/image";
import { storiesPosts } from "../../../constants";
import Heading from "./heading";

const TopStories = () => {
  return (
    <div className="max-w-7xl mx-auto py-14 px-4">
      <Heading>Top Stories</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {storiesPosts.map((story) => (
          <div
            key={story.id}
            className="relative hover:cursor-pointer rounded-lg overflow-hidden"
          >
            <Image
              width={1920}
              height={1080}
              src={story.image}
              alt={story.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-2xl md:text-xl lg:text-3xl font-bold mb-2">
                {story.title}
              </h3>
              <p className="text-sm">{story.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStories;
