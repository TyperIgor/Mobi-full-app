import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  isLight = false;
  private readonly scrollThreshold = 220;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isLight = window.scrollY > this.scrollThreshold;
  }
}
