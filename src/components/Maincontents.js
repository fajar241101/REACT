import Hero from "./Hero";
import Cardkiatmenujuimpian from "./Cardkiatmenujuimpian";
import study from './../assets/study.jpg';
import pray from './../assets/pray.jpg';
import keeppushing from './../assets/keeppushing.jpg';
import Cardmyactiviy from "./Cardmyactivity";
import frontend from './../assets/frontend.jpg';
import dreaming from './../assets/dreaming.jpg';

const Maincontent = () => {
    return(
        <div>
        <Hero />
        <div className="container">
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>Kiat Menuju Impian</h1>
                </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-lg-4 col-12">
                    <Cardkiatmenujuimpian image={study} kiat="Belajar dengan giat"/>
                    </div>
                    <div className="col-lg-4 col-12">
                    <Cardkiatmenujuimpian image={pray} kiat="Beribadah dan mohon doa ridho kedua orang tua"/>
                    </div>
                    <div className="col-lg-4 col-12">
                    <Cardkiatmenujuimpian image={keeppushing} kiat="Tetap Semangat dan Pantang Menyerah"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>My Activity</h1>
                    </div>
                    <div className="col-12 my-5">
                        <Cardmyactiviy image={frontend} description="Ngoding ala frontend menggunakan html, css, javascript, dan react.js" />
                        <div className="col-12 my-5">
                        <Cardmyactiviy image={dreaming} description="Mimpi adalah kunci untuk kita menaklukan dunia, jadi ngimpi dulu" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Maincontent;