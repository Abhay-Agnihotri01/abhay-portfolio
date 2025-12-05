import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { Calendar, Clock, ChevronLeft, ChevronRight, X } from 'lucide-react'

dayjs.extend(advancedFormat)

const CalendarWidget = ({ onClose }) => {
  const [currentDate, setCurrentDate] = useState(dayjs())
  const [currentTime, setCurrentTime] = useState(dayjs())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="fixed top-16 right-4 w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl z-[999999] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 flex flex-col"
      style={{
        maxHeight: '85vh',
        pointerEvents: 'auto',
        isolation: 'isolate'
      }}
    >
        {/* Header Section */}
        <div className="relative px-4 py-4 bg-gradient-to-br from-blue-50/90 via-indigo-50/80 to-purple-50/90">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

          {/* Month Navigation */}
          <div className="relative flex items-center justify-between px-2">
            <button
              onClick={() => setCurrentDate(currentDate.subtract(1, 'month'))}
              className="p-2 hover:bg-white/60 active:bg-white/80 rounded-xl transition-all duration-200 group"
            >
              <ChevronLeft size={18} className="text-gray-600 group-hover:text-gray-900 transition-all" />
            </button>

            <div className="flex flex-col items-center">
              <h3 className="font-bold text-lg text-gray-900">{currentDate.format('MMMM')}</h3>
              <p className="text-sm font-medium text-blue-600/80">{currentDate.format('YYYY')}</p>
            </div>

            <button
              onClick={() => setCurrentDate(currentDate.add(1, 'month'))}
              className="p-2 hover:bg-white/60 active:bg-white/80 rounded-xl transition-all duration-200 group"
            >
              <ChevronRight size={18} className="text-gray-600 group-hover:text-gray-900 transition-all" />
            </button>
          </div>
        </div>

        {/* Week Days Header */}
        <div className="px-4 py-2 bg-gray-50/50 border-b border-gray-100">
          <div className="grid grid-cols-7 gap-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => {
              const isCurrentWeekday = index === currentTime.day()
              return (
                <div key={index} className="h-8 flex items-center justify-center">
                  <span className={`text-xs font-semibold uppercase w-6 h-6 flex items-center justify-center rounded-full transition-all ${
                    isCurrentWeekday 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'text-gray-500'
                  }`}>
                    {day}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
          <div className="grid grid-cols-7 gap-1.5">
            {(() => {
              const today = dayjs()
              const startOfMonth = currentDate.startOf('month')
              const endOfMonth = currentDate.endOf('month')
              const startOfCalendar = startOfMonth.startOf('week')
              const endOfCalendar = endOfMonth.endOf('week')

              const days = []
              let day = startOfCalendar

              // Ensure we always show 6 weeks to keep height consistent or dynamic
              // Using a while loop to cover the full range
              while (day.isBefore(endOfCalendar) || days.length < 42) {
                const isCurrentMonth = day.isSame(currentDate, 'month')
                const isToday = day.isSame(today, 'day')
                const dayNumber = day.date()
                const dateKey = day.format('YYYY-MM-DD')

                days.push(
                  <div
                    key={dateKey}
                    className={`aspect-square flex items-center justify-center text-sm font-medium cursor-pointer transition-all duration-300 rounded-xl relative group ${isCurrentMonth
                      ? isToday
                        ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-105 ring-2 ring-blue-200/50'
                        : 'text-gray-700 hover:bg-gray-100/80 hover:scale-110 hover:shadow-sm hover:z-10'
                      : 'text-gray-300 hover:text-gray-400 hover:bg-gray-50/50'
                      }`}
                  >
                    <span className="relative z-10">{dayNumber}</span>
                    {isToday && (
                      <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse" />
                    )}
                  </div>
                )

                day = day.add(1, 'day')
              }

              return days
            })()}
          </div>
        </div>

        {/* Footer Section */}
        <div className="px-5 py-4 bg-gray-50/50 border-t border-gray-100/50 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Current Time</span>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-blue-500" />
                <span className="font-mono text-sm font-bold text-gray-800">
                  {currentTime.format('h:mm:ss A')}
                </span>
              </div>
            </div>

            <div className="h-8 w-px bg-gray-200/60 mx-2" />

            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Today</span>
              <span className="text-xs font-semibold text-gray-700">
                {currentTime.format('ddd, MMM Do')}
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CalendarWidget