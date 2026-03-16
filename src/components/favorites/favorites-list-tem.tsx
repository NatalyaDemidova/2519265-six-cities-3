import { Link } from 'react-router-dom';
import FavoritesListCard from './favorites-list-card';
import { OfferForCardType } from '../../mosks/types/offer';

export type FavoriteItemProps = {
  city: string;
  offers: OfferForCardType[];
}

export default function FavoritesListItem({city, offers}: FavoriteItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to='/' className="locations__item-link">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoritesListCard key={offer.id} offer={offer} />)}
      </div>
    </li>
  );
}
