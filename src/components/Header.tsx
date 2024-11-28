import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { AvatarProfile } from "./AvatarProfile";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-blue-indigo-dye">
      <figure onClick={() => navigate("/")} className="cursor-pointer">
        <img
          src="/logo-pim4.png"
          alt="PIM Logo"
          className="pim-logo"
        />
      </figure>

      <Popover>
        <PopoverTrigger asChild>
          <AvatarProfile />
        </PopoverTrigger>
        <PopoverContent
          className={cn(
            "rounded-md bg-slate-800 text-white p-4 shadow-lg w-56",
            "flex flex-col space-y-2"
          )}
        >
          <div className="flex flex-col items-start">
            <span className="font-bold text-lg">Matheus Aurelio</span>
            <span className="text-sm text-gray-400">Matheus.A@urbanino.com</span>
          </div>
          <button className="w-full text-left text-sm hover:underline mt-2">
            Configurar conta
          </button>
          <button className="w-full text-left text-sm text-red-500 hover:underline">
            Sair
          </button>
        </PopoverContent>
      </Popover>
    </header>
  );
}
