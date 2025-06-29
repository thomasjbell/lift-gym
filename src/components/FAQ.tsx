"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "What support is offered?",
    answer:
      "We offer a level of support that matches what an individual might need. If you are a Gym pro and just want to be a member (basically just want your entry fob with no additional help) that is cool. If you are brand spanking new to Gyms and need some time to go through all the equipment / a programme written this is available. Support is not just when you join, we will sit down with our members anytime to help / support them.",
  },
  {
    question: "What are the opening hours?",
    answer:
      "We are open 5am-10pm on weekdays and 6am-8pm at the weekends. Entry is permitted until 30 minutes before closing time. We are generally open on most bank holidays. Off Peak Membership allows use 5am-3pm on weekdays and 12pm-8pm at the weekend.",
  },
  {
    question: "Is there a 12 month contract?",
    answer:
      "No. Our minimum term is 5 months. We feel this is a fair commitment period. There is also a 1 month notice period to cancel a membership.",
  },
  {
    question: "Is there a joining fee?",
    answer: "No joining fee.",
  },
  {
    question: "Is the Gym female friendly?",
    answer: `Very much so. We hope we have created an environment for everyone to enjoy their exercise and feel confident / comfortable. Everything here is for everyone and we hope our membership reflects this with a close to 50/50 ratio of men to women and we ask "hardcore" gym users to chose somewhere else to join.`,
  },
  {
    question: "How do I join?",
    answer: (
      <>
        Simply book an appointment via our contact page or email directly{" "}
        <a
          href="mailto:liftgymmk@gmail.com"
          className="text-white hover:text-gray-100 underline underline-offset-2 transition-colors"
        >
          liftgymmk@gmail.com
        </a>{" "}
        and we'll get in touch asap.
      </>
    ),
  },
  {
    question: "Do you have classes?",
    answer:
      "No we do not have classes as we have no private studio. We are a Gym floor based club with all of the cardio, resistance machines and free weights you would expect at a first class Gym.",
  },
  {
    question: `Can under 18's join?`,
    answer:
      "Yes. As long as mature and here to use the facilities correctly. Under 16's can only be considered if using the Gym with an adult as part of a Joint/Family membership.",
  },
  {
    question: "Do you offer free trials?",
    answer:
      "IF you already have good gym experience, yes. Those that have not used Gym equipment before would need a full induction so free trials would not be available. Trial sessions must be booked in advance.",
  },
  {
    question: `I came to look around but counldn't get in?`,
    answer:
      "We have a Fob entry system, which only members and staff have access to. If you would like to look around the Gym / want to have a chat to see if our Gym is right for you, please book ahead. We are by appointment only.",
  },
  {
    question: "Is there parking and is it free?",
    answer: "Yes and yes. Plenty of free parking.",
  },
  {
    question: `Do you do "pay as you go" rates?`,
    answer:
      "No. We are membership only. Strictly no day passes or 1 month deals. ",
  },
  {
    question: "Is this a weightlifting Gym?",
    answer: `Yes and no. It depends on what your attitude towards "lifting" is. We have free weights / plate loaded machines here but we would definitely not classify ourselves as a "weightlifters" or "pro bodybuilders Gym. We prefer not to take on hardcore lifters. There are other local Clubs that do a good job for the hardcore crowd...we are looking to be a different offering.`,
  },
];

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-gray-900 rounded-2xl overflow-hidden"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
        whileHover={"bg-gray-800"}
      >
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-white" />
          ) : (
            <Plus className="h-5 w-5 text-white" />
          )}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="text-gray-300 leading-relaxed">
                {typeof answer === "string" ? <p>{answer}</p> : answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-8">
            Our friendly team is here to help. Get in touch and we'll answer any
            questions you might have.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            className="inline-flex items-center bg-white text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
