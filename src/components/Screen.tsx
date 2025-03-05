import { useState } from "react";
import Topbar from "./UI/Topbar";
import Desktop from "./UI/Desktop";
import PlayAudio from "./PlayAudio";
import { FocusTabProvider } from "../context/FocusTabCxt";
import { ImageProvider } from "../context/ImageCxt";
import { DocumentProvider } from "../context/DocumentCxt";
import { motion } from "motion/react";

export default function Screen() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  return (
    <div className="bg-white w-sm md:min-w-[798px] max-w-[798px] h-[600px] rounded-lg drop-shadow-xl overflow-hidden screen select-none pixelBG">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0 }}
      >
        <Topbar openInfoModal={setIsInfoModalOpen} />
        <FocusTabProvider>
          <ImageProvider>
            <DocumentProvider>
              <Desktop
                isModalOpen={isInfoModalOpen}
                setIsModalOpen={setIsInfoModalOpen}
              />
            </DocumentProvider>
          </ImageProvider>
        </FocusTabProvider>
        <PlayAudio />
      </motion.div>
    </div>
  );
}
