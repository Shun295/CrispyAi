import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import DarkModeToggle from "@/components/ui/DarkModeToggle"; // Import the toggle
import React from "react";

function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 bg-background text-foreground flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 text-transparent bg-clip-text tracking-wide">
          CHRISPY AI
        </h2>
      </div>
      <div className="flex gap-5 items-center">
        <DarkModeToggle /> {/* Add Dark Mode Toggle Here */}
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
