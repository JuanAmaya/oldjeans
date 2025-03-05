type ModalProps = {
  setIsModalOpen: (value: boolean) => void;
};

export default function Modal({ setIsModalOpen }: ModalProps) {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pt-0 z-4">
        <div className="bg-white max-w-lg p-1 border-1 w-2xs md:w-xl">
          <div className="border-2 px-12 py-8">
            <p>
              NewJeans is a South Korean girl group composed of five members:
              Minji, Hanni, Danielle, Haerin, and Hyein.
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsModalOpen(false)}
        className="fixed top-0 left-0 w-screen h-screen"
      />
    </>
  );
}
