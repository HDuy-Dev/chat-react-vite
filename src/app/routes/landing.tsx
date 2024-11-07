import { Helmet } from 'react-helmet-async';

export const LandingRoute = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <Helmet>
        <title>Landing Page Title</title>
        <meta name="description" content="This is an example description" />
      </Helmet>
      Landing Route
    </div>
  );
};
