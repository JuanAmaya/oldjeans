import { createContext, useContext, useState } from "react";

const FocusTabContext = createContext<{
  focusTab: string;
  setFocusTab: (tabId: string) => void;
}>({
  focusTab: "",
  setFocusTab: () => {},
});

export function FocusTabProvider({ children }: { children: React.ReactNode }) {
  const [focusTab, setFocusTab] = useState("");

  const updateFocusTab = (tabId: string) => {
    console.log("tabId", tabId);
    setFocusTab((prevTabId) => {
      if (prevTabId === tabId) {
        return prevTabId;
      }
      return tabId;
    });
  };

  return (
    <FocusTabContext.Provider
      value={{
        focusTab: focusTab,
        setFocusTab: updateFocusTab,
      }}
    >
      {children}
    </FocusTabContext.Provider>
  );
}

export function useFocusTabContext() {
  return useContext(FocusTabContext);
}
