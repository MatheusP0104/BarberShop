import { Component, OnInit } from '@angular/core';

import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-tela-mapa',
  templateUrl: './tela-mapa.page.html',
  styleUrls: ['./tela-mapa.page.scss'],
})
export class TelaMapaPage implements OnInit {
  lat: any; 
  long: any;
  accuracy: any;

  map : Leaflet.Map;

  public editMode = false
  teste = 0

  constructor(private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
  }

  geoInformation() {
    this.geolocation.getCurrentPosition().then((data) => {
      this.lat = data.coords.latitude;
      this.long = data.coords.longitude;
      // this.accuracy = data.coords.accuracy;
     }).catch((error) => {
       alert(error);
     });
  }

  ionViewDidEnter() {
    this.lat = -22.231977193122866
    this.long = -45.929504787972036
    this.leafletMap(this.lat, this.long);
  }

  leafletMap(lat, Long) {
    // -22.231977193122866, -45.929504787972036 <-- coordenada Senac
    
    this.map = Leaflet.map('mapId').setView([lat, Long],16);
    
    Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      
    Leaflet.marker([lat, Long]).addTo(this.map)
    .bindPopup('Senac')
    .openPopup();

  }

  rota(){
    if(this.teste == 0){
      this.teste++
      console.log(this.teste)
      this.geolocation.getCurrentPosition().then((data) => {
        this.lat = data.coords.latitude;
        this.long = data.coords.longitude;
        Leaflet.marker([this.lat, this.long]).addTo(this.map).bindPopup('Você está<br>Aqui').openPopup();
        Leaflet.marker([-22.231977193122866, -45.929504787972036]).addTo(this.map).bindPopup('Senac').openPopup();

        antPath([[this.lat, this.long], [-22.231977193122866, -45.929504787972036]],
          { color: '#FF0000', weight: 5, opacity: 0.6 })
          .addTo(this.map);
      }).catch((error) => {
        alert(error);
      });
    }
  }


  removeMap(){
    this.map.remove()
    this.teste = 0
  }

  edit(){
    switch (this.editMode){
      case false:
        this.editMode = true;
        break;

      case true:
        this.editMode = false;
        break;
    }
  }

}
