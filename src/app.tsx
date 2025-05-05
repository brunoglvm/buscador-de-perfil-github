import { useState } from "react";
import { BeatLoader } from "react-spinners";

import { Card } from "./components/card";
import { SearchBar } from "./components/search-bar";

import GitHubIcon from "@/assets/logos/icon.svg?react";
import GitHubText from "@/assets/logos/text.svg?react";
// import DotPattern from "@/assets/bg/dot-pattern.svg?react";

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
        login: data.login,
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
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center flex-col w-[100%] h-[100%] bg-gray-600 md:w-[72.25rem] md:h-[33.5625rem] md:rounded-xl md:bg-black py-9">
        <div className="flex flex-row items-center gap-1 md:gap-2">
          <div className="w-7 h-7 md:w-[3.625rem] md:h-[3.625rem]">
            <GitHubIcon
              className="w-full h-full fill-white"
              aria-label="Isotipo do GitHub"
            />
          </div>
          <h1 className="text-2xl font-semibold text-white md:text-5xl">
            Perfil
          </h1>
          <div className="w-15 h-5 md:w-[8rem] md:h-[2.25rem]">
            <GitHubText
              className="w-full h-full fill-white"
              aria-label="Logotipo do GitHub"
            />
          </div>
        </div>
        <div className="w-[70%] mt-7 md:w-[31.4375rem]">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="w-[90%] mt-9">
          {error ? (
            <p className="text-center text-red">
              Nenhum perfil foi encontrado com esse nome de usuário.{" "}
              <span className="block">Tente novamente</span>
            </p>
          ) : (
            <div className="card-container">
              {loading ? (
                <div className="flex justify-center items-center h-[13.75rem]">
                  <BeatLoader size={18} color="#005cff" />
                </div>
              ) : (
                user && <Card user={user} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
