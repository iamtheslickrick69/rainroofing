"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#1c1c1c] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#737373] font-semibold uppercase tracking-wider text-sm mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            Contact us for a free estimate. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted ? (
              <div className="bg-[#10b981]/10 border border-[#10b981] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[#a3a3a3]">
                  Thank you for contacting Rain Roofing. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-[#292929] border-white/10 text-white placeholder:text-[#737373] focus:border-white/30"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="bg-[#292929] border-white/10 text-white placeholder:text-[#737373] focus:border-white/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-white mb-2">
                      Phone *
                    </label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="(806) 555-1234"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="bg-[#292929] border-white/10 text-white placeholder:text-[#737373] focus:border-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-white mb-2">
                    How Can We Help? *
                  </label>
                  <Textarea
                    id="contact-message"
                    required
                    placeholder="Tell us about your roofing needs..."
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="bg-[#292929] border-white/10 text-white placeholder:text-[#737373] focus:border-white/30 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white hover:bg-white/90 text-[#171717] font-semibold py-6"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Phone */}
            <div className="flex items-start gap-4 p-5 bg-[#292929] rounded-xl border border-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Call Us</h3>
                <p className="text-[#737373] text-sm mb-2">Available 24/7 for emergencies</p>
                <a href="tel:806-808-1317" className="text-white font-semibold hover:text-white/80 transition-colors">
                  806-808-1317
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 bg-[#292929] rounded-xl border border-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email Us</h3>
                <p className="text-[#737373] text-sm mb-2">We respond within 24 hours</p>
                <a href="mailto:gavin@rainroofingpros.com" className="text-white font-semibold hover:text-white/80 transition-colors">
                  gavin@rainroofingpros.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-[#292929] rounded-xl border border-white/5">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                <p className="text-[#a3a3a3]">
                  5716 40th St<br />
                  Lubbock, TX 79407
                </p>
              </div>
            </div>

            {/* Service Area */}
            <div className="p-5 bg-[#292929] rounded-xl border border-white/5 text-center">
              <p className="text-white font-semibold mb-1">Serving All of West Texas</p>
              <p className="text-[#737373] text-sm">
                Lubbock • Amarillo • Midland • Odessa • Abilene
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
