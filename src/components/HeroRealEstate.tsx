import tenImg from "@/assets/ten.png";
import thirteenImg from "@/assets/thirteen.jpg";
import duplexImg from "@/assets/duplex.jpg";
import elevenImg from "@/assets/eleven.png";
import OptimizedImage from "@/components/OptimizedImage";

interface HeroAgribusinessProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  overlay?: boolean;
}

const HeroAgribusiness = ({ backgroundImage, title, subtitle, overlay = true }: HeroAgribusinessProps) => {
  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom-Pan Animation (IMG for responsive zoom) */}
      <div className="absolute inset-0 animate-zoom-pan">
        <OptimizedImage src={backgroundImage} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Overlay */}
      {overlay && <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />}

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

          {/* Animated Images Grid (2x2) */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 animate-fade-in-delay-2 mt-8 lg:mt-0">
            <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up">
              <OptimizedImage src={tenImg} alt="Real Estate" className="w-full h-28 md:h-48 lg:h-56 object-cover hover-scale" />
            </div>

            <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up delay-100">
              <OptimizedImage src={elevenImg} alt="Residence" className="w-full h-28 md:h-48 lg:h-56 object-cover hover-scale" />
            </div>

            <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up delay-200">
              <OptimizedImage src={thirteenImg} alt="Build 2" className="w-full h-28 md:h-48 lg:h-56 object-cover hover-scale" />
            </div>

            <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up delay-300">
              <OptimizedImage src={duplexImg} alt="Our Mission" className="w-full h-28 md:h-48 lg:h-56 object-cover hover-scale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAgribusiness;