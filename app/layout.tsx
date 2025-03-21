import "./globals.css";

export const metadata = {
  title: "Zabot App",
  description: "Управление подписками",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
