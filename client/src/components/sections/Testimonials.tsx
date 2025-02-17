import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: "Amarin",
    role: "Happy Client",
    image: "https://www.mmm-online.com/wp-content/uploads/sites/2/2023/04/Amarin_logo.jpg",
    content:
      "We’ve partnered with Catalyst IQ to develop and implement a data strategy for customer engagements. Their cutting-edge technology solutions and data-driven insights have significantly enhanced our competitive edge in the industry.",
  },
  {
    name: "NovoNordisk",
    role: "Happy Client",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Novo_Nordisk_-_Logo.svg/640px-Novo_Nordisk_-_Logo.svg.png",
    content:
      "We were pleasantly surprised by CIQ’s ability to breathe fresh life into our pharmaceutical marketing & sales organization. Their cutting-edge analytics solutions and visionary insights have revitalized our approach to data strategy and analytics.",
  },
  {
    name: "Merck",
    role: "Happy Client",
    image: "https://www.merck.com/wp-content/uploads/sites/124/2022/03/Merck.png",
    content:
      "Working with Catalyst IQ has been a game-changer for our marketing and analytics organization. Their data analytics expertise has helped us make informed decisions that have greatly improved our marketing efficiency and decision-making process",
  },
];

export default function Testimonials() {

  const autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
  });

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplay]}  // Applying the autoplay plugin here
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-1"
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-primary text-primary"
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-contain"
                          />
                          <div>
                            <div className="font-semibold">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
