import { ActiveLink } from "@/components";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <span className="text-5xl pb-5">Hola Mundo!</span>
      <ActiveLink path={"/about"} text={"About"} />
    </main>
  );
}
