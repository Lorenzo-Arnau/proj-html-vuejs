new Vue({
  el: '#root',
  data: {
    firstMenu:[{
      name: 'Home',
      url: 'www.test.it'
    },
    {
      name: 'About Me',
      url: 'www.test.it'
    },
    {
      name: 'Testimonials',
      url: 'www.test.it'
    },
    {
      name: 'My Blog',
      url: 'www.test.it'
    },
    {
      name: 'Meetsup',
      url: 'www.test.it'
    },
    {
      name: 'Shop',
      url: 'www.test.it'
    },
    {
      name: 'Contact Me',
      url: 'www.test.it'
    }
  ],

  price:'39',
  headerTitle:'Damon Vaughn',
  headerContent:'Best-selling author and the most influential public intellectual in the western world right now.',
  headerSpan:'- The New York Times',
  mailNewsletter:'',
  newsletterList:[],
  footerAbout:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo nobis corporis. Vero sed numquam quas animi asperiores sunt ullam? Debitis voluptates facilis placeat! ',
  footerMenuLeft:[{
    name: 'Latest Books',
    url: 'www.test.it'
  },
  {
    name: 'Upcoming Events',
    url: 'www.test.it'
  },
  {
    name: 'Recent Articles',
    url: 'www.test.it'
  },
  {
    name: 'Buisness Enquiries',
    url: 'www.test.it'
  },
  {
    name: 'Visit My Foundation',
    url: 'www.test.it'
  }],
  contactInfo:{
    address: '63 E. Studebaker Street Bolingbrook,IL 60440',
    phone: '(800)000-0000',
    mobile:'(800)000-0000',
    email:'Info@your-company.com',
  },
  creditsPart1:'Copyright 2012 - 2020 | Avada Theme by ',
  creditsPart2:' | All Rights Reserved | Powered by ',
  headerImage:'img/hero/hero-07-2x.jpg',
  counter:0,
  flag : true,
  backgroundList:['img/hero/hero-07-2x.jpg','img/hero/hero-06-2x.jpg','img/hero/hero-08.jpg'],
},
mounted() {

},
methods:{
  returnTop:function(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  },
  stopCarousel:function(){
    this.flag = false;
  },
  carouselLive:function(){
    const interval = setInterval(() => {
      this.changeHeaderBg('right')
    }, 7000);
    if (this.flag == true) {
      interval
    }else{
      clearInterval(interval)
    }
    this.flag = true;
  },
  changeHeaderBg:function(side){
    if (side == 'right') {
      this.counter++;
      if (this.counter === this.backgroundList.length) {
        this.counter = 0;
      }
    }
    if (side == 'left') {
      this.counter--;
      if (this.counter == -1 ) {
        this.counter = this.backgroundList.length -1;
      }
    }
    switch (this.counter) {
      case 0:
      this.headerImage= this.backgroundList[0];
      this.headerTitle='Damon Vaughn';
      this.headerSpan='-The New York Times';
      break;
      case 1:
      this.headerImage= this.backgroundList[1];
      this.headerTitle='New Book Available';
      this.headerSpan='Available at Amazon And Barnes&Noble'
      break;
      case 2:
      this.headerImage=  this.backgroundList[2];
      this.headerTitle='New Book Available';
      this.headerSpan='Available at Amazon And Barnes&Noble'
      break;
      default:
      this.headerImage=  this.backgroundList[0];
      this.headerTitle='Damon Vaughn';
      this.headerSpan='-The New York Times';
      break;
    }
  },
  sendMail:function(){
    this.newsletterList.push(this.mailNewsletter);
    this.mailNewsletter = '';
    console.log(this.newsletterList);
  },
},
});
Vue.config.devtools = true
