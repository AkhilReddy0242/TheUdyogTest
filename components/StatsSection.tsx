"use client"

import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { Users, Building, Award, TypeIcon as type, LucideIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label, suffix }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Card className="place-items-center justify-center items-center">
      <CardHeader className="flex flex-row items-center space-y-0">
        <Icon className="h-6 w-6 mr-4" />
        <CardTitle>
          <CountUp end={value} duration={2.5} />
          {suffix}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export default function StatsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div 
          className="grid gap-8 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          <StatCard icon={Users} value={1000} label="Successful Placements" suffix="+" />
          <StatCard icon={Building} value={200} label="Partner Companies" suffix="+" />
          <StatCard icon={Award} value={98} label="Satisfaction Rate" suffix="%" />
        </motion.div>
      </div>
    </section>
  )
}

