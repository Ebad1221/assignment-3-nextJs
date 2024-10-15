/*import Footer from "@/components/footer";
import Header from "@/components/header";
export default function about(){
    return(
    <div>
        <div>
            <Header />
            <div className="sectionabout">
                 <h1>this is about page</h1>
                 <p>my name is ebad.<br />
                 I am next js developer.</p>
            </div>       
        </div>
         <Footer />
    </div>
    )
};*/
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function about(){
    return(
    <div>
        <div>
            <Header />
            <div className="sectionabout bg-blue p-4 border border-black-200 rounded-md shadow-md">
                 <h1 className="text-3xl font-bold mb-4">this is about page</h1>
                 <p className="text-lg">my name is ebad.<br />I am next js developer.</p>
            </div>       
        </div>
         <Footer />
    </div>
    )
};