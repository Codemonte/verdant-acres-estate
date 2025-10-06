import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero
          backgroundImage={heroBg}
          title="Building the Future of Real Estate & Agriculture"
          subtitle="Sustainable investments in land, housing, and agribusiness ventures."
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
