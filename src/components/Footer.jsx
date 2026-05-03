const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p><span><i className="ri-map-pin-2-fill"></i></span>123, London Bridge Street, London</p>
          <p><span><i className="ri-mail-fill"></i></span>support@Lebaba.com</p>
          <p><span><i className="ri-phone-fill"></i></span>(+012) 3456 789</p>
        </div>
        <div className="footer__col">
          <h4>COMPANY</h4>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Work With Us</a>
          <a href="#">Our Blog</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
        <div className="footer__col">
          <h4>USEFUL LINK</h4>
          <a href="#">Help</a>
          <a href="#">Track My Order</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Dresses</a>
        </div>
        <div className="footer__col">
          <h4>INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400" alt="instagram" />
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400" alt="instagram" />
            <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400" alt="instagram" />
            <img src="https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=400" alt="instagram" />
            <img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=400" alt="instagram" />
            <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400" alt="instagram" />
          </div>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright © 2025 Lebaba. All rights reserved.
      </div>
    </>
  );
};

export default Footer;

