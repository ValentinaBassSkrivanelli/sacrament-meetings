export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-6 text-center">
        <p className="text-sm text-slate-500">
          © {currentYear} Sacrament Meeting Planner
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Helping ward leaders plan and organize sacrament meetings.
        </p>
      </div>
    </footer>
  );
}
