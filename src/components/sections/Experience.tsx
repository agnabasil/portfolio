"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-card/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-bold tracking-tighter mb-4">Professional Journey</h2>
                        <p className="text-muted-foreground text-lg italic">Building fintech at scale across diverse platforms.</p>
                    </div>

                    <div className="relative border-l border-border ml-4 md:ml-0">
                        {resumeData.experienceTimeline.map((exp, idx) => (
                            <motion.div
                                key={`${exp.company}-${idx}`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="relative pl-12 pb-16 last:pb-0 group"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-accent border-4 border-background group-hover:scale-125 transition-transform" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-accent font-semibold">
                                            <span>{exp.company}</span>
                                            <span className="text-muted-foreground font-normal">|</span>
                                            <span className="flex items-center gap-1 text-sm font-normal text-muted-foreground">
                                                <MapPin size={14} /> {resumeData.location}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-mono bg-muted/50 px-3 py-1 rounded-lg border border-border w-fit h-fit">
                                        <Calendar size={14} /> {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {exp.description.map((bullet, i) => (
                                        <li key={i} className="text-muted-foreground flex gap-3">
                                            <span className="text-accent mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>

                                <div className="glass-card p-6 border-blue-500/10 bg-blue-500/5 group-hover:border-blue-500/30 transition-all">
                                    <p className="text-sm font-medium leading-relaxed">
                                        <span className="text-blue-500 uppercase text-[10px] padding-[0.2em] font-black block mb-2 tracking-[0.2em]">Impact Summary</span>
                                        {exp.impact}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
