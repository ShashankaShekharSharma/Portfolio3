import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <MapPin size={18} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Experience', 'Projects', 'Education', 'Achievements'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <button className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Github size={20} />
              </button>
              <button className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Linkedin size={20} />
              </button>
              <button className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Twitter size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;