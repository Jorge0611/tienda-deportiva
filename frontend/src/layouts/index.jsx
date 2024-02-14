import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <header className="bg-pink-200 text-black flex flex-row justify-between px-32 py-6">
        <h1 className="font-bold text-lg">[Page Logo]</h1>
        <nav className="flex flex-row items-center space-x-6">
          <ul className="flex flex-row space-x-6">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
          </ul>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
