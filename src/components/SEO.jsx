import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path }) => {
  const url = `https://fysiosii-mesto.fi${path}`;

  return (
    <Helmet>
      <title>{title} | Fysiosii-mesto</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;