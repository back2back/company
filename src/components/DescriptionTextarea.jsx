import { memo } from 'react'

const DescriptionTextarea = memo(({ value, onChange }) => {
  return (
    <textarea
      placeholder="Project Description"
      value={value}
      onChange={onChange}
      className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-white h-32 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent"
      required
      autoComplete="off"
      spellCheck="false"
    />
  )
})

DescriptionTextarea.displayName = 'DescriptionTextarea'

export default DescriptionTextarea
