import Link from "next/link";

export const metadata = {
  title: "Zabot App",
};

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Добро пожаловать в Zabot App</h1>
      <Link href="/subscriptions" className="text-blue-600 underline">
        Перейти к подпискам
      </Link>
    </main>
  );
}
