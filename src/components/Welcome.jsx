import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
}

const renderText = (text, classNames, baseWeight = 400) => {
  return [...text].map((char, index) => (
    <span key={index} className={classNames} style={{ fontVariationSettings: `'wght' ${baseWeight}` }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))
}

const setupTextHover = (container, type) => {
  if (!container) return () => { };

  const letters = container.querySelectorAll('span');
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letters, weight, duration = 0.25) => {

    return gsap.to(letters, {
      duration, ease: 'power2.out', fontVariationSettings: `'wght' ${weight}`,
    })

  }
  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000)

      animateLetter(letter, min + (max - min) * intensity)
    })
  }
  const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter, base, 0.3))
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseLeave", handleMouseLeave);
  }
}



const Welcome = ({ isDropdownOpen }) => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useGSAP(() => {
    const titleCleanUp = setupTextHover(titleRef.current, 'title')
    const subtitleCleanUp = setupTextHover(subtitleRef.current, 'subtitle')
    return () => {
      subtitleCleanUp()
      titleCleanUp()
    }
  }, [])

  return (
    <section id="welcome">
      <div className={`transition-opacity duration-300 ${isDropdownOpen ? 'opacity-0 invisible lg:opacity-100 lg:visible' : 'opacity-100 visible'}`}>
        <p ref={subtitleRef}>
          {renderText("Hey, I'm Abhay! Welcome to my", "text-3xl font-georama", 100)}
        </p>
        <h1 ref={titleRef} className="mt-7">
          {renderText("portfolio", "text-9xl italic font-georama")}
        </h1>
      </div>
      <div className="small-screen">
        <p>This portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  )
}

export default Welcome
