import { motion } from "framer-motion";
import { ParallaxBanner } from 'react-scroll-parallax';
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, LineChart } from "lucide-react";
import Lottie from 'react-lottie';
import './hero.less';
import Animation from '../../assets/Animation - 1739812811723.json';

export default function Hero() {
  const defaultOptions = {
    loop: true,  // Loops the animation
    autoplay: true, // Starts automatically
    animationData: Animation, // The imported animation JSON
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' // Optional to preserve aspect ratio
    }
  };

  return (
    <section className="pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="hero-contain grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Empower Transformation of Your Business
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Grow the intelligence and success of your business through our specialized services and solutions to realize your business’s transformative potential.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Lottie animation */}
          <div className="w-full h-full">
            <Lottie options={defaultOptions} height={500} width={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
