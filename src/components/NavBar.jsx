import react from "react"
import classNames from "classnames"
import Logo from "./Logo"
import Nav from "./Nav"
import { useState } from "react"

export default function NavBar(){
    const [offCanvas, setOffCanvas] = useState(false)

    return (
        <div className="container">
            <div className="flex items-center sm:ml-9  mx-auto">
                <div className="sm:w-3/12">
                    <Logo />
                </div>
                <div className="w-8/12 sm:flex justify-end hidden">
                    <Nav />
                </div>
                <div className="absolute sm:hidden w-full top-8 right-10 flex justify-end">
                    <img alt="" src="/menu.svg" className="h-[15px]" onClick={() => setOffCanvas(true)}/>
                </div>
            </div>

            <div className={classNames("fixed text-2xl bg-main-200 z-10 top-0 h-full w-full sm:hidden transition-all", offCanvas ? "right-0" : "-right-full")}>
                <img alt="" src="/x.svg" className="absolute top-16 right-10" onClick={() => setOffCanvas(false)} />
                <div onClick={() => setOffCanvas(false)}>
                    <Nav className="flex-col text-white space-y-8 ml-20"/>
                </div>
            </div>
        </div>
    )
}