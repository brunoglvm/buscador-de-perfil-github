import { useState } from "react";
import { BeatLoader } from "react-spinners";

import { Card } from "./components/card";
import { SearchBar } from "./components/search-bar";

import GitHubIcon from "@/assets/logos/icon.svg?react";
import GitHubText from "@/assets/logos/text.svg?react";
import DotPattern from "@/assets/bg/dot-pattern.svg?react";

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
    <main className="flex h-screen items-center justify-center p-4">
      <div className="relative flex h-[100%] w-[100%] flex-col items-center bg-gray-600 py-9 md:h-[33.5625rem] md:max-w-[72.25rem] md:rounded-xl md:bg-black">
        <DotPattern className="pointer-events-none absolute -top-[4.125rem] -left-[4.375rem] -z-10 hidden fill-[#272727] md:block" />
        <div className="bg-blue pointer-events-none absolute -top-32 -right-80 z-0 size-100 rounded-full opacity-50 blur-3xl md:-top-36 md:-right-36 md:-z-10"></div>
        <div className="bg-blue pointer-events-none absolute bottom-0 -left-72 size-80 rounded-full opacity-30 blur-3xl md:-bottom-36"></div>

        <div className="pointer-events-none flex flex-row items-center gap-1 md:gap-2">
          <GitHubIcon
            className="size-7 fill-white md:size-[3.625rem]"
            aria-label="Isotipo do GitHub"
          />
          <h1 className="text-2xl font-semibold text-white md:text-5xl">
            Perfil
          </h1>
          <GitHubText
            className="h-5 w-15 fill-white md:h-[2.25rem] md:w-[8rem]"
            aria-label="Logotipo do GitHub"
          />
        </div>
        <SearchBar
          onSearch={handleSearch}
          className="mt-7 w-[100%] max-w-[31.4375rem]"
        />
        <div className="mt-9 w-[90%]">
          {error ? (
            <p className="text-red text-center">
              Nenhum perfil foi encontrado com esse nome de usuário.
              <span className="block">Tente novamente</span>
            </p>
          ) : (
            <>
              {loading ? (
                <div className="mt-6 flex justify-center">
                  <BeatLoader size={18} color="#005cff" />
                </div>
              ) : (
                user && <Card user={user} />
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
