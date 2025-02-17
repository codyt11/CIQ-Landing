import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const clients = [
  {
    name: "Tech Corp",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4",
  },
  {
    name: "Global Solutions",
    image: "https://images.unsplash.com/photo-1554260570-9140fd3b7614",
  },
  {
    name: "Innovation Inc",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },
  {
    name: "Future Group",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    name: "Digital Dynamics",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
  {
    name: "Smart Systems",
    image: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35",
  },
];

export default function Clients() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We've helped these amazing companies achieve extraordinary results
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-square relative">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
