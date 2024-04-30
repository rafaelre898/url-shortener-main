
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../shared/Button/Button';
import Typography from '../shared/Typography/Typography';
import style from './urlShortner.module.css';
import { useShortenUrl } from '../../hooks/useShortenUrl';
import { initialValues, validationSchema } from '../../schema/validationSchema';

const ShortenUrlForm: React.FC = () => {
  const { response, copy, loading, onSubmit, handleCopy } = useShortenUrl();

  return (
    <div className={style.urlShortenerPage}>
      <div className={style.urlShortenerContainer}>
        <div className={style.urlShortenerInfo}>
          <Typography variant='h1'>URL Shortener</Typography>
          <Typography variant='h5'>Enter the URL to shorten</Typography>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ status }) => (
            <Form>
              <div style={{ paddingBottom: '1rem' }}></div>
              <Field name="url" type="text" placeholder="Enter URL" label="URL" required className={style.input} />
              <ErrorMessage name="url" component="div" />
              {status && status.success && <div>{status.success}</div>}
              {status && status.error && <div>{status.error}</div>}
              <Button type="submit" variant='primary'>Shorten URL</Button>
            </Form>
          )}
        </Formik>
        <Typography variant='p' className={style.urlSuccess}>{response}</Typography>
        {response && (
          <div className={style.urlShortenFooter}>
            <Typography variant='p' className={style.urlShorten}>Success here's your shorten URL</Typography>
            <Button variant='outline' onClick={handleCopy}>{copy ? 'Copied' : 'Copy'}</Button>
          </div>
        )}
        {loading && <>Loading ....</>}
      </div>
    </div>
  );
};

export default ShortenUrlForm;
