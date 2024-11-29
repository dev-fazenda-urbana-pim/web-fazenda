import useAuth from "@/app/hooks/useAuth"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { Avatar, AvatarFallback } from "./ui/avatar"

export function AvatarProfile() {
  const { signout, user } = useAuth()

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarFallback>{user?.nome.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmação de Logout</AlertDialogTitle>
          <AlertDialogDescription>
            Você tem certeza que deseja sair? Esta ação irá desconectá-lo da sua conta.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={signout}>Sair</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
