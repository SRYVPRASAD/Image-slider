import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app1';
  imageSrc: any;
  i = 0;
  timer = 3000;

  constructor() {
  }

  imageObject: any = [
    {
      imageUrl: 'assets/images/related-product.jpg',
      title: 'title of image-0',
      Otherlink: 'https://bimcontent.com/download/towelrail-heated-radiantheating-round-single/',
    },
    {
      imageUrl: 'assets/images/related-product01.jpg',
      title: 'title of image-1',
      Otherlink: 'https://bimcontent.com/download/towelrail-heated-radiantheating-round-single/',
    },
    {
      imageUrl: 'assets/images/related-product02.jpg',
      title: 'title of image-2',
      Otherlink: 'https://bimcontent.com/download/towelrail-heated-radiantheating-round-single/',
    },
  ];


  ChangeImage = (img) => {
    let count: any;
    (this.i >= img.length) ? this.i = 0 : null;
    count = this.i++;
    return this.imageSrc = img[count];
  }

  changeTimerOut = () => {
    return this.timer = 3000;
  }
  changeTimerIn = () => {
    return this.timer = 1000000;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.ChangeImage(this.imageObject);

    setInterval(() => {
      this.ChangeImage(this.imageObject);
    }, this.timer);

  }







}

