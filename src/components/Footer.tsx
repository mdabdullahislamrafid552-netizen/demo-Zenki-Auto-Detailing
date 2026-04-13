import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="mb-8 inline-block">
              <img 
                src="https://i.imgur.com/dAyIUaP.png" 
                alt="Zenki Auto Detailing" 
                className="h-24 md:h-48 object-contain" 
                referrerPolicy="no-referrer" 
              />
            </Link>
            <p className="text-white/50 max-w-sm font-light leading-relaxed text-sm md:text-base">
              Premium automotive protection and detailing services with a focus on precision, quality, and clean results.
            </p>
          </div>
          
          <div>
            <h4 className="small-caps mb-6">Services</h4>
            <ul className="space-y-4 text-white/70 font-light text-sm md:text-base">
              <li><Link to="/services" className="hover:text-white transition-colors">Paint Protection Film</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Ceramic Coating</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Window Tint</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Vinyl Wraps</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Premium Wash</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="small-caps mb-6">Contact</h4>
            <ul className="space-y-4 text-white/70 font-light text-sm md:text-base">
              <li>Paddock 57</li>
              <li>57 D. Tuazon</li>
              <li><Link to="/contact" className="hover:text-white transition-colors underline underline-offset-4">Request a Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="horizontal-line mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Zenki Auto Detailing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
