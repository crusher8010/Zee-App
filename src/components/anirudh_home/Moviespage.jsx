import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Home.css";

const slide2 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5359029/cover/1920x770cc1df01fcc6f403c8fdfcf37cecf54a356ed06ff029049bb9112df645e4c0e53.jpg", alt: "s1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5334341/cover/1920X7703e2f785eddd94123a3df43591294d96c.jpg", alt: "s2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250012/cover/1920x770b658912ada8848048bea115d122b6be3.jpg", alt: "s3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5363736/cover/1920x7704a60024dbd08411e9989fc8e83718bf6.jpg", alt: "s4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5368144/cover/1920x77002cf9b5d17084e9696bdfe7ccaf7f4b6.jpg", alt: "s5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5359351/cover/1920x7701db348a8ca224c63b512eb9daffaf341.jpg", alt: "s6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-movie_826366183/cover/1920x770315bbbc7d5664d2f882ef15ed1817c76.jpg", alt: "s7" }
];

const slide3 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5264082/portrait/1920x77013997b45a7b54db3852c885ad51bf387.jpg", alt: "dm1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5375758/portrait/1920x7705c79cd63a4ae4822be4ba71e18971541.jpg", alt: "dm2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5334341/portrait/1920X7703e2f785eddd94123a3df43591294d96c.jpg", alt: "dm3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/portrait/1920x770a5ecb708ec774b84908c61e05e3625e9.jpg", alt: "dm4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5254708/portrait/1920x77088754fa6d1384d259444f7d1d4b00a33.jpg", alt: "dm5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5270168/portrait/1920x770cc8ed4836bfd4162a874ef5454d1b275.jpg", alt: "dm6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5326731/portrait/1920x770edce41d56ac74882abacba11f8a6cc7d.jpg", alt: "dm7" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5262105/portrait/1920x7702811233e91004a88aa695db00e22d575.jpg", alt: "dm8" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5270157/portrait/1920x770c89fb54b72874249a31e7a37f1192fcc.jpg", alt: "dm9" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/portrait/1920x770ee070807403048a7a76f9fab0a1ca2ff.jpg", alt: "dm10" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227125/portrait/1920x770a68536cd3f1049089c07fab87c76482d.jpg", alt: "dm11" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5299796/portrait/1920x770d73448cbdb9f4525b4646e6f4df3fb08899fc23db9804a16aaf676777847b55b.jpg", alt: "dm12" }
];

const slide4 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-1-6z5269873/portrait/1920x7705fe57b7a8636474a9a91e87402f84311.jpg", alt: "s1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5363591/portrait/1920x77021cc4f5f2ed34747819cb929a883e0b5.jpg", alt: "s2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5266343/portrait/1920x770adfe1ea302d644f69d29804dae8b13b1.jpg", alt: "s3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5262281/portrait/1920x770351c3aee7e8647d992183f33893962d1.jpg", alt: "s4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5375822/portrait/1920x7701fdc3dba97f54a55896d058ed8828263.jpg", alt: "s5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5372052/portrait/1920x77000286967da1b47dda3e0fa59cb086416.jpg", alt: "s6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5344199/portrait/1920x7709a98e7fbd6a74e438df6b2fc230b7f98.jpg", alt: "s7" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5375811/portrait/1920x7707816b90aca3b4c18b996d852a275ab72.jpg", alt: "s8" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-1-6z5375740/portrait/1920x77098c07d1aef4948bcaac5a87edcc3dbcc.jpg", alt: "s9" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5262216/portrait/1920x770e28feaad70594dba87add2092ef149da.jpg", alt: "s10" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5261980/portrait/1920x770302bdd4b2cca4ca29bb203485ad48e16.jpg", alt: "s11" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5363733/portrait/1920x7703884d4d9b69846d4946ccf9fe3408685.jpg", alt: "s12" }
];

const languages = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/hindi.jpg", alt: "Hindi" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/marathi.jpg", alt: "Marathi" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/tamil.jpg", alt: "Tamil" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/telugu.jpg", alt: "Telugu" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/bengali.jpg", alt: "Bengali" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/kannada.jpg", alt: "Kannada" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/malayalam.jpg", alt: "Malayalam" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/punjabi.jpg", alt: "Punjabi" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/odia.jpg", alt: "Odia" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/bhojpuri.jpg", alt: "Bhojpuri" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/gujrati.jpg", alt: "Gujarati" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/platform/lang/english.jpg", alt: "English" }
]

const Genere = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/platform/tvshow/romantic.jpg", alt: "Romantic" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/platform/tvshow/reality.jpg", alt: "Reality" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Mythology-genre.jpg", alt: "Mythology" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Horror-genre.jpg", alt: "Horror" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Supernatural-genre.jpg", alt: "Supernatural" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Devotional-genre.jpg", alt: "Devotional" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Comedy-genre.jpg", alt: "Comedy" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Crime-genre.jpg", alt: "Crime" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/platform/tvshow/chat.jpg", alt: "Chat" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Thriller-genre.jpg", alt: "Thriller" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Suspense-genre.jpg", alt: "Suspense" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Fantasy-genre.jpg", alt: "Fantasy" },
    { id: 13, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Drama-genre.jpg", alt: "Drama" },
    { id: 14, url: "https://akamaividz2.zee5.com/image/upload/platform/Tvshow/Family-genre.jpg", alt: "Family" }
]

function Moviespage() {
    const settings1 = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1199, min: 1000 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 999, min: 600 },
            items: 3
        },
        smallmobile: {
            breakpoint: { max: 599, min: 451 },
            items: 2
        },
        extrasmallmobile: {
            breakpoint: { max: 450, min: 0 },
            items: 1
        }
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1199, min: 1000 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 999, min: 800 },
            items: 3
        },
        smallmobile: {
            breakpoint: { max: 799, min: 550 },
            items: 2
        },
        extrasmall: {
            breakpoint: { max: 549, min: 300 },
            items: 1
        }
    };


    return (
        <div>
            <div style={{ width: "90%", margin: "auto", marginTop: "32px" }}>
                <Slider {...settings1}>
                    {slide2.map((item) => (
                        <img key={item.id} className="slide1" src={item.url} alt={item.alt} />
                    ))}
                </Slider>
            </div>

            <div className='trend-container'>
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Zee Movie Shows</h1>
                <Carousel swipeable={true} responsive={responsive}>
                    {slide3.map((item) => {
                        return (
                            <div key={item.id} className='tvshow-products'>
                                <img src={item.url} alt={item.alt} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className="trend-container">
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Latest and Upcoming</h1>
                <Carousel swipeable={true} responsive={responsive}>
                    {slide4.map((item) => {
                        return (
                            <div key={item.id} className='tvshow-products'>
                                <img src={item.url} alt={item.alt} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className='trend-container'>
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Available In Different Languages</h1>
                <Carousel swipeable={true} responsive={responsive2}>
                    {languages.map((item) => {
                        return (
                            <div key={item.id} className="lang">
                                <img src={item.url} alt={item.alt} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className='trend-container'>
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Watch Free | ZEE5 Manoranjan Festival</h1>
                <Carousel swipeable={true} responsive={responsive2}>
                    {Genere.map((item) => {
                        return (
                            <div key={item.id} className="lang">
                                <img src={item.url} alt={item.alt} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Moviespage;