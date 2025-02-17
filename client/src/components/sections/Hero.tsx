import { motion } from "framer-motion";
import { ParallaxBanner } from 'react-scroll-parallax';
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, LineChart } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Business With Data-Driven Marketing
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              We help businesses grow through strategic digital marketing and
              analytics-powered decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-lg p-8">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute top-1/4 left-1/4"
              >
                <BarChart3 className="w-12 h-12 text-primary" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute top-1/2 right-1/3"
              >
                <TrendingUp className="w-16 h-16 text-blue-500" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute bottom-1/4 right-1/4"
              >
                <LineChart className="w-20 h-20 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
