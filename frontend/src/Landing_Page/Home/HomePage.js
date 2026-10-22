import Hero from "./Hero.js";
import KrishiConnect from "./KrishiConnect.js";
import Benefits from "./Benefits.js";
import Solution from "./Solution.js";
import Contract from "./Contract.js";
import Insight from "./Insight.js";
import Question from "./Question.js";
import Marketplace from "./Marketplace.js";
function HomePage(){
    return(
        <>
        <Hero/>
        <KrishiConnect/>
        <Benefits/>
        <Solution/>
        <Marketplace/>
        <Contract/>
        <Insight/>
        <Question/> 
        </>
    );
}

export default HomePage;