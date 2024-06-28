import { useEffect } from "react";
import SkillItem from "./SkillItem";
import { BigPar, SectionTitle, useFade } from "./Text";

export default function SkillsSection(){

    useFade(`check`)
    useFade(`fade-1`)

    return (
        <div className=" bg-main-100 md:mb-[40px] sm:mb-10">
            <div className="w-full">
                <div className="text-center md:mb-[100px] sm:mb-12">
                    <BigPar>. . .</BigPar>
                </div>
                <div className="flex flex-wrap mx-[50px] 2xl:mx-[150px]">
                    <div id="Skills" className="fade-1"><SectionTitle>Skills</SectionTitle></div>
                    <div className="flex w-full flex-wrap sm:flex-nowrap">
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/laravel.svg" name="Laravel" level="Intermediate" ></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/mysql.svg" name="MySQL" level="Intermediate"></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/tailwindcss.svg" name="TailwindCSS" level="Intermediate"></SkillItem>
                        </div>
                    </div>
                    <div className="flex w-full flex-wrap sm:flex-nowrap">
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/php.svg" name="PHP" level="Intermediate"></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/html.svg" name="HTML" level="Intermediate"></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/css.svg" name="CSS" level="Intermediate"></SkillItem>
                        </div>
                    </div>
                    <div className="flex w-full flex-wrap sm:flex-nowrap">
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/Js.png" name="Javascript" level="Intermediate"></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/Python.svg" name="Python" level="Basic"></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/React.svg" name="React" level="Intermediate"></SkillItem>
                        </div>
                    </div>
                    <div className="flex w-full flex-wrap sm:flex-nowrap">
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/Next.svg" name="Next.js" level="Intermediate"></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/AutoHotKey.svg" name="AutoHotKey" level="Basic"></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/Node.svg" name="Node.js" level="Basic"></SkillItem>
                        </div>
                    </div>
                    <div className="flex w-full flex-wrap sm:flex-nowrap">
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/Git.svg" name="Git" level="Intermediate"></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/GitHub.svg" name="Github" level="Basic"></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/Obsidian.svg" name="Obsidian" level="Intermediate"></SkillItem>
                        </div>
                    </div>
                    <div className="flex w-full flex-wrap sm:flex-nowrap">
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/Figma.svg" name="Figma" level="Intermediate"></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/Adobe.svg" name="Adobe Photoshop" level="Intermediate"></SkillItem>
                        </div>
                        <div className="sm:w-4/12 w-full">
                            <SkillItem imgSrc="/Notion.svg" name="Notion" level="Intermediate"></SkillItem>
                        </div>
                    </div>
                    <div className="check mt-3 w-full text-left text-white text-opacity-20 tracking-widest lg:text-xl md:text-sm sm:text-xs">Have been using these technologies at least once: Preact, Astro, Express, MVC in Laravel, REST API in Laravel, Postman, Composer/PHP Artisan, Dataview.js, Bootstrap</div>
                    <div className="check w-full text-left text-white text-opacity-20 tracking-widest lg:text-xl md:text-sm sm:text-xs">Other technologies learned: D3.js, JQuery, Redux, C#/.NET, Knex, Mongodb, Gitpod, SASS </div>
                </div>
            </div>
        </div>
    )
}