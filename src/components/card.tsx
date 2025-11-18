import { UserProfile } from "@/types/user-profile";

type CardProps = {
  user: UserProfile;
};

export function Card({ user }: CardProps) {
  return (
    <div className="mx-auto flex flex-col items-center gap-8 rounded-3xl bg-gray-400 px-4 py-4 md:w-201 md:flex-row md:px-[2.0625rem] md:py-[1.125rem]">
      <a
        href={user.url}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity duration-180 hover:opacity-90"
      >
        <img
          src={user.avatar}
          alt={`Foto de perfil de ${user.name}`}
          className="outline-blue size-55 rounded-full object-cover outline"
        />
      </a>
      <div className="flex flex-col items-center justify-start gap-4 md:items-start">
        <h2 className="text-blue text-xl font-bold">
          {user.name || user.login}
        </h2>
        <p className="text-[.9375rem] font-light text-black">
          {user.bio || "Sem descrição disponível."}
        </p>
      </div>
    </div>
  );
}
