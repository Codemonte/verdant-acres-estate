
interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  overlay?: boolean;
}

const Hero = ({ backgroundImage, title, subtitle, overlay = true }: HeroProps) => {
  return (
    <section className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 max-w-6xl text-center">
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 animate-fade-in-delay">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-delay-2">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;