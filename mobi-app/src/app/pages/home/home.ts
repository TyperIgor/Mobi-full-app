import { Component } from '@angular/core';
import { Header } from '../../components/header/header/header';
import { Landing } from '../../components/landing/landing/landing';

@Component({
  selector: 'app-home',
  imports: [Header, Landing],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
