"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Brain, Code, Server, Zap } from "lucide-react"
import { useState } from "react"

export default function ExperiencePage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const experiences = [
    {
      title: "AI Intern",
      company: "LifesizeAgent.ai",
      period: "2024",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      summary: "Built advanced Voice AI systems with cutting-edge technologies",
      achievements: [
        "Built Voice AI with Nvidia Riva, Eleven Labs, CrewAI, and Ollama",
        "Implemented multi-agent orchestration for complex conversational flows",
        "Achieved 45% faster inference with NeMo + NIM microservices",
        "Deployed containerized AI solutions for scalable voice processing",
      ],
      technologies: ["Nvidia Riva", "Eleven Labs", "CrewAI", "Ollama", "NeMo", "NIM", "Docker"],
    },
    {
      title: "Research Assistant",
      company: "University of North Carolina at Charlotte",
      period: "2024",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      summary: "Leading AI research and mentoring students in modern development practices",
      achievements: [
        "Evaluated 300+ multimodal AI models for research applications",
        "Built robust Python pipelines for data processing and model evaluation",
        "Mentored 25+ students in React, Redux, and CI/CD best practices",
        "Led comprehensive MERN stack workshops for graduate students",
        "Implemented GitHub Actions pipelines for automated testing and deployment",
      ],
      technologies: ["Python", "React", "Redux", "MERN Stack", "GitHub Actions", "CI/CD"],
    },
    {
      title: "Frappe Full-Stack Developer",
      company: "Ideata Analytics Pvt. Ltd",
      period: "June 2023 - October 2023",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      summary: "Developed scalable enterprise solutions serving 1,000+ users",
      achievements: [
        "Built scalable institute management system serving 1,000+ users",
        "Developed livestock registration APIs with real-time data processing",
        "Optimized ERPNext performance by 35% and reduced server load by 25%",
        "Refactored 2,000+ lines of legacy code for better maintainability",
        "Implemented automated testing and deployment pipelines",
      ],
      technologies: ["Frappe", "ERPNext", "Python", "JavaScript", "MySQL", "Redis"],
    },
    {
      title: "Django & ML Intern",
      company: "Techlene Software Solutions",
      period: "January 2023 - April 2023",
      icon: <Brain className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      summary: "Built AI-powered medical diagnosis system with cloud deployment",
      achievements: [
        "Created skin disease classification pipeline using CNNs",
        "Implemented Transfer Learning with Inception V3 and VGG19 models",
        "Deployed ML models on AWS with Django REST framework",
        "Reduced inference time by 40% through model optimization",
        "Built responsive web interface for medical professionals",
      ],
      technologies: ["Django", "PyTorch", "AWS", "CNN", "Transfer Learning", "REST API"],
    },
    {
      title: "Founder & Full-Stack Developer",
      company: "Inflatech Solutions",
      period: "January 2022 - April 2023",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      summary: "Founded and led development of multiple client solutions",
      achievements: [
        "Built restaurant POS system reducing order processing time by 35%",
        "Developed e-commerce platform serving 15K+ monthly users",
        "Created tax ERP system reducing filing errors by 40%",
        "Implemented real-time inventory system improving accuracy by 28%",
        "Delivered 7+ client solutions as technical lead",
        "Managed team of 3 developers and coordinated project deliveries",
      ],
      technologies: ["Django", "React", "PostgreSQL", "Redis", "AWS", "Docker"],
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
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey through innovative projects, cutting-edge technologies, and impactful solutions
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white`}
                      >
                        {exp.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                        <p className="text-blue-400">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.period}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      className="text-gray-400 hover:text-white"
                    >
                      {expandedCard === index ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </div>
                  <p className="text-gray-300 mt-4">{exp.summary}</p>
                </CardHeader>

                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="pt-0">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-blue-400 border-blue-400">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
