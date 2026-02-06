import { motion } from "framer-motion";
import { 
  Zap, 
  DollarSign, 
  HeadphonesIcon, 
  Users, 
  Shield, 
  Award 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality. We respect your deadlines.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates that deliver maximum value for your investment.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "24/7 support to ensure your projects run smoothly at all times.",
  },
  {
    icon: Users,
    title: "Experienced Developers",
    description: "Our team brings years of expertise across multiple technologies.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Built with security best practices and designed to grow with you.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Rigorous testing and quality assurance on every project we deliver.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Why Code Pulse
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
              Why Choose <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're not just developers – we're your technology partners. Our commitment 
              to excellence, innovation, and client satisfaction sets us apart in the industry.
            </p>
            
            {/* Progress Stats */}
            <div className="space-y-6">
              {[
                { label: "Client Satisfaction", value: 98 },
                { label: "Project Completion Rate", value: 100 },
                { label: "On-Time Delivery", value: 95 },
              ].map((stat, index) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">{stat.label}</span>
                    <span className="text-primary">{stat.value}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover-glow group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
