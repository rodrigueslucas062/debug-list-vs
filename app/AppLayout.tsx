import { Toaster } from "sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster richColors/>
      <div className="grid grid-cols-2 p-12 bg-zinc-800">{children}</div>
    </>
  );
}
