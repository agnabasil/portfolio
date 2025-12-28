import { resumeData } from "@/data/resume";

export function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: resumeData.name,
        jobTitle: resumeData.role,
        url: "https://agnabasil.dev", // Using a descriptive placeholder
        sameAs: [resumeData.contact.linkedin, resumeData.contact.github],
        worksFor: {
            "@type": "Organization",
            name: resumeData.experienceTimeline[0].company,
        },
        description: resumeData.summary,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "India",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
