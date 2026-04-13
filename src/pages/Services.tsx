import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'ppf',
    title: 'Paint Protection Film',
    subtitle: 'Full / Partial Coverage',
    desc: 'An invisible, self-healing shield that protects your vehicle\'s paint from rock chips, scratches, and environmental damage. Precision-cut for a flawless fit.',
    img: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'ceramic',
    title: 'Ceramic Coating',
    subtitle: 'Long-term Protection',
    desc: 'A liquid polymer applied to the exterior to protect against chemical stains and UV damage. Delivers an unmatched deep gloss and hydrophobic properties.',
    img: 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'tint',
    title: 'Window Tint',
    subtitle: 'Heat Rejection & Privacy',
    desc: 'Premium window films that block harmful UV rays, significantly reduce interior heat, and provide the privacy and aesthetic upgrade your vehicle deserves.',
    img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'wraps',
    title: 'Vinyl Wraps',
    subtitle: 'Custom Finishes',
    desc: 'Transform the look of your vehicle with high-quality vinyl wraps. Available in matte, satin, gloss, and color-shifting finishes. Completely reversible.',
    img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'wash',
    title: 'Premium Wash',
    subtitle: 'Maintenance Service',
    desc: 'Our entry-level service designed to safely clean and maintain your vehicle\'s finish. Utilizing pH-neutral soaps, two-bucket methods, and plush microfiber.',
    img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1200&auto=format&fit=crop'
  }
];

export function Services() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">Our Services</h1>
          <p className="text-white/60 font-light max-w-2xl text-base md:text-lg">
            A comprehensive suite of protection and customization services, executed with uncompromising precision.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-square md:aspect-[4/3] overflow-hidden rounded-sm">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="small-caps mb-4 text-white/40">0{index + 1} // {service.subtitle}</div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">{service.title}</h2>
                <p className="text-white/60 font-light leading-relaxed mb-8 text-base md:text-lg">
                  {service.desc}
                </p>
                <Link to={`/contact?service=${service.id}`} className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors">
                  Request Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
