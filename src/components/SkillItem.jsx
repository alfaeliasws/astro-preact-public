import react from 'react'
import { Paragraph, SubTitle, useFade } from "./Text";
import classNames from "classnames"

export default function SkillItem({imgSrc, name, level, className}){

    useFade('check')

    return (
        <div className="flex rounded-lg shadow-skill mt-10 bg-main-200 py-6 mr-4 check">
            <div className="sm:ml-4 sm:w-2/12">
                <img src={imgSrc} alt="" className={classNames("rounded-full lg:h-[60px] md:h-[40px] md:pt-2 sm:pt-3 mr-3",className)}></img>
            </div>
            <div className="w-9/12 flex flex-wrap mt-3 ml-2 md:ml-4">
                <h4 className="w-full text-left text-white tracking-wider font-mono lg:text-xl font-semibold md:text-lg md:tracking-wide sm:text-sm text-lg">
                    {name}
                </h4>
                <div className="w-full text-left text-white text-opacity-20 tracking-widest lg:text-md md:text-sm sm:text-xs text-sm">{level}</div>
            </div>
        </div>
    )
}