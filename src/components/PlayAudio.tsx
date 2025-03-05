import { useEffect, useRef, useState } from "react";
import { useAudioContext } from "../context/AudioCxt";

export default function PlayAudio() {
  const [playAudio, setPlayAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { state } = useAudioContext();

  useEffect(() => {
    setPlayAudio(state.playAudio);
  }, [state.playAudio]);

  useEffect(() => {
    if (playAudio) {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [playAudio, state.audioSrc]);

  return (
    <>
      {state.audioSrc !== undefined && (
        <audio ref={audioRef} src={state.audioSrc} loop></audio>
      )}
    </>
  );
}
