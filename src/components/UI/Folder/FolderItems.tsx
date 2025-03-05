import { useState } from "react";
import { useImageContext } from "../../../context/ImageCxt";
import { useDocumentContext } from "../../../context/DocumentCxt";

type FolderItemsProps = {
  file: { id: number; name: string; fileType: string; action: string };
  folderName: string;
  handleAudio: ({
    playAudioSrc,
    name,
  }: {
    playAudioSrc: string;
    name: string;
  }) => void;
};

export default function FolderItems({
  file,
  folderName,
  handleAudio,
}: FolderItemsProps) {
  const [isFileActive, setIsFileActive] = useState(false);
  const { setImgState } = useImageContext();
  const { setDocState } = useDocumentContext();

  return (
    <li key={file.id} className="w-max">
      <button
        className="max-w-30 flex flex-col items-center"
        onFocus={() => setIsFileActive(true)}
        onBlur={() => setIsFileActive(false)}
        onClick={() =>
          file.fileType === "jpg"
            ? setImgState({
                isOpen: true,
                imgSrc: file.action,
                name: file.name,
              })
            : file.fileType === "mp3"
            ? handleAudio({
                playAudioSrc: file.action,
                name: folderName,
              })
            : file.fileType === "txt"
            ? setDocState({
                isOpen: true,
                name: file.name,
              })
            : window.open(file.action)
        }
      >
        <img
          src={
            file.fileType === "jpg" && !isFileActive
              ? "./icons/files/Picture.png"
              : file.fileType === "mp3" && !isFileActive
              ? "./icons/files/Music.png"
              : file.fileType === "html" && !isFileActive
              ? "./icons/files/Webpage.png"
              : file.fileType === "txt" && !isFileActive
              ? "./icons/files/Text.png"
              : file.fileType === "jpg" && isFileActive
              ? "./icons/files/Picture-Reverse.png"
              : file.fileType === "mp3" && isFileActive
              ? "./icons/files/Music-Reverse.png"
              : file.fileType === "html" && isFileActive
              ? "./icons/files/Webpage-Reverse.png"
              : "./icons/files/Text-Reverse.png"
          }
          alt="Picture icon"
          className="w-10"
        />
        <span
          className={`${
            isFileActive ? "bg-black text-white" : "text-black bg-transparent"
          } text-sm break-words `}
        >
          {file.name}.{file.fileType}
        </span>
      </button>
    </li>
  );
}
