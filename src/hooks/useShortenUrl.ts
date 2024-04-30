import { useState } from 'react';
import axios from 'axios';

export const useShortenUrl = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<any>(null);
  const [copy, setCopy] = useState(false);
  const [loading, setLoading] = useState(false);

  const makeApiCall = async (url: string) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const apiToken = process.env.REACT_APP_API_TOKEN;
    const postData = {
      url: url,
      domain: 'tinyurl.com'
    };

    try {
      const result = await axios.post(`${apiUrl}?api_token=${apiToken}`, postData);
      setResponse(result.data.data.tiny_url);
      setLoading(false);
    } catch (error: any) {
      setError(error);
    }
  };

  const onSubmit = async (values: { url: string }, { setSubmitting, setStatus }: any) => {
    try {
      setLoading(true);
      await makeApiCall(values.url);
    } catch (error) {
      setStatus({ error: 'Failed to shorten URL' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(response || '');
    setCopy(true);
  };

  return { response, error, copy, loading, onSubmit, handleCopy };
};
