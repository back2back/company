import { useState } from 'react'
import { motion } from 'framer-motion'
import { MailIcon, PhoneIcon, UserIcon, ChatAlt2Icon } from '@heroicons/react/outline'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}
Message: ${formData.message}
    `.trim()
    
    // Create mailto link with form data
    const mailtoLink = `mailto:info@back2back.tech?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink

    // Clear form
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen pt-16 px-4">
      <motion.div
        className="max-w-7xl mx-auto py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <section className="mb-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold gradient-text mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </section>

        {/* Contact Form */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Form */}
          <div className="glass-panel p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <UserIcon className="w-5 h-5 inline-block mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <MailIcon className="w-5 h-5 inline-block mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <PhoneIcon className="w-5 h-5 inline-block mr-2" />
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <ChatAlt2Icon className="w-5 h-5 inline-block mr-2" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-300">
                  <MailIcon className="w-5 h-5 mr-3 text-cyan-400" />
                  info@back2back.tech
                </p>
                <p className="flex items-center text-gray-300">
                  <PhoneIcon className="w-5 h-5 mr-3 text-cyan-400" />
                  +20 123 456 7890
                </p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Office Hours</h3>
              <p className="text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default Contact
