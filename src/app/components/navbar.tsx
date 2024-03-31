import { auth, SignInButton, UserButton } from "@clerk/nextjs";
import { RiMenu2Fill } from "react-icons/ri";

export default function Navbar() {
  const { userId } = auth();

  if (!userId) {
    return (
      <main className="">
        <div className="navbar bg-base-100 flex flex-row items-center justify-between">
          <a className="btn btn-ghost text-xl">Aptly</a>
          <SignInButton redirectUrl="/home" />
        </div>
      </main>
    );
  } else {
    return (
      <main className="">
        <div className="navbar bg-base-100 flex flex-row items-center justify-between">
          <a className="btn btn-ghost text-xl">Aptly</a>
          <UserButton />
        </div>
      </main>
    );
  }
}
