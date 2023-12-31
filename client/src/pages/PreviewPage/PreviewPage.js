import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PreviwInfo from "../../components/PreviewInfo/PreviewInfo";

function PreviewPage() {
    return (
        <div>
            <Header isAuth={false} />
            <PreviwInfo />
            <Footer />
        </div>
    )
}

export default PreviewPage;