import { WindowControls } from "#components"
import { gallery, memories, photosLinks, places } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"
import clsx from "clsx"
import { Heart, MapPin, User } from "lucide-react"
import React, { useState } from "react"

const Photos = () => {
    const [activeTab, setActiveTab] = useState(1)
    const { openWindow } = useWindowStore()

    const handlePhotoClick = (item, collection) => {
        const currentIndex = collection.findIndex((i) => i.id === item.id)
        openWindow('imgfile', {
            name: `Photo ${item.id}`,
            imageUrl: item.img,
            collection,
            currentIndex
        })
    }

    const [selectedPlace, setSelectedPlace] = useState(null)
    const [selectedMemory, setSelectedMemory] = useState(null)

    const handlePlaceClick = (place) => {
        setSelectedPlace(place)
    }

    const renderContent = () => {
        switch (activeTab) {
            case 1: // Library
                return (
                    <div className="gallery">
                        <ul>
                            {gallery.map((item) => (
                                <li
                                    key={item.id}
                                    className="group relative overflow-hidden rounded-lg cursor-pointer"
                                    onClick={() => handlePhotoClick(item, gallery)}
                                >
                                    <img
                                        src={item.img}
                                        alt={`Gallery item ${item.id}`}
                                        className="transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </li>
                            ))}

                        </ul>
                    </div>
                )
            case 2: // Memories
                if (selectedMemory) {
                    return (
                        <div className="p-8">
                            <button
                                onClick={() => setSelectedMemory(null)}
                                className="mb-4 text-blue-500 hover:underline flex items-center gap-1"
                            >
                                ← Back to Memories
                            </button>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-800">{selectedMemory.title}</h3>
                                <p className="text-gray-500">{selectedMemory.subtitle}</p>
                            </div>
                            <div className="gallery">
                                <ul>
                                    {selectedMemory.images.map((item) => (
                                        <li
                                            key={item.id}
                                            className="group relative overflow-hidden rounded-lg cursor-pointer"
                                            onClick={() => handlePhotoClick(item, selectedMemory.images)}
                                        >
                                            <img
                                                src={item.img}
                                                alt={`Memory item ${item.id}`}
                                                className="transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                }
                return (
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Memories</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {memories.map((memory) => (
                                <div
                                    key={memory.id}
                                    className="relative aspect-4/3 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                                    onClick={() => setSelectedMemory(memory)}
                                >
                                    <img src={memory.cover} alt={memory.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                                        <span className="text-white font-bold text-lg">{memory.title}</span>
                                        <span className="text-white/80 text-sm">{memory.subtitle}</span>
                                        <span className="text-white/60 text-xs mt-1">{memory.images.length} Photos</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 3: // Places
                if (selectedPlace) {
                    return (
                        <div className="p-8">
                            <button
                                onClick={() => setSelectedPlace(null)}
                                className="mb-4 text-blue-500 hover:underline flex items-center gap-1"
                            >
                                ← Back to Places
                            </button>
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">{selectedPlace.place}</h3>
                            <div className="gallery">
                                <ul>
                                    {selectedPlace.images.map((item) => (
                                        <li
                                            key={item.id}
                                            className="group relative overflow-hidden rounded-lg cursor-pointer"
                                            onClick={() => handlePhotoClick(item, selectedPlace.images)}
                                        >
                                            <img
                                                src={item.img}
                                                alt={`Place item ${item.id}`}
                                                className="transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                }
                return (
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Places</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {places.map((place) => (
                                <div
                                    key={place.id}
                                    className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-100"
                                    onClick={() => handlePlaceClick(place)}
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{place.place}</h4>
                                        <p className="text-sm text-gray-500">{place.images.length} Photos</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 5: // Favorites
                return (
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                            Favorites <Heart className="text-red-500 fill-red-500" size={24} />
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            {gallery.slice(0, 2).map((item) => (
                                <div
                                    key={item.id}
                                    className="aspect-square rounded-lg overflow-hidden cursor-pointer relative group"
                                    onClick={() => handlePhotoClick(item, gallery)}
                                >
                                    <img src={item.img} alt="Favorite" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute top-2 right-2">
                                        <Heart className="text-red-500 fill-red-500 drop-shadow-md" size={16} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <>
            <div className="window-header">
                <WindowControls target="photos" />
                <div className="flex-1 text-center font-semibold text-gray-500">Photos</div>
                <div className="w-[52px]"></div> {/* Spacer for alignment */}
            </div>

            <div className="flex flex-1 min-h-0 bg-white">
                {/* Sidebar */}
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map((link) => (
                            <li
                                key={link.id}
                                onClick={() => {
                                    setActiveTab(link.id)
                                    setSelectedPlace(null)
                                    setSelectedMemory(null)
                                }}
                                className={clsx(activeTab === link.id && "bg-blue-100 text-blue-700")}
                            >
                                <img src={link.icon} alt={link.title} />
                                <p>{link.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {renderContent()}
                </div>
            </div>
        </>
    )
}

const PhotosWindow = WindowWrapper(Photos, "photos")

export default PhotosWindow
