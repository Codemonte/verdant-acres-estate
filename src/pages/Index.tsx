import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Sprout, Users, Handshake, Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import realEstateImg from "@/assets/real-estate-hero.jpg";
import agribusinessImg from "@/assets/agribusiness-hero.jpg";

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

        {/* What We Do - Business Divisions */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                What We Do
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We operate across two strategic business divisions, delivering sustainable solutions in real estate and agriculture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Real Estate Division */}
              <Card className="overflow-hidden hover-scale border-border animate-fade-in">
                <div className="h-48 overflow-hidden">
                  <img src={realEstateImg} alt="Real Estate" className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Real Estate</CardTitle>
                  </div>
                  <CardDescription>
                    Innovative property development, estate management, and housing investments that shape modern living spaces.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/real-estate">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Agribusiness Division */}
              <Card className="overflow-hidden hover-scale border-border animate-fade-in-delay">
                <div className="h-48 overflow-hidden">
                  <img src={agribusinessImg} alt="Agribusiness" className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Sprout className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Agribusiness</CardTitle>
                  </div>
                  <CardDescription>
                    Sustainable farming practices, agro-processing, and agritech investments driving agricultural innovation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/agribusiness">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Target Clients & Partners */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Clients & Partners
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We collaborate with diverse stakeholders to create lasting value and sustainable growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-8 h-8 text-primary" />
                    <CardTitle>Target Clients</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Individual investors seeking real estate opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Families looking for quality housing solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Agricultural enterprises and smallholder farmers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Corporate organizations and institutional investors</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border animate-fade-in-delay">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Handshake className="w-8 h-8 text-primary" />
                    <CardTitle>Strategic Partners</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Government agencies and regulatory bodies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Financial institutions and development banks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>International development organizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Technology providers and agritech innovators</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CSR Impact Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Impact & CSR
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Committed to building sustainable communities and protecting our environment for future generations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center border-border hover-scale animate-fade-in">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Trees Planted</p>
                </CardContent>
              </Card>
              <Card className="text-center border-border hover-scale animate-fade-in-delay">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Communities Impacted</p>
                </CardContent>
              </Card>
              <Card className="text-center border-border hover-scale animate-fade-in-delay-2">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-muted-foreground">Youth Empowered</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to="/csr">
                <Button size="lg">Explore Our Impact</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Get In Touch
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                Ready to start your journey with us? We're here to answer your questions and explore opportunities together.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover-scale animate-fade-in">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-sm text-primary-foreground/80">+234 (0) 123 456 7890</p>
                </CardContent>
              </Card>
              <Card className="text-center border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover-scale animate-fade-in-delay">
                <CardContent className="pt-6">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-primary-foreground/80">info@agriestate.com</p>
                </CardContent>
              </Card>
              <Card className="text-center border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover-scale animate-fade-in-delay-2">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <p className="text-sm text-primary-foreground/80">Mon - Fri, 9:00 AM - 5:00 PM</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
