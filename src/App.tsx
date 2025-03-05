import BGVideo from "./components/BGVideo";
import Screen from "./components/Screen";
import { AudioProvider } from "./context/AudioCxt";

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <AudioProvider>
          <Screen />
          <BGVideo />
        </AudioProvider>
      </div>
    </>
  );
}

export default App;
