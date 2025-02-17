import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import Mission from "@/components/sections/Mission";
import Solutions from "@/components/sections/Solutions";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <Clients />
        <Services />
        <Mission />
        <Solutions />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
