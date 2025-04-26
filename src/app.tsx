import { useState } from "react";

import GitHubIcon from "@/assets/logos/icon.svg?react";
import GitHubText from "@/assets/logos/text.svg?react";

import { Card } from "./components/card";
import { SearchBar } from "./components/search-bar";

import { UserProfile } from "@/types/user-profile";
import { getProfile } from "@/services/api/github-api";

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await getProfile(username);
      setUser({
        avatar_url: data.avatar_url,
        name: data.name,
        bio: data.bio,
      });
    } catch (err) {
      setError(
        "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente"
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600 ">
      <div className="flex items-center flex-col w-[72.25rem] h-[33.5625rem] bg-black py-9">
        <div className="flex flex-row items-center gap-[.6875rem]">
          <GitHubIcon
            width={58}
            height={58}
            className="fill-white"
            aria-label="Isotipo do GitHub"
          />
          <h1 className="text-6xl font-semibold text-white">Perfil</h1>
          <GitHubText
            width={158}
            height={44}
            className="fill-white"
            aria-label="Logotipo do GitHub"
          />
        </div>
        <div className="mt-7">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="mt-9">
          {loading && <p className="text-white">Carregando...</p>}
          {error && (
            <p className="text-center text-red">
              Nenhum perfil foi encontrado com esse nome de usuário.{" "}
              <span className="block">Tente novamente</span>
            </p>
          )}
          {!error && user && <Card user={user} />}
        </div>
      </div>
    </div>
  );
}
