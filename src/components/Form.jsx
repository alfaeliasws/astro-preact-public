
import { useState } from "react";
import { useFade } from "./Text";

export default function Form (){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    useFade('fade-1')

    const submitForm = async (e) => {
        e.preventDefault();
        const res = await fetch('https://alfaeliasastropreact.netlify.app/api/pushtonotion', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                "Access-Control-Allow-Origin": '*'
            },
            body: JSON.stringify({ name, email, subject, message })
        });


        // Success if status code is 201
        if (res.status === 201 || res.status === 200 ) {
            return alert('Thank you for contacting us!');
        } else {
            return alert('Please re-check your inputs.');
        }
    };

    return (
        <form className="fade-1 text-left" onSubmit={submitForm} method="post">
            <div>
                <div className="flex w-full flex-wrap sm:flex-nowrap sm:mx-0 ml-7">
                    <div className="flex sm:w-6/12 w-full sm:mx-7 flex-wrap">
                        <p className="tracking-wider text-lg font-semibold w-full mb-1">Name</p>
                        {/* <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="Name" name="Name" className="bg-white rounded-lg border border-gray-300 py-2 px-3 w-full sm:mr-2 mr-12 sm:mb-0 mb-5"/> */}
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="Name" className="bg-white rounded-lg border border-gray-300 py-2 px-3 w-full sm:mr-2 mr-12 sm:mb-0 mb-5"/>
                    </div>
                    <div className="flex sm:w-6/12 w-full sm:mx-2 flex-wrap">
                        <p className="tracking-wider text-lg font-semibold w-full mb-1">Email</p>
                        {/* <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="Email" name="Email" className="bg-white rounded-lg border border-gray-300 py-2 px-3 w-full sm:mr-5 mr-12"/> */}
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="Email" className="bg-white rounded-lg border border-gray-300 py-2 px-3 w-full sm:mr-5 mr-12"/>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full mt-5">
                    <div className="flex sm:mx-7 flex-wrap ml-7">
                        <p className="tracking-wider text-lg font-semibold w-full mb-1">Subject</p>
                        {/* <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" id="Subject" name="Subject" className="bg-white rounded-lg border border-gray-300 py-2 px-3 w-full sm:mr-0 mr-5"/> */}
                        <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" id="Subject" className="bg-white rounded-lg border border-gray-300 py-2 px-3 w-full sm:mr-0 mr-5"/>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full mt-5">
                    <div className="flex sm:mx-7 flex-wrap ml-7">
                        <p className="tracking-wider text-lg font-semibold w-full mb-1">Message</p>
                        {/* <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="Message" name="Message" className="bg-white rounded-lg border border-gray-300 py-2 px-3 w-full h-40 sm:mr-0 mr-5" /> */}
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="Message" className="bg-white rounded-lg border border-gray-300 py-2 px-3 w-full h-40 sm:mr-0 mr-5" />
                    </div>
                </div>
            </div>
            <div className="text-right mt-4 mr-7">
                <button type="submit" className="transition bg-red-500 hover:opacity-50 text-white py-2 px-10 rounded-lg font-bold">Send</button>
            </div>
        </form>
    )
}