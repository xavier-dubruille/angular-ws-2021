import {Component, Input, OnInit} from '@angular/core';
import {DogImagesService} from '../../services/dog-images.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {

  @Input() dog = '';
  urlImg = '';

  constructor(private dogImagesService: DogImagesService) {
  }

  ngOnInit(): void {
    this.dogImagesService.fetchImg().subscribe(
      dogImage => {
        console.log(dogImage);
        this.urlImg = dogImage.message;
      }
    )
    ;
  }

}
