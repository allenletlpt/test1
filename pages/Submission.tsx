import React, { useState } from 'react';
import { refineAbstract } from '../services/geminiService';
import { SparklesIcon, CheckCircleIcon } from '../components/Icons';

const Submission: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    topic: 'ai',
    abstract: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // AI Feature States
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  const [isRefining, setIsRefining] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRefineAbstract = async () => {
    if (!formData.abstract || formData.abstract.length < 20) {
      alert("請輸入至少 20 字的摘要內容以利 AI 分析。");
      return;
    }
    
    setIsRefining(true);
    try {
      const suggestion = await refineAbstract(formData.abstract);
      setAiSuggestion(suggestion);
    } catch (error) {
      alert("AI 服務暫時無法使用，請稍後再試。");
    } finally {
      setIsRefining(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-lg text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900">投稿成功！</h2>
          <p className="mt-2 text-sm text-slate-600">
            感謝您的投稿。評審結果將於 2024 年 9 月 15 日前寄送至您的電子信箱： <span className="font-medium text-slate-900">{formData.email}</span>
          </p>
          <div className="mt-6">
            <button
              onClick={() => window.location.hash = '/'}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              返回首頁
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">論文投稿 Call for Papers</h1>
          <p className="mt-4 text-lg text-slate-600">
            分享您的研究成果。被選中的論文將收錄於 IEEE Xplore。
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow sm:rounded-3xl sm:px-10 border border-slate-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">姓名 Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-slate-300 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">電子信箱 Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-slate-300 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-slate-700">投稿主題 Topic</label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-slate-300 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
              >
                <option value="ai">Artificial Intelligence & Deep Learning</option>
                <option value="quantum">Quantum Computing & Cryptography</option>
                <option value="green">Green Energy & Sustainability Tech</option>
                <option value="robotics">Robotics & Automation</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="abstract" className="block text-sm font-medium text-slate-700">論文摘要 Abstract</label>
                <button
                  type="button"
                  onClick={handleRefineAbstract}
                  disabled={isRefining || !formData.abstract}
                  className="inline-flex items-center text-xs font-medium text-purple-600 hover:text-purple-500 disabled:opacity-50"
                >
                  <SparklesIcon className="mr-1 h-3 w-3" />
                  {isRefining ? 'AI 分析中...' : '使用 Gemini AI 潤飾摘要'}
                </button>
              </div>
              <textarea
                id="abstract"
                name="abstract"
                rows={8}
                required
                value={formData.abstract}
                onChange={handleInputChange}
                className="block w-full border border-slate-300 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="請輸入 200-500 字的論文摘要..."
              />
              
              {/* AI Suggestion Panel */}
              {aiSuggestion && (
                <div className="mt-4 bg-purple-50 border border-purple-100 rounded-xl p-4 animate-fade-in">
                  <h4 className="flex items-center text-sm font-bold text-purple-900 mb-2">
                    <SparklesIcon className="mr-2 h-4 w-4 text-purple-600" />
                    Gemini AI 建議與評語
                  </h4>
                  <div className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                    {aiSuggestion}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    提交中...
                  </span>
                ) : '提交論文 Submit Paper'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Submission;