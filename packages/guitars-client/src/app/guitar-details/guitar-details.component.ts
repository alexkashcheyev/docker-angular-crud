import { Component, OnInit } from '@angular/core';
import { ApiClient, GuitarDto } from 'guitars-common';
import { ActivatedRoute, Router } from '@angular/router';
import { createApiClient } from '../util';

@Component({
  selector: 'app-guitar-details',
  templateUrl: './guitar-details.component.html',
  styleUrls: ['./guitar-details.component.scss']
})
export class GuitarDetailsComponent implements OnInit {

  public guitar: GuitarDto = {
    id: null,
    modelName: '',
    manufacturer: '',
    originCountry: '',
    year: 1970
  }

  public get displayName() {
    if (this.guitar.manufacturer === '' && this.guitar.modelName === '') {
      return '(unknown guitar)';
    } else {
      return `${this.guitar.manufacturer} ${this.guitar.modelName}`;
    }
  }

  private apiClient?: ApiClient;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const { id: idFromUrl } = this.route.snapshot.params;

    this.apiClient = createApiClient();

    if (typeof idFromUrl !== 'string' || idFromUrl === 'new') {
      this.guitar.id = null;
    } else {
      this.guitar.id = idFromUrl;
      this.loadGuitar(this.guitar.id).catch(() => {
        alert('Could not load guitar');
        this.router.navigate(['/']);
      })
    }
  }

  public save() {
    if (this.guitar.id === null) {
      this.createAndNavigate(this.guitar).catch(
        () => alert('Could not create a guitar :(')
      );
    } else {
      this.updateAndNavigate(this.guitar).catch(
        () => alert('Could not update your guitar :(')
      )
    }
  }

  public delete() {
    if (this.guitar.id !== null) {
      this.deleteAndNavigate(this.guitar.id).catch(
        () => alert('Could not delete your guitar :)')
      )
    }
  }

  private async loadGuitar(id: string) {
    const loadedGuitar = await this.apiClient!.getGuitar(id);
    this.guitar = loadedGuitar.data;
  }

  private async createAndNavigate(guitar: GuitarDto) {
    const createResponse = await this.apiClient!.createGuitar(guitar);
    this.guitar.id = createResponse.headers.location.split('/').slice(-1);
    this.router.navigate([`/guitar/${this.guitar.id}/`]);
  }

  private async updateAndNavigate(guitar: GuitarDto) {
    await this.apiClient!.updateGuitar(guitar.id as string, guitar);
    this.router.navigate([`/`]);
  }

  private async deleteAndNavigate(id: string) {
    await this.apiClient!.deleteGuitar(id);
    this.router.navigate([`/`]);
  }
}
