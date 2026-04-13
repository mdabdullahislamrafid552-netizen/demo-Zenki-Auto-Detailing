import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 md:mb-8">About Zenki</h1>
            <div className="space-y-6 text-white/70 font-light leading-relaxed text-base md:text-lg">
              <p>
                Zenki Auto Detailing delivers premium automotive protection and detailing services with a focus on precision, quality, and clean results.
              </p>
              <p>
                Located at Paddock 57, we have built our reputation on an uncompromising standard of excellence. We treat every vehicle that enters our studio as a canvas, applying industry-leading techniques and materials to ensure it leaves in pristine condition.
              </p>
              <p>
                Our philosophy is simple: no hype, just results. We believe in the power of meticulous preparation, flawless execution, and long-lasting protection.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-light mb-2">10+</div>
                <div className="small-caps text-white/40">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">1000+</div>
                <div className="small-caps text-white/40">Vehicles Protected</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[3/4] relative overflow-hidden rounded-sm"
          >
            <img 
              src="https://instagram.fdac3-1.fna.fbcdn.net/v/t39.30808-6/634296268_122113290207198298_1864824627761517070_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzgzNDIzNDg2ODU1Mjc2Mzg5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjgxMHg4MTEuc2RyLkMzIn0%3D&_nc_ohc=-yr-FJpJGYsQ7kNvwHPjtxL&_nc_oc=Adrsdl-qouYV74wc1Bj5PNXJkn1EXYdRPM41jnLja6fGIig69eiboDJ4n7xcluA8upE&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=IWjbb896BtDVnfHf387hSA&_nc_ss=7a32e&oh=00_Af2AUc0dAI5QDWUnoh-h450GcIDe8H_dwYS_FRRLKao4Lw&oe=69E33C22" 
              alt="Zenki Studio" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
