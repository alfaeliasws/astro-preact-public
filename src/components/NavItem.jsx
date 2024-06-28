import react from 'react';

export default function NavItem({ href, children }){
    return (
        <li><a href={href} className="transition md:text-lg sm:text-md text-opacity-70 font-semibold hover:opacity-50">{ children }</a></li>
    )
}