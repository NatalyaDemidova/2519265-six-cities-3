import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import { OfferForCardType } from '../../mosks/types/offer';
import { Markers } from '../../const';

type MapProps = {
  offersCard: OfferForCardType[];
  city: string;
  currentCardId: string | null;
}

export default function Map({offersCard, city, currentCardId}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const currentOffer = offersCard[0];

  const offersOfCurrentCity = offersCard.filter((offer) => offer.city.name === city);

  const map = useMap({currentOffer, mapRef});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: Markers.URL_MARKER_DEFAULT,
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: Markers.URL_MARKER_CURRENT,
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offersOfCurrentCity.forEach((point) => {
        leaflet
          .marker({
            lat: point.city.location.latitude,
            lng: point.city.location.longitude,
          }, {
            icon: (point.id === currentCardId) ?
              currentCustomIcon :
              defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offersCard, currentCardId, currentCustomIcon, defaultCustomIcon, offersOfCurrentCity]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
