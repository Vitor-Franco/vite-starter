// const svgModules = import.meta.glob('./logos/**/*.svg');
// const svgImages = Object.values(svgModules).map(async (module) => module());

// for await (const image of svgImages) {
//   const img = document.createElement('img');
//   img.src = image.default;
//   img.height = 120;
//   document.body.appendChild(img);
// }

const images = Object.values(
  import.meta.glob('./logos/**/*.svg', { eager: true }),
);
for (const image of images) {
  const img = document.createElement('img');
  img.src = image.default;
  img.height = 120;
  document.body.appendChild(img);
}
