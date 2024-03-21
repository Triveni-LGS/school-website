// // rrd import
// import { NavLink } from "react-router-dom";

// // Components
// import Footer from "../components/Footer";
// import MissionVision from "../components/MissionVision";
// import Testimonials from "../components/Testimonials";
// import WhySchool from "../components/WhySchool";

// const Home = () => {
//     return ( 
//         <>
//             <div className="home">
//                 <p className="title">Welcome to <span style={{color: '#00AFC7'}}>Smart Scholar Central</span> School</p>
//                 <p className="info">We are delighted to have you visit our virtual home (Citadel of Excellence) - a place where knowledge thrives, dreams soar, and friendships flourish. At school, we believe in cultivating an environment that fosters academic excellence, nurtures creativity, and embraces diversity.</p>
//                 <NavLink to='/about'>Explore</NavLink>
//             </div>
//             <MissionVision />
//             <WhySchool />
//             <Testimonials />
//             <Footer />
//         </>
//     );
// }
 
// export default Home;

import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import Testimonials from "../components/Testimonials";
import WhySchool from "../components/WhySchool";
import video from '../assets/course-video.mp4'
// import Foot from "../components/foot";

const Home = () => {
    return (
        <>
            <div className="home">
                {/* <video
                    className="background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src='./assets/course-video.mp4'
                        type="video/mp4"
                    />
                </video> */}
                <video src={video} autoPlay muted loop class="video-bg" />
                <div className="content">
                    <p className="title">Welcome to <span style={{ color: '#00AFC7' }}>Smart Scholar Central</span> School</p>
                    <p className="info">We are delighted to have you visit our virtual home (Citadel of Excellence) - a place where knowledge thrives, dreams soar, and friendships flourish. At school, we believe in cultivating an environment that fosters academic excellence, nurtures creativity, and embraces diversity.</p>
                    <center>
                    <NavLink to='/about'>Explore</NavLink>
                    </center>
                    
                </div>
            </div>
            <MissionVision />
            <WhySchool />
            <Testimonials />
            <Footer />
        </>
    );
}

export default Home;
