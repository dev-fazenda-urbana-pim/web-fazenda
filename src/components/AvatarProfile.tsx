import useAuth from "@/app/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { LogOut } from 'lucide-react';
import { useState } from 'react';
import ConfirmModalLogout from "./ConfirmModalLogout";
import imagem1 from "./imagens/avatar_matheus.png";

export function AvatarProfile() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { signout } = useAuth()

  const handleOpenLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    signout();
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-16 h-16 cursor-pointer">
            <AvatarImage src={imagem1} alt="user-profile" className="w-full h-full rounded-full" />
            <AvatarFallback className="text-xl">CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" side="bottom" className="w-48 bg-white shadow-lg rounded-lg p-2 mt-2">
          <DropdownMenuLabel className="text-gray-700 font-semibold">Opções</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={handleOpenLogoutModal}
            className="flex items-center space-x-2 text-gray-900 hover:bg-gray-200 p-2 cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="fixed inset-0 z-50">
        <ConfirmModalLogout
          isVisible={showLogoutModal}
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      </div>
    </>
  );
}
