import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TagIcon, ChartAreaIcon, PersonStandingIcon, FolderSync } from "lucide-react";

const solutions = [
  {
    title: "Taggin IQ",
    description:
      "A revolutionary technology that helps you efficiently organize and classify your content with just a few clicks.",
    icon: TagIcon,
  },
  {
    title: "Engagement IQ",
    description:
      "A powerful platform that gives you a deep understanding of your marketing efforts and customer behaviors.",
    icon: ChartAreaIcon,
  },
  {
    title: "Customer IQ",
    description:
      "A cutting edge platform that helps you get a complete understanding of your customers.",
    icon: PersonStandingIcon,
  },
  {
    title: "Connect IQ",
    description:
      "Seamlessly integrate, analyze, and act on customer data for data-driven decisions.",
    icon: FolderSync,
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
            Our specialized solutions can help transform your business and quickly generate successful results.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
