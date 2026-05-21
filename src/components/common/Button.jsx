export default function Button({ children, variant = 'primary', onClick, type = 'button', className = '', disabled = false }) {
  const base = 'text-sm font-semibold px-5 py-2.5 rounded-md transition-all duration-150 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'text-gray-500 hover:bg-gray-100',
    outline: 'border border-gray-200 text-gray-700 hover:bg-gray-50',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
