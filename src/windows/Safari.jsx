// import { WindowControls } from "#components"
// import { blogPosts } from "#constants"
// import WindowWrapper from "#hoc/WindowWrapper"
// import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react"

// const Safari = () => {
//   return (
//     <>
//      <div id="window-header">
//         <WindowControls target="safari"/>

//         <PanelLeft className="ml-10 icon"/>
//         <div className="flex items-center gap-1 ml-5">
//             <ChevronLeft className="icon"/>
//             <ChevronRight className="icon"/>
//         </div>
//         <div className="flex-1 flex-center gap-3">
//             <ShieldHalf className="icon"/>
//             <div className="search">
//                 <Search className="icon" />
//                 <input type="text" placeholder="Search..." className="flex-1" />
//             </div>
//         </div>
//         <div className="flex items-center gap-5">
//             <Share className="icon"/>
//             <Plus className="icon"/>
//             <Copy className="icon"/>
//         </div>
//         </div> 

//         <div className="blog">
//             <h2>My Developer Blog</h2>
//             <div className="space-y-8">
//                 {blogPosts.map(({id, image, title, date, link}) => (
//                     <div key={id} className="blog-post">
//                         <div className="col-span-2">
//                             <img src={image} alt={title} />
//                         </div>
//                         <div className="content">
//                             <p>{date}</p>
//                             <h3>{title}</h3>
//                             <a href={link} target="_blank" rel="noopener noreferrer">Check out the full post <MoveRight className="icon-hover"/></a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </>
//   )
// }

// const SafariWindow = WindowWrapper(Safari, 'safari')

// export default SafariWindow


import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import { Construction, Clock, Sparkles } from "lucide-react"

// Previous blog implementation commented out
// import { blogPosts } from "#constants"
// import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react"

const Safari = () => {
  return (
    <>
      <div className="window-header">
        <WindowControls target="safari" />
      </div>

      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <div className="relative inline-block">
              <Construction size={64} className="text-blue-500 mb-4" />
              <Sparkles size={24} className="absolute -top-2 -right-2 text-yellow-500 animate-pulse" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">Articles Coming Soon!</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I'm currently working on some amazing articles about web development,
            React, and modern JavaScript. Stay tuned!
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            <Clock size={16} />
            <span className="font-medium">Working on it...</span>
          </div>
        </div>
      </div>
    </>
  )
}

const SafariWindow = WindowWrapper(Safari, 'safari')

export default SafariWindow
