import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';
import { Directive,  Input} from '@angular/core';
declare var google: any;



@Directive({
  selector: 'agm-google-map-directions'
})
export class DirectionsMapDirective {
    
  @Input() origin;
  @Input() destination;
  @Input() waypoints;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  ngOnInit(){
    this.gmapsApi.getNativeMap().then(map => {
     
              var directionsService = new google.maps.DirectionsService;
              var directionsDisplay = new google.maps.DirectionsRenderer;
              directionsDisplay.setMap(map);
              directionsService.route({
                      origin: this.origin,
                      destination: this.destination,
                      waypoints: [{
                        location:this.origin,
                        stopover: true
                      },
                      {
                        location:this.destination,
                        stopover: true
                      }
                    ],
                      optimizeWaypoints: true,
                      travelMode: 'DRIVING'
                    }, function(response, status) {
                      console.log(response);
                                if (status === 'OK') {
                                 let options={zoom:0};
                                  directionsDisplay.setOptions(options);
                                  directionsDisplay.setDirections(response);
                                  
                                } else {
                                  window.alert('Directions request failed due to ' + status);
                                }
              });

    });
  }
}