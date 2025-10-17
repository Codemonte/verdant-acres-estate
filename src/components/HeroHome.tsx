import buildingImg from "@/assets/building.jpg";
import machineImg from "@/assets/machine.jpg";
import peopleImg from "@/assets/people.jpg";

interface HeroHomeProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  overlay?: boolean;
}

const HeroHome = ({ backgroundImage, title, subtitle, overlay = true }: HeroHomeProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom-Pan Animation */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom-pan"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      )}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 animate-fade-in-delay">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 animate-fade-in-delay-2">
                {subtitle}
              </p>
            )}
          </div>

          {/* Animated Images Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in-delay-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up">
                <img 
                  src={buildingImg} 
                  alt="Real Estate" 
                  className="w-full h-64 object-cover hover-scale"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up delay-200">
                <img 
                  src={machineImg} 
                  alt="Agribusiness" 
                  className="w-full h-48 object-cover hover-scale"
                />
              </div>
            </div>
            <div className="mt-8">
              <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up delay-300">
                <img 
                  src={peopleImg} 
                  alt="Our Mission" 
                  className="w-full h-80 object-cover hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
