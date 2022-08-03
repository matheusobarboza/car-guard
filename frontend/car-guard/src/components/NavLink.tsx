interface NavLinkProps {
  title: string;
}

export function NavLink({title}: NavLinkProps) {
  return (
    <div className="tex-md text-gray-100 md:px-4 md:pt-3 md:pb-1 items-center justify-center flex cursor-pointer hover:text-gray-400 smooth">
      {title}
    </div>
  );
}
