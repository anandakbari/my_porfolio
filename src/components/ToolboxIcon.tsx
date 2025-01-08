import React from "react";

export const ToolboxIcon = ({component}:{component:React.ElementType}) => {
    const Component = component;
    return (
        <>
            <Component className="size-10 fill-[url(#toolbox-icon-gradient)]" />
            <svg className={"size-0 absolute"}>
                <linearGradient id={"toolbox-icon-gradient"}>
                    <stop offset={"0%"} stopColor={"rgb(100 231 183)"} />
                    <stop offset={"100%"} stopColor={"rgb(56 189 248)"} />
                </linearGradient>
            </svg>
        </>
    )
}