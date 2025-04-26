import { useState } from "react";

import Search from "@/assets/icons/search.svg?react";

type SearchBarProps = {
  onSearch: (username: string) => void;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim() !== "") {
      onSearch(username);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-[503px]">
      <input
        type="text"
        placeholder="Digite um usuário do GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full pl-4 pr-[4.875rem] py-[1.125rem] text-xl font-semibold placeholder-black text-black bg-white border border-gray-200 rounded-[.625rem] focus:outline-none focus:ring-2 focus:ring-blue"
      />
      <button
        onClick={handleSearch}
        className="absolute top-0 w-[3.875rem] right-0 h-full px-4 bg-blue text-white rounded-[.625rem] border border-gray-200 hover:bg-[#0049c7] flex items-center justify-center cursor-pointer"
      >
        <Search width={25} height={25} className="fill-white" />
      </button>
    </div>
  );
}
