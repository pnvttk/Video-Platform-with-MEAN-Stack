import { Component, OnInit } from '@angular/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faDatabase = faDatabase;
  faAngular = faAngular;
  faNodeJs = faNodeJs
  faJs =faJs
  constructor() { }

  ngOnInit(): void {
  }

}
