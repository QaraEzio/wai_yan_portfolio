import { motion } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  BookOpen,
  Award,
} from "lucide-react";
import { ExperienceItem } from "../types";

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: "ucsy-bachelor",
      role: "Bachelor of Computer Science (Software Engineering)",
      organization: "University of Computer Studies, Yangon (UCSY)",
      period: "2022 — 2027",
      type: "academic",
      description: [
        "Rigorous 5-year curriculum focusing heavily on core Computer Science subjects and practical Software Engineering.",
        "Coursework: Advanced Software Architecture, Distributed Database Designs, Algorithms & Complexity, Web Technologies, Object-Oriented Systems, and Human-Computer Interaction.",
        "Completed practical lab projects simulating full agile sprint lifecycles and software QA assessments.",
      ],
      current: true,
    },
    // {
    //   id: 'capstone-lead',
    //   role: 'Capstone Project Team Leader',
    //   organization: 'University of Computer Studies, Yangon (UCSY)',
    //   period: '2025 — 2026',
    //   type: 'academic',
    //   description: [
    //     'Designed and constructed a secure Student Resource Sharing Portal as the final-year capstone achievement.',
    //     'Led a team of classmates to define technical systems, design responsive interfaces in React, compile clean RESTful APIs, and configure unified relational schemas.',
    //     'Received high commendation from the academic faculty panel for scalable code organization and software testing coverage.'
    //   ]
    // },
    {
      id: "springboot-learning",
      role: "Java Spring Boot Learner",
      organization: "Self-directed / Academic Study",
      period: "2025 — 2026",
      type: "learning",
      description: [
        "Studied core Java fundamentals including OOP principles, collections, exception handling, and multithreading.",
        "Built backend applications using Spring Boot framework with RESTful API design and MVC architecture.",
        "Practiced database integration using Spring Data JPA with SQL databases for CRUD operations.",
        "Developed small projects to understand dependency injection, authentication, and basic security concepts.",
      ],
    },
    {
  id: 'flutter-learning',
  role: 'Flutter Mobile App Developer Learner',
  organization: 'Self-directed / Academic Study',
  period: '2025 — 2026',
  type: 'learning',
  description: [
    'Studied Dart programming language fundamentals including asynchronous programming, OOP concepts, and null safety.',
    'Built cross-platform mobile applications using Flutter framework with widget-based UI development.',
    'Practiced state management techniques such as Provider and Riverpod for scalable app architecture.',
    'Integrated RESTful APIs and Firebase services for authentication, real-time database, and cloud storage.',
    'Developed UI-focused projects with responsive design principles for Android and iOS platforms.'
  ]
}
  ];

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-slate-50/50 z-10"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div
          className="text-center max-w-2xl mx-auto mb-20"
          id="experience-header"
        >
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-slate-800 tracking-tight mb-4">
            Experience &{" "}
            <span className="text-blue-400 font-bold">Timeline</span>
          </h2>
          <p className="text-slate-500 font-sans font-light text-base sm:text-lg leading-relaxed">
            An overview of my academic achievements, key university leadership
            milestones, and initial professional experience.
          </p>
        </div>

        {/* Timeline Path Structure */}
        <div className="relative max-w-4xl mx-auto" id="experience-timeline">
          {/* Vertical central rod line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200 md:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`flex flex-col md:flex-row relative items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  id={`experience-row-${exp.id}`}
                >
                  {/* Timeline Node Point indicator */}
                  <div
                    className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-white border-2 border-blue-300 shadow-md flex items-center justify-center -translate-x-1/2 z-10"
                    style={{ transform: "translateX(-50%)" }}
                  >
                    {exp.type === "academic" ? (
                      <GraduationCap className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-blue-500" />
                    )}
                  </div>

                  {/* Offset empty column space for desktop center mapping */}
                  <div className="w-full md:w-1/2" />

                  {/* Visual Content Card Container */}
                  <div className="w-full md:w-[45%] pl-14 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 35 : -35 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.55 }}
                      className={`relative bg-white rounded-3xl p-7 border border-slate-150 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                        exp.current
                          ? "border-blue-200/80 ring-2 ring-blue-50/30"
                          : ""
                      }`}
                    >
                      {/* Current tag overlay label */}
                      {exp.current && (
                        <span className="absolute -top-3 right-6 px-3 py-1 bg-blue-100 text-blue-600 font-sans font-bold text-[10px] uppercase tracking-wider rounded-full shadow-sm">
                          Active Course
                        </span>
                      )}

                      {/* Header Date details row */}
                      <div className="flex items-center space-x-2 text-slate-400 font-mono text-xs mb-3">
                        <Calendar className="w-4 h-4 text-slate-300" />
                        <span>{exp.period}</span>
                        <span className="text-slate-200">|</span>
                        <span className="uppercase font-semibold tracking-wide text-blue-400">
                          {exp.type}
                        </span>
                      </div>

                      {/* Role & Org */}
                      <h3 className="font-display font-bold text-lg text-slate-800 leading-snug">
                        {exp.role}
                      </h3>
                      <h4 className="font-sans font-medium text-blue-500 text-sm mb-4 mt-0.5">
                        {exp.organization}
                      </h4>

                      {/* Bullets list */}
                      <ul className="space-y-2 text-slate-500 font-sans text-sm font-light leading-relaxed">
                        {exp.description.map((bullet, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-blue-300 font-bold select-none">
                              •
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Interactive Visual connectors for desktop view */}
                      <div
                        className={`absolute top-10 w-4 h-4 bg-white border-b border-r border-slate-150 rotate-45 hidden md:block ${
                          isEven
                            ? "-left-2 border-t-0 border-r-0 border-l border-b"
                            : "-right-2 border-b-0 border-l-0 border-r border-t"
                        }`}
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Honours Footer note */}
        <div
          className="mt-20 text-center max-w-xl mx-auto p-6 bg-blue-50/30 border border-blue-100/50 rounded-2xl flex items-center space-x-4"
          id="academic-honours-callout"
        >
          <Award className="w-10 h-10 text-amber-500 flex-shrink-0" />
          <div className="text-left">
            <h4 className="font-display font-semibold text-slate-800 text-sm">
              UCSY Academic Distinction
            </h4>
            <p className="text-xs text-slate-500 font-sans leading-relaxed mt-0.5 font-light">
              Maintained high academic performance, placing in top echelon ranks
              for Software Engineering project showcases and participating as a
              campus resource mentor for junior cohorts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
