import { Card } from "@/components/ui/card";
import { Boxes, Cloud, Code, Shield } from "lucide-react";

const features = [
  {
    title: "Smart Contract Templates",
    description: "Pre-built, audited smart contract templates for quick deployment",
    icon: Code,
  },
  {
    title: "One-Click Deployment",
    description: "Deploy to multiple chains with a single click",
    icon: Cloud,
  },
  {
    title: "Security First",
    description: "Built-in security features and best practices",
    icon: Shield,
  },
  {
    title: "Modular Architecture",
    description: "Easily combine different components to build your dApp",
    icon: Boxes,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything You Need to Build dApps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};