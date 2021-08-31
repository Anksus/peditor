import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("../../components/textEditor"), {
  ssr: false,
});

export default function Editor() {
  const router = useRouter();
  const [session, loading] = useSession();
  useEffect(() => {
    if (!session) {
      router.push(`/`);
    }
  }, [session, router]);
  return (
    <div>
      <TextEditor />
    </div>
  );
}
