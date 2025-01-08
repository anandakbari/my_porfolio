'use client'
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
    {
        "title": "LinkedIn",
        "href": "https://www.linkedin.com/in/anand-akabari/",
    }, {
        "title": "GitHub",
        "href": "https://github.com/anandakbari",
    }, {
        "title": "Instagram",
        "href": "#"
    }, {
        "title": "Codolio",
        "href": "https://codolio.com/profile/u3SkJqTH/card"
    },
];

export const Footer = () => {
    return (
        <footer className={"relative z-10 overflow-x-clip"}>
            <div className={"container"}>
                <div
                    className={"border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8"}>
                    <div className={"text-white/40"}>&copy; 2024. Anand Akbari</div>
                    <nav className={"flex flex-col md:flex-row items-center gap-8"}>
                        {footerLinks.map(link => (
                            <a
                                href={link.href}
                                key={link.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={"inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"}
                                style={{ pointerEvents: "auto" }}
                            >
                                <span className={"font-semibold text-white/80"}>{link.title}</span>
                                <ArrowUpRight className={"size-4 text-white/60"} />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};
