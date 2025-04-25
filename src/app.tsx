import GitHubIcon from "@/assets/logos/icon.svg?react";
import GitHubText from "@/assets/logos/text.svg?react";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600">
      <div className="w-[1156px] h-[537px] bg-black">
        <p className="text-neutral-100">..</p>
        <GitHubIcon
          width={58}
          height={58}
          className="fill-white"
          aria-label="Isotipo do GitHub"
        />
        <GitHubText
          width={480}
          height={135}
          className="fill-white"
          aria-label="Logotipo do GitHub"
        />
      </div>
    </div>
  );
}
