export function NavBar() {
  return (
    <div>
      <div className="md:w-[230px] h-[91%] hidden overflow-hidden md:flex flex-col items-center justify-between px-3">
        <div className="pt-12 pb-4 flex flex-col items-start justify-between h-full w-full w-full space-y-4">
          <a className="text-lg font-semibold hover:font-bold text-gray-200 cursor-pointer">Clientes</a>
          <a className="text-lg font-semibold hover:font-bold text-gray-200 cursor-pointer">Terceiros</a>
          <a className="text-lg font-semibold hover:font-bold text-gray-200 cursor-pointer">Veículos</a>
        </div>

        <footer className="pb-2 mt-[350px] pt-2 px-3 space-y-4 items-start w-full border-t border-gray-500">
          <h1 className="font-bold text-lg">Car Guard</h1>
          <h1 className="text-sm">2022 Car Guard license #22</h1>
        </footer>
      </div>
    </div>
  );
}