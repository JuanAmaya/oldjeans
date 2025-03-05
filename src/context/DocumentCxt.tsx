import { createContext, useContext, useState } from "react";

export type documentDataType = {
  isOpen: boolean;
  name: string;
};

const initialDocState: documentDataType = {
  isOpen: false,
  name: "",
};

const DocumentContext = createContext<{
  docState: documentDataType;
  setDocState: (newState: documentDataType) => void;
}>({
  docState: initialDocState,
  setDocState: () => {},
});

export function DocumentProvider({ children }: { children: React.ReactNode }) {
  const [docState, setDocState] = useState<documentDataType>(initialDocState);

  const updateDocState = (newState: documentDataType) => {
    setDocState((prevState) => {
      console.log(newState);
      if (
        prevState.isOpen === newState.isOpen &&
        prevState.name === newState.name
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
    <DocumentContext.Provider
      value={{
        docState: docState,
        setDocState: updateDocState,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocumentContext() {
  return useContext(DocumentContext);
}
