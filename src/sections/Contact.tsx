"use client";
import { SectionWrapper } from "@/components/SectionWrapper";

import { Mail, MapPin, Clock, Linkedin, Github, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <SectionWrapper>
      <section id="contact" className="py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto bg-light rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-10 px-2">
            <h2 className="heading text-3xl sm:text-4xl font-bold text-light mb-4">
              Get in Touch
            </h2>
            <p className="text-sub text-md sm:text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-4 p-4 sm:p-5 bg-light rounded-xl">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-light text-lg">Email</h3>
                  <p className="text-sub mt-1 text-sm sm:text-base">
                    roshankandregula07@gmail.com
                  </p>
                  <a
                    href="mailto:roshankandregula07@gmail.com"
                    className="text-primary text-highlight-hover transition-colors text-sm mt-2 inline-block"
                  >
                    Send a message
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 sm:p-5 bg-light rounded-xl">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-light text-lg">Mobile</h3>
                  <p className="text-sub mt-1 text-sm sm:text-base">
                    +91 9550737746
                  </p>
                  <a
                    href="tel:+919550737746"
                    className="text-primary text-highlight-hover transition-colors text-sm mt-2 inline-block"
                  >
                    Call now
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 sm:p-5 bg-light rounded-xl">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-light text-lg">Location</h3>
                  <p className="text-sub mt-1 text-sm sm:text-base">
                    VIT-AP University
                  </p>
                  <p className="text-sub text-sm sm:text-base">
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start sm:justify-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-light mb-3 text-center md:text-left">
                Let's Connect
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto md:mx-0">
                <a
                  href="https://www.linkedin.com/in/roshan-kandregula/"
                  className="flex items-center space-x-3 p-3 bg-light rounded-xl bg-light-hover transition-colors group"
                >
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sub font-medium text-sm sm:text-base">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://github.com/RoshanSai07"
                  className="flex items-center space-x-3 p-3 bg-light rounded-xl bg-light-hover transition-colors group"
                >
                  <div className="bg-gray-200 p-2 rounded-lg group-hover:bg-gray-100 transition-colors">
                    <Github className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-sub font-medium text-sm sm:text-base">
                    GitHub
                  </span>
                </a>
              </div>

              <div className="mt-5 text-center md:text-left">
                <p className="text-sub mb-2 text-sm sm:text-base">
                  Prefer a direct email?
                </p>
                <a
                  href="mailto:roshankandregula07@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg transition-transform duration-300 hover:-translate-y-1 font-medium text-sm sm:text-base"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send an Email
                </a>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mt-3">
                ⏱ Usually responds within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};
