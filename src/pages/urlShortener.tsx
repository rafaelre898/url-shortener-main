import React from 'react';
import ShortenUrlForm from '../components/UrlShorterner/urlShortner';
import Typography from '../components/shared/Typography/Typography';
import style from './urlShortener.module.css'
import Button from '../components/shared/Button/Button';
const UrlShortenerPage: React.FC = () => {
  return (
    <div className={style.urlShortenerPage}>
      <div className={style.urlShortenerContainer}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h1'>URL Shortener</Typography>
          <Typography variant='h5'>Enter the URL to shorten</Typography>
        </div>

        <ShortenUrlForm />
        <Typography variant='p' className={style.urlSuccess}>Success here's your shorten URL</Typography>
        <div className={style.urlShortenFooter}>
          <Typography variant='p' className={style.urlShorten}>Success here's your shorten URL</Typography>
          <Button variant='outline'>Game</Button>
        </div>
      </div>

    </div>
  );
};

export default UrlShortenerPage;