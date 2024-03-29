import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as L from 'leaflet';
import { Icon, icon } from 'leaflet';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent implements OnInit, OnDestroy, AfterViewInit {
  lat = 0;
  long = 0;
  temperatureAtPoint = 0;
  city = '';
  markers: null | any = null;
  private map: any;
  messageColor = 'primary';
  isLoading: boolean = false;

  destroy$: Subject<any> = new Subject<any>();
  //.pipe(takeUntil(this.destroy$))

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, 98.5795],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  constructor(
    private weather: WeatherService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      panelClass: [
        this.temperatureAtPoint > 0 ? 'warm-snackbar' : 'cold-snackbar',
      ],
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();

    this.map.on('click', (e: any) => {
      this.isLoading = true;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${e.latlng.lat}&lon=${e.latlng.lng}&appid=18141911a2204318380aeeac3872a83f&units=metric`;

      this.weather
        .getWeather(url)
        .pipe(takeUntil(this.destroy$))
        .subscribe((resp: any) => {
          this.temperatureAtPoint = resp.main.temp;
          this.city = resp.name;
          this.lat = e.latlng.lat;
          this.long = e.latlng.lng;
          if (this.markers !== null) {
            this.map.removeLayer(this.markers);
          }
          this.markers = L.marker(e.latlng, {
            icon: icon({
              ...Icon.Default.prototype.options,
              iconUrl: 'assets/marker-icon.png',
              iconRetinaUrl: 'assets/marker-icon-2x.png',
              shadowUrl: 'assets/marker-shadow.png',
            }),
          }).addTo(this.map);
          if (this.temperatureAtPoint) {
            this.temperatureAtPoint > 0
              ? (this.messageColor = 'warn')
              : (this.messageColor = 'primary');
          }
          this.isLoading = false;
          this.openSnackBar(
            `${this.city}:  ${this.temperatureAtPoint.toString()}`,
            'Close'
          );
        });
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
