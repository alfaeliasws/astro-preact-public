import NavBar from "./NavBar"
import SectionTitleHero from "./Text"
import { SubTitleHero } from "./Text"
import { useEffect } from "react"

export default function Hero(){

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

        const checkElements = document.querySelectorAll('.fade-1')
        checkElements.forEach((el) => observer.observe(el))
    })

    return (
    <div className="bg-hero lg:h-[550px] md:h-[400px] sm:h-[300px] h-[300px] fade-1" id="Home">
        <div className="flex flex-wrap">
            <div className="w-full lg:mb-12 md:mb-0 sm:mb-0 mb-12">
                <NavBar />
            </div>
            <div className="w-full flex flex-wrap lg:pl-20 md:pl-12 sm:ml-8 pl-10">
                <div className="w-full md:mb-2 sm:mb-1 md:mt-12">
                    <SectionTitleHero>Welcome!</SectionTitleHero>
                </div>
                <SubTitleHero>You’re coming to a generalist’s webpage</SubTitleHero>
            </div>
        </div>
    </div>
    )
}