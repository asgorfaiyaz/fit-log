import { HeroBanner } from "@/components/home/HeroBanner";
import Library from "@/components/home/library/Library";

function Home() {
  return (
    <div className="page-container py-8">
      <HeroBanner />
      <Library />
    </div>
  );
}

export default Home;
