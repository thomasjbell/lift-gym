'use client'
import { motion } from 'framer-motion'
import { Star, Clock, Users } from 'lucide-react'

interface EquipmentCardProps {
  name: string
  image: string
  category: string
  rating: number
  availability: 'Available' | 'Busy' | 'Maintenance'
  description: string
  index: number
}

export default function EquipmentCard({ 
  name, 
  image, 
  category, 
  rating, 
  availability, 
  description, 
  index 
}: EquipmentCardProps) {
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-500'
      case 'Busy': return 'bg-yellow-500'
      case 'Maintenance': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-gray-900 rounded-2xl overflow-hidden group"
    >
      <div className="relative">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getAvailabilityColor(availability)}`}>
            {availability}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400 font-medium">{category}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-300">{rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Clock className="h-4 w-4" />
            <span>Available 24/7</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Reserve
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}