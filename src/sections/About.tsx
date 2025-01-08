'use client';
import { SectionHeader } from "@/components/SectionHeader";
import React, { useRef } from "react";
import { Card } from "@/components/Card";
import StarIcon from "@assets/icons/star.svg";
import BookImage from "@assets/images/img_1.png";
import Image from "next/image";
import JavascriptIcon from '@assets/icons/square-js.svg';
import GithubIcon from '@assets/icons/github.svg';
import ReactIcon from "@assets/icons/react.svg";
import springIcon from "@assets/icons/Spring_Boot.svg";
import MapImage from "@assets/images/mapp.png";
import smileMemoji from "@assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import dockerIcon from "@assets/icons/docker.svg";
import { motion } from "framer-motion";
import javaIcon from "@assets/icons/java.svg";
import awsIcon from "@assets/icons/aws.svg";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Toolbox and hobbies data...
const toolboxItems = [
    { title: "JavaScript", iconType: JavascriptIcon },
    { title: "React", iconType: ReactIcon },
    { title: "Github", iconType: GithubIcon },
    { title: "SpringBoot", iconType: springIcon },
    { title: "Docker", iconType: dockerIcon },
    { title: "Java", iconType: javaIcon },
    { title: "AWS", iconType: awsIcon },
];

const hobbies = [
    { title: 'Painting', emoji: '🎨', left: '5%', top: '5%' },
    { title: 'Photography', emoji: '📸', left: '50%', top: '5%' },
    { title: 'Hiking', emoji: '🏃‍♂️', left: '35%', top: '40%' },
    { title: 'Gaming', emoji: '🎮', left: '10%', top: '35%' },
    { title: 'Music', emoji: '🎵', left: '70%', top: '35%' },
    { title: 'Fitness', emoji: '🏋️‍♂️', left: '5%', top: '65%' },
    { title: 'Reading', emoji: '📖', left: '40%', top: '70%' },
];

export const AboutSection = () => {
    const constraintRef = useRef(null);

    return (
        <section id={"about"}>
            <div className={"py-20 lg:py-28"}>
                <div className={"container"}>
                    <SectionHeader
                        eyebrow={"About Me"}
                        title={"A Glimpse into my world"}
                        description={"Learn more about who I am, what I do, and what inspires me"}
                    />
                    <div className={"mt-20 flex flex-col gap-8"}>

                        {/* Toolbox Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            whileInView={{ opacity:1 }}
                            // viewport={{ root:constraintRef}}
                            className={"grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3"}
                        >
                            <Card className={"h-[320px] md:col-span-2 lg:col-span-1"}>
                                <CardHeader title={"My Reads"} description={"Explore the books shaping my perspectives"} />
                                <div className={"w-40 mx-auto mt-2 md:mt-0"}>
                                    <Image src={BookImage} alt={"Book Cover"} />
                                </div>
                            </Card>
                            <Card className={"h-[320px] md:col-span-3 lg:col-span-2"}>
                                <CardHeader
                                    title={"My Toolbox"}
                                    description={"Explore the technologies and tools I use to craft exceptional digital experiences"}
                                />
                                <ToolboxItems items={toolboxItems} itemsWrapperClassName={"animate-move-left [animation-duration:30s]"} />
                                <ToolboxItems items={toolboxItems} itemsWrapperClassName={"animate-move-right [animation-duration:15s]"} />
                            </Card>
                        </motion.div>

                        {/* Hobbies Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "0px 0px -50px 0px", root: { constraintRef } }}
                            className={"grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8"}
                        >
                            <Card className={"h-[320px] flex flex-col md:col-span-3 lg:col-span-2"}>
                                <CardHeader
                                    title={"Beyond the Code"}
                                    description={"Explore my interests and hobbies beyond the digital realm"}
                                />
                                <div className={"relative flex-1"} ref={constraintRef}>
                                    {hobbies.map((item) => (
                                        <motion.div
                                            key={item.title}
                                            className={"absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"}
                                            style={{ left: item.left, top: item.top }}
                                            drag
                                            dragConstraints={constraintRef}
                                        >
                                            <span className={"font-medium text-gray-950"}>{item.title}</span>
                                            <span>{item.emoji}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                            <Card className={"h-[320px] p-0 relative md:col-span-2 lg:col-span-1"}>
                                <Image src={MapImage} alt={"map"} className={"h-full w-full object-cover object-left-top"} />
                                <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"}>
                                    <div className={"absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"}></div>
                                    <div className={"absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"}></div>
                                    <Image src={smileMemoji} alt={"smile memoji"} className={"size-20"} />
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
