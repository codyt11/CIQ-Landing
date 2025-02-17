import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Megaphone, PenTool, BarChart, Users, Globe } from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    description: "Strategic campaigns that drive real business results",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f",
  },
  {
    title: "Brand Strategy",
    description: "Building memorable brands that connect with audiences",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },
  {
    title: "Analytics & Insights",
    description: "Data-driven decisions for optimal performance",
    icon: BarChart,
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa",
  },
  {
    title: "Content Creation",
    description: "Engaging content that tells your story",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1444653389962-8149286c578a",
  },
  {
    title: "Social Media",
    description: "Building communities and driving engagement",
    icon: Users,
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407",
  },
  {
    title: "SEO Optimization",
    description: "Improving visibility in search results",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1495704907664-81f74a7efd9b",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive marketing solutions tailored to your needs
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <service.icon className="w-5 h-5 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
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
