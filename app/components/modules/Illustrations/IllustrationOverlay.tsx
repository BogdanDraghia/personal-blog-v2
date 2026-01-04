import { Root, Portal, Overlay, Close, Content, Description, Title } from '@radix-ui/react-dialog';
import type { IllustrationData } from '~/routes/illustrations';
import styles from './IllustrationOverlay.module.css';
import ColorPalette from './ColorPalette';

interface IllustrationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  illustration: IllustrationData;
}

const IllustrationOverlay = ({ isOpen, onClose, illustration }: IllustrationOverlayProps) => {
  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
  };
  return (
    <Root open={isOpen} onOpenChange={onClose}>
      <Portal>
        <Overlay className={styles.illustrationOverlay} />
        <Content
          className={styles.overlayContent}
          onOpenAutoFocus={(event) => {
            event.preventDefault();
          }}
        >
          <Description style={{ display: 'none' }}>
            View illustration details and color palette
          </Description>
          <Close className={styles.closeHelperCross} aria-label="Close illustration">
            <span style={{ transform: 'rotate(45deg)' }} />
            <span style={{ transform: 'rotate(-45deg)' }} />
          </Close>

          <div className={styles.imageOverlay}>
            <img src={illustration.variations.large} alt={illustration.title} loading="lazy" />
          </div>

          <ColorPalette colors={illustration.palette} />
        </Content>
      </Portal>
    </Root>
  );
};

export default IllustrationOverlay;
