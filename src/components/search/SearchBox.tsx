import { SearchTextarea } from './SearchTextarea'
import { SearchControls } from './SearchControls'

type SearchBoxProps = {
  message: string
  deepThinking: boolean
  smartSearch: boolean
  onMessageChange: (value: string) => void
  onDeepThinkingToggle: () => void
  onSmartSearchToggle: () => void
  onSend: () => void
}

export function SearchBox({
  message,
  deepThinking,
  smartSearch,
  onMessageChange,
  onDeepThinkingToggle,
  onSmartSearchToggle,
  onSend,
}: SearchBoxProps) {
  const canSend = message.trim().length > 0

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-navy-700 bg-navy-900 shadow-lg">
      <SearchTextarea value={message} onChange={onMessageChange} />
      <SearchControls
        deepThinking={deepThinking}
        smartSearch={smartSearch}
        canSend={canSend}
        onDeepThinkingToggle={onDeepThinkingToggle}
        onSmartSearchToggle={onSmartSearchToggle}
        onSend={onSend}
      />
    </div>
  )
}
