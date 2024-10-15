import Footer from "@/components/footer";
import Header from "@/components/header";
export default function contact() {
  return (
    <div>
      <div className="contact">
        <Header />

        <div className="bg-gray-200 p-8 border border-black rounded-lg shadow-md">
          <ul className="sectioncontact list-none m-0 p-0">
            <h1 className="text-3xl font-bold mb-4">This is contact us page</h1>
            <p className="text-lg mb-2">Here you can contact us</p>
            <p className="text-lg font-bold">Number: 0331-123-4567</p>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
