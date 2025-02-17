import { motion } from "framer-motion";
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
        <div className="container mx-auto px-4 h-full flex items-center">
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
              We're on a mission to revolutionize digital marketing through
              innovation and data-driven strategies. Our goal is to help businesses
              of all sizes achieve sustainable growth and meaningful connections
              with their audiences.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "500+", label: "Clients Served" },
                { number: "95%", label: "Client Retention" },
                { number: "150%", label: "Average ROI" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </ParallaxBanner>
  );
}
