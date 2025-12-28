"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tighter mb-4 text-center">Featured Projects</h2>
                    <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto italic">
                        Engineering solutions for global payment infrastructure and scalable web platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {resumeData.projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="glass-card group p-10 flex flex-col justify-between overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <Terminal size={28} />
                                    </div>
                                    <div className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                                        {project.highlight}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2.5 mb-10">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-muted-foreground group-hover:border-blue-500/20 group-hover:text-foreground transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-6 mt-auto">
                                <button className="flex items-center gap-2.5 text-sm font-bold text-foreground group-hover:text-blue-400 transition-colors uppercase tracking-widest">
                                    View Architecture <ExternalLink size={16} />
                                </button>
                            </div>

                            {/* Glowing Orb in background */}
                            <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
