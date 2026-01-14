"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Phone, Share2, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

interface BlogPostClientProps {
  post: BlogPost;
  slug: string;
}

export function BlogPostClient({ post, slug }: BlogPostClientProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-24 left-4 sm:left-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-[#2563eb] text-white text-sm font-semibold rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} read
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12"
          >
            {/* Intro */}
            <p className="text-xl text-[#525252] leading-relaxed mb-8 font-medium">
              {post.excerpt}
            </p>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-[#171717] prose-headings:font-bold prose-p:text-[#404040] prose-p:leading-relaxed prose-a:text-[#2563eb] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#171717] prose-li:text-[#404040] prose-ul:my-4 prose-ol:my-4 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </motion.article>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#1a1a1a] rounded-3xl p-8 sm:p-12 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need Help With Your Roof?
            </h3>
            <p className="text-[#a3a3a3] mb-6 max-w-2xl mx-auto">
              Whether you're dealing with storm damage, need an inspection, or
              considering a replacement, our Lubbock experts are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-6 text-lg"
              >
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <a href="tel:806-808-1317" className="inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 806-808-1317
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:underline"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Articles
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
