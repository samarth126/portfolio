"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin } from "lucide-react"

export default function AboutPage() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Redux", level: 85 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Django", level: 95 },
        { name: "Flask", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "Node.js", level: 80 },
      ],
    },
    {
      category: "AI/ML",
      items: [
        { name: "PyTorch", level: 90 },
        { name: "Transformers", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "LLMs", level: 85 },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kafka", level: 75 },
        { name: "CI/CD", level: 85 },
      ],
    },
  ]

  const timeline = [
    {
      year: "2024-2025",
      title: "Master's in Computer Science",
      institution: "University of North Carolina at Charlotte",
      description: "4.0 GPA • Research in AI and Multimodal Systems",
      type: "education",
    },
    {
      year: "2024",
      title: "AI Intern",
      institution: "LifesizeAgent.ai",
      description: "Voice AI with Nvidia Riva • 45% faster inference",
      type: "work",
    },
    {
      year: "2024",
      title: "Research Assistant",
      institution: "UNC Charlotte",
      description: "Evaluated 300+ AI models • Mentored 25+ students",
      type: "work",
    },
    {
      year: "2023",
      title: "Frappe Full-Stack Developer",
      institution: "Ideata Analytics",
      description: "1,000+ users • 35% performance improvement",
      type: "work",
    },
    {
      year: "2019-2023",
      title: "Bachelor's in Computer Science",
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      description: "8.07 GPA • Founded Inflatech Solutions",
      type: "education",
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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey from a curious student in India to an AI engineer and full-stack developer at UNC Charlotte
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  My journey began in India, where I earned my Bachelor's degree in Computer Science with an 8.07 GPA.
                  During this time, I founded <strong className="text-blue-400">Inflatech Solutions</strong>, where I
                  developed custom software solutions that served over 15,000 monthly users and reduced operational
                  costs by 35% for clients.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Now pursuing my Master's at <strong className="text-purple-400">UNC Charlotte</strong> with a perfect
                  4.0 GPA, I've evolved into a researcher and innovator at the intersection of AI and full-stack
                  development. My work spans from building voice AI agents with cutting-edge technologies like Nvidia
                  Riva to mentoring 25+ students in modern web development practices.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about creating intelligent systems that don't just showcase technical prowess, but
                  solve real-world problems. Whether it's achieving 97.34% accuracy in emotion detection through EEG
                  signals or building scalable applications that serve thousands of users, I believe in the power of
                  technology to transform lives and businesses.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((category, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-gray-300">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Journey Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-blue-400 border-blue-400">
                          {item.year}
                        </Badge>
                        {item.type === "education" ? (
                          <GraduationCap className="w-4 h-4 text-purple-400" />
                        ) : (
                          <MapPin className="w-4 h-4 text-green-400" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-blue-400 mb-2">{item.institution}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
