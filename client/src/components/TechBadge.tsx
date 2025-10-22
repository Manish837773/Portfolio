import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "secondary" | "outline";
}

export default function TechBadge({ name, variant = "outline" }: TechBadgeProps) {
  return (
    <Badge 
      variant={variant}
      className="text-xs font-medium bg-muted/50 text-foreground border-border hover:bg-muted"
      data-testid={`badge-tech-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {name}
    </Badge>
  );
}
