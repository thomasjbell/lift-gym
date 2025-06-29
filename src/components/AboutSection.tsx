"use client";
import { motion } from "framer-motion";
import { 
  Users, 
  Heart, 
  Smile, 
  Clock, 
  Award, 
  Target,
  Shield,
  Zap
} from "lucide-react";
import Image from "next/image";

const gymFeatures = [
  
  {
    icon: Heart,
    title: "Friendly Environment",
    description: "Lift is a friendly Gym where interaction with our members is standard. "
  },
  {
    icon: Users,
    title: "Personal & Supportive",
    description: ""
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Open 5am-10pm weekdays, 6am-8pm weekends to fit your schedule"
  },
  {
    icon: Award,
    title: "No Joining Fee",
    description: "Start your fitness journey without upfront costs or hidden fees"
  },
  {
    icon: Target,
    title: "5 Month Minimum",
    description: "Fair commitment period with just 1 month notice to cancel"
  },
  {
    icon: Shield,
    title: "Inclusive Space",
    description: "50/50 gender ratio with a focus on community over competition"
  },
  {
    icon: Zap,
    title: "Full Support",
    description: "From complete beginners to gym pros - we support all fitness levels"
  },
  {
    icon: Smile,
    title: "No Pressure",
    description: "We ask hardcore gym users to choose somewhere else - we like to keep it relaxed"
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image src="/about-gym.webp" alt="Gym" width={500} height={500}></Image>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Lift Gym?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you are a Gym regular who just needs a new place to call home, or a complete novice who needs support, we will look after you here at Lift Gym. 
            </p>

            <div className="grid grid-cols-1 gap-4">
              {gymFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <div className="bg-white/10 p-2 rounded-lg flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}