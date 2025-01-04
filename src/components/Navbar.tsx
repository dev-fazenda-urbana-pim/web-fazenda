import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { listModules } from "@/data/listModules";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Menu</Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col justify-between h-screen max-h-full overflow-hidden"
      >
        {/* Top Section with Scroll */}
        <div className="grid gap-6 overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-blue-indigo-dye">Módulos</SheetTitle>
            <SheetDescription hidden>
              Make changes to your modules here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>

          <nav>
            <ul className="grid gap-5">
              {listModules.map((module) => {
                const IconModule = module.icon;

                return (
                  <Link to={module.href} key={module.title}>
                    <li className="flex items-center gap-2 text-blue-indigo-dye font-bold p-3">
                      <IconModule />
                      <p>{module.title}</p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Footer Section */}
        <SheetFooter className="block text-blue-indigo-dye font-bold border-t pt-4">
          <h3>Suporte</h3>
          <p>Urbanino@gmail.com</p>
          <p>(12) 99999 - 0000</p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
