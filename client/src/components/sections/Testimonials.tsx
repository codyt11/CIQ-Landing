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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1",
    content:
      "MarketPro transformed our digital presence and helped us achieve record-breaking growth.",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    image: "https://images.unsplash.com/photo-1521830101529-057b1dfd9784",
    content:
      "Their data-driven approach and strategic insights have been invaluable to our success.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, EcoShop",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31",
    content:
      "Working with MarketPro has been a game-changer for our e-commerce business.",
  },
  {
    name: "David Kim",
    role: "CMO, Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
    content:
      "The results they delivered exceeded our expectations in every way.",
  },
];

export default function Testimonials() {
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
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
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
                            className="w-12 h-12 rounded-full object-cover"
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
                  </div>
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
