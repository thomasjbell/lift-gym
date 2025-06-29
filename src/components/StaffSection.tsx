"use client";
import { motion } from "framer-motion";
import { Users, Mail, Award } from "lucide-react";

const staffMembers = [
  {
    name: "Sarah Johnson",
    role: "Gym Manager & Personal Trainer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "With over 8 years in fitness, Sarah leads our team with passion and expertise. She specializes in strength training and helping members build confidence.",
    certifications: ["Level 3 Personal Training", "Strength & Conditioning", "First Aid"],
    email: "sarah@liftgym.co.uk"
  },
  {
    name: "Mike Thompson",
    role: "Senior Personal Trainer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Mike brings 6 years of experience in functional fitness and sports conditioning. He loves working with beginners and athletes alike.",
    certifications: ["Level 3 Personal Training", "Functional Movement", "Sports Massage"],
    email: "mike@liftgym.co.uk"
  },
  {
    name: "Emma Davies",
    role: "Fitness Coach & Nutritionist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Emma combines fitness coaching with nutritional guidance to help members achieve their goals holistically. She's passionate about sustainable lifestyle changes.",
    certifications: ["Level 3 Personal Training", "Sports Nutrition", "Group Fitness"],
    email: "emma@liftgym.co.uk"
  }
];

interface StaffCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  certifications: string[];
  email: string;
  index: number;
}

function StaffCard({ name, role, image, bio, certifications, email, index }: StaffCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gray-900 rounded-2xl overflow-hidden group hover:bg-gray-800 transition-colors"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-300 font-medium mb-4">{role}</p>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{bio}</p>

        {/* Certifications */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Award className="h-4 w-4 text-white" />
            <span className="text-white font-medium text-sm">Certifications</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="bg-white/10 text-white text-xs px-2 py-1 rounded-lg"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <motion.a
          href={`mailto:${email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
        >
          <Mail className="h-4 w-4" />
          <span>Get in Touch</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function StaffSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Users className="h-12 w-12 text-white mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Meet Our Team
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our experienced and friendly team is here to support you every step of your fitness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <StaffCard
              key={member.name}
              {...member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}