'use client';

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function TopBar() {
    return (
        <div className="bg-[#E6D8BA] text-gray-800 text-xs py-2 px-6 border-b border-[#d4c5a5]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">

                {/* Contact Info */}
                <div className="flex items-center gap-6">
                    <a href="mailto:info@geotapp.com" className="flex items-center gap-2 hover:text-white transition">
                        <MdEmail className="text-geotapp-primary" />
                        <span>info@geotapp.com</span>
                    </a>
                    <a href="tel:+390212345678" className="flex items-center gap-2 hover:text-white transition">
                        <MdPhone className="text-geotapp-primary" />
                        <span>+39 02 123 456 78</span>
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-geotapp-primary transition" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-geotapp-primary transition" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className="hover:text-geotapp-primary transition" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-geotapp-primary transition" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                </div>

            </div>
        </div>
    );
}
