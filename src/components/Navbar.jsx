import { navLinks, locations } from '#constants'
import useWindowStore from '#store/window'
import dayjs from "dayjs"
import React, { useState, useEffect, useRef } from 'react'
import { Wifi, WifiOff, Search, User, Settings, Volume2, Sun, Moon, Calendar, Clock } from 'lucide-react'
import CalendarWidget from './CalendarWidget'

const Navbar = ({ setIsDropdownOpen }) => {
  const { openWindow } = useWindowStore()
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [showSearch, setShowSearch] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [volume, setVolume] = useState(50)
  const [brightness, setBrightness] = useState(80)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [currentDate, setCurrentDate] = useState(dayjs())

  const searchRef = useRef(null)
  const profileRef = useRef(null)
  const controlsRef = useRef(null)
  const calendarRef = useRef(null)

  // Network status monitoring
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Search functionality
  useEffect(() => {
    if (searchQuery.length > 0) {
      const results = []
      // Search through projects
      locations.work.children.forEach((project) => {
        if (project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({ type: 'project', item: project })
        }
      })
      // Search through other locations
      Object.values(locations).forEach((location) => {
        if (location.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({ type: 'location', item: location })
        }
      })
      setSearchResults(results.slice(0, 5))
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  // Disable body interaction when dropdowns are open
  useEffect(() => {
    const isAnyDropdownOpen = showSearch || showProfile || showControls || showCalendar
    setIsDropdownOpen(isAnyDropdownOpen)
    if (isAnyDropdownOpen) {
      document.body.style.pointerEvents = 'none'
      document.body.style.userSelect = 'none'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.pointerEvents = 'auto'
      document.body.style.userSelect = 'auto'
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.pointerEvents = 'auto'
      document.body.style.userSelect = 'auto'
      document.body.style.overflow = 'auto'
    }
  }, [showSearch, showProfile, showControls, showCalendar, setIsDropdownOpen])

  // Close dropdowns when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false)
      }
      if (controlsRef.current && !controlsRef.current.contains(event.target)) {
        setShowControls(false)
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowSearch(false)
        setShowProfile(false)
        setShowControls(false)
        setShowCalendar(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleSearchSelect = (result) => {
    if (result.type === 'project') {
      openWindow('finder')
    } else if (result.type === 'location') {
      openWindow('finder')
    }
    setShowSearch(false)
    setSearchQuery('')
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="relative flex items-center justify-between px-4 py-2 pointer-events-auto z-[9999]">
      {/* Left side: Logo + nav links */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" alt="logo" className="h-8 w-8" />
          <p className="font-bold text-sm sm:text-base">Abhay&apos;s Portfolio</p>
        </div>
        <ul className="hidden md:flex items-center gap-4 text-sm">
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              onClick={() => openWindow(type)}
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
            >
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* WiFi Status */}
        <div className="relative group">
          <button className="p-2 hover:bg-gray-200 rounded transition-colors">
            {isOnline ? (
              <Wifi size={16} className="text-green-600" />
            ) : (
              <WifiOff size={16} className="text-red-600" />
            )}
          </button>
          <div className="absolute top-full right-0 mt-1 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {isOnline ? 'Connected' : 'Offline'}
          </div>
        </div>

        {/* Search */}
        <div className="relative" ref={searchRef}>
          <button
            className={`p-2 rounded-lg transition-colors ${showSearch ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search
              size={16}
              className={`transition-colors ${showSearch ? 'text-gray-900' : 'text-gray-700'}`}
            />
          </button>

          {showSearch && (
            <div className="fixed top-16 right-4 bg-white border border-gray-200 rounded-xl shadow-2xl z-[999999] w-96 overflow-hidden ring-1 ring-black/5 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200" style={{ pointerEvents: 'auto', isolation: 'isolate' }}>
              {/* Search Input */}
              <div className="p-3 border-b border-gray-100/50">
                <div className="flex items-center bg-gray-100/50 border border-gray-200/50 rounded-lg px-3 py-2.5 transition-colors focus-within:bg-white focus-within:border-blue-500/30 focus-within:ring-2 focus-within:ring-blue-500/10">
                  <Search size={14} className="text-gray-400 mr-2 mt-0.5" />
                  <input
                    type="text"
                    placeholder="Search projects, files..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
                    autoFocus
                  />
                </div>
              </div>

              {/* Search Results Below Input */}
              {(searchResults.length > 0 || searchQuery) && (
                <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                  {searchResults.length > 0 ? (
                    <div className={`${searchResults.length >= 4 ? 'mt-17' : 'mt-2'} flex flex-col py-1`}>
                      {searchResults.map((result, idx) => (
                        <button
                          key={idx}
                          className="w-full px-4 py-3 hover:bg-blue-50/50 cursor-pointer flex items-center gap-3 text-left transition-colors group border-b border-gray-50 last:border-0"
                          onClick={() => handleSearchSelect(result)}
                        >
                          <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100 group-hover:border-blue-100 group-hover:shadow-md transition-all">
                            <img src={result.item.icon} alt="" className="w-5 h-5 object-contain" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 truncate transition-colors">
                              {result.item.name}
                            </div>
                            <div className="text-xs text-gray-400 capitalize">
                              {result.type}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-8 text-center flex flex-col items-center gap-2">
                      <div className="p-3 bg-gray-50 rounded-full">
                        <Search size={20} className="text-gray-300" />
                      </div>
                      <p className="text-sm text-gray-500">No results found for &quot;{searchQuery}&quot;</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Profile Menu */}
        <div className="relative" ref={profileRef}>
          <button
            className={`flex items-center gap-2 p-1.5 rounded-lg transition-colors group ${showProfile ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => setShowProfile(!showProfile)}
          >
            <img
              src="/images/about-me.jpg"
              alt="Profile"
              className={`w-7 h-7 rounded-full object-cover border-2 shadow-sm transition-colors ${showProfile ? 'border-blue-200' : 'border-white group-hover:border-blue-200'}`}
            />
            <span className="text-sm font-medium text-gray-700 hidden sm:block">Abhay</span>
          </button>

          {showProfile && (
            <div className="fixed top-16 right-4 w-100 bg-white border border-gray-200 rounded-2xl shadow-2xl z-[999999] flex flex-col max-h-[80vh] overflow-hidden divide-y divide-gray-100" style={{ pointerEvents: 'auto', isolation: 'isolate' }}>
              {/* Profile Header */}
              <div className="p-6 bg-gradient-to-br from-blue-50/80 to-purple-50/80">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="relative">
                    <img
                      src="/images/about-me.jpg"
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover border-[3px] border-white shadow-lg"
                    />
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>

                  <div className="space-y-2">
                    <div className="inline-block px-4 py-1.5 bg-white/70 backdrop-blur-sm rounded-full shadow-sm">
                      <h3 className="font-bold text-lg text-gray-900">Abhay</h3>
                    </div>

                    <div className="inline-block px-4 py-1 bg-white/60 backdrop-blur-sm rounded-full shadow-sm">
                      <p className="text-sm text-gray-700">Full Stack Developer</p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100/80 backdrop-blur-sm rounded-full shadow-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                      <span className="text-sm font-medium text-green-700">Available for work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="px-5 py-3 bg-white">
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="font-bold text-lg text-gray-900">3+</div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="font-bold text-lg text-gray-900">15+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="font-bold text-lg text-gray-900">50+</div>
                    <div className="text-xs text-gray-600">Skills</div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="px-3 py-2 bg-white overflow-y-auto">
                {[
                  { name: 'About Me', icon: <User size={16} />, action: 'finder' },
                  { name: 'Resume', icon: '📄', action: 'resume' },
                  { name: 'Contact', icon: '💬', action: 'contact' }
                ].map((item) => (
                  <button
                    key={item.name}
                    className="w-full px-3 py-2.5 text-left hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg flex items-center gap-2 transition-all group mb-1 last:mb-0"
                    onClick={() => { openWindow(item.action); setShowProfile(false); }}
                  >
                    <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm border border-gray-100 group-hover:border-gray-200 transition-colors flex-shrink-0">
                      {typeof item.icon === 'string' ? (
                        <span className="text-sm">{item.icon}</span>
                      ) : (
                        <div className="text-gray-600">{item.icon}</div>
                      )}
                    </div>
                    <span className="flex-1 truncate text-left">{item.name}</span>
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 bg-gray-50/70 flex items-center justify-center text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  Made with <span className="text-red-500">❤️</span>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Control Center */}
        <div className="relative" ref={controlsRef}>
          <button
            className={`p-2.5 rounded-xl transition-all duration-200 group relative overflow-hidden ${showControls ? 'bg-gray-200' : 'hover:bg-gray-100/80'}`}
            onClick={() => setShowControls(!showControls)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
            <Settings size={16} className={`transition-colors ${showControls ? 'text-blue-600' : 'text-gray-700 group-hover:text-blue-600'}`} />
          </button>

          {showControls && (
            <div className="fixed top-16 right-4 w-96 bg-white border border-gray-200 rounded-3xl shadow-2xl z-[999999] p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-black/5 max-h-[85vh] overflow-y-auto" style={{ pointerEvents: 'auto', isolation: 'isolate' }}>

              {/* Header */}
              <div className="text-center pb-2 border-b border-gray-200/50">
                <h3 className="text-lg font-bold text-gray-800">Control Center</h3>
              </div>

              {/* Dark Mode Toggle */}
              <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm flex items-center justify-between transition-colors hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${isDarkMode ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-500'}`}>
                    {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
                  </div>
                  <span className="font-medium text-gray-700 text-sm">Dark Mode</span>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`w-11 h-6 rounded-full transition-colors duration-300 relative ${isDarkMode ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full shadow-md absolute top-1 transition-transform duration-300 ${isDarkMode ? 'left-6' : 'left-1'}`} />
                </button>
              </div>

              {/* Sound Control */}
              <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors select-none">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-green-100 rounded-full">
                    <Volume2 size={16} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-700 text-sm">Sound</div>
                  </div>
                  <div className="text-sm font-bold text-gray-600">{volume}%</div>
                </div>
                <div className="px-2 py-3" onTouchStart={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    onTouchStart={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="w-full h-4 bg-gray-200 rounded-full appearance-none cursor-pointer accent-green-500 touch-manipulation"
                    style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                  />
                </div>
              </div>

              {/* Display Control */}
              <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors select-none">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-orange-100 rounded-full">
                    <Sun size={16} className="text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-700 text-sm">Display</div>
                  </div>
                  <div className="text-sm font-bold text-gray-600">{brightness}%</div>
                </div>
                <div className="px-2 py-3" onTouchStart={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    onTouchStart={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="w-full h-4 bg-gray-200 rounded-full appearance-none cursor-pointer accent-orange-500 touch-manipulation"
                    style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                  />
                </div>
              </div>

              {/* Network Status */}
              <div className="flex items-center justify-center gap-2 pt-2 border-t border-gray-200/50">
                <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-xs font-medium text-gray-500">
                  {isOnline ? 'Connected' : 'Offline'}
                </span>
              </div>

            </div>
          )}
        </div>

        {/* Time & Calendar */}
        <div className="relative" ref={calendarRef}>
          <button
            className="hover:bg-gray-200 rounded px-2 py-1 transition-colors"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <time className="text-sm font-medium text-gray-700">{dayjs().format('ddd MMM D h:mm A')}</time>
          </button>

          {showCalendar && (
            <CalendarWidget onClose={() => setShowCalendar(false)} />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
