import { createContext, useContext, useState } from "react";

export type ImageDataType = {
  isOpen: boolean;
  imgSrc: string;
  name: string;
};

const initialImgState: ImageDataType = {
  isOpen: false,
  imgSrc: "",
  name: "",
};

const ImageContext = createContext<{
  imgState: ImageDataType;
  setImgState: (newState: ImageDataType) => void;
}>({
  imgState: initialImgState,
  setImgState: () => {},
});

export function ImageProvider({ children }: { children: React.ReactNode }) {
  const [imgState, setImgState] = useState<ImageDataType>(initialImgState);

  const updateImgState = (newState: ImageDataType) => {
    setImgState((prevState) => {
      if (
        prevState.isOpen === newState.isOpen &&
        prevState.imgSrc === newState.imgSrc &&
        prevState.name === newState.name
      ) {
        return prevState;
      }
      return {
        ...prevState,
        ...newState,
      };
    });
  };

  return (
    <ImageContext.Provider
      value={{
        imgState: imgState,
        setImgState: updateImgState,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}

export function useImageContext() {
  return useContext(ImageContext);
}
