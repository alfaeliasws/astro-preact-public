import react from 'react';
import { useFade } from "./Text"

export default function ProjectItem({imgSrc, title, href}){
    useFade('fade-1')

    return (

        <div className="fade-1 transition-all sm:w-4/12 lg:mx-5 flex flex-wrap py-10 px-5 hover:pt-4 hover:pb-16 text-center md:mx-1 w-full">
            <a href={href} className="transition w-full rounded-lg mb-5 min-h-[326px] flex justify-center"><img src={imgSrc} alt="" class="object-contain"/></a>
            <a href={href} className="transition w-full text-white lg:tracking-wider font-mono xl:text-2xl font-semibold lg:text-xl md:text-lg md:tracking-tight sm:text-sm hover:opacity-60">{title}</a>
        </div>
    )
}