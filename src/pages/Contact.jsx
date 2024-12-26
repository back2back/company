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
        <motion.h1
          className="text-4xl md:text-6xl font-bold gradient-text mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          className="glass-panel p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-white/70 text-sm">
                  <UserIcon className="w-4 h-4 mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-white"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-white/70 text-sm">
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  Mobile Number (Optional)
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-white"
                  placeholder="Your mobile number (optional)"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-white/70 text-sm">
                <MailIcon className="w-4 h-4 mr-2" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-white"
                placeholder="Your email"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-white/70 text-sm">
                <ChatAlt2Icon className="w-4 h-4 mr-2" />
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-white"
                placeholder="Your message"
              />
            </div>

            <motion.button
              type="submit"
              className="btn-primary w-full md:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/70 text-center">
              You can also reach us directly at{' '}
              <a
                href="mailto:info@back2back.tech"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                info@back2back.tech
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact
