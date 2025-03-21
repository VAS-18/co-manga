"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import { MoonIcon, ShoppingCartIcon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button asChild variant={"ghost"} className="focus-visible:ring-0 focus-visible:ring-offset-0">
          {theme === "system" ? (
            <h1>Sun</h1>
          ) : theme === "dark" ? (
            <h1>Moon</h1>
          ) : (
            <h1>wild</h1>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
            Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
        className=" focus-visible:ring-0 focus-visible:ring-offset-0 p-2"
        onClick={()=> {
            setTheme('system')
        }}
        checked={theme === 'system'}
        >
            System
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
        className=" focus-visible:ring-0 focus-visible:ring-offset-0 p-2"
        onClick={()=> {
            setTheme('system')
        }}
        checked={theme === 'dark'}
        >
            dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
        className=" focus-visible:ring-0 focus-visible:ring-offset-0 p-2"
        onClick={()=> {
            setTheme('light')
        }}
        checked={theme === 'light'}
        >
            light
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
