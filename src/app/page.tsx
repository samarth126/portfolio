"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Download, Play, Award, GraduationCap, Code, Brain } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Master's at UNC Charlotte",
      subtitle: "3.88 GPA • Computer Science",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Hackathon Champion",
      subtitle: "ShellHacks 2024 • Technex 2023",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Research",
      subtitle: "97.34% Accuracy • Published",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Expert",
      subtitle: "7+ Client Solutions • 15K+ Users",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
   
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-50" />

        <div className="relative z-10 text-center max-w-6xl mx-auto mt-8">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-full max-w-2xl mx-auto mb-8">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700">
    <video
      className="w-full h-full rounded-2xl"
      src="/Samarth_Bhole__From_Complex_Problems_to_Elegant_Solutions.mp4"
      autoPlay
      loop
      playsInline
      controls
    />
  </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Samarth Bhole
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300 mb-2">AI Engineer, Full-Stack Developer & Innovator</div>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Crafting intelligent systems and scalable applications that bridge the gap between cutting-edge AI research
            and real-world impact. From voice AI agents to full-stack solutions serving 15K+ users.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                View My Work
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          <a href="/Samarth_Bhole_resume_v2.pdf" download>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 bg-transparent"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </a>
          </motion.div>

          {/* Animated Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {highlight.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400 text-sm">{highlight.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </section>
    </div>
  )
}
