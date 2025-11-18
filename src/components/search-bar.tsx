import { useState } from "react";
import Search from "@/assets/icons/search.svg?react";

type SearchBarProps = {
  onSearch: (username: string) => void;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const [username, setUsername] = useState("");
  const cleanUsername = username.trim();

  return (
    <div className="relative mx-auto">
      <input
        type="text"
        placeholder="Digite um usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => {
          if (!cleanUsername || e.key !== "Enter") return;
          onSearch(cleanUsername);
        }}
        className="focus:ring-blue w-full rounded-[.625rem] border border-gray-200 bg-white py-[1.125rem] pr-17 pl-3 text-base font-semibold text-black placeholder-black focus:ring-2 focus:outline-none md:pr-[4.875rem] md:pl-4 md:text-xl"
      />
      <button
        onClick={() => {
          if (!cleanUsername) return;
          onSearch(cleanUsername);
        }}
        className="bg-blue absolute top-0 right-0 flex h-full w-[3.875rem] cursor-pointer items-center justify-center rounded-[.625rem] border border-gray-200 px-4 text-white transition-colors duration-300 hover:bg-[#0049c7]"
        title="Pesquisar"
      >
        <Search width={25} height={25} className="fill-white" />
      </button>
    </div>
  );
}
