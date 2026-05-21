import { Search, Menu, Plus } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className="bg-reelax-navbar shadow-navbar sticky top-0 z-50">
      <div className="flex items-center h-[60px] px-4 gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-[340px]">
          <input
            type="text"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Find influencers to collaborate with"
            className="w-full bg-white text-sm text-gray-800 placeholder-gray-400
                       pl-4 pr-10 py-2.5 rounded-md border border-transparent
                       focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500
                       transition-all duration-150"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-2.5">
          <button className="flex items-center gap-1.5 bg-orange-500 text-white text-xs font-semibold
                             px-3.5 py-2 rounded-md hover:bg-orange-600 active:scale-[0.98]
                             transition-all duration-150">
            <span>⚡</span>
            Upgrade
          </button>

          <button className="flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold
                             px-3.5 py-2 rounded-md hover:bg-blue-700 active:scale-[0.98]
                             transition-all duration-150">
            <Plus className="w-3.5 h-3.5" />
            Create Campaign
          </button>

          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center
                             hover:ring-2 hover:ring-blue-500/40 transition-all duration-150 overflow-hidden">
            <span className="text-xs font-semibold text-gray-600">A</span>
          </button>

          <button className="p-1.5 rounded-md hover:bg-white/10 transition-colors">
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  )
}
