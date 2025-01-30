import '../styles/Home.css';
import LogoWhite from '../assets/images/logo-white.png';
import User from '../assets/images/user.png';
import Tshirt from '../assets/images/t-shirt.png';
import Pants from '..//assets/images/jeans.png';
import Dresses from '../assets/images/dress.png';
import Coats from '../assets/images/coat.png';
import Activewear from '../assets/images/gym-clothes.png';
import Shoes from '../assets/images/shoes.png';
import Accessories from '../assets/images/accesory.png';
import Extra from '../assets/images/belt.png';
import BlackShirt from '../assets/images/black-shirt.jpg';
import Chamarra from '../assets/images/chamarra-test.webp';
import DressTest from '../assets/images/dress-test.webp';
import HeelsTest from '../assets/images/heels-test.webp';
import ChamarraTestTwo from '../assets/images/chamarra-test-two.jpg';
import JeansTest from '../assets/images/jeans-test.avif';
import JeansTwo from '../assets/images/jeans-test-two.jpg';
import SunglassesTest from '../assets/images/sunglasses-test.jpg';
import EaringsTets from '../assets/images/earings-test.webp';
import Footer from '../Components/Footer';


function Home() {
  return (
    <div className="home-container">
    <div className="home-header">
    <img className="logo-white" src={LogoWhite} alt="logo-white" />
      {/* <h1 className='global-title'>WARDROBY</h1> */}
      <h1>WARDROBY</h1>
      <img className="user-logo" src={User} alt="User Icon" />
    </div>
    <div className="home-classifications">
        <div className="home-classification">
            <button>
            <img src={Tshirt} alt="T-shirt Icon" />
            </button>
            <p>T-shirts</p>
        </div>
        <div className="home-classification">
            <button>
            <img src={Pants} alt="Pants Icon" />
            </button>
            <p>Pants</p>
        </div>
        <div className="home-classification">
            <button>
            <img src={Dresses} alt="Dresses Icon" />
            </button>
            <p>Dresses</p>
        </div>
        <div className="home-classification">
            <button>
            <img src={Coats} alt="Coat Icon" />
            </button>
            <p>Coats</p>
        </div>
    </div>
    <div className="home-classifications">
        <div className="home-classification">
            <button>
            <img src={Activewear} alt="T-shirt Icon" />
            </button>
            <p>Activewear</p>
        </div>
        <div className="home-classification">
            <button>
            <img src={Shoes} alt="T-shirt Icon" />
            </button>
            <p>Shoes</p>
        </div>
        <div className="home-classification">
            <button>
            <img src={Accessories} alt="Accesories Icon" />
            </button>
            <p>Accesories</p>
        </div>
        <div className="home-classification">
            <button>
            <img src={Extra} alt="Extra Icon" />
            </button>
            <p>Extras</p>
        </div>
    </div>

    <h1>All Clothes</h1>

    <div className="all-clothes">
        <div className="all-clothes-item">
            <img src={BlackShirt} alt="Black Shirt" />
        </div>
        <div className="all-clothes-item">
            <img src={Chamarra} alt="Chamarra Test" />
        </div>
        <div className="all-clothes-item">
            <img src={DressTest} alt="Black Shirt" />
        </div>
        <div className="all-clothes-item">
            <img src={HeelsTest} alt="Black Shirt" />
        </div>
        <div className="all-clothes-item">
            <img src={ChamarraTestTwo} alt="Black Shirt" />
        </div>
        <div className="all-clothes-item">
            <img src={JeansTest} alt="Black Shirt" />
        </div>
        <div className="all-clothes-item">
            <img src={JeansTwo} alt="Black Shirt" />
        </div>
        <div className="all-clothes-item">
            <img src={SunglassesTest} alt="Black Shirt" />
        </div>
        <div className="all-clothes-item">
            <img src={EaringsTets} alt="Black Shirt" />
        </div>
    </div>

    <Footer />
    </div>
    
  );
}

export default Home;