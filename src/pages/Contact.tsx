import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Contact() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 md:mb-6">Request a Quote</h1>
            <p className="text-white/60 font-light mb-8 md:mb-12 max-w-md text-base md:text-lg">
              Fill out the form below to receive a customized quote for your vehicle. We aim to respond within 24 hours.
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="small-caps mb-2 text-white/40">Location</h3>
                <p className="font-light text-base md:text-lg">Paddock 57, 57 D. Tuazon</p>
              </div>
              <div>
                <h3 className="small-caps mb-2 text-white/40">Hours</h3>
                <p className="font-light text-base md:text-lg">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#050505] p-6 sm:p-8 md:p-12 rounded-sm border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="small-caps text-white/60">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors font-light" />
                </div>
                <div className="space-y-2">
                  <label className="small-caps text-white/60">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors font-light" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="small-caps text-white/60">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors font-light" />
                </div>
                <div className="space-y-2">
                  <label className="small-caps text-white/60">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors font-light" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="small-caps text-white/60">Vehicle (Year, Make, Model)</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors font-light" placeholder="e.g. 2023 Porsche 911 GT3" />
              </div>

              <div className="space-y-2">
                <label className="small-caps text-white/60">Service of Interest</label>
                <select 
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors font-light appearance-none"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="" className="bg-black">Select a service...</option>
                  <option value="ppf" className="bg-black">Paint Protection Film (PPF)</option>
                  <option value="ceramic" className="bg-black">Ceramic Coating</option>
                  <option value="tint" className="bg-black">Window Tint</option>
                  <option value="wraps" className="bg-black">Vinyl Wraps</option>
                  <option value="wash" className="bg-black">Premium Wash</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="small-caps text-white/60">Additional Details</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors font-light resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-white text-black py-4 rounded-sm font-medium tracking-wide hover:bg-white/90 transition-colors mt-8">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
