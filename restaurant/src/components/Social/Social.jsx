import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { FacebookShareButton, InstapaperShareButton, WhatsappShareButton } from 'react-share';

function ShareButtons() {
  const shareUrl = 'https://www.facebook.com/jorge.neiva/';
  const title = 'Example Title';
  const imageUrl = 'https://example.com/image.jpg';

  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <FacebookShareButton url={shareUrl} quote={title}>
        <FaFacebook />
        <span></span>
      </FacebookShareButton>
      <InstapaperShareButton url={shareUrl} title={title} image={imageUrl}>
        <FaInstagram />
        <span></span>
      </InstapaperShareButton>
    </IconContext.Provider>
  );
}


export default ShareButtons;