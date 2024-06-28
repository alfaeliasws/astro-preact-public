import { useEffect } from "react";
import { BigPar, Paragraph, SectionTitle, useFade } from "./Text";

export default function ProfileSection(){

    useFade('fade-1')

    return (
        <div className="flex flex-wrap sm:mb-[80px] mb-[30px]">
            <div className="w-full text-center">
                <BigPar>. . .</BigPar>
                <div className="mb-10"></div>
                <div id="Profile" className="fade-1"><SectionTitle>Profile</SectionTitle></div>
                <div className="w-full fade-1 flex flex-wrap sm:flex-nowrap">
                    <div className="xl:w-5/12 fade-1 sm:w-6/12 w-full text-center xl:pl-[180px] xl:pt-[30px] 2xl:pl-[300px] 2xl:pt-[70px] lg:pl-[170px] lg:pt-[50px] lg:text-left md:pl-[60px] md:pt-[90px] sm:pt-[70px] sm:pl-[60px] pb-12" >
                        <img alt="" src="/Profile.png" className="fade-1 xl:h-[350px] md:h-[300px] sm:h-[280px] h-[300px] mx-auto pt-12" />
                    </div>
                    <div className="2xl:w-5/12 sm:w-6/12 w-full px-12 fade-1 pt-10 sm:mr-10 xl:pt-12 sm:mt-20 lg:pr-[100px] text-left md:ml-10 md:pr-20 sm:ml-5 sm:pr-10 2xl:mr-20 pl-20">
                        <Paragraph>To be generalist is to take a different path from others. It is no easy way. Through up and down and a lot of testing and examining, then we can know who we are. Not to be limited by certain things that we do, but we define ourselves as a long-time learner of various subjects and interest.</Paragraph>
                        <br></br>
                        <br></br>
                        <Paragraph>Many of us are just confused and many of us trying to fit in to this identity-hungry world. Take your step and become a great generalist yourself to do the best what you can contribute to the world.</Paragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}