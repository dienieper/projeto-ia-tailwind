import type { ReactNode } from 'react'

type ChatLayoutProps = {
  children: ReactNode
}

export function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-navy-950 px-4 py-8 text-navy-100">
      <main className="flex w-full max-w-3xl flex-col items-center gap-6">
        {children}
      </main>
    </div>
  )
}
