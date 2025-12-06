import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useLayoutEffect, useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows, dockRects } = useWindowStore();
    const { isOpen, zIndex, isMaximized, isMinimized } = windows[windowKey] || {};
    const ref = useRef(null);
    const isMounted = useRef(false);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (isOpen) {
        el.style.display = ''
        const dockRect = dockRects[windowKey];
        if (dockRect) {
          const x = dockRect.left + dockRect.width / 2 - window.innerWidth / 2;
          const y = dockRect.top + dockRect.height / 2 - window.innerHeight / 2;

          gsap.fromTo(el,
            { x: x, y: y, scale: 0, opacity: 0, rotation: -15, xPercent: -50, yPercent: -50 },
            { x: 0, y: 0, scale: 1, opacity: 1, rotation: 0, duration: 0.5, ease: "back.out(1.2)", xPercent: -50, yPercent: -50 }
          );
        } else {
          gsap.fromTo(el, { scale: 0.8, opacity: 0, y: 40, rotation: -15, xPercent: -50, yPercent: -50 }, { scale: 1, opacity: 1, y: 0, rotation: 0, duration: 0.5, ease: "power3.out", xPercent: -50, yPercent: -50 })
        }
      } else {
        // Closing animation
        if (el.style.display === 'none') return; // Already hidden

        const dockRect = dockRects[windowKey];

        if (dockRect) {
          const x = dockRect.left + dockRect.width / 2 - window.innerWidth / 2;
          const y = dockRect.top + dockRect.height / 2 - window.innerHeight / 2;

          gsap.to(el, {
            x: x,
            y: y,
            scale: 0,
            rotation: -15,
            opacity: 0,
            duration: 0.5,
            ease: "back.inOut(1.2)",
            onComplete: () => {
              el.style.display = 'none';
            }
          });
        } else {
          gsap.to(el, {
            scale: 0.8,
            opacity: 0,
            y: 40,
            rotation: -15,
            duration: 0.5,
            ease: "back.inOut(1.2)",
            onComplete: () => {
              el.style.display = 'none';
            }
          });
        }
      }

    }, [isOpen])

    useGSAP(() => {
      gsap.registerPlugin(Draggable);
      const el = ref.current;
      if (!el || !isOpen) return;

      const header = el.querySelector(".window-header");

      // Center the window
      gsap.set(el, { xPercent: -50, yPercent: -50 })

      const [instance] = Draggable.create(el, {
        trigger: header,
        bounds: { top: 60, left: 0, width: window.innerWidth, height: 5000 },
        onPress: function () {
          focusWindow(windowKey);
        },
        disabled: isMaximized // Disable dragging when maximized
      })
      return () =>
        instance.kill();

    }, [isMaximized, isOpen]) // Re-run when isMaximized or isOpen changes

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (!isMounted.current) {
        if (!isOpen) el.style.display = 'none';
        isMounted.current = true;
      }

      if (isMinimized) {
        el.style.display = "none"; // Hide when minimized
      } else if (isOpen) {
        el.style.display = "";
      }
    }, [isOpen, isMinimized])

    const maximizedClass = isMaximized ? "!top-12 !left-0 !w-full !h-[calc(100vh-3rem)] !rounded-none !transform-none" : "left-1/2 top-1/2";

    const windowStyle = { zIndex };

    return (
      <section id={windowKey} ref={ref} style={windowStyle} className={`absolute ${maximizedClass}`}>
        <Component {...props} />
      </section>
    );
  };
  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
  return Wrapped;
};

export default WindowWrapper;
