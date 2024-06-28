import react from 'react'
import ContactItem from "./ContactItem"
import Form from "./Form"
import { BigPar, SectionTitle, SectionTitleBlack } from "./Text"

export default function ContactSection(){
    return (
        <div className="bg-main-100 mb-10">
            <div className="text-center mb-20"><BigPar>. . .</BigPar></div>
            <div className="flex lg:mx-[100px] bg-white opacity-90 rounded-2xl 2xl:mx-[200px] md:mx-[70px] sm:mx-[50px] mx-6">
                <div className="lg:mx-20 mb-20 mt-10 w-full md:mx-12 sm:mx-8 mx-8 sm:text-left text-center" id="Contact">
                    <SectionTitleBlack>Contact</SectionTitleBlack>
                    <div className="flex w-full sm:mt-20 mt-10 flex-wrap sm:flex-nowrap">
                        <div className="sm:w-6/12 w-full border-r-4 border-gray-100 flex flex-wrap text-left sm:mb-0 mb-12">
                            <ContactItem imgSrc="/Email.svg" description="Email:" name="alfasdesk@gmail.com" />
                            <ContactItem imgSrc="/Phone.svg" description="Phone:" name="08******810" />
                            <ContactItem imgSrc="/IG.svg" description="Instagram:" name="@alfaelws" />
                        </div>
                        <div >
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}