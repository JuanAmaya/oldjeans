import { useState } from "react";

type folderProps = {
  openFolder: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  position: string;
  imageSrc: string;
  imageReverseSrc: string;
};

export default function Folder({
  openFolder,
  name,
  position,
  imageSrc,
  imageReverseSrc,
}: folderProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${position} absolute right-5 top-4`}
      onClick={() => openFolder(true)}
    >
      <button
        className="flex flex-col items-center hover:cursor-pointer"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      >
        <img
          src={isActive ? imageReverseSrc : imageSrc}
          alt={`${name} folder`}
          className="w-14"
        />
        <span
          className={`${
            isActive ? "bg-black text-white" : "bg-white text-black"
          } uppercase px-1 mt-2 text-md`}
        >
          {name}
        </span>
      </button>
    </div>
  );
}
