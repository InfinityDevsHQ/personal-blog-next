import Hero from "./components/homepage/hero";
import TopStories from "./components/homepage/stories";
import Trending from "./components/homepage/trending";
import BlogGrid from "./components/homepage/blogGrid";
import Documentaries from "./components/homepage/documentry";
import Newsletter from "./components/homepage/newsletter";
import BlogGrid2 from "./components/homepage/blogGrid2";

export default function App() {
  return (
    <>
      <Hero />
      <TopStories />
      <Trending />
      <BlogGrid />
      <Documentaries />
      <BlogGrid2 />
      <Newsletter />
    </>
  );
}
