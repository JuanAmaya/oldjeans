import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useAudioContext } from "../context/AudioCxt";

export default function BGVideo() {
  const vidRef = useRef<HTMLVideoElement>(null);
  const { state } = useAudioContext();

  useEffect(() => {
    if (state.playAudio) {
      if (vidRef.current) {
        vidRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    } else {
      if (vidRef.current) {
        vidRef.current.pause();
      }
    }
  }, [state.playAudio]);

  return (
    <AnimatePresence>
      {state.videoSrc !== undefined && (
        <motion.div
          className="absolute -z-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <video
            ref={vidRef}
            src={state.videoSrc}
            autoPlay
            loop
            webkit-playsinline
            playsInline
            className=" w-screen h-screen object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
