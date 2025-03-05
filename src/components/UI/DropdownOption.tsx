type OptionProps = {
  title: string;
  onClickFunc: () => void;
};

export default function DropdownOption({ title, onClickFunc }: OptionProps) {
  return (
    <span
      className="p-1 w-36 hover:bg-black hover:text-white cursor-pointer text-sm"
      onClick={onClickFunc}
    >
      {title}
    </span>
  );
}
