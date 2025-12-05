import useWindowStore from '#store/window'
import React from 'react';
import { dockApps } from '#constants';

const WindowControls = ({ target }) => {
  const { closeWindow, toggleMaximize, toggleMinimize } = useWindowStore()

  return (
    <div id="window-controls" className="flex items-center gap-2">
      {/* Close Button */}
      <div
        className="group w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center cursor-pointer overflow-hidden"
        onClick={() => {
          // Capture dock icon position for closing animation
          const { setDockRect } = useWindowStore.getState();
          const app = dockApps.find(a => a.id === target);
          if (app) {
            const iconEl = document.querySelector(`[aria-label="${app.name}"]`);
            if (iconEl) {
              const rect = iconEl.getBoundingClientRect();
              setDockRect(target, rect);
            }
          }
          closeWindow(target);
        }}
      >
        <svg className="w-2 h-2 text-[#4d0000] opacity-0 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      {/* Minimize Button */}
      <div
        className="group w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center cursor-pointer overflow-hidden"
        onClick={() => toggleMinimize(target)}
      >
        <svg className="w-2 h-2 text-[#995700] opacity-0 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        </svg>
      </div>

      {/* Maximize Button */}
      <div
        className="group w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center cursor-pointer overflow-hidden"
        onClick={() => toggleMaximize(target)}
      >
        <svg className="w-2 h-2 text-[#006500] opacity-0 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </div>
    </div>
  )
}

export default WindowControls
