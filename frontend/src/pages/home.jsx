import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { redirect } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className="text-4xl font-bold underline">Home page</h1>

      <div className="flex flex-col items-center w-full space-y-4">
        <SignedOut>
          <p>You are not logged in</p>
          <SignInButton className="flex justify-center bg-indigo-400 w-1/2 py-4 uppercase text-white rounded hover:bg-indigo-500 active:-translate-y-1" />
        </SignedOut>

        <SignedIn>
          <p>You are logged in</p>
          <SignOutButton
            signOutCallback={() => redirect("/")}
            className="flex justify-center bg-indigo-400 w-1/2 py-4 uppercase text-white rounded hover:bg-indigo-500 active:-translate-y-1"
          />
        </SignedIn>
      </div>
    </div>
  );
}
