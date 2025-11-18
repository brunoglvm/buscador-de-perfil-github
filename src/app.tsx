import { useState } from "react";
import { BeatLoader } from "react-spinners";

import { Card } from "./components/card";
import { SearchBar } from "./components/search-bar";

import GitHubIcon from "@/assets/logos/icon.svg?react";
import GitHubText from "@/assets/logos/text.svg?react";
// import DotPattern from "@/assets/dot-pattern.svg?react";

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
        avatar: data.avatar_url,
        login: data.login,
        name: data.name,
        bio: data.bio,
        url: data.html_url,
      });

      console.log(data);
    } catch (err) {
      setError(
        "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente",
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex h-[100%] w-[100%] flex-col items-center bg-gray-600 py-9 md:h-[33.5625rem] md:w-[72.25rem] md:rounded-xl md:bg-black">
        <div className="flex flex-row items-center gap-1 md:gap-2">
          <div className="size-7 md:h-[3.625rem] md:w-[3.625rem]">
            <GitHubIcon
              className="h-full w-full fill-white"
              aria-label="Isotipo do GitHub"
            />
          </div>
          <h1 className="text-2xl font-semibold text-white md:text-5xl">
            Perfil
          </h1>
          <div className="h-5 w-15 md:h-[2.25rem] md:w-[8rem]">
            <GitHubText
              className="h-full w-full fill-white"
              aria-label="Logotipo do GitHub"
            />
          </div>
        </div>
        <div className="mt-7 w-[70%] md:w-[31.4375rem]">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="mt-9 w-[90%]">
          {error ? (
            <p className="text-red text-center">
              Nenhum perfil foi encontrado com esse nome de usuário.{" "}
              <span className="block">Tente novamente</span>
            </p>
          ) : (
            <div className="card-container">
              {loading ? (
                <div className="flex h-[13.75rem] items-center justify-center">
                  <BeatLoader size={18} color="#005cff" />
                </div>
              ) : (
                user && <Card user={user} />
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
