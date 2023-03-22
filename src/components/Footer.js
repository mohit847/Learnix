import React from 'react';
import app from "../assets/app.png";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cyan-800 text-white py-6">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/4 px-4 mb-8">
          <h4 className="text-xl font-bold mb-4">Company</h4>
          <ul className="list-none">
            <li className="mb-2"><a href="#">About Us</a></li>
            <li className="mb-2"><a href="#">Blog</a></li>
            <li className="mb-2"><a href="#">Careers</a></li>
            <li className="mb-2"><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-8">
          <h4 className="text-xl font-bold mb-4">Support</h4>
          <ul className="list-none">
            <li className="mb-2"><a href="#">Help Center</a></li>
            <li className="mb-2"><a href="#">Safety Center</a></li>
            <li className="mb-2"><a href="#">Community Guidelines</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-8">
          <h4 className="text-xl font-bold mb-4">Legal</h4>
          <ul className="list-none">
            <li className="mb-2"><a href="#">Cookies Policy</a></li>
            <li className="mb-2"><a href="#">Privacy Policy</a></li>
            <li className="mb-2"><a href="#">Terms of Service</a></li>
            <li className="mb-2"><a href="#">Law Enforcement</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 px-4 lg:mt-0 mt-8">
          <h4 className="text-xl font-bold mb-4">Install App</h4>
          <div className="flex ">
            {/* <a href="#">
              <img src="/path/to/google-play-store-logo.png" alt="Google Play Store" className="mr-4" />
            </a>
            <a href="#"> */}
              <img className='w-1/2' src={app} alt="App Store" />
            {/* </a> */}
          </div>
        </div>
      </div>
      <hr className=" border-gray-700" />
      <div className=" mx-auto flex flex-wrap items-center  ">
        <div className="text-center w-full lg:w-1/2 px-4">
          <p className="text-sm text-slate-300 ">@ 2020 Bravaa. All rights reserved.</p>
        </div>
        <div className=" flex gap-4  w-full lg:w-1/2 px-4 lg:text-right ">
        
          <a href="#">
            <i className="fab fa-instagram text-2xl text-white-600 mx-2"><FaInstagram/></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter text-2xl text-white-600 mx-2"><FaTwitter/></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube text-2xl text-white-600 mx-2"><FaYoutube/></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
