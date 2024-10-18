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
import { Link } from "react-router-dom"   

export function Navbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="left"  className="flex flex-col justify-between">
        <div className="grid gap-6">
          <SheetHeader>
            <SheetTitle className="text-blue-indigo-dye">Módulos</SheetTitle>
            <SheetDescription hidden>
              Make changes to your modules here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>

          <nav>
            <ul className="grid gap-5">
              {listModules.map((module, index) => {
                const IconModule = module.icon

                return (
                  <Link to={module.href} key={index}>
                    <li className="flex items-center gap-2 text-blue-indigo-dye font-bold p-3">
                      <IconModule />
                      <p>{module.title}</p>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </nav>
        </div>

        <SheetFooter className="block text-blue-indigo-dye font-bold">
          <h3>Suporte</h3>
          <p>teste@gmail.com</p>
          <p>(12) 99999 - 0000</p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
