import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Landing } from "../../components/landing/landing";

@Component({
  selector: 'app-home',
  imports: [Header, Landing],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
