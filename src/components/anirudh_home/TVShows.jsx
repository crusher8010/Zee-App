import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Home.css";

const slide2 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x7707c6fa495b25c4069b41907f3b7b75b55.jpg", alt: "s1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5323141/cover/1920x7708fe26a5a8cda4a40bc41c5a8951d8910.jpg", alt: "s2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-6-3392/app_cover/1440x8102a557f472d8447feb0fbb6f82cddd65c.jpg", alt: "s3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5185728/cover/1920x7705ee8667a8a1846ea863f2c625345a58e.jpg", alt: "s4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130241/cover/1920x770f95dfa27975742baba8be34fc70a90ac.jpg", alt: "s5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5281484/cover/1920x770b778e53f60964e95b0dd5e1b90edb1ff.jpg", alt: "s6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-127/cover/1920x7707303f05fe6b147409d75afaf2b08d8f2.jpg", alt: "s7" }
];

const slide3 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130241/portrait/1920x770f95dfa27975742baba8be34fc70a90ac.jpg", alt: "dm1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-366/portrait/1920x7707c6fa495b25c4069b41907f3b7b75b55.jpg", alt: "dm2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-127/portrait/1920x7707303f05fe6b147409d75afaf2b08d8f2.jpg", alt: "dm3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3392/portrait/1920x770cad07fbd6fa24823959e71ec73adf074.jpg", alt: "dm4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3510/portrait/1920x770173f5773becc4a578ec06405ec757afa.jpg", alt: "dm5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5247981/portrait/1920x770dd93ac35bd644ff797dd65fa2bd7a20a.jpg", alt: "dm6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5214664/portrait/1920x770f0335eb6a296494dadf9beda857a157f.jpg", alt: "dm7" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5304958/portrait/1920x7706233324748e1417b86bde31299826fee.jpg", alt: "dm8" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z520450/portrait/1920x7707be825d8e0b149478aaa493d90ecf34f.jpg", alt: "dm9" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5101301/portrait/1920x770910a9ef38ddd4048b010e71666000049f46baafce9f64b74b19f0e9804a0911e.jpg", alt: "dm10" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5318988/portrait/1920x770cec74f31178a44b1aa03e7a8339f8944.jpg", alt: "dm11" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3497/portrait/1920x7705c2503a61641427e8e4f2a4c54609f8c.jpg", alt: "dm12" }
];

const slide4 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-447/portrait/1920x770086b8e66e4e041e998bb1c0656bfc9f5.jpg", alt: "s1" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2275/portrait/1920x7704e07fdd97fd64af1bc38aec8cc82a9a0.jpg", alt: "s2" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-135/portrait/1920x7708b572ba26c2b45969a993ccb59e197b9.jpg", alt: "s3" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-139/portrait/1920x770213aae2491aa495784ab0fa7040b032f.jpg", alt: "s4" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-319/portrait/1920x7701501891863.jpg", alt: "s5" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1248/portrait/mainbhiardhanginihindisho.jpg", alt: "s6" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5222846/portrait/1920x77084366af46f234dfcae2ca91d563c360c.jpg", alt: "s7" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-199/portrait/1920x770b66f430e999c4fb7a3937404520e79fe.jpg", alt: "s8" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5210380/portrait/1920x7706d71911f381c4f69a43e353f21eb7d55.jpg", alt: "s9" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-124/portrait/1920x770224b02ffbab04efdbeda2b6d4158d8fa.jpg", alt: "s10" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5159930/portrait/1920x770720753464a0244909d061e6defa74fd6.jpg", alt: "s11" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5202806/portrait/1920x7700aed91fea69d4571a9982d02c618d587.jpg", alt: "s12" }
];

const slide5 = [
    { id: 1, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267207/list/000001811e16b234520c4342885ba63d2f245061.jpg", alt: "Kundali Bhagaya" },
    { id: 2, url: "https://akamaividz2.zee5.com/image/upload/w_798,h_449,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267041/list/00000230941e2174ea9a4e97b2a929ab87381eae.jpg", alt: "Bhagya Laksmi" },
    { id: 3, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267045/list/00000179ac8c5869b112493aaf169f9fed5d4b8c.jpg", alt: "Kumkum Bhagya" },
    { id: 4, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267178/list/00000037f90c854cdb67443a94d186af966414cc.jpg", alt: "Aparijita" },
    { id: 5, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267085/list/00000196a34d2c2222414784acfd822faff1334d.jpg", alt: "Radha Mohan" },
    { id: 6, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267134/list/00000162e6041e776ebc4d01b7bfe9fb73fedefc.jpg", alt: "Mith" },
    { id: 7, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5266969/list/00000013101103c55d6b4a4eb45030b19296cb95.jpg", alt: "Bhabhiji Ghar par hai" },
    { id: 8, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267240/list/00000126bcb16cf8f604492eadfde15d3e0d29f8.jpg", alt: "Ma Laksmi" },
    { id: 9, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5266921/list/00000168f78d132ca3a04d5a97d2828f3265a69f.jpg", alt: "Mahanayak" },
    { id: 10, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5266948/list/000002042a1d1e1f3e81480e9f84f7b049d010bd.jpg", alt: "Happu ki Ultan Paltan" },
    { id: 11, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267210/list/00000190fbb043458b1343a5bafa962771b4e7a1.jpg", alt: "Kundali Bhagya" },
    { id: 12, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267040/list/0000014430bf757336ab4cf0a540c89b16abfa4e.jpg", alt: "Bhagya Laksmi" },
    { id: 13, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267046/list/000002510b18c93a468b47a0b20a2be64d5d2d06.jpg", alt: "Kumkum Bhagya" },
    { id: 14, url: "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5267130/list/00000150e40297ee0d7e4e2c86660171a5ae3c59.jpg", alt: "Mith" }
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

function TVShows() {
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
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Zee TV Shows</h1>
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

            <div className='trend-container'>
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Latest Hindi Episodes Free</h1>
                <Carousel swipeable={true} responsive={responsive2}>
                    {slide5.map((item) => {
                        return (
                            <div key={item.id} className="latest1">
                                <img src={item.url} alt={item.alt} />
                                <div style={{ textAlign: "left", marginTop: "3px", padding: "10px", backgroundColor: "#fff" }}>
                                    <h4 style={{ fontWeight: "600" }}>{item.alt}</h4>
                                    <h5 style={{ fontWeight: "600" }}>Watch</h5>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className="trend-container">
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Popular Free Shows on ZEE5</h1>
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
                <h1 style={{ textAlign: "left", fontSize: "2rem", fontWeight: "bold" }}>Browse By Genre</h1>
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

export default TVShows;