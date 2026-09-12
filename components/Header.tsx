import NavLinks from './NavLinks';

export default function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-slate-800">
            Sacrament Meeting Planner
          </h1>

          <p className="text-sm text-slate-500">
            Salta Ward · {currentDate}
          </p>
        </div>

        <NavLinks />
      </div>
    </header>
  );
}
