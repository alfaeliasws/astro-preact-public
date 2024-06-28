import react from 'react';
import NavItem from "./NavItem";
import classNames from "classnames";

export default function Nav({ className }){
    return (
        <ul className={classNames("sm:flex lg:space-x-20 py-20 justify-end md:space-x-11 sm:space-x-7",className)}>
            <NavItem href="#Home">Home</NavItem>
            <NavItem href="#Profile">Profile</NavItem>
            <NavItem href="#Skills">Skills</NavItem>
            <NavItem href="#Projects">Projects</NavItem>
            <NavItem href="#Contact">Contact</NavItem>
        </ul>
    )
}