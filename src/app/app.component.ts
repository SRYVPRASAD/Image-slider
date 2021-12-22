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
  pause: boolean = true;


  imageObject: any = [
    {
      imageUrl: 'assets/images/related-product.jpg',
      title: 'title of image-0',
      reflink: 'https://bimcontent.com/download/towelrail-heated-radiantheating-round-single/',
    },
    {
      imageUrl: 'assets/images/related-product01.jpg',
      title: 'title of image-1',
      reflink: 'https://bimcontent.com/download/towelrail-heated-radiantheating-round-single/',
    },
    {
      imageUrl: 'assets/images/related-product02.jpg',
      title: 'title of image-2',
      Otherlink: 'https://bimcontent.com/download/towelrail-heated-radiantheating-round-single/',
    },
  ];


  constructor() {
    setInterval(() => {
      this.ChangeImage(this.imageObject);
    }, 3000);
  }

  ngOnInit(): void {
    this.ChangeImage(this.imageObject);
  }

  ChangeImage = (img) => {
    let count: any;
    (this.i >= img.length) ? this.i = 0 : null;
    this.pause ? count = this.i++ : null;
    return this.imageSrc = img[count];
  }

  OpenNewTab(refLink: string) {
    window.open(refLink, "_blank");
  }

}

