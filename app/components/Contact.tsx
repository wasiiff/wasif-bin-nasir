"use client";

import React, { useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated Gradient Background (like About) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 top-1/4 -left-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-1/4 -right-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-20">
          <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                Get in touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm currently available for freelance work and full-time
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-cyan-500 transition-colors duration-300">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a
                      href="mailto:wasifbinnasir@gmail.com"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      wasifbinnasir@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-cyan-500 transition-colors duration-300">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <a
                      href="tel:+923476141647"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      +92-3476141647
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-cyan-500 transition-colors duration-300">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-gray-300">
                      Faisalabad, Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
              <p className="text-sm text-gray-500 mb-4">Follow me</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
              <form
                action="https://getform.io/f/adrnnyla"
                method="POST"
                className="space-y-6"
                onSubmit={() => setSubmitted(true)}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:cursor-pointer ${
                    submitted
                      ? "bg-green-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30"
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
