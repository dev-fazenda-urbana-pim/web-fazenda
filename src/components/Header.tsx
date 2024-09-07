import { AvatarProfile } from "./AvatarProfile";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-blue-indigo-dye">
      <figure>
        <img
          src="/logo-pim4.png"
          alt="PIM Logo"
          className="pim-logo"
        />
      </figure>

      <AvatarProfile />
    </header>
  )
}
