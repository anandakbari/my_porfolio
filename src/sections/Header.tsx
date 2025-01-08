
'use client';
import {useEffect, useState} from "react";

export const Header = () => {
  // return (
  //     <div className={'flex items-center justify-center fixed top-3 w-full z-10'}>
  //       <nav className={'flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'}>
  //         <a href={'#hero'} className={'nav-item'}>Home</a>
  //         <a href={'#project'} className={'nav-item'}>Projects</a>
  //         <a href={'#about'} className={'nav-item'}>About</a>
  //         <a href={'#contact'} className={'nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'}>Contact</a>
  //       </nav>
  //   </div>
  // );
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'project', 'about', 'contact'];
            const viewportHeight = window.innerHeight;

            // Find which section is currently most visible in the viewport
            let maxVisibleSection = null;
            let maxVisibleArea = 0;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();

                    // Calculate how much of the section is visible
                    const visibleTop = Math.max(0, rect.top);
                    const visibleBottom = Math.min(viewportHeight, rect.bottom);
                    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

                    // For the contact section, give it priority when it's even partially visible
                    const isContact = section === 'contact';
                    const visibleArea = isContact ? visibleHeight * 2 : visibleHeight;

                    if (visibleArea > maxVisibleArea) {
                        maxVisibleArea = visibleArea;
                        maxVisibleSection = section;
                    }

                    // Special case: if contact section is more than 30% visible, prioritize it
                    if (isContact && visibleHeight > rect.height * 0.3) {
                        maxVisibleSection = 'contact';
                    }
                }
            });

            if (maxVisibleSection) {
                setActiveSection(maxVisibleSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Add resize listener to handle viewport changes
        window.addEventListener('resize', handleScroll);
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const getNavItemClass = (section:string) => {
        const baseClass = 'px-4 py-1.5 rounded-full transition-colors duration-200';
        return activeSection === section
            ? `${baseClass} bg-white text-gray-900 hover:bg-white/90`
            : `${baseClass} text-white hover:bg-white/10`;
    };

    return (
        <div className="flex items-center justify-center fixed top-3 w-full z-10">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <a
                    href="#hero"
                    className={getNavItemClass('hero')}
                    onClick={() => setActiveSection('hero')}
                >
                    Home
                </a>
                <a
                    href="#project"
                    className={getNavItemClass('project')}
                    onClick={() => setActiveSection('project')}
                >
                    Projects
                </a>
                <a
                    href="#about"
                    className={getNavItemClass('about')}
                    onClick={() => setActiveSection('about')}
                >
                    About
                </a>
                <a
                    href="#contact"
                    className={getNavItemClass('contact')}
                    onClick={() => setActiveSection('contact')}
                >
                    Contact
                </a>
            </nav>
        </div>
    );
};


