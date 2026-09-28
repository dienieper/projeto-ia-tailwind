type ModeTabProps = {
  label: string
  isActive: boolean
  onClick: () => void
}

export function ModeTab({ label, isActive, onClick }: ModeTabProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={`min-h-11 rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-400 ${
        isActive
          ? 'bg-navy-700 text-navy-100'
          : 'text-navy-300 hover:bg-navy-800 hover:text-navy-100'
      }`}
    >
      {label}
    </button>
  )
}
