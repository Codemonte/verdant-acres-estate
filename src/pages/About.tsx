import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Target, Eye, Heart } from "lucide-react";
import aboutImage from "@/assets/about-us.jpg";
import aboutus1 from "@/assets/aboutus1.jpg";

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

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
       <Hero
          backgroundImage={aboutus1}
          title="About Us"
          subtitle="Pioneering sustainable development in real estate and agriculture since our inception"
        />

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img
                  src={aboutImage}
                  alt="Our Team"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="animate-slide-up space-y-4">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Our Story
                </h2>
                <p className="text-muted-foreground">
                  Founded with a vision to bridge the gap between modern real estate development
                  and sustainable agricultural practices, we have grown into a trusted partner for
                  investors, farmers, and communities alike.
                </p>
                <p className="text-muted-foreground">
                  Our journey began with a simple belief: that development and sustainability can
                  coexist. Today, we manage diverse portfolios spanning residential estates,
                  commercial properties, farmlands, and agribusiness ventures.
                </p>
                <p className="text-muted-foreground">
                  Through innovative approaches and unwavering commitment to excellence, we continue
                  to shape the future of real estate and agriculture, creating opportunities and
                  value for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
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

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12">
              Our Journey
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  year: "2015",
                  title: "Company Founded",
                  description: "Started with a vision to revolutionize real estate and agriculture",
                },
                {
                  year: "2017",
                  title: "First Major Project",
                  description: "Completed our first residential estate development",
                },
                {
                  year: "2019",
                  title: "Agricultural Expansion",
                  description: "Launched agribusiness division with focus on sustainable farming",
                },
                {
                  year: "2021",
                  title: "Community Impact",
                  description: "Initiated CSR programs benefiting over 10,000 community members",
                },
                {
                  year: "2024",
                  title: "Continued Growth",
                  description: "Expanded portfolio to 50+ projects across multiple regions",
                },
              ].map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex gap-6 items-start animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent flex items-center justify-center">
                    <span className="font-display font-bold text-lg text-accent-foreground">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
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

export default About;
