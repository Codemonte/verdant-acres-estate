import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Building2, Home, MapPin, Briefcase } from "lucide-react";
import realEstateHero from "@/assets/real-estate-hero.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const RealEstate = () => {
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation();
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { elementRef: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const services = [
    {
      icon: Building2,
      title: "Property Development",
      description:
        "Innovative residential and commercial property development projects that meet modern standards and exceed expectations.",
    },
    {
      icon: Home,
      title: "Estate Management",
      description:
        "Comprehensive estate management services ensuring optimal property value and resident satisfaction.",
    },
    {
      icon: MapPin,
      title: "Land Acquisition",
      description:
        "Strategic land acquisition in prime locations with high growth potential and development opportunities.",
    },
    {
      icon: Briefcase,
      title: "Housing Investment",
      description:
        "Profitable investment opportunities in residential and commercial real estate with guaranteed returns.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        <Hero
          backgroundImage={realEstateHero}
          title="Real Estate Excellence"
          subtitle="Building communities and creating value through innovative property development"
        />

        {/* Intro Section */}
        <section ref={introRef} className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 
                className="font-display font-bold text-3xl md:text-4xl mb-6 text-foreground transition-all duration-700"
                style={{
                  opacity: introVisible ? 1 : 0,
                  transform: introVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                Transforming Spaces, Building Futures
              </h2>
              <p 
                className="text-lg text-muted-foreground transition-all duration-700 delay-200"
                style={{
                  opacity: introVisible ? 1 : 0,
                  transform: introVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                Our real estate division specializes in developing modern, sustainable properties
                that enhance communities and create lasting value. From residential estates to
                commercial complexes, we deliver excellence in every project.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={servicesRef} className="py-16 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 
              className="font-display font-bold text-3xl md:text-4xl text-center mb-12 text-foreground transition-all duration-700"
              style={{
                opacity: servicesVisible ? 1 : 0,
                transform: servicesVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="transition-all duration-700"
                  style={{
                    opacity: servicesVisible ? 1 : 0,
                    transform: servicesVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section ref={projectsRef} className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 
              className="font-display font-bold text-3xl md:text-4xl text-center mb-12 text-foreground transition-all duration-700"
              style={{
                opacity: projectsVisible ? 1 : 0,
                transform: projectsVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Green Valley Estate",
                  location: "Lagos",
                  image: realEstateHero,
                },
                {
                  name: "Skyline Commercial Plaza",
                  location: "Abuja",
                  image: realEstateHero,
                },
                {
                  name: "Riverside Residences",
                  location: "Port Harcourt",
                  image: realEstateHero,
                },
                {
                  name: "Urban Heights",
                  location: "Ibadan",
                  image: realEstateHero,
                },
                {
                  name: "Coastal Gardens",
                  location: "Calabar",
                  image: realEstateHero,
                },
                {
                  name: "Metro Business Hub",
                  location: "Enugu",
                  image: realEstateHero,
                },
              ].map((project, index) => (
                <div
                  key={project.name}
                  className="relative group overflow-hidden rounded-lg hover-grow transition-all duration-700"
                  style={{
                    opacity: projectsVisible ? 1 : 0,
                    transform: projectsVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
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

export default RealEstate;
