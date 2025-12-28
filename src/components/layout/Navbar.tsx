"use client";

import { resumeData } from "@/data/resume";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-border py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tighter">
                    {resumeData.name.split(" ")[0]}
                    <span className="text-accent">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href={resumeData.contact.resumeLink}
                        className="px-4 py-2 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/90 transition-colors"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-4 px-6 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href={resumeData.contact.resumeLink}
                        className="w-fit px-6 py-3 bg-foreground text-background font-semibold rounded-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Download Resume
                    </a>
                </div>
            )}
        </nav>
    );
}
