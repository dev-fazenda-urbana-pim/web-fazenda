import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarProfile() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="user-profile" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
