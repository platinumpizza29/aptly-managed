import { auth, SignInButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function HomePage() {
  const { userId } = auth();

  if (userId) {
    redirect("/home");
  }

  return (
    <main className="min-w-screen min-h-screen">
      <div className="navbar bg-base-100 flex flex-row items-center justify-between">
        <a className="btn btn-ghost text-xl">Aptly</a>
        <SignInButton redirectUrl="/home" />
      </div>
    </main>
  );
}
