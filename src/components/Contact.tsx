import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white z-10">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="contact-header">
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-slate-800 tracking-tight mb-4">
            Get In <span className="text-blue-400 font-bold">Touch</span>
          </h2>
          <p className="text-slate-500 font-sans font-light text-base sm:text-lg leading-relaxed">
            Have an exciting software opportunity or system request? Reach out to me directly via phone or email!
          </p>
        </div>

        {/* Simplified Direct Symmetrical Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto" id="contact-simple-channels">
          
          {/* Email Card Stream */}
          <a
            href="mailto:waiyanxtet04@gmail.com"
            className="group flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 hover:bg-blue-50/30 border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            id="contact-email-channel"
          >
            <div className="p-4 bg-blue-100 text-blue-500 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">Email Channel</span>
            <span className="text-slate-750 font-semibold text-lg sm:text-xl break-all group-hover:text-blue-500 transition-colors">
              waiyanxtet04@gmail.com
            </span>
          </a>

          {/* Phone Card Stream */}
          <a
            href="tel:09755565487"
            className="group flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 hover:bg-blue-50/30 border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            id="contact-phone-channel"
          >
            <div className="p-4 bg-blue-100 text-blue-500 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">Phone Hotline</span>
            <span className="text-slate-750 font-semibold text-lg sm:text-xl group-hover:text-blue-500 transition-colors">
              09755565487
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

