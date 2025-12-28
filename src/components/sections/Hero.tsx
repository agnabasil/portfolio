"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-20 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 font-mono text-xs tracking-widest uppercase mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        {resumeData.role}
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-[0.9] gradient-text">
                        Architecting <br />
                        <span className="text-white/20">Financial</span> Systems.
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
                        I am <span className="text-foreground font-semibold px-2 py-0.5 bg-white/5 rounded-md">{resumeData.name}</span>.
                        Engineering high-performance payment rails and scalable fintech infrastructure for the next billion users.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <a
                            href="#projects"
                            className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl flex items-center gap-3 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300"
                        >
                            View Infrastructure <ArrowRight size={20} />
                        </a>
                        <a
                            href={resumeData.contact.resumeLink}
                            className="px-10 py-5 glass-card font-bold flex items-center gap-3"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Structured tech orbit */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pr-12">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex flex-col gap-6"
                >
                    {[
                        { tag: "Real-time Fund Flows", icon: "01" },
                        { tag: "Microservices Architect", icon: "02" },
                        { tag: "Secure Payment Rails", icon: "03" },
                        { tag: "Scale & Reliability", icon: "04" },
                    ].map((item, i) => (
                        <div
                            key={item.tag}
                            style={{ marginRight: `${i * 1.5}rem` }}
                            className="glass-card px-8 py-5 flex items-center gap-6 group hover:border-blue-500/50"
                        >
                            <span className="text-blue-500/30 font-mono font-black text-xl group-hover:text-blue-500 transition-colors">
                                {item.icon}
                            </span>
                            <span className="text-lg font-bold text-muted-foreground whitespace-nowrap group-hover:text-foreground">
                                {item.tag}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
