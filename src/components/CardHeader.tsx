import StarIcon from "@assets/icons/star.svg";
import React from "react";
import {twMerge} from "tailwind-merge";

export const CardHeader = ({title,description,className}:{title:string;description:string;className?:string})=>{
    return (
        <div className={"flex flex-col p-6 md:py-8 md:px-10"}>
            <div className={twMerge("inline-flex items-center gap-2",className)}>
                <StarIcon className={"size-9 text-emerald-300"}/>
               <h3 className={"font-serif text-3xl"}>{title}</h3>
            </div>
            <p className={"text-sm lg:text-base max-w-xs text-white/60 mt-2"}>{description}</p>
        </div>
    )
}
