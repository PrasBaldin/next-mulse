import React from 'react'
import Navbar from '../components/navbar'

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <section className="py-[10rem] bg-gray-100 dark:bg-gray-700 transition duration-500 ease-in-out">
                <div className="container">
                    <div className="text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out">Contact</div>
                </div>
            </section>
        </>
    )
}

export default ContactPage