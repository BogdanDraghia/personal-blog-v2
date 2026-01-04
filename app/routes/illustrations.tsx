import data from '@content/illustrations/data.json';
import { useSearchParams } from 'react-router';
import IllustrationList from '~/components/modules/Illustrations/IllustrationList';
import IllustrationOverlay from '~/components/modules/Illustrations/IllustrationOverlay';

export interface IllustrationImageVariations {
  large?: string;
  thumbnail?: string;
}

export interface IllustrationData {
  id: string;
  title: string;
  dominantColor: string;
  palette: string[];
  variations: IllustrationImageVariations;
}

const illustrations: IllustrationData[] = data;

const Illustrations = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentId = searchParams.get('illustration');
  const currentItem = illustrations.find((item) => item.id === currentId);

  const handleOpenOverlay = (id: string) => {
    setSearchParams({ illustration: id }, { preventScrollReset: true });
  };
  const handleCloseOverlay = () => {
    setSearchParams({}, { preventScrollReset: true });
  };

  return (
    <div className="content">
      <h1>Illustrations</h1>
      <IllustrationList onItemClick={handleOpenOverlay} illustrations={illustrations} />
      {currentItem && (
        <IllustrationOverlay
          isOpen={!!currentItem}
          onClose={handleCloseOverlay}
          illustration={currentItem}
        />
      )}
    </div>
  );
};

export default Illustrations;
