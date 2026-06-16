import { motion } from 'motion/react';
import { Award, GraduationCap, MapPin, Code2 } from 'lucide-react';

export default function About() {
  const profileImagePath = 'https://photos.app.goo.gl/o8VnYUvYxqraobYX7';

  const stats = [
    { icon: GraduationCap, label: 'Education', value: 'B.C.Sc (Software Engineering)', detail: 'UCSY' },
    { icon: Code2, label: 'Core Focus', value: 'Full Stack Development', detail: 'Clean Code & Patterns' },
    { icon: MapPin, label: 'Location', value: 'Yangon, Myanmar', detail: 'Available location ' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white z-15">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Profile Photo with floating bubble accents */}
          <div className="lg:col-span-5 flex justify-center relative" id="about-image-wrapper">
            {/* Ambient Background Sphere 1 (Top-Right) */}
            <div className="absolute top-0 right-4 sm:right-12 w-20 h-20 rounded-full bg-blue-100/60 blur-md pointer-events-none" />
            
            {/* Ambient Background Sphere 2 (Bottom-Left) */}
            <div className="absolute -bottom-4 left-4 sm:left-12 w-16 h-16 rounded-full bg-cyan-150/50 blur-md pointer-events-none" />

            {/* Profile Frame with Glowing Shadows */}
            <div className="relative p-3 rounded-full bg-white shadow-xl shadow-blue-100/40 border border-slate-100">
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-md relative z-10">
                <img
                  src={profileImagePath}
                  alt="Wai Yan Htet"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  id="about-profile-image"
                />
              </div>

              {/* Orbiting Small Bubbles (From Design) */}
              <div className="absolute -top-6 -right-6 w-14 h-14 rounded-full bg-blue-50 border border-blue-100 shadow-sm flex items-center justify-center animate-bounce duration-3000 pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-blue-200/40" />
              </div>
              <div className="absolute bottom-6 -left-6 w-10 h-10 rounded-full bg-cyan-50 border border-cyan-100 shadow-sm flex items-center justify-center animate-pulse pointer-events-none">
                <div className="w-5 h-5 rounded-full bg-cyan-300/30" />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="about-content">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Heading */}
              <h2 className="font-display font-medium text-4xl sm:text-5xl text-slate-800 tracking-tight mb-8">
                About <span className="text-blue-400 font-bold">Me</span>
              </h2>

              {/* Text paragraphs matching the screenshot layout style */}
              <div className="space-y-6 text-slate-600 font-sans leading-relaxed text-base sm:text-lg font-light">
                <p>
                  I am a Software Engineering student specializing <strong>database management, mobile development, backend development and React web development.</strong> Skilled in developing responsive, high-performance applications with a strong foundation in software engineering principles, problem-solving, and modern development tools. I am also expanding my knowledge of backend development by learning <strong>Java Spring Boot and modern software development practices.</strong>
                </p>
             
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10" id="about-stats-grid">
                {stats.map((st, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/40 to-slate-50 border border-slate-100 flex flex-col justify-between"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <st.icon className="w-5 h-5 text-blue-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {st.label}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">
                        {st.value}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {st.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
