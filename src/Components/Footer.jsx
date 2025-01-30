
import './Footer.css';
import ClothesHanger from '../assets/images/clothes-hanger.png';
import Star from '../assets/images/star.png';
import Calendar from '../assets/images/calendar.png';
import ShoppingCart from '../assets/images/grocery-store.png';

function Footer() {
  return (
    <div className="home-footer">
      <div className="home-footer-item">
        <button>
          <img src={ClothesHanger} alt="Clothes Hanger Icon" />
        </button>
      </div>
      <div className="home-footer-item">
        <button>
          <img src={Star} alt="Star Icon" />
        </button>
      </div>
      <div className="home-footer-item">
        <button>
          <img src={Calendar} alt="Calendar Icon" />
        </button>
      </div>
      <div className="home-footer-item">
        <button>
          <img src={ShoppingCart} alt="Shopping Cart Icon" />
        </button>
      </div>
    </div>
  );
}

export default Footer;