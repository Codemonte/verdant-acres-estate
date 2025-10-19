import constructImg from "@/assets/construct.jpg";
import palmmImg from "@/assets/palmm.jpg";
import palmmmImg from "@/assets/palmmm.jpg";
import OptimizedImage from "@/components/OptimizedImage";

interface HeroHomeProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  overlay?: boolean;
}

const HeroHome = ({ backgroundImage, title, subtitle, overlay = true }: HeroHomeProps) => {
  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom-Pan Animation (use IMG for better resizing) */}
      <div className="absolute inset-0 animate-zoom-pan">
        <OptimizedImage src={backgroundImage} alt="" className="w-full h-full object-cover" />
        {/* subtle overlay handled below */}
      </div>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      )}

  {/* Content Container - add top padding to avoid overlapping the fixed navbar (h-20) */}
  <div className="relative z-10 container mx-auto px-4 max-w-7xl pt-20 md:pt-24 lg:pt-28">
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
          <div className="grid grid-cols-2 gap-2 md:gap-4 animate-fade-in-delay-2 mt-8 lg:mt-0">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up">
                <OptimizedImage
                  src={constructImg}
                  alt="Real Estate"
                  className="w-full h-32 md:h-64 object-cover hover-scale"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up delay-200">
                <OptimizedImage
                  src={palmmImg}
                  alt="Agribusiness"
                  className="w-full h-24 md:h-48 object-cover hover-scale"
                />
              </div>
            </div>
            <div className="mt-8">
              <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up delay-300">
                <OptimizedImage
                  src={palmmmImg}
                  alt="Our Mission"
                  className="w-full h-40 md:h-80 object-cover hover-scale"
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
