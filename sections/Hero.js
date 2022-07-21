export default function Hero({ options }) {
  console.log(options);
  return (
    <>
      <img src={options.mainImageUrl || "./default.jpg"} />
      SEZIONE HERO TYPE A
    </>
  );
}
