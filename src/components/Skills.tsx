import { motion } from 'motion/react';
import { Layout, Server, Sliders, CheckCircle2 } from 'lucide-react';
import { SkillCategory } from '../types';

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: 'Frontend',
      iconName: 'layout',
      skills: [
        { name: 'React', level: 88 },
         { name: 'Flutter', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 95 },
      ],
    },
    {
      title: 'Backend',
      iconName: 'server',
      skills: [
        { name: 'Django', level: 88 },
        { name: 'Python', level: 82 },
        {name: 'Java Spring Boot', level: 90},
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
       
      ],
    },
    {
      title: 'Tools',
      iconName: 'sliders',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 75 },
        { name: 'Android Studio', level: 60 },
        { name: 'Eclipse', level: 99 },

        { name: 'PyCharm ', level: 99 },
        { name: 'Figma', level: 85 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'layout': return <Layout className="w-5 h-5 text-blue-500" />;
      case 'server': return <Server className="w-5 h-5 text-blue-500" />;
      default: return <Sliders className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/50 z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="skills-header-container">
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-slate-800 tracking-tight mb-4">
            Skills & <span className="text-blue-400 font-bold">Expertise</span>
          </h2>
          <p className="text-slate-500 font-sans font-light text-base sm:text-lg leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
          </p>
        </div>

        {/* Categories Grid (Frontend, Backend, Tools) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="skills-grid">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm shadow-blue-50/20 hover:shadow-md hover:border-slate-200/60 transition-all duration-300 relative overflow-hidden group"
              id={`skills-card-${cat.title.toLowerCase()}`}
            >
              {/* Highlight Gradient Hover Element */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-300 to-cyan-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Card Title Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2.5 rounded-xl bg-blue-50 flex items-center justify-center">
                  {getIcon(cat.iconName)}
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800 tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Progress Bars */}
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-sans text-sm font-medium text-slate-700">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs font-semibold text-blue-500 bg-blue-50/70 px-2 py-0.5 rounded-md">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Slider Background */}
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      {/* Active level bar, animated on element load */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        className="h-full bg-blue-400 rounded-full"
                        style={{
                          backgroundImage: 'linear-gradient(90deg, #60a5fa 0%, #3b82f6 100%)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Technical Badges / Core Concepts */}
        <div className="mt-16 flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto border-t border-slate-150 pt-10" id="other-skills-badges">
          {[
            'Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 
            'Relational & Non-Relational Databases', 'Software Testing (Unit, Integration)',
            'MVC Architecture', 'UI/UX Design Integration'
          ].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-600 hover:border-blue-200 hover:bg-blue-50/20 hover:text-blue-600 transition-colors duration-200"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>{item}</span>
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
