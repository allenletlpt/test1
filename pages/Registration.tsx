import React, { useState } from 'react';
import { TicketType } from '../types';
import { CheckCircleIcon } from '../components/Icons';

const Registration: React.FC = () => {
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!selectedTicket) return;
    setIsSubmitting(true);
    // Simulate API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo(0,0);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4">
         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
           <CheckCircleIcon className="w-10 h-10 text-green-600" />
         </div>
         <h2 className="text-3xl font-bold text-slate-900 mb-4">報名成功！</h2>
         <p className="text-slate-600 mb-8 text-center max-w-md">
           您的入場 QR Code 已寄送至您的電子信箱。請於活動當日出示入場。
         </p>
         <button onClick={() => window.location.hash = '/'} className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
           回首頁
         </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-5xl mb-4">立即報名 Registration</h1>
          <p className="text-lg text-slate-600">Choose your pass for FutureTech 2024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Student Pass */}
          <div 
            onClick={() => setSelectedTicket(TicketType.STUDENT)}
            className={`relative p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 ${
              selectedTicket === TicketType.STUDENT 
              ? 'border-blue-600 bg-blue-50 shadow-xl transform scale-105 z-10' 
              : 'border-white bg-white hover:border-blue-300 hover:shadow-lg'
            }`}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">Student Pass</h3>
            <div className="text-4xl font-bold text-slate-900 mb-6">NT$ 1,500</div>
            <ul className="space-y-3 mb-8 text-slate-600 text-sm">
              <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" /> Full Access to Keynotes</li>
              <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" /> Digital Proceedings</li>
              <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" /> Student Lunch Box</li>
            </ul>
          </div>

          {/* Professional Pass */}
          <div 
            onClick={() => setSelectedTicket(TicketType.PROFESSIONAL)}
            className={`relative p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 ${
              selectedTicket === TicketType.PROFESSIONAL 
              ? 'border-blue-600 bg-blue-50 shadow-xl transform scale-105 z-10' 
              : 'border-white bg-white hover:border-blue-300 hover:shadow-lg'
            }`}
          >
             {selectedTicket === TicketType.PROFESSIONAL && (
              <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                Selected
              </div>
            )}
            <h3 className="text-xl font-bold text-slate-900 mb-2">Professional</h3>
            <div className="text-4xl font-bold text-slate-900 mb-6">NT$ 4,800</div>
            <ul className="space-y-3 mb-8 text-slate-600 text-sm">
              <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" /> All Sessions & Workshops</li>
              <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" /> Networking Gala Dinner</li>
              <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" /> Conference Swag Kit</li>
            </ul>
          </div>

          {/* VIP Pass */}
          <div 
            onClick={() => setSelectedTicket(TicketType.VIP)}
            className={`relative p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 ${
              selectedTicket === TicketType.VIP 
              ? 'border-purple-600 bg-purple-50 shadow-xl transform scale-105 z-10' 
              : 'border-white bg-white hover:border-purple-300 hover:shadow-lg'
            }`}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">VIP Access</h3>
            <div className="text-4xl font-bold text-slate-900 mb-6">NT$ 8,800</div>
            <ul className="space-y-3 mb-8 text-slate-600 text-sm">
              <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-purple-500" /> All Professional Perks</li>
              <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-purple-500" /> Speaker Lounge Access</li>
              <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 mr-2 text-purple-500" /> Private Mentoring Session</li>
            </ul>
          </div>
        </div>

        {selectedTicket && (
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6">Complete Registration</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                   <input type="text" required className="w-full border-slate-300 rounded-xl px-4 py-3 border focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Wang Xiao-Ming" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Company / University</label>
                   <input type="text" required className="w-full border-slate-300 rounded-xl px-4 py-3 border focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="National Taiwan University" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                   <input type="email" required className="w-full border-slate-300 rounded-xl px-4 py-3 border focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="example@email.com" />
                </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Dietary Restrictions</label>
                   <input type="text" className="w-full border-slate-300 rounded-xl px-4 py-3 border focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Vegetarian, Halal, etc." />
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-lg hover:shadow-blue-500/30"
                >
                  {isSubmitting ? 'Processing...' : `Pay NT$ ${selectedTicket === TicketType.STUDENT ? '1,500' : selectedTicket === TicketType.PROFESSIONAL ? '4,800' : '8,800'}`}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;