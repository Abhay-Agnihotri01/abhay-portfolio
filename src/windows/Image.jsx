import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import React, { useEffect } from "react";

const Image = () => {
  const { windows, openWindow } = useWindowStore();
  const data = windows.imgfile?.data;

  const { collection, currentIndex } = data || {};

  useEffect(() => {
    if (!data || !collection) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        if (currentIndex < collection.length - 1) {
          const nextItem = collection[currentIndex + 1];
          openWindow('imgfile', {
            name: `Photo ${nextItem.id}`,
            imageUrl: nextItem.img,
            collection,
            currentIndex: currentIndex + 1
          });
        }
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          const prevItem = collection[currentIndex - 1];
          openWindow('imgfile', {
            name: `Photo ${prevItem.id}`,
            imageUrl: prevItem.img,
            collection,
            currentIndex: currentIndex - 1
          });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [data, collection, currentIndex, openWindow]);

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div className="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="flex-1 overflow-auto custom-scrollbar p-5 bg-white flex justify-center items-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-full object-contain rounded shadow-lg"
          />
        ) : (
          <p className="text-gray-500">No image to display</p>
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;