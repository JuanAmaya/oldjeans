import { useState } from "react";
import Modal from "./Modal";
import FolderWindow from "./Folder/FolderWindow";
import Folder from "./Folder/Folder";
import { useImageContext } from "../../context/ImageCxt";
import ShowImage from "./Folder/ImageTab";
import { useDocumentContext } from "../../context/DocumentCxt";
import DocumentTab from "./Folder/DocumentTab";

type desktopProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SUPERNATURAL_FOLDER = {
  name: "Supernatural",
  date: "24.6",
  files: [
    {
      id: 0,
      name: "SP_CVR",
      fileType: "jpg",
      action: "./Supernatural/Supernatural_CVR.jpg",
    },
    {
      id: 1,
      name: "SP_DN",
      fileType: "jpg",
      action: "./Supernatural/SN_DN.jpg",
    },
    {
      id: 2,
      name: "SP_HI",
      fileType: "jpg",
      action: "./Supernatural/SN_HI.jpg",
    },
    {
      id: 3,
      name: "SP_HR",
      fileType: "jpg",
      action: "./Supernatural/SN_HR.jpg",
    },
    {
      id: 4,
      name: "SP_HN",
      fileType: "jpg",
      action: "./Supernatural/SN_HN.jpg",
    },
    {
      id: 5,
      name: "SP_MJ",
      fileType: "jpg",
      action: "./Supernatural/SN_MJ.jpg",
    },
    {
      id: 6,
      name: "SP[demo]",
      fileType: "mp3",
      action: "./Supernatural/SP[demo].mp3",
    },
    {
      id: 7,
      name: "SP[doc]",
      fileType: "txt",
      action: "",
    },
    {
      id: 8,
      name: "SP(YT)",
      fileType: "html",
      action:
        "https://music.youtube.com/playlist?list=OLAK5uy_njHYTrAU6R9n__3q6vR7Gbht_jxw7W-20",
    },
    {
      id: 9,
      name: "SP(SP)",
      fileType: "html",
      action: "https://open.spotify.com/album/1FVw30SoC91lq1UZ6N9rwN",
    },
    {
      id: 10,
      name: "SP(AM)",
      fileType: "html",
      action: "https://music.apple.com/us/album/supernatural-single/1750576829",
    },
  ],
};

const HOWSWEET_FOLDER = {
  name: "How Sweet",
  date: "24.5",
  files: [
    {
      id: 0,
      name: "HS_CVR",
      fileType: "jpg",
      action: "./HowSweet/HowSweet_CVR.jpg",
    },
    {
      id: 1,
      name: "HS_DN",
      fileType: "jpg",
      action: "./HowSweet/HS_DN.jpg",
    },
    {
      id: 2,
      name: "HS_HI",
      fileType: "jpg",
      action: "./HowSweet/HS_HI.jpg",
    },
    {
      id: 3,
      name: "HS_HR",
      fileType: "jpg",
      action: "./HowSweet/HS_HR.jpg",
    },
    {
      id: 4,
      name: "HS_HN",
      fileType: "jpg",
      action: "./HowSweet/HS_HN.jpg",
    },
    {
      id: 5,
      name: "HS_MJ",
      fileType: "jpg",
      action: "./HowSweet/HS_MJ.jpg",
    },
    {
      id: 6,
      name: "HS[demo]",
      fileType: "mp3",
      action: "./HowSweet/HS[demo].mp3",
    },
    {
      id: 7,
      name: "HS[doc]",
      fileType: "txt",
      action: "",
    },
    {
      id: 8,
      name: "HS(YT)",
      fileType: "html",
      action:
        "https://music.youtube.com/playlist?list=OLAK5uy_l0nFJiyQV7ZaVmRh1gW9g1tk3UANGUipc",
    },
    {
      id: 9,
      name: "HS(SP)",
      fileType: "html",
      action: "https://open.spotify.com/album/0EhZEM4RRz0yioTgucDhJq",
    },
    {
      id: 10,
      name: "HS(AM)",
      fileType: "html",
      action: "https://music.apple.com/us/album/how-sweet-ep/1744448415",
    },
  ],
};

