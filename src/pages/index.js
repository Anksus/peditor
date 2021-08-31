import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import Welcome from "../components/welcome";

export default function Home() {
  const router = useRouter();

  const [session, loading] = useSession();
  useEffect(() => {
    if (session) {
      router.push(`/document/${uuidV4()}`);
    }
  }, [session, router]);
  return (
    <div>
      {/* {loading && <p>Loading..</p>} */}
      {!session && (
        <>
          <Welcome />
        </>
      )}
    </div>
  );
}
