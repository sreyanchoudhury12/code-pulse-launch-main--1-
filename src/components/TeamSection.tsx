import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Jessica Lee",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Marcus Wright",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Nina Patel",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
];

export const TeamSection = () => {
  return (
    <section className="section-padding relative">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our talented team of developers, designers, and strategists are dedicated to bringing your vision to life.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card overflow-hidden hover-glow">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      <a
                        href={member.socials.linkedin}
                        className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={member.socials.twitter}
                        className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href={member.socials.github}
                        className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
