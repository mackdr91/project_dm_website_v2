"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // If the user is authenticated, redirecting will happen
  // No need to show the login options in this component after redirection.
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4">Sign in to continue</h2>
      <button
        onClick={() => signIn("github")}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}

export default LoginForm;