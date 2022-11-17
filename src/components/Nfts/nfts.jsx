import "./nfts.css"
 
 
const Nfts = () => {
    return (
        <div className="NFT-container-wrapper">
 
            <div className="metabnb-text-wrapper-container" id="metabnb-text-cn">
 
                <h1 id="metabnb-heading">Metabnb NFTs</h1>
 
                <p id="metabnb-message">
                    Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
 
                <button id="learnmore__btn">Learn more</button>
 
            </div>
 
 
            <div className="metabnb-images-container_wrapper">
 
                <img src={`${process.env.PUBLIC_URL}/assets/images/learn-more-image.svg`} className="metabnb--img" alt="NFT-location_img" />
 
            </div>
 
 
        </div>
    );
}
 
export default Nfts;

