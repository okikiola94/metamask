import "./column.css";
 
 
const Column = () => {
    return (
        <div className="Product-column_wrapper">
 
            <span className="column_child">
                <img src={`${process.env.PUBLIC_URL}/assets/images/mbtoken_icon.png`} className='column_image' alt="mbtoken_icon" />
                <p> MBToken</p>
 
            </span>
            <span className="column_child">
                <img src={`${process.env.PUBLIC_URL}/assets/images/metamask_icon.png`} className='column_image' alt="Metamask_icon" />
                <p> Metamask</p>
            </span>
            <span className="column_child">
                <img src={`${process.env.PUBLIC_URL}/assets/images/opensea_icon.png`} className='column_image' alt="opensea_icon" />
                <p>Opensea</p>
            </span>
 
 
 
 
 
 
 
        </div>
    );
}

export default Column;