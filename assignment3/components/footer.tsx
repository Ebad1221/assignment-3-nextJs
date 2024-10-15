
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 p-4 text-center">
      <div className="container mx-auto">
        <Link href="https://www.governorsindh.com/" className="text-blue-600 hover:text-blue-800">
          Click here to visit external website
        </Link>
      </div>
    </footer>
  );
};