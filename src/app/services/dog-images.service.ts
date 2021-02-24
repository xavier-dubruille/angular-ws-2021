import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DogImageModel} from '../models/dog-image.model';

@Injectable({
  providedIn: 'root'
})
export class DogImagesService {

  constructor(private httpClient: HttpClient) {
  }

  fetchImg(): Observable<DogImageModel> {
    console.log('fetch img');
    const urlApi = 'https://dog.ceo/api/breeds/image/random';
    return this.httpClient.get<DogImageModel>(urlApi);
  }

}
