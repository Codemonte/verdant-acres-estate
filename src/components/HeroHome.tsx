import elevenImg from "@/assets/eleven.png";
import fourImg from "@/assets/four.png";
import sixImg from "@/assets/six.png";
import residenceImg from "@/assets/residence.jpg";
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

          {/* Animated Images Grid (2x2) */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 animate-fade-in-delay-2 mt-8 lg:mt-0">
            <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up">
              <OptimizedImage
                src={elevenImg}
                alt="Image 1"
                className="w-full h-28 md:h-48 lg:h-56 object-cover hover-scale"
              />
            </div>

            <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up delay-150">
              <OptimizedImage
                src={fourImg}
                alt="Image 2"
                className="w-full h-28 md:h-48 lg:h-56 object-cover hover-scale"
              />
            </div>

            <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up delay-200">
              <OptimizedImage
                src={sixImg}
                alt="Image 3"
                className="w-full h-28 md:h-48 lg:h-56 object-cover hover-scale"
              />
            </div>

            <div className="overflow-hidden rounded-lg shadow-elegant animate-slide-up delay-300">
              <OptimizedImage
                src={residenceImg}
                alt="Image 4"
                className="w-full h-28 md:h-48 lg:h-56 object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
