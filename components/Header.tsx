export default function Header({ title }: { title: string }) {
  return (
    <header className="flex justify-between items-center p-6 border-b bg-white">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex items-center space-x-3">
        <span className="text-gray-700">Дмитрий</span>
        <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-white">
          Д
        </div>
      </div>
    </header>
  );
}
