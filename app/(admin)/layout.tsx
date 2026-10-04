import LogoutButton from "@/components/LogoutButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <LogoutButton />
      </header>

      <main>{children}</main>
    </>
  );
}