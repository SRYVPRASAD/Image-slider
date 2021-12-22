import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent {
  currentSlide = 0;
  imageCarousel: NodeJS.Timeout;
  isCaroselRunning = false;

  constructor() {}

  imageObject: any = [
    {
      imageUrl: 'assets/images/related-product.jpg',
      title: 'title of image-0',
      url: 'https://bimcontent.com/download/towelrail-heated-radiantheating-round-single/',
    },
    {
      imageUrl: 'assets/images/related-product01.jpg',
      title: 'title of image-1',
      url: 'https://bimcontent.com/download/towelrail-heated-radiantheating-round-single/',
    },
    {
      imageUrl: 'assets/images/related-product02.jpg',
      title: 'title of image-2',
      url: 'https://bimcontent.com/download/towelrail-heated-radiantheating-round-single/',
    },
  ];

  slideNextImg() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.imageObject.length ? 0 : next;
  }

  toggleImageSlider($event) {
    console.log($event);
    console.log(this.isCaroselRunning);
    !!this.isCaroselRunning
      ? clearInterval(this.imageCarousel)
      : this.initImageSlider();
    this.isCaroselRunning = !this.isCaroselRunning;
    console.log(this.isCaroselRunning);
  }

  initImageSlider() {
    this.imageCarousel = setInterval(() => {
      this.slideNextImg();
    }, 1000);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.initImageSlider();
    this.isCaroselRunning = true;
  }
}
