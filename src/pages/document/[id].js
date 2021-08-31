import { signIn, signOut, useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Welcome from "../../components/welcome";

const TextEditor = dynamic(() => import("../../components/textEditor"), {
  ssr: false,
});

export default function Editor() {
  const router = useRouter();
  const [session, loading] = useSession();
  const pid = router.query.id;
  // useEffect(() => {

  //   if (!session) {
  //     router.push(`/`);
  //   }
  // }, [session, router]);
  return (
    <div>
      {!session && <Welcome props={pid} />}
      {session && <TextEditor />}
    </div>
  );
}
