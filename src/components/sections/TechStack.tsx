"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Code2, CreditCard, HardDrive, Layout } from "lucide-react";

export function TechStack() {
    const categories = [
        { title: "Backend", items: resumeData.techStack.backend, icon: Code2 },
        { title: "Payments", items: resumeData.techStack.payments, icon: CreditCard },
        { title: "Infrastructure", items: resumeData.techStack.infra, icon: HardDrive },
        { title: "Frontend", items: resumeData.techStack.frontend, icon: Layout },
    ];

    return (
        <section id="tech" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tighter mb-4">Tech Stack</h2>
                    <p className="text-muted-foreground text-lg">Tools and technologies I use to build robust systems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-8 flex flex-col gap-6 group hover:border-blue-500/30"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <cat.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight">{cat.title}</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {cat.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
