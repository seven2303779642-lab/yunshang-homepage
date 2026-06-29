import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

type PlaceholderPageProps = {
  title: string;
  subtitle: string;
  comingSoon: string;
};

export default function PlaceholderPage({
  title,
  subtitle,
  comingSoon,
}: PlaceholderPageProps) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-[var(--color-cream)] px-6 py-20 text-center">
        <h1 className="type-display-title text-[var(--color-red)]">{title}</h1>
        <p className="type-body-copy max-w-md text-[#202020]">{subtitle}</p>
        <p className="type-body-copy text-[#666]">{comingSoon}</p>
      </main>
      <Footer />
    </>
  );
}
