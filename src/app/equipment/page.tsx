"use client";
import { motion } from "framer-motion";
import { Search, Filter, Dumbbell } from "lucide-react";
import EquipmentCard from "@/components/EquipmentCard";

const equipmentData = [
  {
    name: "Olympic Barbell Set",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Free Weights",
    rating: 4.9,
    availability: "Available" as const,
    description:
      "Professional grade Olympic barbells with premium steel construction for serious lifting.",
  },
  {
    name: "Cable Machine System",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Machines",
    rating: 4.8,
    availability: "Busy" as const,
    description:
      "Versatile cable system perfect for functional training and muscle isolation exercises.",
  },
  {
    name: "Treadmill Pro",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Cardio",
    rating: 4.7,
    availability: "Available" as const,
    description:
      "High-performance treadmills with advanced cushioning and interactive displays.",
  },
  {
    name: "Power Rack Station",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Free Weights",
    rating: 4.9,
    availability: "Available" as const,
    description:
      "Heavy-duty power racks with safety bars for squats, deadlifts, and bench press.",
  },
  {
    name: "Rowing Machine",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Cardio",
    rating: 4.6,
    availability: "Maintenance" as const,
    description:
      "Premium rowing machines for full-body cardiovascular and strength training.",
  },
  {
    name: "Leg Press Machine",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Machines",
    rating: 4.8,
    availability: "Available" as const,
    description:
      "Commercial-grade leg press with smooth motion and adjustable resistance.",
  },
];

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Dumbbell className="h-12 w-12 text-white mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">Our Equipment</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              State-of-the-art fitness equipment designed to support your
              personal, supportive, and friendly workout experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search equipment..."
                className="w-full pl-10 pr-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentData.map((equipment, index) => (
              <EquipmentCard
                key={equipment.name}
                {...equipment}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
