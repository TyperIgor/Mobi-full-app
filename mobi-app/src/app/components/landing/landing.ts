import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { aboutContent } from '../../data/about-content';

@Component({
  selector: 'app-landing',
  imports: [NgOptimizedImage],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  aboutText = aboutContent;

galleryImages = [
    'assets/img/IMG_5457.JPG.jpeg',
    'assets/img/IMG_5460.JPG.jpeg',
    'assets/img/IMG_7610.JPEG',
    'assets/img/IMG_8608.jpg',
    'assets/img/IMG_7632.JPEG',
    'assets/img/IMG_7637.JPEG',
    'assets/img/Qualidade-photo.JPEG',
    'assets/img/IMG_7642.JPEG',
    'assets/img/IMG_7638.JPEG',
    'assets/img/IMG_8383.jpg',
    'assets/img/IMG_8588.jpg',
    'assets/img/IMG_2143.JPG.jpeg',
    'assets/img/IMG_7643.JPEG',
    'assets/img/IMG_8314.jpg',
    'assets/img/IMG_8350.jpg',
    'assets/img/IMG_8427.jpg',
    'assets/img/IMG_8523.jpg',
    'assets/img/IMG_8596.jpg',
    'assets/img/IMG_8531.jpg',
    'assets/img/IMG_8210.jpg',
    'assets/img/IMG_8518.jpg',
  ];
}
