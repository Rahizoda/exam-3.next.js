"use client"

import { useState } from 'react';
import { Send, Email, Person, Phone, Message } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">



        {/* Form Content */}
        <div className="p-8 lg:p-12">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Паёми шумо фиристода шуд!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Ба зудӣ ба паёми шумо ҷавоб медиҳем.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Name Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-3 text-lg">
                  <Person className="w-5 h-5 text-blue-600" />
                  Your name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Email Field */}
                <div className="group">
                  <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-3 text-lg">
                    <Email className="w-5 h-5 text-blue-600" />
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-3 text-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                    Your phone number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="+992 ___ __ __ __"
                    />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-3 text-lg">
                  <Message className="w-5 h-5 text-blue-600" />
                  Description
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    placeholder="Your description..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-5 px-8 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-1 active:translate-y-0 disabled:translate-y-0 disabled:cursor-not-allowed group flex items-center justify-center gap-3 text-lg"
                >
                  {isLoading ? (
                    <>
                      <CircularProgress size={24} className="text-white" />
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

       
      </div>
    </div>
  );
}
