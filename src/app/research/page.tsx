"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, Brain, Zap, TrendingUp } from "lucide-react"

export default function ResearchPage() {
  const researchProjects = [
    {
      title: "LSTM-based Cryogen Control for Superconducting Accelerators",
      institution: "IUAC, Delhi",
      year: "2023",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      image: "/placeholder.svg?height=300&width=500",
      summary: "Advanced neural network system for precise cryogen level control in particle accelerators",
      description:
        "Developed an LSTM-based neural network for autonomous control of cryogen levels in superconducting accelerators. The system maintains precise temperature control critical for accelerator operations with minimal human intervention.",
      achievements: [
        "±1% error margin maintained over extended periods",
        "Successfully deployed for accelerator operations at IUAC Delhi",
        "Reduced manual intervention by 85%",
        "Real-time monitoring and predictive maintenance capabilities",
        "Improved operational efficiency and safety protocols",
      ],
      technologies: ["LSTM", "TensorFlow", "Python", "Real-time Systems", "Control Theory"],
      metrics: {
        accuracy: "±1% error",
        deployment: "Production",
        efficiency: "85% automation",
        impact: "Critical operations",
      },
      status: "Deployed",
      publications: [],
    },
    {
      title: "Emotion Detection via EEG Brainwaves",
      institution: "Research Publication",
      year: "2022",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      image: "/placeholder.svg?height=300&width=500",
      summary: "High-accuracy emotion recognition using EEG signals and advanced RNN architecture",
      description:
        "Developed a sophisticated RNN model with GRU architecture for emotion recognition using EEG brainwave data. The research achieved state-of-the-art accuracy in emotion classification and was presented at an international conference.",
      achievements: [
        "97.34% emotion recognition accuracy achieved",
        "Novel GRU-based architecture for EEG signal processing",
        "Real-time emotion classification capabilities",
        "Comprehensive dataset analysis and preprocessing pipeline",
        "Published findings at international conference",
      ],
      technologies: ["RNN", "GRU", "EEG Processing", "Signal Processing", "PyTorch", "NumPy"],
      metrics: {
        accuracy: "97.34%",
        model: "RNN + GRU",
        dataset: "EEG signals",
        publication: "Conference 2022",
      },
      status: "Published",
      publications: [
        {
          title: "Emotion Detection through EEG Brainwaves using RNN-GRU Architecture",
          venue: "Conference on Sustainable Computing for Multidisciplinary Realities 2022",
          type: "Conference Paper",
        },
      ],
    },
  ]

  const researchInterests = [
    {
      area: "Multimodal AI Systems",
      description: "Exploring the integration of multiple AI modalities for enhanced understanding and interaction",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      area: "Neural Architecture Search",
      description: "Automated discovery of optimal neural network architectures for specific tasks",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      area: "Real-time AI Applications",
      description: "Developing AI systems that can operate in real-time environments with strict latency requirements",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      area: "Human-AI Interaction",
      description: "Designing intuitive interfaces and interaction paradigms between humans and AI systems",
      icon: <Brain className="w-5 h-5" />,
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
            Research &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Publications
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advancing the frontiers of AI and machine learning through innovative research and practical applications
          </p>
        </motion.div>

        {/* Research Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Research Projects</h2>
          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Image Section */}
                    <div className="relative overflow-hidden rounded-l-lg">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white`}
                        >
                          {project.icon}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge
                          className={`${project.status === "Published" ? "bg-green-500" : "bg-blue-500"} text-white`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{project.institution}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                        <p className="text-gray-300 mt-3">{project.summary}</p>
                      </CardHeader>

                      <CardContent className="p-0">
                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                            <div key={metricIndex} className="text-center p-2 bg-gray-700/50 rounded">
                              <div className="text-blue-400 font-semibold text-sm">{value}</div>
                              <div className="text-gray-400 text-xs capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                        {/* Key Achievements */}
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">Key Achievements</h4>
                          <ul className="space-y-1">
                            {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2 text-gray-300 text-xs">
                                <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="text-blue-400 border-blue-400 text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Publications */}
                        {project.publications.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-white font-semibold mb-2 text-sm">Publications</h4>
                            {project.publications.map((pub, pubIndex) => (
                              <div key={pubIndex} className="bg-gray-700/30 p-3 rounded text-xs">
                                <div className="text-white font-medium">{pub.title}</div>
                                <div className="text-gray-400">{pub.venue}</div>
                                <Badge variant="outline" className="text-green-400 border-green-400 mt-1">
                                  {pub.type}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                            <FileText className="w-3 h-3 mr-1" />
                            Read Paper
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-800 text-xs bg-transparent"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchInterests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white flex-shrink-0">
                        {interest.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{interest.area}</h3>
                        <p className="text-gray-300 text-sm">{interest.description}</p>
                      </div>
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
