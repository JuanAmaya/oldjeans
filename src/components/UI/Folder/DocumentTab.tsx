import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useFocusTabContext } from "../../../context/FocusTabCxt";
import { documentDataType } from "../../../context/DocumentCxt";

type DocumentProps = {
  name: string;
  setDocState: (newState: documentDataType) => void;
};

export default function DocumentTab({ name, setDocState }: DocumentProps) {
  const [documentName, setDocumentName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [songList, setSongList] = useState<string[]>([]);
  const { focusTab, setFocusTab } = useFocusTabContext();

  useEffect(() => {
    switch (name) {
      case "SP[doc]":
        setDocumentName(name);
        setTitle("Supernatural (Single Album)");
        setDescription(
          `"Supernatural" is the third single album by South Korean girl group NewJeans. ADOR released it as a CD single on June 21, 2024, along with the B-side track "Right Now". Produced by 250, "Supernatural" contains an interpolation of a section from the 2009 track "Back of My Mind" by Manami and songwriter Pharrell. "Supernatural" and "Right Now" became NewJeans's first releases in Japanese, marking their debut in the Japanese music market.`
        );
        setSongList([
          "Supernatural",
          "Right Now",
          "Supernatural (Instrumental)",
          "Right Now (Instrumental)",
        ]);
        break;

      case "NJ[doc]":
        setDocumentName(name);
        setTitle("New Jeans (EP)");
        setDescription(
          `"New Jeans" is the debut extended play (EP) by the South Korean girl group NewJeans. It was released on August 1, 2022, by ADOR, a subsidiary of Hybe Corporation. Produced by Min Hee-jin, 250, and Park Jin-su, the EP draws from synth-pop and R&B and infuses elements of musical styles from the 1990s and 2000s decades.`
        );
        setSongList(["Attention", "Hype Boy", "Cookie", "Hurt"]);
        break;

      case "OMG[doc]":
        setDocumentName(name);
        setTitle("OMG (Single Album)");
        setDescription(
          `"OMG" is the first single album by South Korean girl group NewJeans. It was released on January 2, 2023, by ADOR. It contains the lead single of the same name and "Ditto", which was released prior to the single album on December 19, 2022.`
        );
        setSongList(["OMG", "Ditto"]);
        break;

      case "GU[doc]":
        setDocumentName(name);
        setTitle("Get Up (EP)");
        setDescription(
          `"Get Up" is the second EP by the South Korean girl group NewJeans, released on July 21, 2023 by ADOR. Its production draws from R&B and dance styles such as UK garage, drum and bass, Baltimore and Jersey club, characterized by lively beats and synthesizers. Lyrically, the EP mainly revolves around feelings ensued from friendship and love.`
        );
        setSongList([
          "New Jeans",
          "Super Shy",
          "ETA",
          "Cool With You",
          "Get Up",
          "ASAP",
        ]);
        break;

      case "HS[doc]":
        setDocumentName(name);
        setTitle("How Sweet (Single Album)");
        setDescription(
          `"How Sweet" is the second single album by the South Korean girl group NewJeans. It was released by ADOR on May 24, 2024, along with the B-side track "Bubble Gum". It has been described as a Miami bass and electropop song.`
        );
        setSongList([
          "How Sweet",
          "Bubble Gum",
          "How Sweet (Instrumental)",
          "Bubble Gum (Instrumental)",
        ]);
        break;
    }
  }, [name]);

  useEffect(() => {
    setFocusTab(name);
  }, [name]);

  return (
    <motion.div
      className={`${
        focusTab === name ? "z-2" : "z-1"
      } bg-white w-2xs md:w-90 border-2 absolute`}
      onDrag={() => setFocusTab(name)}
      onClick={() => setFocusTab(name)}
      drag
      dragElastic={0}
      dragMomentum={false}
      dragConstraints={{ left: 0, top: 0 }}
    >
      <div className="border-b-2 px-1 flex items-center justify-stretch">
        <button
          className="border-2 p-2 cursor-pointer hover:bg-black"
          onClick={() => setDocState({ isOpen: false, name: "" })}
        ></button>
        <span className="text-gray-500 text-lg">{documentName}.txt</span>
      </div>
      <div className="p-4 max-h-90 overflow-y-scroll custom-scrollbar">
        <h2 className="text-xl pb-8">{title}</h2>
        <p className="text-start pb-8">{description}</p>
        <span className="text-lg">Songs:</span>
        <ul className="list-disc pl-8">
          {songList.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
