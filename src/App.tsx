import { useState } from 'react'
import { ChatLayout } from './components/layout/ChatLayout'
import { ProjectTitle } from './components/header/ProjectTitle'
import { ModeTabs } from './components/mode/ModeTabs'
import { SearchBox } from './components/search/SearchBox'
import type { ChatMode } from './types/chat'

export default function App() {
  const [mode, setMode] = useState<ChatMode>('rapido')
  const [deepThinking, setDeepThinking] = useState(true)
  const [smartSearch, setSmartSearch] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <ChatLayout>
      <ProjectTitle />
      <ModeTabs activeMode={mode} onModeChange={setMode} />
      <SearchBox
        message={message}
        deepThinking={deepThinking}
        smartSearch={smartSearch}
        onMessageChange={setMessage}
        onDeepThinkingToggle={() => setDeepThinking((prev) => !prev)}
        onSmartSearchToggle={() => setSmartSearch((prev) => !prev)}
        onSend={() => { }}
      />
    </ChatLayout>
  )
}
