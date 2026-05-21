import Navbar from './Navbar'

export default function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
