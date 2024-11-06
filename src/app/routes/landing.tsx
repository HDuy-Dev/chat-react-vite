const ErrorComponent = () => {
  throw Error('heck');
  return <p>should never render this</p>;
};

export const LandingRoute = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      Landing Route
      <ErrorComponent />
    </div>
  );
};