const GETUP_FOLDER = {
  name: "Get Up",
  date: "23.7",
  files: [
    {
      id: 0,
      name: "GU_CVR",
      fileType: "jpg",
      action: "./GetUp/GetUp_CVR.jpg",
    },
    {
      id: 1,
      name: "GU_DN",
      fileType: "jpg",
      action: "./GetUp/GU_DN.jpg",
    },
    {
      id: 2,
      name: "GU_HI",
      fileType: "jpg",
      action: "./GetUp/GU_HI.jpg",
    },
    {
      id: 3,
      name: "GU_HR",
      fileType: "jpg",
      action: "./GetUp/GU_HR.jpg",
    },
    {
      id: 4,
      name: "GU_HN",
      fileType: "jpg",
      action: "./GetUp/GU_HN.jpg",
    },
    {
      id: 5,
      name: "GU_MJ",
      fileType: "jpg",
      action: "./GetUp/GU_MJ.jpg",
    },
    {
      id: 6,
      name: "GU[demo]",
      fileType: "mp3",
      action: "./GetUp/GU[demo].mp3",
    },
    {
      id: 7,
      name: "GU[doc]",
      fileType: "txt",
      action: "",
    },
    {
      id: 8,
      name: "GU(YT)",
      fileType: "html",
      action:
        "https://music.youtube.com/playlist?list=OLAK5uy_lLXcmlXKis8WKClqvQEJnL7O_jUxUXr3s",
    },
    {
      id: 9,
      name: "GU(SP)",
      fileType: "html",
      action: "https://open.spotify.com/album/4N1fROq2oeyLGAlQ1C1j18",
    },
    {
      id: 10,
      name: "GU(AM)",
      fileType: "html",
      action:
        "https://music.apple.com/us/album/newjeans-2nd-ep-get-up/1695951888",
    },
  ],
};

const OMG_FOLDER = {
  name: "OMG",
  date: "23.1",
  files: [
    {
      id: 0,
      name: "OMG_CVR",
      fileType: "jpg",
      action: "./OMG/OMG_CVR.jpg",
    },
    {
      id: 1,
      name: "OMG_DN",
      fileType: "jpg",
      action: "./OMG/OMG_DN.jpg",
    },
    {
      id: 2,
      name: "OMG_HI",
      fileType: "jpg",
      action: "./OMG/OMG_HI.jpg",
    },
    {
      id: 3,
      name: "OMG_HR",
      fileType: "jpg",
      action: "./OMG/OMG_HR.jpg",
    },
    {
      id: 4,
      name: "OMG_HN",
      fileType: "jpg",
      action: "./OMG/OMG_HN.jpg",
    },
    {
      id: 5,
      name: "OMG_MJ",
      fileType: "jpg",
      action: "./OMG/OMG_MJ.jpg",
    },
    {
      id: 6,
      name: "OMG[demo]",
      fileType: "mp3",
      action: "./OMG/OMG[demo].mp3",
    },
    {
      id: 7,
      name: "OMG[doc]",
      fileType: "txt",
      action: "",
    },
    {
      id: 8,
      name: "OMG(YT)",
      fileType: "html",
      action:
        "https://music.youtube.com/playlist?list=OLAK5uy_kGx7BCyb1rmzKNpSDwSu6atiGRtZZb9nc",
    },
    {
      id: 9,
      name: "OMG(SP)",
      fileType: "html",
      action: "https://open.spotify.com/album/45ozep8uHHnj5CCittuyXj",
    },
    {
      id: 10,
      name: "OMG(AM)",
      fileType: "html",
      action:
        "https://music.apple.com/us/album/newjeans-omg-single/1659513441?l=es-MX",
    },
  ],
};

const NEWJEANS_FOLDER = {
  name: "New Jeans",
  date: "22.8",
  files: [
    {
      id: 0,
      name: "NJ_CVR",
      fileType: "jpg",
      action: "./NewJeans/NewJeans_CVR.jpg",
    },
    {
      id: 1,
      name: "NJ_DN",
      fileType: "jpg",
      action: "./NewJeans/NJ_DN.jpg",
    },
    {
      id: 2,
      name: "NJ_HI",
      fileType: "jpg",
      action: "./NewJeans/NJ_HI.jpg",
    },
    {
      id: 3,
      name: "NJ_HR",
      fileType: "jpg",
      action: "./NewJeans/NJ_HR.jpg",
    },
    {
      id: 4,
      name: "NJ_HN",
      fileType: "jpg",
      action: "./NewJeans/NJ_HN.jpg",
    },
    {
      id: 5,
      name: "NJ_MJ",
      fileType: "jpg",
      action: "./NewJeans/NJ_MJ.jpg",
    },
    {
      id: 6,
      name: "NJ[demo]",
      fileType: "mp3",
      action: "./NewJeans/NJ[demo].mp3",
    },
    {
      id: 7,
      name: "NJ[doc]",
      fileType: "txt",
      action: "",
    },
    {
      id: 8,
      name: "NJ(YT)",
      fileType: "html",
      action:
        "https://music.youtube.com/playlist?list=OLAK5uy_lxuD5WJ6rLmZZRUS9rVSot3WtE8BF4sc8",
    },
    {
      id: 9,
      name: "NJ(SP)",
      fileType: "html",
      action: "https://open.spotify.com/album/1HMLpmZAnNyl9pxvOnTovV",
    },
    {
      id: 10,
      name: "NJ(AM)",
      fileType: "html",
      action:
        "https://music.apple.com/us/album/newjeans-1st-ep-new-jeans/1635469682",
    },
  ],
};

