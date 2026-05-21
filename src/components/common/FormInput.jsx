export default function FormInput({ label, optional = false, placeholder, value, onChange, type = 'text', id }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
        {optional && <span className="text-gray-400 font-normal ml-1">(Optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-md bg-white
                   text-gray-800 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                   transition-all duration-150"
      />
    </div>
  )
}
