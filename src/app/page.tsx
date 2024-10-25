"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code,Trophy, FileText } from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")

  const skills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "ReactJS", level: 85 },
    { name: "Django", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Machine Learning", level: 75 },
  ]

  const experiences = [
    {
      title: "Graduate Teaching Assistant",
      company: "University of North Carolina at Charlotte",
      period: "August 2024 - Present",
      description: "Assisting students in debugging and enhancing their React.js and full-stack projects.",
    },
    {
      title: "Frappe Full-Stack Developer",
      company: "Ideata Analytics Pvt. Ltd",
      period: "June 2023 - October 2023",
      description: "Developed a management system to streamline exam operations, increasing efficiency by 35%.",
    },
    {
      title: "Python Django & ML Intern",
      company: "Techlene Software Solutions",
      period: "January 2023 - April 2023",
      description: "Created a skin disease classification pipeline using CNNs and Transfer Learning on AWS, improving accuracy by 25%.",
    },
    {
      title: "Founder & Full-Stack Developer",
      company: "Inflatech Solutions",
      period: "January 2022 - April 2023",
      description: "Developed custom solutions, enhancing client business efficiency and increasing online sales by 20%.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-8">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary">
          <AvatarImage src="/profile.png" alt="Samarth Bhole" />
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold mb-2 text-white">Samarth Bhole</h1>
        <p className="text-xl text-gray-400">Graduate Student in Computer Science | Full-Stack Developer | ML Enthusiast</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
              <CardTitle className="text-white">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">A graduate student in Computer Science at the University of North Carolina at Charlotte, I am passionate about technology and innovation. With experience in full-stack development, machine learning, and cloud computing, I thrive on solving complex problems and building impactful applications.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="skills">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Skills</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="experience">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Professional Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  {experiences.map((exp, index) => (
                    <div key={index} className="mb-6 relative pl-6 border-l-2 border-primary">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                      <h3 className="text-lg font-semibold text-gray-200">{exp.title}</h3>
                      <p className="text-sm text-gray-400">{exp.company} | {exp.period}</p>
                      <p className="mt-2 text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="projects">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Med-Memory</CardTitle>
                  <CardDescription className="text-gray-400">ShellHacks 2024 Winner</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">A comprehensive patient management tool for hospitals. Features medical PDF parsing, key data extraction, and health trend visualizations.</p>
                </CardContent>
                <CardFooter>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">AI/ML</Badge>
                  <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground">Healthcare</Badge>
                </CardFooter>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Clothes Pattern Recognition System</CardTitle>
                  <CardDescription className="text-gray-400">Technex 2023 Winner</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Built a machine learning system with computer vision capabilities, enhancing e-commerce experiences with high-accuracy pattern recognition.</p>
                </CardContent>
                <CardFooter>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">Computer Vision</Badge>
                  <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground">E-commerce</Badge>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="achievements">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Achievements & Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                    <div>
                      <strong className="text-gray-200">Best First-Time Hack – ShellHacks 2024</strong>
                      <p className="text-gray-300">Developed Med-Memory, a patient management and diagnostics tool using a fine-tuned LLM and real-time data visualization.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                    <div>
                      <strong className="text-gray-200">Winner, Technex 2023</strong>
                      <p className="text-gray-300">Led the development of a clothes pattern recognition system that significantly improved user search experiences in e-commerce.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FileText className="mr-2 h-5 w-5 text-blue-500" />
                    <div>
                      <strong className="text-gray-200">Research Publication</strong>
                      <p className="text-gray-300">Presented research on emotion detection through EEG at the Conference on Sustainable Computing for Multidisciplinary Realities 2022.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="max-w-4xl mx-auto mt-12 text-center">
        
      <Button asChild variant="outline" className="mr-2 bg-primary text-primary-foreground hover:bg-white/90">
  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
    <FileText className="mr-2 h-4 w-4" /> Resume
  </a>
</Button>
        
        <Button asChild variant="outline" className="mr-2 bg-primary text-primary-foreground hover:bg-white/90">
          <a href="https://github.com/samarth126" target="_blank" rel="noopener noreferrer">
            <Code className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
        
        <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-white/90">
          <ChevronRight className="mr-2 h-4 w-4" /> Contact Me
        </Button>
      
      </footer>
    </div>
  )
}