"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  { name: "React", category: "Frontend", icon: "/icons/tech/react.svg" },
  { name: "Next.js", category: "Frontend", icon: "/icons/tech/nextjs.svg" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend", icon: "/icons/tech/nodejs.svg" },
  { name: "Python", category: "Backend", icon: "/icons/tech/python.svg" },
  { name: "React Native", category: "Mobile", icon: "/icons/tech/react-native.svg" },
  { name: "Flutter", category: "Mobile", icon: "/icons/tech/flutter.svg" },
  { name: "Unity", category: "Game Dev", icon: "/icons/tech/unity.svg" },
  { name: "Unreal Engine", category: "Game Dev", icon: "/icons/tech/unreal-engine.svg" },
  { name: "TensorFlow", category: "AI/ML", icon: "/icons/tech/tensorflow.svg" },
  { name: "PyTorch", category: "AI/ML", icon: "/icons/tech/pytorch.svg" },
  { name: "AWS", category: "Cloud", icon: "/icons/tech/aws.svg" },
  { name: "Docker", category: "DevOps" },
  { name: "PostgreSQL", category: "Database", icon: "/icons/tech/postgresql.svg" },
  { name: "Redis", category: "Database", icon: "/icons/tech/redis.svg" },
  { name: "GraphQL", category: "API" },
  { name: "Figma", category: "Design", icon: "/icons/tech/figma.svg" },
  { name: "Blender", category: "3D", icon: "/icons/tech/blender.svg" },
]

const categories = ["Frontend", "Backend", "Mobile", "Game Dev", "AI/ML", "Cloud", "Database", "Design", "3D"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
}

export function TechStack() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-600">
            Technology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
            Modern <span className="text-gradient">tech stack</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            We leverage cutting-edge technologies to build robust, scalable solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => {
            const techs = technologies.filter((t) => t.category === category)
            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className="clay-card p-6"
              >
                <h3 className="text-xs font-semibold tracking-wider uppercase text-zinc-600 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/80 px-3 py-1.5 text-sm font-medium text-zinc-700 border border-zinc-200"
                    >
                      {tech.icon && (
                        <Image src={tech.icon} alt="" width={16} height={16} className="h-4 w-4" />
                      )}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
