import { motion } from "motion/react";
import { ImageDataType } from "../../../context/ImageCxt";
import { useFocusTabContext } from "../../../context/FocusTabCxt";
import { useEffect } from "react";

type showImageProps = {
  imgSrc: string;
  name: string;
  setImgState: (newState: ImageDataType) => void;
};

export default function ShowImage({
  imgSrc,
  name,
  setImgState,
}: showImageProps) {
  const { focusTab, setFocusTab } = useFocusTabContext();

  const handleClosingImg = () => {
    setImgState({
      isOpen: false,
      imgSrc: "",
      name: "",
    });
  };

  useEffect(() => {
    setFocusTab(name);
  }, [name]);

  return (
    <motion.div
      className={`${
        focusTab === name ? "z-2" : "z-1"
      } bg-white w-60 md:2xs md:w-70 border-2 absolute`}
      onDrag={() => setFocusTab(name)}
      onClick={() => setFocusTab(name)}
      drag
      dragElastic={0}
      dragMomentum={false}
      dragConstraints={{ left: 0, top: 0 }}
    >
      <div className="flex items-center px-1 justify-stretch">
        <button
          className="border-2 p-2 cursor-pointer hover:bg-black"
          onClick={() => handleClosingImg()}
        ></button>
        <span className="text-gray-500 text-lg text-center w-full">
          {name}.jpg
        </span>
      </div>
      <div className="border-t-2 overflow-y-scroll custom-scrollbar">
        <img src={imgSrc} alt={`${name} image`} />
      </div>
      <div className="w-full h-6 border-t-2"></div>
    </motion.div>
  );
}
