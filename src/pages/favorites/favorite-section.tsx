import { OfferForCardType } from '../../mosks/types/offer';
import Favorites from './favorites';
import FavoritesEmpty from './favorites-empty';

type FavoriteSectionProps = {
  offersCard: OfferForCardType[];
};

export default function FavoritesSection({
  offersCard,
}: FavoriteSectionProps) {
  const favoriteOffers: boolean = offersCard.some(
    ({ isFavorite }) => isFavorite === true,
  );
  return (
    <>
      {favoriteOffers && <Favorites offersCard={offersCard} />}
      {!favoriteOffers && <FavoritesEmpty />}
    </>
  );
}
