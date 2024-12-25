'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide a range of services including IT and Non-IT training programs, job placement assistance, and consultancy services for candidates and organizations.',
  },
  {
    question: 'How can I enroll in your training programs?',
    answer: 'You can enroll by visiting our website and filling out the registration form under the "Training" section. Our team will contact you with further details. Alternatively, you can reach us directly via email or phone.',
  },
  {
    question: 'Are the training programs suitable for beginners?',
    answer: 'Yes, our training programs are designed for both beginners and experienced professionals. We also provide customized training paths based on your current skill level.',
  },
  {
    question: 'Do you guarantee job placement after training?',
    answer: 'Yes, we can guarantee placement, we provide extensive support, including resume building, interview preparation, and access to a wide network of hiring companies to maximize your chances.',
  },
  {
    question: 'Are your training programs conducted online or offline?',
    answer: 'We offer both online and offline training options. You can choose the format that best suits your schedule and learning preferences.',
  },
  {
    question: 'How do you ensure the quality of candidates for employers?',
    answer: 'We have a rigorous screening and evaluation process, including skill assessments, interviews, and background checks, to ensure we recommend only the most qualified candidates.',
  },
  {
    question: 'Do you charge candidates for placements?',
    answer: 'No, we do not charge candidates for placements. Our placement assistance is a complementary service provided to help you secure the right opportunity.',
  },
  {
    question: 'How can I contact you for more details?',
    answer: 'You can reach us via email, phone, or the contact form on our website. Our team is available to assist you during working hours.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
        <p className="mb-8">
          Looking for something else? Chat with us via <a href="mailto:theudyog@gmail.com" className="underline">theudyog@gmail.com</a> and our teammates will try their best to help you!
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left py-4 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="pb-4 text-zinc-400 text-left">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

