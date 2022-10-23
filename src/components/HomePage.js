import { NavLink } from 'react-router-dom';
import beers from '../assets/beers.png';
import random from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';


function HomePage() {

    return(
        <div className="HomePage">
        <h1>WELCOME</h1>
        <div>
        <div>
        <img src={beers} alt="beers" />
        <NavLink to={`/beers`}className="navbar-brand">Beers</NavLink>
        </div>
        <div>
        <img src={random} alt="random beer" />
        <NavLink to={`/random-beer`}className="navbar-brand">Random Beer</NavLink>
        </div>
        <div>
        <img src={newBeer} alt="new beer" />
        <NavLink to={`/new-beer`} className="navbar-brand">Add new beer</NavLink>
        </div>
         </div>
        </div>
    )
    
    
    }
    
    export default HomePage;