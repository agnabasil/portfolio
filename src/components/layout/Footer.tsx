import { resumeData } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="border-t border-border py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter mb-4">
                            Let&apos;s build something <span className="text-accent">scalable</span>.
                        </h2>
                        <p className="text-muted-foreground max-w-md">
                            Available for senior engineering roles, architectural consulting, and fintech projects.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a
                            href={`mailto:${resumeData.contact.email}`}
                            className="text-lg font-medium hover:text-accent transition-colors flex items-center gap-3"
                        >
                            <Mail size={20} /> {resumeData.contact.email}
                        </a>
                        <div className="flex gap-6 mt-2">
                            <a
                                href={resumeData.contact.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href={resumeData.contact.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
                    <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
                </div>
            </div>
        </footer>
    );
}
