import Image from "next/image";
import { BlogPosts } from "../../../constants";
import ChevronRight from "../svg/icons/chevron-right";
import Button from "../ui/button";

export default function BlogGrid() {
  return (
    <div className="hidden md:block max-w-7xl mx-auto px-4 py-16">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BlogPosts.map((post) => (
          <div key={post.id} className="flex flex-col hover:cursor-pointer">
            <Image
              width={1920}
              height={1080}
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover mb-2"
            />
            <div className="bg-black text-white inline-block px-2 py-1 mb-2 w-20">
              INSPIRE
            </div>
            <h3 className="font-bold text-lg mb-1">{post.title}</h3>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <Button>
          VIEW ALL
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
