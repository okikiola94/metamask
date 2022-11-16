import Introduction from "../Introduction/introduction";
import Metamask from "../Metamask/metamask";
import Nfts from "../Nfts/nfts";
import Column from "../productColumn/column";




const Home =()=>{
    return(
        <div>
            <Introduction/>
            <Column/>
            <Metamask/>
            <Nfts/>
        </div>

    );
}

export default Home;