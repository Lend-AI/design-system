import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[laiPlacesAutocomplete]',
  standalone: true,
})
export class PlacesAutocompleteDirective implements AfterViewInit, OnDestroy {
  @Input() country: string[] = [];

  @Output() placeSelected = new EventEmitter<google.maps.places.PlaceResult>();

  private instance!: google.maps.places.Autocomplete;
  private listener!: google.maps.MapsEventListener;

  constructor(
    private readonly elRef: ElementRef,
    private readonly zone: NgZone
  ) {}

  ngAfterViewInit(): void {
    this.initAutocomplete();
  }

  ngOnDestroy(): void {
    this.destroyAutocomplete();
  }

  private initAutocomplete(): void {
    this.zone.runOutsideAngular(() => {
      this.instance = new google.maps.places.Autocomplete(
        this.elRef.nativeElement,
        {
          componentRestrictions: { country: this.country },
          fields: ['address_components'],
          types: ['address'],
        }
      );

      this.listener = this.instance.addListener('place_changed', () => {
        this.zone.run(() => {
          this.placeSelected.emit(this.instance.getPlace());
        });
      });
    });
  }

  private destroyAutocomplete(): void {
    this.listener.remove();
  }
}
