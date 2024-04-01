import { auth, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const { userId } = auth();

  if (!userId) {
    return (
      <main className="">
        <div className="navbar flex flex-row items-center justify-between bg-base-100">
          <a className="btn btn-ghost text-xl">Aptly</a>
          <SignInButton redirectUrl="/home" />
        </div>
      </main>
    );
  } else {
    return (
      <main className="">
        <div className="navbar flex flex-row items-center justify-between bg-base-100">
          <a className="btn btn-ghost text-xl">Aptly</a>
          <UserButton />
        </div>
      </main>
    );
  }
}
