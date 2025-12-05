import { Dock, Home, Navbar, Welcome } from '#components'
import React from 'react'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable);
import gsap from "gsap";
import Terminal from '#windows/Terminal';
import Safari from '#windows/Safari';
import Resume from '#windows/Resume';
import Finder from '#windows/Finder';
import Text from '#windows/Text';
import Image from '#windows/Image';
import Contact from '#windows/Contact';
import Photos from '#windows/Photos';


const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  return (
    <main>
      <Navbar setIsDropdownOpen={setIsDropdownOpen} />
      <Welcome isDropdownOpen={isDropdownOpen} />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Home />
    </main>
  )
}

export default App
