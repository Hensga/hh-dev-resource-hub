export const Filter = ({ title, onClick, isActive, count }) => {
  const activeClass = isActive ? "text-[#ffd803]" : "";
  return (
    <li
      className={`flex items-center cursor-pointer hover:text-[#ffd803] ${activeClass}`}
      onClick={onClick}
    >
      {title ? (
        <div className="h-[6px] w-[6px] rounded-full bg-indigo-600 mr-2"></div>
      ) : null}
      {title}
      <sup className="text-xs text-gray-400">({count})</sup>
    </li>
  );
};
