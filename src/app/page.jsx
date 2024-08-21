import Hero from "@/app/components/layout/Hero";
import Footer from "@/app/components/layout/Footer";
export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black">
      <div className="flex min-h-screen flex-col overflow-x-hidden items-center justify-center p-24">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
