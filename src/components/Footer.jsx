import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Movie App</h2>
          <p>© {new Date().getFullYear()} Movie App. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="https://facebook.com" className="text-white hover:text-gray-400">
            
              <FaFacebook size={24} />
            
          </Link>
          <Link href="https://twitter.com" className="text-white hover:text-gray-400">
            
              <FaTwitter size={24} />
            
          </Link>
          <Link href="https://instagram.com" className="text-white hover:text-gray-400">
          
              <FaInstagram size={24} />
            
          </Link>
        </div>
        <div>
          <p>Contact us: <a href="mailto:support@movieapp.com" className="text-blue-400 hover:underline">support@movieapp.com</a></p>
        </div>
      </div>
    </footer>
  );
};

