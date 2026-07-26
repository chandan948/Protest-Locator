import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import StatsCards from "@/components/home/StatsCards";
import IndiaMap from "@/components/map/IndiaMap";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50">
        <Hero />

        <SearchBar />

        <StatsCards />

        {/* India Interactive Map */}
        <IndiaMap />
      </main>
    </>
  );
}