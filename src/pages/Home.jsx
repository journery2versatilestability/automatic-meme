import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 1, name: 'Men Casual tShirt',     price: '$100',                  img: 'https://res.cloudinary.com/dn2gccqlw/image/upload/v1725194127/ibwqr1ntgpoil0bhbeir.jpg', stars: 5 },
  { id: 2, name: 'Casual Pants for Women', price: '$119',                  img: 'https://res.cloudinary.com/dn2gccqlw/image/upload/v1724224428/ajk4ezz9eebtoddktuyu.webp', stars: 5 },
  { id: 3, name: 'Casual Pants',           price: '$78',                   img: 'https://images.unsplash.com/photo-1484328256245-34b71758c30b?q=80&w=2073', stars: 4 },
  { id: 4, name: 'Diamond Earrings',       price: '$299.99', old: '$349.99', img: 'https://images.unsplash.com/photo-1587467442586-7bcc51828a10?q=80&w=1974', stars: 4 },
  { id: 5, name: 'Matte Lipstick',         price: '$19.99',                img: 'https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=1925', stars: 4 },
  { id: 6, name: 'Silk Scarf',             price: '$29.99',  old: '$39.99', img: 'https://images.unsplash.com/photo-1485527691629-8e370684924c?q=80&w=2074', stars: 4 },
  { id: 7, name: 'Gold Necklace',          price: '$199.99',               img: 'https://images.unsplash.com/photo-1631097969294-c38afba59496?q=80&w=2070', stars: 4 },
  { id: 8, name: 'Cocktail Dress',         price: '$89.99',                img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073', stars: 4 },
];

const Stars = ({ count }) => (
  <div className="product__rating">
    {[1,2,3,4,5].map((i) => (
      <span key={i} className={i <= count ? 'ri-star-fill' : 'ri-star-line'}></span>
    ))}
  </div>
);

const Home = () => {
  return (
    <>
      {/* Hero / banner */}
      <section className="section__container header__container">
        <div className="header__content z-30">
          <h4>UP TO 20% DISCOUNT ON</h4>
          <h1>Girl's Fashion</h1>
          <p>
            Discover the latest trends and express your unique style with our
            Women's Fashion website. Explore a curated collection of clothing,
            accessories, and footwear that caters to every taste and occasion.
          </p>
          <button className="btn"><Link to="/shop">EXPLORE NOW</Link></button>
        </div>
        <div className="header__image">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900" alt="header" />
        </div>
      </section>

      {/* Categories */}
      <section className="product__grid">
        <Link className="categories__card" to="/categories/accessories">
          <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400" alt="Accessories" />
          <h4>Accessories</h4>
        </Link>
        <Link className="categories__card" to="/categories/dress">
          <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400" alt="Dress Collection" />
          <h4>Dress Collection</h4>
        </Link>
        <Link className="categories__card" to="/categories/jewellery">
          <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400" alt="Jewellery" />
          <h4>Jewellery</h4>
        </Link>
        <Link className="categories__card" to="/categories/cosmetics">
          <img src="https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=400" alt="Cosmetics" />
          <h4>Cosmetics</h4>
        </Link>
      </section>

      {/* Trends */}
      <section className="section__container hero__container">
        {[
          { img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=600', title: "Womens Shirt" },
          { img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600', title: "Womens Dresses" },
          { img: 'https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=600', title: "Womens Casuals" },
        ].map((c) => (
          <div className="hero__card" key={c.title}>
            <img src={c.img} alt={c.title} />
            <div className="hero__content">
              <p>2023 Trend</p>
              <h4>{c.title}</h4>
              <a href="#">Discover More +</a>
            </div>
          </div>
        ))}
      </section>

      {/* Trending products */}
      <section className="section__container product__container">
        <h2 className="section__header">Trending Products</h2>
        <p className="section__subheader mb-12">
          Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((p) => (
            <div className="product__card" key={p.id}>
              <div className="relative">
                <Link to={`/shop/${p.id}`}>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </Link>
                <div className="hover:block absolute top-3 right-3">
                  <button>
                    <i className="ri-shopping-cart-2-line bg-primary p-1.5 text-white hover:bg-primary-dark"></i>
                  </button>
                </div>
              </div>
              <div className="product__card__content">
                <h4>{p.name}</h4>
                <p>{p.price} {p.old && <s>{p.old}</s>}</p>
                <Stars count={p.stars} />
              </div>
            </div>
          ))}
        </div>
        <div className="product__btn"><button className="btn">Load More</button></div>
      </section>

      {/* Deals */}
      <section className="section__container deals__container">
        <div className="deals__image">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=900" alt="deals" />
        </div>
        <div className="deals__content">
          <h5>Get Up To 20% Discount</h5>
          <h4>Deals Of This Month</h4>
          <p>
            Our Women's Fashion Deals of the Month are here to make your style dreams a reality without breaking the bank.
            Discover a curated collection of exquisite clothing, accessories, and footwear.
          </p>
          <div className="deals__countdown flex-wrap">
            {[['14','Days'],['20','Hours'],['15','Mins'],['05','Secs']].map(([n,l]) => (
              <div className="deals__countdown__card" key={l}><h4>{n}</h4><p>{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section__container banner__container">
        <div className="banner__card">
          <span><i className="ri-truck-line"></i></span>
          <h4>Free Delivery</h4>
          <p>Offers convenience and the ability to shop from anywhere, anytime.</p>
        </div>
        <div className="banner__card">
          <span><i className="ri-money-dollar-circle-line"></i></span>
          <h4>100% Money Back Guaranty</h4>
          <p>E-commerce have a review system where customers can share feedback.</p>
        </div>
        <div className="banner__card">
          <span><i className="ri-user-voice-fill"></i></span>
          <h4>Strong Support</h4>
          <p>Offer customer support services to assist customers with queries and issues.</p>
        </div>
      </section>

      {/* Blog */}
      <section className="section__container blog__container">
        <h2 className="section__header">Latest From Blog</h2>
        <p className="section__subheader">
          Elevate your wardrobe with our freshest style tips, trends, and inspiration on our blog.
        </p>
        <div className="md:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=900', tag:'Timeless Elegance', title:'Mastering the Art of Capsule Wardrobes', date:'12th August 2022' },
            { img:'https://images.unsplash.com/photo-1700159017572-de76bb0c5719?q=80&w=900', tag:'Summer Breeze', title:'Unveiling the Hottest Beachwear Trends', date:'18th January 2023' },
            { img:'https://plus.unsplash.com/premium_photo-1682142715511-27bfbfdc044f?q=80&w=900', tag:'Power Dressing', title:"Navigating the World of Women's Tailoring", date:'5th January 2025' },
            { img:'https://plus.unsplash.com/premium_photo-1713720663924-4e3fe8f20f79?q=80&w=900', tag:'New York Times', title:"The World's Best Fashion Fair 2025", date:'25th May 2025' },
          ].map((b) => (
            <div className="blog__card cursor-pointer hover:scale-105 transition-all duration-200" key={b.title}>
              <img src={b.img} alt={b.title} />
              <div className="blog__card__content">
                <h6>{b.tag}</h6>
                <h4>{b.title}</h4>
                <p>{b.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

