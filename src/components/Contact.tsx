import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, HelpCircle, Check, Trash2, GraduationCap } from 'lucide-react';
import { ContactMessage } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');

  // Hydrate local sent-box inbox history
  useEffect(() => {
    const saved = localStorage.getItem('waiyan_portfolio_inbox');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error('Error hydrating messages key', e);
      }
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorText('');
  };

  const clearMessagesHistory = () => {
    localStorage.removeItem('waiyan_portfolio_inbox');
    setMessages([]);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic Validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorText('Please complete all form inputs before submitting.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorText('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorText('');

    // Simulate network delay to make the submission feel real
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: crypto.randomUUID(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
      };

      const updatedHistory = [newMessage, ...messages];
      setMessages(updatedHistory);
      localStorage.setItem('waiyan_portfolio_inbox', JSON.stringify(updatedHistory));

      // Reset
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Dismiss auto success toast
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="contact-header">
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-slate-800 tracking-tight mb-4">
            Get In <span className="text-blue-400 font-bold">Touch</span>
          </h2>
          <p className="text-slate-500 font-sans font-light text-base sm:text-lg leading-relaxed">
            Have an exciting software opportunity, system request, or university consultation? Shoot me a message on the line below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start" id="contact-outer-grid">
          
          {/* Left Column: Coordinates & Social Cards */}
          <div className="lg:col-span-5 space-y-6" id="contact-details-col">
            <h3 className="font-display font-bold text-2xl text-slate-800 tracking-tight mb-4">
              Developer Credentials
            </h3>
            <p className="text-slate-500 font-sans text-sm font-light leading-relaxed mb-8">
              Feel free to reach out directly through traditional communication streams, or scan my interactive social hubs listed here.
            </p>

            {/* Address Widget list */}
            <div className="space-y-4" id="address-widgets">
              
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-500 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Channels</h4>
                  <a
                    href="mailto:waiyanxtet04@gmail.com"
                    className="text-slate-700 font-medium hover:text-blue-500 transition-colors text-base break-all"
                  >
                    waiyanxtet04@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-500 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Coordinates</h4>
                  <p className="text-slate-750 font-medium text-base">
                    Yangon, Myanmar
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-500 flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Academic Office</h4>
                  <p className="text-slate-750 font-medium text-base">
                    University of Computer Studies, Yangon (UCSY)
                  </p>
                </div>
              </div>

            </div>

            {/* Custom Social Channels Block (From Designs) */}
            <div className="pt-6 border-t border-slate-100" id="social-accounts-box">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Digital Hubs</h4>
              <div className="grid grid-cols-2 gap-4">
                
                <a
                  href="https://github.com/waiyanhtet"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-2xl text-slate-700 transition-all duration-200 hover:shadow-sm"
                  id="contact-github-card"
                >
                  <Github className="w-5 h-5 text-slate-600" />
                  <span className="font-sans font-medium text-sm">GitHub Core</span>
                </a>

                <a
                  href="https://linkedin.com/in/waiyanhtet"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-2xl text-slate-700 transition-all duration-200 hover:shadow-sm"
                  id="contact-linkedin-card"
                >
                  <Linkedin className="w-5 h-5 text-blue-500" />
                  <span className="font-sans font-medium text-sm">LinkedIn Dev</span>
                </a>

              </div>
            </div>

          </div>

          {/* Right Column: Active Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-150 p-8 shadow-sm" id="contact-form-col">
            <h3 className="font-display font-medium text-2xl text-slate-800 tracking-tight mb-6">
              Send a Secure Message
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-5" id="contact-entry-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="form-name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name *</label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Wai Yan"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-450 focus:ring-1 focus:ring-blue-400 outline-none transition-all text-sm font-light text-slate-700"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="form-email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Email *</label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="waiyan@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-450 focus:ring-1 focus:ring-blue-400 outline-none transition-all text-sm font-light text-slate-700"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="form-subject" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject Title *</label>
                <input
                  type="text"
                  id="form-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Software engineering cooperation request"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-450 focus:ring-1 focus:ring-blue-400 outline-none transition-all text-sm font-light text-slate-700"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="form-message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message Content *</label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hello Wai Yan, I saw your software engineering portfolio and would like to talk about..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-450 focus:ring-1 focus:ring-blue-400 outline-none transition-all text-sm font-light text-slate-700 resize-none"
                  required
                ></textarea>
              </div>

              {/* Status Display notifications */}
              {errorText && (
                <div className="text-xs text-red-500 font-medium bg-red-50 p-3.5 rounded-xl border border-red-100 flex items-center space-x-1" id="form-error-display">
                  <span>⚠️ {errorText}</span>
                </div>
              )}

              {submitSuccess && (
                <div className="text-sm text-emerald-600 font-medium bg-emerald-50 p-4 rounded-xl border border-emerald-100 flex items-center space-x-2 animate-fadeIn" id="form-success-display">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>Success! Your mock message was saved and indexed below.</span>
                </div>
              )}

              {/* Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-450 hover:bg-blue-500 text-white font-medium rounded-xl shadow-md transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                style={{ backgroundColor: '#74b3e2' }}
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Processing Sandbox...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Form Inbox Persistance History display */}
            {/* {messages.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-150" id="sent-box-history">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-1">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Active Sent Messages Log ({messages.length})</span>
                  </h4>
                  <button
                    onClick={clearMessagesHistory}
                    className="text-xs font-semibold text-rose-400 hover:text-rose-500 flex items-center space-x-1 cursor-pointer hover:bg-rose-50 px-2 py-1 rounded"
                    title="Clear history from localStorage"
                    id="clear-logs-btn"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear Logs</span>
                  </button>
                </div>

                <div className="space-y-3 max-h-48 overflow-y-auto pr-1" id="message-logs-scroller">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-150 text-xs font-sans text-slate-600 flex flex-col space-y-1 relative"
                    >
                      <div className="flex justify-between items-center pr-12">
                        <span className="font-bold text-slate-800">{msg.name}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{msg.timestamp}</span>
                      </div>
                      <div className="text-[11px] font-medium text-blue-500">{msg.subject}</div>
                      <div className="text-slate-550 mt-1 italic font-light">"{msg.message}"</div>
                      
                      <span className="absolute top-3.5 right-4 text-[9px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 flex items-center space-x-0.5 font-bold">
                        <Check className="w-2.5 h-2.5" />
                        <span>Saved</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )} */}

          </div>

        </div>
      </div>
    </section>
  );
}
