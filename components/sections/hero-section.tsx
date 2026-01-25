"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Container } from '@/components/layout/container';
import Image from 'next/image'; 

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Menggunakan Tailwind arbitrary values untuk menggantikan inline style agar lebih bersih */}
    <div 
      className="absolute inset-0 [background-image:linear-gradient(rgba(147,197,253,0.12)_2px,transparent_2px),linear-gradient(90deg,rgba(147,197,253,0.12)_2px,transparent_2px)] [background-size:60px_60px]"
    />
    <div 
      className="absolute inset-0 dark:opacity-0 opacity-20 [background-image:linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:30px_30px]"
    />
    
    <motion.div 
      className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-full blur-2xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.4, 0.8, 0.4],
        x: [0, 20, 0],
        y: [0, -10, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div 
      className="absolute top-1/3 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-full blur-xl"
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.3, 0.7, 0.3],
        x: [0, -15, 0],
        y: [0, 15, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
  </div>
);

export default function HeroSection() {

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full min-h-screen py-20 md:py-28 flex items-center bg-gradient-to-br from-background via-background to-primary/5 dark:bg-background overflow-hidden"
    >
      <GridBackground />
      
      <Container className="relative z-10 flex flex-col-reverse items-center justify-between gap-12 md:flex-row px-4 md:px-6 lg:px-8">
        <motion.div 
          variants={itemVariants}
          className="flex-1 space-y-10 text-center md:text-left max-w-2xl"
        >
          <motion.div variants={titleVariants} className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="bg-blue-600 bg-clip-text text-transparent">
                BEM KM FT 
              </span>
              <br />
              <span className="text-primary"> UMUS 2026</span>
            </h1>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed"
          >
            Kami hadir untuk menyuarakan semangat inovasi, memperkuat solidaritas, dan mewujudkan program kerja yang berdampak nyata bagi mahasiswa teknik.
          </motion.p>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="flex-1 relative px-4 md:px-8"
        >
          <div className="relative max-w-sm mx-auto">
            <motion.div 
              className="absolute -top-6 -left-6 w-60 h-60 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div className="relative">
              {/* Menggunakan Next.js Image untuk performa LCP yang lebih baik */}
              <div className="relative z-10 w-full h-auto max-w-xs mx-auto aspect-square">
                <Image
                  src="/logos/logo.png"
                  alt="Logo BEM FT UMUS 2026"
                  fill
                  priority
                  className="object-contain filter drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}