import LogoutButton from "components/logout-button";

export const metadata = {
  title: "Inflearngram",
  description: "Instagram clone project",
};

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="font-bold text-xl">Welcome {"lopun.jh"}!</h1>
      <LogoutButton />
    </main>
  );
}
