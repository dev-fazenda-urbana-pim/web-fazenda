import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { listModules } from "@/data/listModules"

export function Navbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col justify-stretch">
        <SheetHeader>
          <SheetTitle className="text-blue-800">Módulos</SheetTitle>
          <SheetDescription hidden>
            Make changes to your modules here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        <nav>
          <ul>
            {listModules.map((module, index) => {
              const IconModule = module.icon

              return (
                <a href={module.href} key={index}>
                  <li className="flex items-center gap-2 text-blue-800 font-bold">
                    <IconModule />
                    <p>{module.title}</p>
                  </li>
                </a>
              )
            })}
          </ul>
        </nav>

        <SheetFooter className="block mt-4 text-blue-800 font-bold">
          <h3>Suporte</h3>
          <p>teste@gmail.com</p>
          <p>(12) 99999 - 0000</p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
