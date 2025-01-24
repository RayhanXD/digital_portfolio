"use client"
import { useState} from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const gradientAnimation = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
`

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = gradientAnimation
  document.head.appendChild(style)
}

export default function Page() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Base Gradient Layer */}
      <AnimatePresence>
        <motion.div
          key={isHovered ? "bl" : "br"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${
            isHovered ? "bg-gradient-to-tl" : "bg-gradient-to-br"
          } from-[#F042FF] via-[#FFE5F1] to-[#87F5F5] z-0`}
        />
      </AnimatePresence>

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/grain.jpg"
          alt="Textured background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Content Layer */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-screen flex flex-col justify-between p-6 z-20"
      >
        {/* Top Navigation */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-between w-full"
        >
          {["Home", "About", "Projects"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="group">
                <span className="bg-[#1e1e1e] text-white px-3 py-1 inline-block transition-all duration-300 hover:px-5 font-extralight tracking-widest">
                  {item}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Main Content */}
        <motion.div
          className="flex flex-col space-y-12 ml-12 -mt-32"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="max-w-3xl">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-thin">
              <motion.span
                className="bg-[#1e1e1e] text-white px-4 py-1 inline-block hover:px-6 transition-all duration-500 whitespace-nowrap tracking-widest"
                animate={{
                  scale: [1, 1.01, 1],
                  transition: {
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                Life is{" "}
                <span
                  className="font-serif italic inline-block bg-gradient-to-r from-[#F042FF] via-[#FFE5F1] to-[#87F5F5] text-transparent bg-clip-text animate-gradient bg-[length:200%_auto]"
                  style={{
                    animation: "gradient 2s linear infinite",
                  }}
                >
                  Transient
                </span>
              </motion.span>
            </h1>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight">
                <motion.span className="bg-[#1e1e1e] text-white px-4 py-1 inline-block hover:px-6 transition-all duration-300 whitespace-nowrap tracking-widest">
                  {"My name is Rayhan Mohammad, Welcome".split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className="inline-block"
                      animate={{
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: letterIndex * 0.1,
                        ease: "easeInOut",
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.span>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extralight mt-4">
                <motion.span className="bg-[#1e1e1e] text-white px-4 py-1 inline-block hover:px-6 transition-all duration-300 whitespace-nowrap tracking-widest">
                  Website updates coming soon
                </motion.span>
              </h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Navigation */}
        <motion.nav
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-between w-full"
        >
          {["Events", "Startups", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 + i * 0.1 }}
            >
              <Link href={`/${item.toLowerCase()}`} className="group">
                <span className="bg-[#1e1e1e] text-white px-3 py-1 inline-block transition-all duration-300 hover:px-5 font-thin tracking-widest">
                  {item}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </motion.main>
    </div>
  )
}

