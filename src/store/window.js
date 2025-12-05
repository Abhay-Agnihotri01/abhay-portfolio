import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    dockRects: {},
    setDockRect: (id, rect) => set((state) => {
        state.dockRects[id] = rect;
    }),
    openWindow: (windowKey, data = null) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.isMinimized = false; // Reset minimized state on open
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
    }),
    closeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.isMaximized = false; // Reset maximized state
        win.isMinimized = false; // Reset minimized state
        win.zIndex = INITIAL_Z_INDEX
        win.data = null;
    }),
    focusWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (win.isMinimized) win.isMinimized = false; // Un-minimize on focus
        win.zIndex = state.nextZIndex++;
    }),
    toggleMaximize: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (win) win.isMaximized = !win.isMaximized;
    }),
    toggleMinimize: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (win) win.isMinimized = !win.isMinimized;
    }),
})))

export default useWindowStore;