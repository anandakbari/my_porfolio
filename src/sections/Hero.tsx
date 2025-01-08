"use client";
import memojiImage from "@assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from '@assets/icons/arrow-down.svg';
import grainImage from '@assets/images/grain.jpg';
import StarIcon from '@assets/icons/star.svg';
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from '@assets/icons/sparkle.svg';
import { motion } from "framer-motion"; // Import Framer Motion

export const HeroSection = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id={"hero"}>
            <div className="py-32 md:py-48 lg:py-60 relative overflow-x-clip">
                {/* Background with Star Orbit */}
                <div
                    className={"absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"}>
                    <div className={'absolute inset-0 -z-30 opacity-5'}
                         style={{
                             backgroundImage: `url(${grainImage.src})`
                         }}></div>
                    <div className={'size-[620px] hero-ring'}></div>
                    <div className={'size-[820px] hero-ring'}></div>
                    <div className={'size-[1020px] hero-ring'}></div>
                    <div className={'size-[1220px] hero-ring'}></div>
                    {/* Keeping StarOrbit as is */}
                    <HeroOrbit size={430} rotation={-14} shouldOrbit={true} orbitDuration={"30s"} spinDuration={"3s"}
                               shouldSpin={true}>
                        <SparkleIcon className={'size-8 text-emerald-300/20'} />
                    </HeroOrbit>
                    <HeroOrbit size={440} rotation={70} shouldOrbit={true} orbitDuration={"32s"} spinDuration={"3s"}
                               shouldSpin={true}>
                        <SparkleIcon className={'size-5 text-emerald-300/20'} />
                    </HeroOrbit>
                    <HeroOrbit size={520} rotation={-41} shouldOrbit={true} orbitDuration={"34s"} spinDuration={"10s"}
                               shouldSpin={true}>
                        <div className={'size-2 rounded-full bg-emerald-300/20'}></div>
                    </HeroOrbit>
                    <HeroOrbit size={530} rotation={178} shouldOrbit={true} orbitDuration={"36s"} spinDuration={"3s"}
                               shouldSpin={true}>
                        <SparkleIcon className={'size-10 text-emerald-300/20'} />
                    </HeroOrbit>
                    <HeroOrbit size={550} rotation={20} shouldOrbit={true} orbitDuration={"38s"} spinDuration={"8s"}
                               shouldSpin={true}>
                        <StarIcon className={'size-12 text-emerald-300'} />
                    </HeroOrbit>
                    <HeroOrbit size={590} rotation={98} shouldOrbit={true} orbitDuration={"40s"} spinDuration={"8s"}
                               shouldSpin={true}>
                        <StarIcon className={'size-8 text-emerald-300'} />
                    </HeroOrbit>
                    <HeroOrbit size={650} rotation={-5} shouldOrbit={true} orbitDuration={"42s"} spinDuration={"10s"}
                               shouldSpin={true}>
                        <div className={'size-3 rounded-full bg-emerald-300/20'}></div>
                    </HeroOrbit>
                    <HeroOrbit size={710} rotation={144} shouldOrbit={true} orbitDuration={"44s"} spinDuration={"3s"}
                               shouldSpin={true}>
                        <SparkleIcon className={'size-14 text-emerald-300/20'} />
                    </HeroOrbit>
                    <HeroOrbit size={720} rotation={85} shouldOrbit={true} orbitDuration={"46s"} spinDuration={"10s"}
                               shouldSpin={true}>
                        <div className={'size-3 rounded-full bg-emerald-300/20'}></div>
                    </HeroOrbit>
                    <HeroOrbit size={800} rotation={-72} shouldOrbit={true} orbitDuration={"48s"} spinDuration={"8s"}
                               shouldSpin={true}>
                        <StarIcon className={'size-28 text-emerald-300'} />
                    </HeroOrbit>
                </div>

                {/* Main Content */}
                <div className={"container relative z-20"}>
                    <div className={"flex flex-col items-center"}>
                        {/* Memoji Image with Framer Motion */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, margin: "0px 0px -50px 0px" }}
                        >
                            <Image src={memojiImage} alt={"person peeking from behind the laptop"}
                                   className={'size-[100px]'} />
                        </motion.div>

                        {/* Availability Badge with Motion */}
                        <motion.div
                            className={"bg-gray-950 border border-gray-800  px-4 py-1.5 inline-flex items-center gap-4 rounded-lg"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "0px 0px -50px 0px" }}
                        >
                            <div className={'bg-green-500 size-2.5 rounded-full relative'}>
                                <div className={"bg-green-500 absolute inset-0 rounded-full animate-ping-large"}></div>
                            </div>
                            <div className={'text-sm font-medium'}> Available for new projects</div>
                        </motion.div>
                    </div>

                    {/* Headline with Motion */}
                    <div className={"max-w-lg mx-auto"}>
                        <motion.h1
                            className={'font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'}
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "0px 0px -50px 0px" }}
                        >
                            Hi, I am Anand Akbari
                        </motion.h1>

                        <motion.p
                            className={'mt-4 text-center text-white/60 md:text-lg'}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "0px 0px -50px 0px" }}
                        >
                            I am a software engineering student who specializes in building web applications and
                            integrating machine learning and AI to enhance the features of these applications.
                        </motion.p>
                    </div>

                    {/* Call-to-action buttons with Motion */}
                    <div className={'flex flex-col md:flex-row justify-center items-center mt-8 gap-4'}>
                        <motion.button
                            onClick={() => scrollToSection('project')}
                            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "0px 0px -50px 0px" }}
                        >
                            <span>Explore my work</span>
                            <ArrowDown className="size-4" />
                        </motion.button>

                        <motion.button
                            onClick={() => scrollToSection('contact')}
                            className={'inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer'}
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, margin: "0px 0px -50px 0px" }}
                        >
                            <span>Contact Me</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};
