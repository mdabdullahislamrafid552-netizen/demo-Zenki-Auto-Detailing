import { motion } from 'motion/react';

const images = [
  { url: 'https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/670357659_17864260650671705_4231089731970983678_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=Mzg3NDM0NjI2NDM2ODk3OTg5MDE3ODY0MjYwNjQ0NjcxNzA1.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNTJ4MjA0OC5zZHIuQzMifQ%3D%3D&_nc_ohc=umAa3D7Hw8kQ7kNvwF1iL9l&_nc_oc=AdpIyzyFboWb4fwhVCsH5E7ZZjwLF7A1OphCr_vrouMQEXou3AYMCbMYJOVFyBpGE0A&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=IWjbb896BtDVnfHf387hSA&_nc_ss=7a32e&oh=00_Af0kRK5C4Mr-2tf2WVk-90zlrts1nD5g0Xyv7eb9qTGi4g&oe=69E33827', caption: 'Premium Wash & Detail' },
  { url: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.71878-15/622629610_743373375509005_4455424919994173003_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzgxOTk1NzY4MTk0MDI0MDc2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=VRp4ejP-2bMQ7kNvwGQ2SQA&_nc_oc=Adqspebj-GGsDk337CVVjRjkITDpdmVxAqMyE7XTOTw4vPeb003ETeSCe57P1eFaKGg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=btTbLtR9acczg-7Iw6_LJw&_nc_ss=7a32e&oh=00_Af0crxKrybsnximR1z62ja2J0SyknL-pimYh_X0nB7i3ng&oe=69E31AC7', caption: 'Ceramic Coating Application' },
  { url: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.71878-15/615480406_1166669478786328_2591405093051100963_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzgxMDY2MzE5MjMxNDY2MDQ1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=nWno0o25ThkQ7kNvwEOHs_5&_nc_oc=AdqxojmFRJsiwEPMq1BdQ6-tsV4Bx4L3bGrTpBeQkgpHPrDnUi79C_gPWDvic5XZy2U&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=btTbLtR9acczg-7Iw6_LJw&_nc_ss=7a32e&oh=00_Af2Jg13pTurELsA5ohEnHBzC8sbIaHGeqKC9CA2RCljNCg&oe=69E341B4', caption: 'Paint Correction Results' },
  { url: 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=800&auto=format&fit=crop', caption: 'Mercedes AMG GT - Ceramic Coating' },
  { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop', caption: 'BMW M4 - Window Tint' },
  { url: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=800&auto=format&fit=crop', caption: 'McLaren 720S - Track Pack PPF' },
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 md:mb-6">Gallery</h1>
          <p className="text-white/60 font-light max-w-2xl text-base md:text-lg">
            A showcase of our precision work. Reflections that speak for themselves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#0a0a0a] rounded-sm relative">
                <img 
                  src={img.url} 
                  alt={img.caption}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-sm font-light tracking-wide text-white">{img.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
