import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Target, Eye, Heart, Building2, Sprout } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
// aboutImage removed — story will be text-only
import aboutus1 from "@/assets/aboutus1.jpg";
import building0 from "@/assets/building0.jpg";
import palm00 from "@/assets/palm00.jpg";
import OptimizedImage from "@/components/OptimizedImage";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide sustainable and innovative solutions in real estate and agriculture that create lasting value for our clients and communities.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading force in transforming agriculture and real estate landscapes through excellence, innovation, and sustainability.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Integrity, innovation, sustainability, and community-focused development guide every decision we make and project we undertake.",
    },
  ];

  const whatWeDo = useScrollAnimation();
  const valuesSection = useScrollAnimation();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
       <Hero
          backgroundImage={aboutus1}
          title="About Us"
          subtitle="Pioneering sustainable development in real estate and agriculture since our inception"
        />

        {/* Story Section (text-only, larger typography) */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto animate-slide-up space-y-6 text-center md:text-left">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-2">
                Our Story
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Founded with a vision to bridge the gap between modern real estate development
                and sustainable agricultural practices, we have grown into a trusted partner for
                investors, farmers, and communities alike.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our journey began with a simple belief: that development and sustainability can
                coexist. Today, we manage diverse portfolios spanning residential estates,
                commercial properties, farmlands, and agribusiness ventures.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Through innovative approaches and unwavering commitment to excellence, we continue
                to shape the future of real estate and agriculture, creating opportunities and
                value for all stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do - side-by-side write-up + picture */}
        <section ref={whatWeDo.elementRef} className="py-12 -mt-8 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`text-center mb-8 transition-all duration-700 ${whatWeDo.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">What We Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Our two core divisions focus on building sustainable communities and advancing productive agriculture.</p>
            </div>

            {/* Real Estate - text left, image right */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8 ${whatWeDo.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}>
              <div className="relative pl-6 md:pl-8">
                {/* vertical line on left (md+) from near heading down to list end */}
                <span className="hidden md:block absolute left-0 top-6 bottom-0 w-[2px] bg-primary/50" />
                <h3 className="font-display font-bold text-2xl mb-3">Real Estate</h3>
                <p className="text-muted-foreground mb-4">We deliver sustainable property development, estate management, and housing solutions that prioritize community, longevity and environmental responsibility.</p>
                <ul className="list-inside space-y-2 text-muted-foreground">
                  <li>• Residential & commercial developments</li>
                  <li>• Estate management & operations</li>
                  <li>• Land acquisition & planning</li>
                </ul>
              </div>
              <div
                className="rounded-lg overflow-hidden shadow-lg"
                style={{
                  transform: whatWeDo.isVisible ? 'translateX(0)' : 'translateX(80px)',
                  opacity: whatWeDo.isVisible ? 1 : 0,
                  transition: 'transform 500ms ease, opacity 500ms ease',
                  transitionDelay: '1500ms',
                }}
              >
                <OptimizedImage src={building0} alt="Real Estate development projects" className="w-full h-48 md:h-64 object-cover" />
              </div>
            </div>

            {/* Agribusiness - image left, text right */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${whatWeDo.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}>
              <div
                className="rounded-lg overflow-hidden shadow-lg order-1 md:order-none"
                style={{
                  transform: whatWeDo.isVisible ? 'translateX(0)' : 'translateX(-80px)',
                  opacity: whatWeDo.isVisible ? 1 : 0,
                  transition: 'transform 500ms ease, opacity 500ms ease',
                  transitionDelay: '1500ms',
                }}
              >
                <OptimizedImage src={palm00} alt="Agribusiness palm plantation" className="w-full h-48 md:h-64 object-cover" />
              </div>
              <div className="relative pr-6 md:pr-8">
                {/* vertical line on right (md+) from near heading down to list end */}
                <span className="hidden md:block absolute right-0 top-6 bottom-0 w-[2px] bg-primary/50" />
                <h3 className="font-display font-bold text-2xl mb-3">Agribusiness</h3>
                <p className="text-muted-foreground mb-4">Our agribusiness division partners with farmers and investors to scale sustainable farming, agro-processing and agri-tech solutions across the value chain.</p>
                <ul className="list-inside space-y-2 text-muted-foreground">
                  <li>• Crop & livestock production</li>
                  <li>• Agro-processing & value addition</li>
                  <li>• Agritech and supply chain innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section ref={valuesSection.elementRef} className="py-16 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${valuesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-6 bg-card rounded-lg hover-grow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
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

export default About;
