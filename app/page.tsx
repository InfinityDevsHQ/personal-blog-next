import Hero from "./components/homepage/hero";
import TopStories from "./components/homepage/stories";
import Trending from "./components/homepage/trending";
import BlogGrid from "./components/homepage/blogGrid";
import Documentaries from "./components/homepage/documentry";
import Newsletter from "./components/homepage/newsletter";

export default function App() {
  return (
    <>
      <Hero />
      <TopStories />
      <Trending />
      <BlogGrid />
      <Documentaries />
      <BlogGrid />
      <Newsletter />
    </>
  );
}
