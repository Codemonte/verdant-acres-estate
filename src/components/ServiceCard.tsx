import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="hover-grow border-border bg-card">
      <CardContent className="p-6 text-center">
        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display font-semibold text-lg mb-2 text-card-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
