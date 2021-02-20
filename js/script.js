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
        mailNewsletter:'',
        footerAbout:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo nobis corporis. Vero sed numquam quas animi asperiores sunt ullam? Debitis voluptates facilis placeat! ',
        footerMenuLeft:[{
            name: 'Lastet Books',
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
            address: '63 E.Studebaker Street Bolingbrook,IL 60440',
            phone: '(800)000-0000',
            mobile:'(800)000-0000',
            email:'Info@your-company.com',
         },
         creditsPart1:'Copyright 2012 - 2020 | Avada Theme by ',
         creditsPart2:' | All Rights Reserved | Powered by ',
         headerImage:'img/hero/hero-07-2x.jpg',
         counter:0,  
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
      carouselLive:function(){
        setInterval(() => {
           this.changeHeaderBg('right')
       }, 4000);
      },
      changeHeaderBg:function(side){
        backgroundlist=['img/hero/hero-07-2x.jpg','img/hero/hero-06-2x.jpg','img/hero/hero-08.jpg']
        if (side == 'right') {
            this.counter++;
            if (this.counter === backgroundlist.length) {
                this.counter = 0;
              }          
        }
        if (side == 'left') {
            this.counter--;
            if (this.counter == -1 ) {
                this.counter = backgroundlist.length -1;
              }
        }
        switch (this.counter) {
            case 0:
             this.headerImage= backgroundlist[0];
            break;
            case 1:
             this.headerImage= backgroundlist[1];  
            break;
            case 2:
            this.headerImage=  backgroundlist[2];  
            break;
            default:
            this.headerImage=  backgroundlist[0];
            break;
        }
      }
    },
  });
  Vue.config.devtools = true
  