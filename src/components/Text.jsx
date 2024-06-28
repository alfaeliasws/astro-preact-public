import { useEffect } from "react";

export function useFade(classname){
    useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                }
                else {
                    entry.target.classList.remove('show')
                }
            })
        });

        const checkElements = document.querySelectorAll(`.${classname}`)
        checkElements.forEach((el) => observer.observe(el))
    },[])
}

export default function SectionTitleHero({ children }){
    useFade('fade-2')
    return (
        <div className="fade-1 w-full font-mono md:text-big text-black tracking-tight sm:text-2xl text-3xl">{children}</div>
    )
}

export function BigPar({ children }){
    return (
        <div className="w-full font-mono text-4xl font-bold text-white tracking-wide">{children}</div>
    )
}

export function SectionTitle({ children }){
    return (
        <div className="pt-7 w-full font-mono md:text-4xl sm:text-3xl text-2xl text-white font-bold tracking-wide" >{children}</div>
    )
}

export function SectionTitleBlack({ children }){
    return (
        <div className="pt-7 w-full font-mono md:text-4xl sm:text-3xl text-2xl text-black font-bold tracking-wide" >{children}</div>
    )
}

export function SubTitleHero({ children }){
    return (
        <div className="w-full font-sans md:text-2xl text-black tracking-widest sm:text-lg">{children}</div>
    )
}

export function SubTitle({ children }){
    return (
        <div className="w-full font-sans text-xl text-white">{children}</div>
    )
}

export function Paragraph({ children }){
    return (
        <div className="w-full font-sans xl:text-2xl text-white tracking-widest md:text-lg 2xl:text-3xl">{children}</div>
    )
}

