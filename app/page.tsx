import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import StatsCards from "@/components/home/StatsCards";
import MapDashboard from "@/components/map/MapDashboard";
import LatestProtests from "@/components/home/LatestProtests";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <StatsCards />
        <MapDashboard />
        <LatestProtests />
      </main>
    </>
  );
}