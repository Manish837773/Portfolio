import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "secondary" | "outline";
}

export default function TechBadge({ name, variant = "secondary" }: TechBadgeProps) {
  return (
    <Badge 
      variant={variant}
      className="text-xs font-medium"
      data-testid={`badge-tech-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {name}
    </Badge>
  );
}