export default function Desktop({ isModalOpen, setIsModalOpen }: desktopProps) {
  const [isSupernaturalFolderOpen, setIsSupernaturalFolderOpen] =
    useState(false);
  const [isHowSweetFolderOpen, setIsHowSweetFolderOpen] = useState(false);
  const [isGetUpFolderOpen, setIsGetUpFolderOpen] = useState(false);
  const [isOMGFolderOpen, setIsOMGFolderOpen] = useState(false);
  const [isNewJeansFolderOpen, setIsNewJeansFolderOpen] = useState(false);
  const { imgState, setImgState } = useImageContext();
  const { docState, setDocState } = useDocumentContext();

  return (
    <div className="h-full">
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      <div className="h-full relative">
        <Folder
          name="Supernatural"
          openFolder={setIsSupernaturalFolderOpen}
          position="right-5 top-4"
          imageSrc="./icons/folders/Supernatural.png"
          imageReverseSrc="./icons/folders/Supernatural-Reverse.png"
        />

        <Folder
          name="How Sweet"
          openFolder={setIsHowSweetFolderOpen}
          position="right-45 top-7"
          imageSrc="./icons/folders/HowSweet.png"
          imageReverseSrc="./icons/folders/HowSweet-Reverse.png"
        />

        <Folder
          name="Get Up"
          openFolder={setIsGetUpFolderOpen}
          position="right-8 top-27"
          imageSrc="./icons/folders/GetUp.png"
          imageReverseSrc="./icons/folders/GetUp-Reverse.png"
        />

        <Folder
          name="OMG"
          openFolder={setIsOMGFolderOpen}
          position="right-40 top-32"
          imageSrc="./icons/folders/OMG.png"
          imageReverseSrc="./icons/folders/OMG-Reverse.png"
        />

        <Folder
          name="New Jeans"
          openFolder={setIsNewJeansFolderOpen}
          position="right-10 top-55"
          imageSrc="./icons/folders/NewJeans.png"
          imageReverseSrc="./icons/folders/NewJeans-Reverse.png"
        />

        {imgState.isOpen && (
          <ShowImage
            imgSrc={imgState.imgSrc}
            name={imgState.name}
            setImgState={setImgState}
          />
        )}

        {docState.isOpen && (
          <DocumentTab name={docState.name} setDocState={setDocState} />
        )}

        {isSupernaturalFolderOpen && (
          <FolderWindow
            id="F-SP"
            closeFolder={setIsSupernaturalFolderOpen}
            folderContent={SUPERNATURAL_FOLDER}
          />
        )}
        {isHowSweetFolderOpen && (
          <FolderWindow
            id="F-HS"
            closeFolder={setIsHowSweetFolderOpen}
            folderContent={HOWSWEET_FOLDER}
          />
        )}
        {isGetUpFolderOpen && (
          <FolderWindow
            id="F-GU"
            closeFolder={setIsGetUpFolderOpen}
            folderContent={GETUP_FOLDER}
          />
        )}
        {isOMGFolderOpen && (
          <FolderWindow
            id="F-OMG"
            closeFolder={setIsOMGFolderOpen}
            folderContent={OMG_FOLDER}
          />
        )}
        {isNewJeansFolderOpen && (
          <FolderWindow
            id="F-NJ"
            closeFolder={setIsNewJeansFolderOpen}
            folderContent={NEWJEANS_FOLDER}
          />
        )}
      </div>
    </div>
  );
}
