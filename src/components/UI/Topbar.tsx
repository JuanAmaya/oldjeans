import { useState } from "react";
import DropdownOption from "./DropdownOption";
import ShowDate from "./ShowDate";
import { useAudioContext } from "../../context/AudioCxt";

type TopbarProps = {
  openInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Topbar({ openInfoModal }: TopbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGoOpen, setIsGoOpen] = useState(false);
  const [isFileOpen, setIsFileOpen] = useState(false);
  const { state, setState } = useAudioContext();

  const handleBlur = (func: React.Dispatch<React.SetStateAction<boolean>>) => {
    setTimeout(function () {
      func(false);
    }, 80);
  };

  return (
    <>
      <div className="h-8 border-b-2 flex justify-between px-4 bg-white">
        <div className="flex">
          <button
            className={`${
              isMenuOpen ? "bg-black" : "bg-transparent"
            } cursor-pointer px-2`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            onBlur={() => handleBlur(setIsMenuOpen)}
          >
            {!isMenuOpen && (
              <img src="./icons/Menu.png" alt="Menu Icon" className="w-5" />
            )}
            {isMenuOpen && (
              <img
                src="./icons/Menu-Reverse.png"
                alt="Menu Icon"
                className="w-5"
              />
            )}
          </button>

          <BarOption
            title="Go"
            isOptionOpen={isGoOpen}
            onClickFunc={setIsGoOpen}
            onBlurFunc={handleBlur}
            setIsOptionOpen={setIsGoOpen}
          />

          {state.audioSrc !== undefined && (
            <BarOption
              title="File"
              isOptionOpen={isFileOpen}
              onClickFunc={setIsFileOpen}
              onBlurFunc={handleBlur}
              setIsOptionOpen={setIsFileOpen}
            />
          )}
        </div>
        <ShowDate />
      </div>

      {isMenuOpen && (
        <DropdownMenu style={"ml-4"}>
          <DropdownOption
            title="About"
            onClickFunc={() => openInfoModal(true)}
          />
          <DropdownOption
            title="Restart"
            onClickFunc={() => location.reload()}
          />
        </DropdownMenu>
      )}

      {isGoOpen && (
        <DropdownMenu style="ml-13">
          <DropdownOption
            title="Official Page"
            onClickFunc={() => {
              window.open("https://newjeans.kr/");
            }}
          />

          <DropdownOption
            title="Youtube"
            onClickFunc={() =>
              window.open("https://www.youtube.com/@NewJeans_official")
            }
          />

          <DropdownOption
            title="Spotify"
            onClickFunc={() =>
              window.open(
                "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
              )
            }
          />

          <DropdownOption
            title="Apple Music"
            onClickFunc={() =>
              window.open(
                "https://music.apple.com/us/artist/newjeans/1635469693"
              )
            }
          />
        </DropdownMenu>
      )}

      {isFileOpen && (
        <DropdownMenu style="ml-22">
          {state.playAudio && (
            <DropdownOption
              title="Pause"
              onClickFunc={() => {
                setState({
                  playAudio: false,
                  audioSrc: state.audioSrc,
                  videoSrc: state.videoSrc,
                });
              }}
            />
          )}
          {!state.playAudio && (
            <DropdownOption
              title="Play"
              onClickFunc={() => {
                setState({
                  playAudio: true,
                  audioSrc: state.audioSrc,
                  videoSrc: state.videoSrc,
                });
              }}
            />
          )}

          <DropdownOption
            title="Stop"
            onClickFunc={() =>
              setState({
                playAudio: false,
                audioSrc: undefined,
                videoSrc: undefined,
              })
            }
          />
        </DropdownMenu>
      )}
    </>
  );
}

type barOptionProps = {
  title: string;
  onClickFunc: (prev: any) => void;
  onBlurFunc: (
    setIsGoOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  isOptionOpen: boolean;
  setIsOptionOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function BarOption({
  title,
  onClickFunc,
  onBlurFunc,
  isOptionOpen,
  setIsOptionOpen,
}: barOptionProps) {
  return (
    <button
      className={`${
        isOptionOpen ? "bg-black text-white" : "bg-transparent text-black"
      } px-2`}
      onClick={() => onClickFunc((prev: boolean) => !prev)}
      onBlur={() => onBlurFunc(setIsOptionOpen)}
    >
      <span>{title}</span>
    </button>
  );
}

export function DropdownMenu({
  style,
  children,
}: {
  style: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${style} absolute bg-white flex flex-col w-min border-x-1 border-b-1 z-5`}
    >
      {children}
    </div>
  );
}
