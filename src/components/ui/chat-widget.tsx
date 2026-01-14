"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Phone, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the Rain Roofing assistant. How can I help you today? Feel free to ask about our roofing services, get a free inspection, or learn about storm damage repairs.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize, but I'm having trouble connecting right now. Please call us directly at 806-808-1317 for immediate assistance.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 backdrop-blur-xl border border-white/20 ${
          isOpen
            ? "bg-white/20 hover:bg-white/30 rotate-90"
            : "bg-white/10 hover:bg-white/20 hover:scale-110"
        }`}
        style={{
          boxShadow: isOpen
            ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.2)"
            : "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)"
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-7 w-7 text-white drop-shadow-lg" />
        ) : (
          <MessageCircle className="h-7 w-7 text-white drop-shadow-lg" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-2xl border border-white/10 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(135deg, rgba(41,41,41,0.95) 0%, rgba(50,50,50,0.95) 100%)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)"
        }}
      >
        {/* Header */}
        <div className="p-4 border-b border-white/10" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Rain Roofing Assistant</h3>
              <p className="text-white/60 text-sm">We typically reply instantly</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-[#242424]/50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-white text-[#171717] rounded-br-md"
                    : "bg-white/10 backdrop-blur-sm text-white/90 border border-white/10 rounded-bl-md"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 backdrop-blur-sm text-white/90 border border-white/10 rounded-2xl rounded-bl-md px-4 py-3">
                <Loader2 className="h-5 w-5 animate-spin text-white" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-2 border-t border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
          <a
            href="tel:806-808-1317"
            className="flex items-center justify-center gap-2 w-full py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
          >
            <Phone className="h-4 w-4" />
            Call 806-808-1317 for Immediate Help
          </a>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 rounded-full px-4"
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-white hover:bg-white/90 text-[#171717] rounded-full w-10 h-10 p-0 flex items-center justify-center"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
