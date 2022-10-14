import { MouseEventHandler, useState } from "react";

type AvatarType = "appearance" | "icon" | "logo";

export default function SwitchLogo({ avatars }: any) {
  const [avatar, setAvatar] = useState<AvatarType>(() => {
    if (avatars.appearance) return "appearance";
    if (avatars.icon) return "icon";
    if (avatars.logo) return "logo";
    return "appearance";
  });

  return (
    <>
      {avatars.appearance && (
        <button
          onClick={() => setAvatar("appearance")}
          className={`inline-block p-4 rounded-t-lg border-b-2 ${
            avatar === "appearance" ? "text-[#3ea6ff] border-blue-500" : ""
          }`}
        >
          Appearance
        </button>
      )}
      {avatars.icon && (
        <button
          type="button"
          onClick={() => setAvatar("icon")}
          className={`inline-block p-4 rounded-t-lg border-b-2 ${
            avatar === "icon" ? "text-[#3ea6ff] border-blue-500" : ""
          }`}
        >
          YouTube Icon
        </button>
      )}
      {avatars.logo && (
        <button
          type="button"
          onClick={() => setAvatar("logo")}
          className={`inline-block p-4 rounded-t-lg border-b-2 ${
            avatar === "logo" ? "text-[#3ea6ff] border-blue-500" : ""
          }`}
        >
          Logo
        </button>
      )}
      {avatars && <img src={avatars[avatar]} width={330} />}
    </>
  );
}
