import { resumeData } from "@/data/resume";
import type { Metadata } from "next";

export const siteMetadata: Metadata = {
    title: `${resumeData.name} | ${resumeData.role}`,
    description: resumeData.summary,
    keywords: [
        "Senior Software Engineer",
        "Fintech",
        "Payments",
        "Ruby on Rails",
        "Bangalore",
        "Backend Architect",
    ],
    authors: [{ name: resumeData.name }],
    openGraph: {
        type: "website",
        locale: "en_IE",
        url: "https://agnabasil.dev",
        title: `${resumeData.name} | ${resumeData.role}`,
        description: resumeData.summary,
        siteName: resumeData.name,
    },
    twitter: {
        card: "summary_large_image",
        title: `${resumeData.name} | ${resumeData.role}`,
        description: resumeData.summary,
    },
    robots: {
        index: true,
        follow: true,
    },
};
