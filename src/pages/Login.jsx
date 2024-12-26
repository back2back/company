import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (login(password)) {
      navigate('/dashboard')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="min-h-screen pt-16 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="glass-panel p-8">
          <h2 className="text-3xl font-bold mb-6 gradient-text text-center">Admin Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-white"
                required
              />
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm"
              >
                {error}
              </motion.p>
            )}
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
