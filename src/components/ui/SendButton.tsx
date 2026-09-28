type SendButtonProps = {
  disabled: boolean
  onClick: () => void
}

export function SendButton({ disabled, onClick }: SendButtonProps) {
  return (
    <button
      type="button"
      aria-label="Enviar mensagem"
      disabled={disabled}
      onClick={onClick}
      className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-500 text-navy-100 transition-colors hover:bg-navy-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-400 disabled:cursor-not-allowed disabled:bg-navy-700 disabled:text-navy-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5"
        aria-hidden="true"
      >
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
      </svg>
    </button>
  )
}
