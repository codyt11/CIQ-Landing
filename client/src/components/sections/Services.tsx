import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Brain, CogIcon, BarChart, Users, Globe } from "lucide-react";

const services = [
  {
    title: "Data Strategy & Innovation",
    description: "The life sciences industry is increasingly data-driven, with payors, providers, and manufacturers becoming both producers and consumers of rich, yet sometimes opaque data. At best, data utilization can guide business strategy and enable new, market leading capabilities. At worst, data can confuse and mislead. Our data strategy & innovation expertise enables clients to foster a culture of innovation and develop the data-driven capabilities needed to sustain competitive advantage. We help clients identify data gaps, select and work with third-party data vendors, develop an effective data strategy, create an analytics and data infrastructure, implement data governance processes, enable use cases, and drive operational excellence.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Data Science & Machine Learning",
    description: "Our data science and machine learning experts are available to help you transform your data into insights and actions. Our team brings a range of capabilities to help you streamline data acquisition, clean and prepare data, build a predictive analytics model, and facilitate the deployment and monitoring of those models into production. Whether you’re looking to improve customer segmentation, predict customer behavior, or enhance an existing model, our team can help you achieve your organizational goals.",
    icon: CogIcon,
    image: "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
  },
  {
    title: "Advanced Analytics & Visualization",
    description: "While life sciences organizations are increasingly utilizing data to drive business decisions, key stakeholders sometimes lack the technical skills necessary to query and manipulate available data assets. Our team of analytics and visualization professionals can make your existing data more accessible to the decision makers in your organization. We can help you visualize key performance indicators, customer trends, and other important metrics to help you decide on the best course of action for your business. Our team also specializes in customer segmentation and customer journey mapping, which can help you better understand and target potential customers.",
    icon: BarChart,
    image: "https://plus.unsplash.com/premium_photo-1661286622480-0ac245ec4e0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuYWx5dGljc3xlbnwwfHwwfHx8MQ%3D%3D",
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
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our expert services deliver exceptional results in 3 key areas
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
