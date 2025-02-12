import React from 'react';

export default function Contact() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 text-gray-900 px-6 py-12">
            <div className="max-w-5xl w-full bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
                    <span className='text-green-500'>Get in</span> Touch
                </h1>
                <p className="text-lg text-gray-600 text-center mb-8">
                    We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                                <p className="text-lg font-semibold">1234 Elm Street</p>
                                <p className="text-gray-600">Gotham City, USA</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <p className="text-lg font-semibold">+1 555 123 4567</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-lg font-semibold">support@gotham.com</p>
                        </div>
                    </div>
                    
                    <form className="space-y-6">
                        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:border-green-500 focus:outline-none" />
                        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:border-green-500 focus:outline-none" />
                        <input type="tel" placeholder="Your Phone Number" className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:border-green-500 focus:outline-none" />
                        <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:border-green-500 focus:outline-none"></textarea>
                        <button type="submit" className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
