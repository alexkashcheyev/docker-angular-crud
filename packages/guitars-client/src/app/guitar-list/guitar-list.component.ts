import { Component, OnInit } from '@angular/core';
import { GuitarDto, ApiClient } from 'guitars-common';
import { createApiClient } from '../util';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.scss']
})
export class GuitarListComponent implements OnInit {

  public guitars: GuitarDto[] = [];
  public error = false;
  public loadGuitarsDisabled = true;

  private apiClient?: ApiClient;

  constructor() { }

  ngOnInit(): void {
    this.loadGuitars()

    this.apiClient = createApiClient();
  }

  public loadGuitars() {
    this.loadGuitarsDisabled = true;
    return this.apiClient!.listGuitars(this.guitars.length).then(
      (guitarsResponse: any) => {
        this.guitars = [
          ...this.guitars,
          ...guitarsResponse.data as GuitarDto[]
        ]
        this.loadGuitarsDisabled = guitarsResponse.data.length === 0;
      }
    ).catch(() => this.error = true)
  }

}
