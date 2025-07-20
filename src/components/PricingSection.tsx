"use client";
import { motion } from "framer-motion";
import { Check, Star, Clock, Users, Dumbbell, ArrowRight, Calendar, Percent } from "lucide-react";
import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

const pricingPlans = [
  {
    id: "off-peak",
    name: "Off-Peak",
    icon: Clock,
    price: "£34.99",
    period: "per month",
    description: "Perfect for flexible schedules",
    popular: false,
    features: [
      "5am-3pm weekdays",
      "12pm-8pm weekends", 
      "All gym equipment",
      "Free parking",
      "Basic support",
      
    ],
  },
  {
    id: "full",
    name: "Full",
    icon: Star,
    price: "£39.99",
    period: "per month",
    description: "Full access membership",
    popular: false,
    features: [
      "Unlimited gym access",
      "5am-10pm weekdays",
      "6am-8pm weekends",
      "All gym equipment",
      "Free parking",
      "Full member support",
      "Monthly progress reviews",
      "Equipment inductions"
    ],
    notIncluded: [
      "Personal training sessions",
      "Guest passes"
    ]
  },
  {
    id: "joint",
    name: "Joint",
    icon: Users,
    price: "£73.99",
    period: "per month", 
    description: "Our most popular choice",
    popular: true,
    features: [
      "Everything in Full",
      "Unlimited gym access",
      "Priority equipment booking",
      "2 guest passes per month",
      "Personalised workout plans",
      "Nutrition guidance",
      "Priority support",
      "Quarterly fitness assessments"
    ],
    notIncluded: [
      "Personal training sessions"
    ]
  },
  {
    id: "yearly-discount",
    name: "Annual Payment",
    icon: Calendar,
    price: "Save 10-15%",
    period: "pay yearly",
    description: "Best value option",
    popular: false,
    specialCard: true,
    features: [
      "10% off Individual memberships",
      "15% off Joint/Family memberships",
      "Pay once, worry free for a year",
      "All standard benefits included",
      "Same cancellation policy",
      "Direct debit setup available"
    ],
    notIncluded: []
  },
  {
    id: "family",
    name: "Family",
    icon: Dumbbell,
    price: "Family Plans", // Added this to fix the undefined issue
    dualPricing: true,
    prices: [
      { size: "Family of 3", price: "£107.99" },
      { size: "Family of 4", price: "£139.99" }
    ],
    period: "per month",
    description: "Perfect for growing families",
    popular: false,
    features: [
      "Everything in Joint",
      "All family members included",
      "Unlimited gym access",
      "4 guest passes per month",
      "Family fitness plans",
      "Kids area access (16+)",
      "Family progress tracking",
      "Flexible family scheduling"
    ],
    notIncluded: []
  }
];

interface PricingCardProps {
  plan: typeof pricingPlans[0];
  index: number;
}

function PricingCard({ plan, index }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Special card for yearly discount
  if (plan.specialCard) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative rounded-2xl p-6 sm:p-8 border bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-500/30 backdrop-blur-md"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex p-3 rounded-full mb-4 bg-green-500/20"
          >
            <Percent className="h-8 w-8 text-green-400" />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-gray-300 text-sm">{plan.description}</p>
        </div>

        {/* Discount Info */}
        <div className="text-center mb-8">
          <div className="bg-green-500/10 rounded-xl p-4 mb-4">
            <div className="text-3xl font-bold text-green-400 mb-2">10-15%</div>
            <p className="text-green-300 text-sm">Annual Discount</p>
          </div>
          <p className="text-gray-400 text-sm">Pay for a full year upfront</p>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
              className="flex items-center space-x-3"
            >
              <div className="bg-green-500/20 rounded-full p-1">
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <span className="text-gray-300 text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <AnimatedButton
          href="/contact"
          variant="primary"
          size="lg"
          className="w-full"
          icon={ArrowRight}
        >
          Learn More
        </AnimatedButton>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
        plan.popular
          ? "bg-white/10 border-white/30 backdrop-blur-md"
          : "bg-gray-900/50 border-gray-700 hover:border-gray-600"
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </motion.div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex p-3 rounded-full mb-4 ${
            plan.popular ? "bg-white/20" : "bg-white/10"
          }`}
        >
          <plan.icon className="h-8 w-8 text-white" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-300 text-sm">{plan.description}</p>
      </div>

      {/* Pricing - Handle dual pricing for family */}
      <div className="text-center mb-8">
        {plan.dualPricing && plan.prices ? (
          <div className="space-y-4">
            {plan.prices.map((priceInfo, priceIndex) => (
              <div key={priceIndex} className="bg-white/5 rounded-xl p-4">
                <div className="text-lg font-semibold text-white mb-1">{priceInfo.size}</div>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{priceInfo.price}</span>
                  <span className="text-gray-300 text-sm">/month</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="flex items-baseline justify-center space-x-1">
              <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
              {plan.price && !plan.price.includes("Save") && !plan.price.includes("Family") && (
                <span className="text-gray-300 text-lg">/{plan.period?.split(' ')[1] || 'month'}</span>
              )}
            </div>
            <p className="text-gray-400 text-sm mt-1">{plan.period}</p>
          </>
        )}
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <motion.div
            key={featureIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
            className="flex items-center space-x-3"
          >
            <div className="bg-green-500/20 rounded-full p-1">
              <Check className="h-4 w-4 text-green-400" />
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </motion.div>
        ))}
        
        {plan.notIncluded && plan.notIncluded.map((feature, featureIndex) => (
          <motion.div
            key={`not-${featureIndex}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: (index * 0.1) + ((plan.features.length + featureIndex) * 0.05) }}
            className="flex items-center space-x-3 opacity-50"
          >
            <div className="bg-gray-500/20 rounded-full p-1">
              <span className="block h-4 w-4 text-gray-500 text-center leading-4">×</span>
            </div>
            <span className="text-gray-500 text-sm line-through">{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <AnimatedButton
        href="/contact"
        variant={plan.popular ? "primary" : "secondary"}
        size="lg"
        className="w-full"
        icon={ArrowRight}
      >
        Get Started
      </AnimatedButton>
    </motion.div>
  );
}

export default function PricingSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {pricingPlans.slice(0, 3).map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {pricingPlans.slice(3).map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index + 3} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base px-4">
            Our friendly team is here to help you find the perfect membership plan.
          </p>
          
          <AnimatedButton
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Contact Us
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}