import bgcolor from '../assets/bgcolor.jpg';
import '../css/style.css';
import fajar from '../assets/fajar.jpg';
import Styling from '../css/Cardprofile.module.css';

const Cardprofile = () => {
    const wraper = {
            width: '100vw',
            height: '100vh',
            backgroundImage : `url(${bgcolor})`,
            backgroundPosition: 'bottom-right',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
    }
    return(
        // 1. Inline Css
        <div style={wraper}
            //{{
            // width: '100vw',
            // height: '100vh',
            // backgroundImage : `url(${bgcolor})`,
            // backgroundPosition: 'bottom-right',
            // backgroundRepeat: 'no-repeat',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center'
            // }}
        >    
        <div>
            {/* 2. Css File */}
            <div className='card'>
                <img src={fajar} />
                <div className='profile'>Front end Developer</div>
                <div className='name'>MF Fajar Ramadhan SH</div>
                <div className='description'>Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find a way to</div>
                <button className='button'>Contact Me</button>
            </div>

            {/* 3. Css Module */}
            <div className='card'>
                <img src={fajar} />
                <div className='profile'>Front end Developer</div>
                <div className='name'>MF Fajar Ramadhan SH</div>
                <div className='description'>Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find a way to</div>
                <button className={Styling.button}>Contact Me</button>
            </div>

        </div>
        </div>
    )
}

export default Cardprofile;