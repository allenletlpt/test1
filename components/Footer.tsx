import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">FutureTech 2024</h3>
            <p className="text-sm">
              Connecting minds, creating the future. <br/>
              The premier technology conference in Asia.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm">
              Email: info@futuretech2024.com<br/>
              Phone: +886-2-2345-6789<br/>
              Address: 1 Hsin-Yi Road, Section 5, Taipei
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
               {/* Social placeholders */}
               <span className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">FB</span>
               <span className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">TW</span>
               <span className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">IG</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; 2024 FutureTech Conference. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;