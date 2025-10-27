import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import OptimizedImage from "@/components/OptimizedImage";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Send email via EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your EmailJS template ID
        formData, // form data being sent
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Your public key
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "We'll get back to you as soon as possible.",
          });
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Email send error:", error);
          toast({
            title: "Error",
            description:
              "There was a problem sending your message. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "ecofieldhomes@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(+234) 07044160754, 08027351816, 08128457792",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 5:00 PM",
    },
    {
      icon: MapPin,
      title: "Location",
      content: [
        "Suite 2A, Tafawa Balewa Square, Obalende.",
        "Suite C45, 2nd floor, EFAB Complex Area II, Opp. Federal Capital Development Authority, Garki, Abuja.",
        "Block B, House 3, Crystal Garden Estate, Hassan Kastina Way, Adjacent CBN, Lokoja, Kogi State.",
        "Plot A26, Summithills Estate Calabar, Cross River State.",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0">
            <OptimizedImage
              src={heroBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="relative container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4 animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-lg text-primary-foreground/90 animate-fade-in-delay">
              We'd love to hear from you. Let's discuss your next project.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="font-display font-bold text-2xl mb-6 text-foreground">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+234 123 456 7890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px]"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="font-display font-bold text-2xl mb-6 text-foreground">
                  Contact Information
                </h2>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {Array.isArray(info.content) ? (
                          <div className="text-muted-foreground space-y-2">
                            {info.content.map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;