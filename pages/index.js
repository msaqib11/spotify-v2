import Center from "@/components/Center";
import Sidebar from "@/components/Sidebar";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div>
        <main className="bg-black h-screen overflow-hidden flex">
          <Sidebar />
          {/* center */}
          <Center />
        </main>
        <div>{/* player */}</div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
