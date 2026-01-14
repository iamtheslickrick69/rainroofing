"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
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
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1a1a1a] via-[#262626] to-[#1a1a1a] relative">
        {/* Blue accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2563eb]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#3b82f6] font-semibold uppercase tracking-wider mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-[#a3a3a3] max-w-2xl mx-auto">
              Ready to get started? Have questions? We're here to help. Reach out to us and we'll respond as quickly as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#171717] mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <Card className="bg-[#10b981]/10 border-[#10b981]">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#171717] mb-2">Message Sent!</h3>
                    <p className="text-[#525252]">
                      Thank you for contacting Rain Roofing Pros. We'll get back to you within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#171717] mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="bg-[#fafafa] border-[#e5e5e5] focus:border-[#2563eb]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#171717] mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="bg-[#fafafa] border-[#e5e5e5] focus:border-[#2563eb]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#171717] mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="(806) 555-1234"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="bg-[#fafafa] border-[#e5e5e5] focus:border-[#2563eb]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#171717] mb-2">
                      How Can We Help? *
                    </label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell us about your roofing needs..."
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="bg-[#fafafa] border-[#e5e5e5] focus:border-[#2563eb]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-6"
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
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#171717] mb-6">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <Card className="bg-[#fafafa] border-0">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#171717] mb-1">Call Us</h3>
                      <p className="text-[#525252] text-sm mb-2">Phone support is open 9am - 5pm</p>
                      <a href="tel:806-808-1317" className="text-[#2563eb] font-semibold hover:underline">
                        806-808-1317
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#fafafa] border-0">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#171717] mb-1">Email Us</h3>
                      <p className="text-[#525252] text-sm mb-2">For general inquiries</p>
                      <a href="mailto:gavin@rainroofingpros.com" className="text-[#2563eb] font-semibold hover:underline">
                        gavin@rainroofingpros.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#fafafa] border-0">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#171717] mb-1">Address</h3>
                      <p className="text-[#525252]">
                        5716 40th St<br />
                        Lubbock, TX 79407
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#fafafa] border-0">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#171717] mb-1">Working Hours</h3>
                      <p className="text-[#525252]">
                        Mon - Sat: 9:00 am - 7:00 pm<br />
                        Sunday: 9:00 am - 2:00 pm
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#1a1a1a] rounded-xl p-8 text-center">
                <h3 className="text-white font-semibold mb-2">Serving All of Lubbock & West Texas</h3>
                <p className="text-[#a3a3a3] text-sm">
                  Based in Lubbock, we proudly serve homeowners throughout West Texas with quality roofing services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
