import { createContext, useContext, useState } from "react";

type audioDataType = {
  playAudio: boolean;
  audioSrc: string | undefined;
  videoSrc: string | undefined;
};

const initialState: audioDataType = {
  playAudio: false,
  audioSrc: undefined,
  videoSrc: undefined,
};

type providerType = {
  children: React.ReactNode;
};

const AudioContext = createContext<{
  state: audioDataType;
  setState: (newState: audioDataType) => void;
}>({
  state: initialState,
  setState: () => {},
});

export function AudioProvider({ children }: providerType) {
  const [state, setState] = useState<audioDataType>(initialState);

  const updateState = (newState: audioDataType) => {
    setState((prevState) => {
      if (
        prevState.playAudio === newState.playAudio &&
        prevState.audioSrc === newState.audioSrc &&
        prevState.videoSrc === newState.videoSrc
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
    <AudioContext.Provider
      value={{
        state: state,
        setState: updateState,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudioContext() {
  return useContext(AudioContext);
}
