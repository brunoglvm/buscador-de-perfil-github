import { UserProfile } from "@/types/user-profile";

type CardProps = {
  user: UserProfile;
};

export function Card({ user }: CardProps) {
  return (
    <div className="mx-auto px-4 py-4 bg-gray-400 rounded-[1.5rem] flex flex-col items-center gap-8 md:flex-row md:w-[50.25rem] md:px-[2.0625rem] md:py-[1.125rem]">
      <img
        src={user.avatar_url}
        alt={`Foto de perfil de ${user.name}`}
        className="w-[13.75rem] h-[13.75rem] rounded-full outline-2 outline-blue object-cover"
      />
      <div className="flex flex-col justify-start items-center gap-4 md:items-start">
        <h2 className="text-xl font-bold text-blue">
          {user.name || user.login}
        </h2>
        <p className="text-[.9375rem] font-light text-black">
          {user.bio || "Sem descrição disponível."}
        </p>
      </div>
    </div>
  );
}
