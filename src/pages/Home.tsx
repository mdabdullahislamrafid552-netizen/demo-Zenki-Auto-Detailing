import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BeforeAfter } from '../components/BeforeAfter';

export function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/627965736_18441588847114477_5100375288804751133_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzg0ODA0MjQwNzQzMDU3Njk0Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=sqU-k5GxsxkQ7kNvwFhPZo2&_nc_oc=AdqRdhNKsWJ9vByB9f7IIfzbR4uReO4c3q7XV_GY1SFDPFQOZTZGc-YJO1idPKkLwCU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=aPxbGZvKekx-BIxX2iVNOw&_nc_ss=7a32e&oh=00_Af2J3FZNJRrLsJIqq4dUy1zJo72cJWpF1Ah3a3w6fzHn-A&oe=69E319F2" 
            alt="Luxury car detail" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-6 text-balance leading-[1.1]">
              Precision Auto<br />Protection & Detailing
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-light mb-12 text-balance leading-relaxed">
              PPF, ceramic coatings, tint, and wraps — crafted to perfection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link to="/contact" className="bg-white text-black px-8 py-4 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-white/90 transition-all hover:scale-105 w-full sm:w-auto text-center">
              Request a Quote
            </Link>
            <Link to="/services" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 font-light tracking-wide w-full sm:w-auto justify-center sm:justify-start group">
              View Services <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">
                The standard of<br />automotive excellence.
              </h2>
              <p className="text-white/60 font-light leading-relaxed mb-8 max-w-md">
                Located at Paddock 57, Zenki Auto Detailing is a high-end protection and customization studio. We specialize in preserving and enhancing the world's finest vehicles through meticulous attention to detail.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors">
                Our Story
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] relative overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
                alt="Detailing process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 uppercase">Ganito Dapat Ang Kintab Ng Sasakyan Mo</h2>
            <p className="text-white/60 font-light max-w-2xl mx-auto text-lg">
              Ceramic Coating + Paint Correction. Tanggal swirl marks. Protektado pa.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BeforeAfter 
              beforeImage="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop" 
              afterImage="https://images.unsplash.com/photo-1611821064430-0d40220e4e0a?q=80&w=1600&auto=format&fit=crop" 
              beforeLabel="NO PAINT CORRECTION"
              afterLabel="WITH PAINT CORRECTION + CERAMIC COATING"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-xl md:text-2xl font-light mb-10">
              Mas makintab. Mas protektado. Mas premium ang dating.
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link to="/contact" className="bg-white text-black px-10 py-5 rounded-full font-medium tracking-widest uppercase hover:bg-white/90 transition-colors">
                Message Us Now To Book
              </Link>
              <p className="text-white/40 text-sm tracking-widest uppercase mt-2">Limited Slots Only</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">Core Services</h2>
            <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Paint Protection Film', desc: 'Invisible shield against rock chips and scratches.', img: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=800&auto=format&fit=crop' },
              { title: 'Ceramic Coating', desc: 'Long-term gloss and hydrophobic protection.', img: 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=800&auto=format&fit=crop' },
              { title: 'Window Tint', desc: 'Premium heat rejection and privacy.', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop' }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden mb-6 rounded-sm">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-light tracking-wide mb-2">{service.title}</h3>
                <p className="text-white/50 font-light text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
