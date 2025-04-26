import { UserProfile } from "@/types/user-profile";

type CardProps = {
  user: UserProfile;
};

export function Card({ user }: CardProps) {
  return (
    <div className="w-[50.25rem] px-[2.0625rem] py-[1.125rem] bg-gray-400 rounded-[1.5rem] flex flex-row items-center gap-8">
      <img
        src={user.avatar_url}
        alt={`Foto de perfil de ${user.name}`}
        className="w-[13.75rem] h-[13.75rem] rounded-full outline-2 outline-blue"
      />
      <div className="flex flex-col justify-start gap-4">
        <h2 className="text-xl font-bold text-blue">{user.name}</h2>
        <p className="text-[.9375rem] font-light text-black">
          {user.bio || "Sem descrição disponível."}
        </p>
      </div>
    </div>
  );
}
