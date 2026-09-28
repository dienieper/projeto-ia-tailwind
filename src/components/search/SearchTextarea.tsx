import { useEffect, useRef } from 'react'

type SearchTextareaProps = {
  value: string
  onChange: (value: string) => void
}

export function SearchTextarea({ value, onChange }: SearchTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }, [value])

  return (
    <textarea
      ref={textareaRef}
      id="search-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Pergunte ao Jarvis..."
      rows={1}
      aria-label="Campo de mensagem"
      className="w-full resize-none overflow-hidden bg-transparent px-4 pt-4 pb-2 text-base text-navy-100 placeholder:text-navy-500 focus:outline-none"
    />
  )
}
