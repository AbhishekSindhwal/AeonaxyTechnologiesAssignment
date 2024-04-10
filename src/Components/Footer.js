import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className=" text-slate-950 py-8 mt-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                {/* Left Section */}
                <div className="w-full md:w-1/3 pb-11">
                    <a className="text-3xl block text-blue-800 font-bold  w-11 mt-10">Easy </a>
                    <a className="text-3xl text-blue-500 font-bold  mb-10 w-11 mt-10">Ahead</a>
                    <p className='w-50 mt-8 mb-10 mr-10'>We Take the  work out of connecting  with others so you can accompolish
                        more.</p>

                    <div className="relative mt-4">
                        <select className="border border-slate-500 rounded-md px-4 py-2 w-30 md:w-50 lg:w-80">
                            <option>English</option>
                            <option>Spanish</option>
                            {/* Add more language options here */}
                        </select>
                    </div>
                    <div className='mt-8 flex justify-'>
                        <FontAwesomeIcon className='mr-4' icon={faTwitter} />
                        <FontAwesomeIcon className='mr-4' icon={faFacebook} />
                        <FontAwesomeIcon className='mr-4' icon={faInstagram} />
                        <FontAwesomeIcon className='mr-4' icon={faLinkedin} />
                        <FontAwesomeIcon className='mr-4' icon={faYoutube} />
                    </div>
                </div>
                {/* Right Section */}
                <div className="w-full md:w-2/3 ml-5">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='mb-4 text-2xl font-bold text-slate-800'>About</h1>
                            <a className='mt-4' href='#'>About Calendly</a>
                            <a className='mt-4' href='#'>Contact Sales</a>
                            <a className='mt-4' href='#'>Newsroom</a>
                            <a className='mt-4' href='#'>Careers</a>
                            <a className='mt-4' href='#'>Security</a>
                        </div>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='mb-4 text-2xl font-bold text-slate-800'>Solutions</h1>
                            <a className='mt-4' href='#'>Customer Success</a>
                            <a className='mt-4' href='#'>Sales</a>
                            <a className='mt-4' href='#'>Recruiting</a>
                            <a className='mt-4' href='#'>Information Technology</a>
                            <a className='mt-4' href='#'>Marketing</a>
                        </div>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='mb-4 text-2xl font-bold text-slate-800'>Popular Features</h1>
                            <a className='mt-4' href='#'>Embed Calendly</a>
                            <a className='mt-4' href='#'>Availability</a>
                            <a className='mt-4' href='#'>Sending Nortification</a>
                            <a className='mt-4' href='#'>Using Calendly Mobile</a>
                        </div>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='mb-4 text-2xl font-bold text-slate-800 mt-4'>Support</h1>
                            <a className='mt-4' href='#'>Help Center</a>
                            <a className='mt-4' href='#'>Video Tutorials</a>
                            <a className='mt-4' href='#'>Cookie Settings</a>
                        </div>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='mb-4 text-2xl font-bold text-slate-800 mt-4'>Add-Ons</h1>
                            <a className='mt-4' href='#'>Download for Chrome</a>
                            <a className='mt-4' href='#'>Download for Firefox</a>
                        </div>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='mb-4 text-2xl font-bold text-slate-800 mt-4'>Developers</h1>
                            <a className='mt-4' href='#'>Developers Tools</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-4 flex justify-between text-slate-400'>
                <h6 >Copyright Calendly 2022</h6>
                <h6>Privacy/Terms and Conditions</h6>
            </div>
        </footer>
    );
}
export default Footer;


