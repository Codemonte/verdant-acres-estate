import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Wheat, Beef, Factory, Globe } from "lucide-react";
import agribusinessHero from "@/assets/agribusiness-hero.jpg";

const Agribusiness = () => {
  const services = [
    {
      icon: Wheat,
      title: "Crop Farming",
      description:
        "Modern crop cultivation techniques utilizing best practices and technology for maximum yield and sustainability.",
    },
    {
      icon: Beef,
      title: "Livestock Farming",
      description:
        "Comprehensive livestock management with focus on animal welfare, health, and productive farming systems.",
    },
    {
      icon: Factory,
      title: "Agro-processing",
      description:
        "Value addition through advanced processing facilities that transform raw agricultural products into market-ready goods.",
    },
    {
      icon: Globe,
      title: "Agritech Investments",
      description:
        "Strategic investments in agricultural technology and innovation to drive efficiency and productivity.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        <Hero
          backgroundImage={agribusinessHero}
          title="Sustainable Agribusiness"
          subtitle="Cultivating innovation and growth in modern agriculture"
        />

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-foreground animate-fade-in">
                Farming for the Future
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in-delay">
                Our agribusiness division combines traditional farming wisdom with modern
                technology to create sustainable, profitable agricultural ventures. We focus on
                innovation, efficiency, and environmental stewardship in all our operations.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Gallery */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
              Our Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Rice Production Farm",
                  location: "Niger State",
                  image: agribusinessHero,
                },
                {
                  name: "Integrated Poultry Farm",
                  location: "Ogun State",
                  image: agribusinessHero,
                },
                {
                  name: "Cassava Processing Plant",
                  location: "Benue State",
                  image: agribusinessHero,
                },
                {
                  name: "Aquaculture Project",
                  location: "Delta State",
                  image: agribusinessHero,
                },
                {
                  name: "Dairy Farm Initiative",
                  location: "Kaduna State",
                  image: agribusinessHero,
                },
                {
                  name: "Vegetable Greenhouse",
                  location: "Plateau State",
                  image: agribusinessHero,
                },
              ].map((project, index) => (
                <div
                  key={project.name}
                  className="relative group overflow-hidden rounded-lg hover-grow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-primary-foreground">
                      <h3 className="font-display font-semibold text-xl mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-primary-foreground/80">{project.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Agribusiness;
