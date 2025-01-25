const HeroContainer = ({ children, imgs, className }) => {
  return (
    <div className="container">
      <article className="content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        {children}
      </article>
      {imgs && (
        <div className="image-wrapper">
          {imgs.map(({ img, alt, className }, i) => (
            <img key={i} src={img} alt={alt} className={className} />
          ))}
        </div>
      )}
    </div>
  );
};
export default HeroContainer;
