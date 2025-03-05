import { motion } from "motion/react";
import { useAudioContext } from "../../../context/AudioCxt";
import FolderItems from "./FolderItems";
import { useFocusTabContext } from "../../../context/FocusTabCxt";
import { useEffect } from "react";

type folderWindowProps = {
  id: string;
  closeFolder: React.Dispatch<React.SetStateAction<boolean>>;
  folderContent: {
    name: string;
    date: string;
    files: { id: number; name: string; fileType: string; action: string }[];
  };
};

type handleAudioProps = {
  playAudioSrc: string;
  name: string;
};

export default function FolderWindow({
  id,
  closeFolder,
  folderContent,
}: folderWindowProps) {
  const { setState } = useAudioContext();
  const { focusTab, setFocusTab } = useFocusTabContext();

  const handleAudio = ({ playAudioSrc, name }: handleAudioProps) => {
    let setVideoSrc = "";
    if (name === "Supernatural") {
      setVideoSrc = "./Supernatural/SP_MV.mp4";
    } else if (name === "How Sweet") {
      setVideoSrc = "./HowSweet/HS_MV.mp4";
    } else if (name === "Get Up") {
      setVideoSrc = "./GetUp/GU_MV.mp4";
    } else if (name === "OMG") {
      setVideoSrc = "./OMG/OMG_MV.mp4";
    } else {
      setVideoSrc = "./NewJeans/NJ_MV.mp4";
    }

    setState({
      playAudio: true,
      audioSrc: playAudioSrc,
      videoSrc: setVideoSrc,
    });
  };

  useEffect(() => {
    setFocusTab(id);
  }, [id]);

  return (
    <>
      <motion.div
        drag
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={{ left: 0, top: 0 }}
        className={`${
          focusTab === id ? "z-2" : "z-1"
        } bg-white border-2 w-2xs md:w-90 absolute`}
        onDrag={() => setFocusTab(id)}
        onClick={() => setFocusTab(id)}
      >
        <div className="border-b-2 px-1 flex items-center justify-stretch">
          <button
            className="border-2 p-2 cursor-pointer hover:bg-black"
            onClick={() => closeFolder(false)}
          ></button>
          <span className="text-gray-500 text-lg">
            {folderContent.name} Folder
          </span>
        </div>

        <div className="border-b-2 px-1 w-full flex text-sm justify-between">
          <span>{folderContent.files.length} items</span>
          <span>{folderContent.date} MB in disk</span>
        </div>

        <ul className="border-t-2 mt-1 h-60 overflow-y-scroll custom-scrollbar grid-container">
          {folderContent.files.map((file) => (
            <FolderItems
              file={file}
              folderName={folderContent.name}
              handleAudio={handleAudio}
              key={file.id}
            />
          ))}
        </ul>
        <div className="w-full h-6 border-t-2"></div>
      </motion.div>
    </>
  );
}
