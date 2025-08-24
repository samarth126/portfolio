"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Users, FileText, Star, Target } from "lucide-react"

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Best First-Time Hack",
      event: "ShellHacks 2024",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      description:
        "Developed Med-Memory, a patient management and diagnostics tool using a fine-tuned LLM and real-time data visualization.",
      impact: "92% accuracy in medical data extraction, 60% faster processing",
      category: "Hackathon",
      year: "2024",
    },
    {
      title: "Hackathon Winner",
      event: "Technex 2023",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      description:
        "Led the development of a clothes pattern recognition system that significantly improved user search experiences in e-commerce.",
      impact: "90% recognition accuracy, 45% boost in product discovery",
      category: "Hackathon",
      year: "2023",
    },
    {
      title: "Student Mentor & Workshop Leader",
      event: "UNC Charlotte",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      description:
        "Mentored 25+ students in React, Redux, and CI/CD best practices while leading comprehensive MERN stack workshops.",
      impact: "25+ students mentored, multiple technical workshops conducted",
      category: "Leadership",
      year: "2024",
    },
    {
      title: "Research Publication",
      event: "Conference on Sustainable Computing 2022",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      description: "Published research on emotion detection through EEG brainwaves using RNN-GRU architecture.",
      impact: "97.34% accuracy achieved, presented at international conference",
      category: "Research",
      year: "2022",
    },
  ]

  const stats = [
    {
      number: "4.0",
      label: "GPA at UNC Charlotte",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "300+",
      label: "AI Models Evaluated",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "25+",
      label: "Students Mentored",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "15K+",
      label: "Monthly Users Served",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      number: "7+",
      label: "Client Solutions Delivered",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "97.34%",
      label: "Research Accuracy Achieved",
      icon: <FileText className="w-6 h-6" />,
    },
  ]

  const recognitions = [
    {
      title: "Technical Leadership",
      description: "Led development teams and coordinated project deliveries across multiple client solutions",
      highlights: ["Team management", "Project coordination", "Technical decision making"],
    },
    {
      title: "Innovation in AI",
      description: "Pioneered novel approaches in voice AI, computer vision, and neural network architectures",
      highlights: ["Voice AI systems", "CNN pattern recognition", "LSTM control systems"],
    },
    {
      title: "Academic Excellence",
      description: "Maintained exceptional academic performance while contributing to research and industry projects",
      highlights: ["4.0 GPA", "Research publications", "Conference presentations"],
    },
    {
      title: "Community Impact",
      description: "Actively contributed to the developer community through mentoring and knowledge sharing",
      highlights: ["Student mentoring", "Technical workshops", "Open source contributions"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Recognition
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey of innovation, leadership, and technical excellence across hackathons, research, and industry
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 text-center">
                  <CardContent className="p-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Major Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Major Achievements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white`}
                        >
                          {achievement.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white mb-1">{achievement.title}</CardTitle>
                          <p className="text-blue-400">{achievement.event}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="outline" className="text-purple-400 border-purple-400">
                          {achievement.category}
                        </Badge>
                        <Badge variant="outline" className="text-gray-400 border-gray-400">
                          {achievement.year}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{achievement.description}</p>
                    <div className="bg-gray-700/30 p-3 rounded-lg">
                      <div className="text-sm text-blue-400 font-semibold mb-1">Impact</div>
                      <div className="text-sm text-gray-300">{achievement.impact}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Areas of Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{recognition.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{recognition.description}</p>
                    <div className="space-y-2">
                      {recognition.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-400 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
