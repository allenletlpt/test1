import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, MapPinIcon, ChevronRightIcon } from '../components/Icons';
import { Speaker } from '../types';

const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Dr. Emily Chen',
    role: 'Chief AI Scientist',
    company: 'DeepMind Alpha',
    bio: 'Pioneer in ethical AI frameworks and reinforcement learning.',
    imageUrl: 'https://picsum.photos/400/400?random=1'
  },
  {
    id: '2',
    name: 'Prof. Alan Turing II',
    role: 'Director of Quantum Research',
    company: 'MIT Q-Lab',
    bio: 'Leading the charge in practical quantum supremacy applications.',
    imageUrl: 'https://picsum.photos/400/400?random=2'
  },
  {
    id: '3',
    name: 'Sarah Connor',
    role: 'VP of Robotics',
    company: 'Cyberdyne Systems',
    bio: 'Expert in human-robot collaboration and autonomous systems.',
    imageUrl: 'https://picsum.photos/400/400?random=3'
  }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Conference Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400 text-blue-300 text-sm font-semibold mb-6 tracking-wide">
            HYBRID EVENT • TAIPEI
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            FutureTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">2024</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            Bridging the gap between Artificial Intelligence, Quantum Computing, and a Sustainable Future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
             <Link 
              to="/registration" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              立即報名 Register Now
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/submission" 
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-medium rounded-full text-slate-200 bg-slate-800/50 hover:bg-slate-800 md:text-lg backdrop-blur-sm transition-all"
            >
              投稿論文 Call for Papers
            </Link>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-400">
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-blue-400" />
              <span>October 15-16, 2024</span>
            </div>
            <div className="hidden sm:block text-slate-600">|</div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-blue-400" />
              <span>Taipei International Convention Center</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">關於研討會 About</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              FutureTech 2024 匯集了全球最頂尖的技術專家、研究人員與產業領袖。我們將深入探討科技如何重塑未來的商業模式與人類生活。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 font-bold text-2xl">1</div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Artificial Intelligence</h3>
               <p className="text-slate-600">Generative AI, LLMs, and Ethics.</p>
             </div>
             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600 font-bold text-2xl">2</div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Quantum Computing</h3>
               <p className="text-slate-600">Hardware breakthroughs and Algorithms.</p>
             </div>
             <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600 font-bold text-2xl">3</div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Sustainability</h3>
               <p className="text-slate-600">Green Tech and Energy Efficiency.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">專題講者 Speakers</h2>
              <p className="mt-2 text-slate-600">Learn from the industry leaders.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                  <img 
                    src={speaker.imageUrl} 
                    alt={speaker.name} 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{speaker.name}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-2">{speaker.role}, {speaker.company}</p>
                  <p className="text-slate-500 text-sm line-clamp-3">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;