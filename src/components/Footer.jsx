import react from 'react'
import { useFade } from "./Text"

export default function Footer() {
    useFade('fade-1')

    return (
    <div>
        <div className="fade-1 text-center min-h-[50px] bg-main-100">
            <p className="mr-1 tracking-wider md:text-lg sm:text-sm text-white">Designed and Created By:</p>
            <p className="tracking-large md:text-lg sm:text-sm font-semibold text-white mb-5">ALFAELIAS</p>
            <p className="tracking-widest md:text-lg sm:text-sm text-white opacity-20">Technology used in creating this website:</p>
            <p className="tracking-widest md:text-lg sm:text-sm text-white opacity-20 pb-20">Figma(UI Design), Next.js(Web Development Framework), Tailwindcss(Styling Framework) & Notion(Database)</p>
        </div>
    </div>
    )
}