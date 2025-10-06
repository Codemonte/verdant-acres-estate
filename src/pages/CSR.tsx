import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { TreePine, Droplet, GraduationCap, Heart } from "lucide-react";
import csrHero from "@/assets/csr-hero.jpg";

const CSR = () => {
  const initiatives = [
    {
      icon: TreePine,
      title: "Environmental Sustainability",
      description: "Tree planting campaigns and renewable energy adoption in our projects.",
      image: csrHero,
    },
    {
      icon: Droplet,
      title: "Water for Communities",
      description: "Providing clean water access through borehole construction in rural areas.",
      image: csrHero,
    },
    {
      icon: GraduationCap,
      title: "Youth Empowerment",
      description: "Skills training and entrepreneurship programs for young people.",
      image: csrHero,
    },
    {
      icon: Heart,
      title: "Community Healthcare",
      description: "Supporting healthcare facilities and medical outreach programs.",
      image: csrHero,
    },
  ];

  const impactStats = [
    { number: "500+", label: "Trees Planted" },
    { number: "50+", label: "Boreholes Built" },
    { number: "1,000+", label: "Youth Trained" },
    { number: "10,000+", label: "Lives Impacted" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        <Hero
          backgroundImage={csrHero}
          title="Impact & Corporate Social Responsibility"
          subtitle="Building a sustainable future for our communities"
        />

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-foreground animate-fade-in">
                Our Commitment to Community
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in-delay">
                We believe that true success is measured not just by business growth, but by the
                positive impact we create in the communities where we operate. Our CSR initiatives
                focus on environmental sustainability, education, healthcare, and community
                development.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="font-display font-bold text-4xl md:text-5xl mb-2 text-accent">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Grid */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
              Our Initiatives
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <div
                  key={initiative.title}
                  className="bg-card rounded-lg overflow-hidden hover-grow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <initiative.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground">{initiative.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-foreground">
                Partner With Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join us in building a sustainable future for our communities. Together, we can
                create lasting positive impact through collaborative initiatives and shared values.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Get Involved
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CSR;
