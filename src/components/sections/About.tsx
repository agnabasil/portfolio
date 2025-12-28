"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function About() {
    return (
        <section id="about" className="py-24 bg-card/30">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold tracking-tighter mb-6">About Me</h2>
                        <div className="w-16 h-1 bg-accent rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                    >
                        <p>
                            I am a <span className="text-foreground font-semibold">Senior Software Engineer</span> with over
                            5 years of experience specializing in the fintech sector. My expertise lies in architecting
                            scalable backend systems that handle real-time financial data with uncompromising security.
                        </p>
                        <p>
                            Throughout my career, I have led squads to build critical infrastructure including
                            <span className="text-foreground font-medium"> UPI/QR payment systems</span>, payroll
                            automation, and secure card management platforms. I thrive in environments that require
                            high ownership, reliability, and technical excellence.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
                            {[
                                { label: "Experience", value: "5+ Years", color: "text-blue-500" },
                                { label: "Domain", value: "Fintech", color: "text-emerald-500" },
                                { label: "Location", value: "Bangalore", color: "text-orange-500" },
                                { label: "Expertise", value: "Scalability", color: "text-purple-500" },
                            ].map((stat) => (
                                <div key={stat.label} className="flex flex-col gap-1">
                                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                                        {stat.label}
                                    </span>
                                    <span className={cn("text-2xl font-black tracking-tight", stat.color)}>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
