import type { ChatMode } from '../../types/chat'
import { ModeTab } from './ModeTab'

type ModeTabsProps = {
  activeMode: ChatMode
  onModeChange: (mode: ChatMode) => void
}

const MODES: { value: ChatMode; label: string }[] = [
  { value: 'rapido', label: 'Rápido' },
  { value: 'especialista', label: 'Especialista' },
]

export function ModeTabs({ activeMode, onModeChange }: ModeTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Modo de resposta"
      className="flex flex-wrap items-center justify-center gap-2"
    >
      {MODES.map(({ value, label }) => (
        <ModeTab
          key={value}
          label={label}
          isActive={activeMode === value}
          onClick={() => onModeChange(value)}
        />
      ))}
    </div>
  )
}
