import {Header, SobreNos, Footer, ImageSlider} from "./Home"
import Calendar from "./Calendar"
import { SliderData } from "../../assets/ImageSlider2/SliderData"

const ChamarHome = () => {
    return(
        <div className="Home">
        <ImageSlider slides={SliderData} />
        <SobreNos />
        <Calendar />
        </div>
    )

}

export default ChamarHome