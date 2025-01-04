//
const data = {
  headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Prime Video',
      href: '/search?tag=prime-video',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers ',
      href: '/search?tag=best-seller',
    },

    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],

  //carousel data
  carousels: [
    {
      title: 'Most Popular Shoes For Sale',
      buttonCaption: 'Shop Now',
      image: '/images/banner3.jpg',
      url: '/search?category=Shoes',
      isPublished: true, //if false, the carousel will not be displayed
    },
    {
      title: 'Best Sellers in T-shirts',
      buttonCaption: 'Shop Now',
      image: '/images/banner1.jpg',
      url: '/search?category=T-Shirts',
      isPublished: true, //if false, the carousel will not be displayed
    },
    {
      title: 'Best Deals on Wrist Watches',
      buttonCaption: 'See More',
      image: '/images/banner2.jpg',
      url: '/search?category=Wrist-Watches',
      isPublished: true, //if false, the carousel will not be displayed
    },
    {
      title: 'Top Signature Jewelry',
      buttonCaption: 'Shop Now',
      image: '/images/banner4.jpg',
      url: '/search?category=Jewelry',
      isPublished: true, //if false, the carousel will not be displayed
    },
    {
      title: 'Assortment of Pet Toys',
      buttonCaption: 'See More',
      image: '/images/banner5.jpg',
      url: '/search?category=Pet-Toys',
      isPublished: true, //if false, the carousel will not be displayed
    },
    {
      title: 'Best Deals on Headphones',
      buttonCaption: 'See More',
      image: '/images/banner11.jpg',
      url: '/search?category=Headphones',
      isPublished: true, //if false, the carousel will not be displayed
    },
    {
      title: '30-50% Off on Bags',
      buttonCaption: 'See More',
      image: '/images/banner7.jpg',
      url: '/search?category=Bags',
      isPublished: true, //if false, the carousel will not be displayed
    },
    {
      title: 'Essential Oils for Sale',
      buttonCaption: 'Shop Now',
      image: '/images/banner8.jpg',
      url: '/search?category=Essential-Oils',
      isPublished: true, //if false, the carousel will not be displayed
    },
    {
      title: 'Designer Bags for Sale',
      buttonCaption: 'See More',
      image: '/images/banner9.jpg',
      url: '/search?category=Designer-Bags',
      isPublished: true, //if false, the carousel will not be displayed
    },
    {
      title: 'Your Everyday Makeup Needs',
      buttonCaption: 'Shop Now',
      image: '/images/banner10.jpg',
      url: '/search?category=Makeup',
      isPublished: true, //if false, the carousel will not be displayed
    },
  ],
}

export default data
