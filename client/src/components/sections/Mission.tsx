import { motion } from "framer-motion";
import { AlignCenter } from "lucide-react";
import { ParallaxBanner } from 'react-scroll-parallax';

export default function Mission() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
          speed: -20,
        }
      ]}
      className="aspect-[2/1] relative"
    >
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Mission
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
              At CatalystIQ, our mission is to provide specialized services and comprehensive,
               end-to-end solutions that help companies of all sizes achieve success within the
                life sciences industry. We are committed to simplifying the process of
                 interpreting customer data so that our clients can quickly identify effective
                  tactics, reduce unnecessary expenditures on underperforming assets, improve 
                  customer experiences, and execute successful campaigns.
            </p>
          </motion.div>
        </div>
      </div>
    </ParallaxBanner>
  );
}
