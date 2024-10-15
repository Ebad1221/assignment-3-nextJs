
   import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div
        className="
          main-body
          border-2
          border-gray-400
          rounded-lg
          p-4
          text-lg
          font-medium
          text-gray-600
        "
      >
        <p className="mb-2">Hey,</p>
        <p className="mb-2">My name is EBAD.</p>
        <p>I am a Next.js developer.</p>
      </div>
      <Footer />
    </div>
  );
};
