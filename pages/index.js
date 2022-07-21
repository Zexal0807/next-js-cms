import Hero from "../sections/Hero.js";

export default function HomePage() {
  let HeroOptions = JSON.parse('{"mainImageUrl":".../logo.png"}');

  return (
    <>
      <Hero options={HeroOptions} />
    </>
  );
}
