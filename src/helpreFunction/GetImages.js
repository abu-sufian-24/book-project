function GetImages(uel) {
  return new URL(uel, import.meta.url).href;
}
export { GetImages };
