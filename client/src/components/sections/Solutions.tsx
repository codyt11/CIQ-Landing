import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Building2, ShoppingCart } from "lucide-react";

const solutions = [
  {
    title: "For Startups",
    description:
      "Launch and scale your startup with our growth-focused marketing solutions",
    icon: Rocket,
    features: ["Market Research", "Brand Development", "Growth Hacking"],
  },
  {
    title: "For Enterprise",
    description:
      "Enterprise-grade marketing solutions for established businesses",
    icon: Building2,
    features: ["Global Campaign Management", "Advanced Analytics", "Custom Strategy"],
  },
  {
    title: "For E-commerce",
    description:
      "Drive online sales and customer engagement for your e-commerce business",
    icon: ShoppingCart,
    features: ["Conversion Optimization", "Customer Journey", "Performance Marketing"],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">Solutions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tailored solutions for different business needs
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <solution.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
