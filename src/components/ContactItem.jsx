import react from 'react'

export default function ContactItem( {imgSrc, name, description }){
    return (
        <div className="flex w-full items-center mb-10 sm:px-0 px-11">
            <div className="lg:ml-10 lg:w-2/12 md:ml-1 sm:ml-3 sm:mr-1 md:w-3/12 sm:w-2/12 w-2/12 text-center">
                <img src={imgSrc} alt=""/>
            </div>
            <div className="sm:w-9/12 w-8/12 flex flex-wrap">
                <div className="w-full tracking-wider lg:text-md">{description}</div>
                <div className="w-full tracking-wider lg:text-xl font-semibold">{name}</div>
            </div>
        </div>
    )
}