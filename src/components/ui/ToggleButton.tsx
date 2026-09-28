type ToggleButtonProps = {
  label: string
  isActive: boolean
  onToggle: () => void
}

export function ToggleButton({ label, isActive, onToggle }: ToggleButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onToggle}
      className={`min-h-11 rounded-full border px-3 py-2 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-400 sm:px-4 sm:text-sm ${
        isActive
          ? 'border-navy-400 bg-navy-700 text-navy-100'
          : 'border-navy-600 bg-transparent text-navy-300 hover:border-navy-500 hover:text-navy-100'
      }`}
    >
      {label}
    </button>
  )
}
