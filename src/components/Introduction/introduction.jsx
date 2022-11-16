import "./introduction.css"
 
const Introduction = () => {
    return (
 
 
        <div className="home-class_grid" id="home_grid">
            <div className="home_intro" id="home-intro_message">
 
 
                <p className="intro-paragraph" id="intro_paragragh">
                    Rent a <span id="gradient_paragragh">Place</span>  away from <span id="gradient_paragragh">Home</span> in the <span id="gradient_paragragh">Metaverse</span>
                </p>
 
 
 
                <p className="inner-paragraph_02" id="inner_paragraph-02">
                    We provide you access to luxury and affordable houses in the metaverse.Get a chance to turn your imagination to reality at your comfort zone.
                </p>
 
 
                <div className="search-box" id="search_box">
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search for location"
                        name="s"
                    />
                    <button type="submit">Search</button>
 
                </div>
            </div>
 
            <div className="image-cluster_container" id="image-container_wrapper">
 
 
                <div className="firstframe">
                    <div className="image_wrapper " id="first-image_wrapper">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/home-img1.svg`} className="cluster_meta_location" alt="Meta_location" />
                    </div>
 
                    <div className="image_wrapper" id="second-image_wrapper">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/home-img2.svg`} className="cluster_meta_location" alt="Meta_location" />
                    </div>
                </div>
                <div className="secondframe">
                    <div className="image_wrapper" id="third-image_wrapper">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/home-img3.svg`} className="cluster_meta_location" alt="Meta_location" />
                    </div>
                    <div className="image_wrapper" id="forth-image_wrapper">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/home-img4.svg`} className="cluster_meta_location" alt="Meta_location" />
                    </div>
 
                </div>
 
            </div>
        </div>
 
 
    );
}
 
export default Introduction;

