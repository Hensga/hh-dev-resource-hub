export const Filter = ({ title, onClick }) => {
  return (
    <li className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      {title ? (
        <div className="h-[6px] w-[6px] rounded-full bg-indigo-600"></div>
      ) : null}
      {title}
    </li>
  );
};
