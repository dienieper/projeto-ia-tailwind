import { ToggleButton } from '../ui/ToggleButton'
import { SendButton } from '../ui/SendButton'

type SearchControlsProps = {
  deepThinking: boolean
  smartSearch: boolean
  canSend: boolean
  onDeepThinkingToggle: () => void
  onSmartSearchToggle: () => void
  onSend: () => void
}

export function SearchControls({
  deepThinking,
  smartSearch,
  canSend,
  onDeepThinkingToggle,
  onSmartSearchToggle,
  onSend,
}: SearchControlsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 px-3 pb-3">
      <div className="flex flex-wrap items-center gap-2">
        <ToggleButton
          label="Pensamento profundo"
          isActive={deepThinking}
          onToggle={onDeepThinkingToggle}
        />
        <ToggleButton
          label="Pesquisa Inteligente"
          isActive={smartSearch}
          onToggle={onSmartSearchToggle}
        />
      </div>
      <SendButton disabled={!canSend} onClick={onSend} />
    </div>
  )
}
