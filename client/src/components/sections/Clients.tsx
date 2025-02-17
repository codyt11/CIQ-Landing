import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpingHand } from "lucide-react";

const clients = [
  {
    name: "Amarin",
    image: "https://www.mmm-online.com/wp-content/uploads/sites/2/2023/04/Amarin_logo.jpg"
  },
  {
    name: "Amgen",
    image: "https://logos-world.net/wp-content/uploads/2023/09/Amgen-Logo-500x281.png",
  },
  {
    name: "Biogen",
    image: "https://www.biogen.com/content/dam/corporate/international/global/en-US/global/logos/biogen-logo-colour.svg",
  },
  {
    name: "Janssen",
    image: "https://static.cdnlogo.com/logos/j/88/janssen-thumb.png",
  },
  {
    name: "Merck",
    image: "https://www.merck.com/wp-content/uploads/sites/124/2022/03/Merck.png",
  },
  {
    name: "Novo Nordisk",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Novo_Nordisk_-_Logo.svg/640px-Novo_Nordisk_-_Logo.svg.png",
  },
  {
    name: "Takeda",
    image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-1/299183985_111820731636889_548080609226277260_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=rYlxsXY-Ze0Q7kNvgGDTulT&_nc_oc=AdhdY5P18uLi0xzWen-zdjZDRexlz9EANF0tD4sFrQNM1B4F1lsh-RnSLBVTF7o3SV4vGlo4lPMYJ1PPWlFxNVWV&_nc_zt=24&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AhyLMF_BRZt2p11LUVY40Ix&oh=00_AYAi_mKH3odp9G1cQep9h9GnFt_oWEsCjU-jtOgdGarhJg&oe=67B95B88",
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

        <div className="mt-12 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
                      className="w-full h-full object-contain rounded-lg grayscale hover:grayscale-0 transition-all"
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
