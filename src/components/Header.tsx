import { useNavigate } from "react-router-dom";
import { AvatarProfile } from "./AvatarProfile";

export default function Header() {
  const navigate = useNavigate()

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-blue-indigo-dye">
      <figure onClick={() => navigate(-1)} className="cursor-pointer">
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
