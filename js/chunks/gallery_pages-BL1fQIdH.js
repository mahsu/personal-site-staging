import { l as listGalleryImages } from './gallery_image_metadata-JoJ0HvFs.js';

const IMAGES_PER_PAGE = 10;
function getGalleryPageData(pageIndex) {
  const images = listGalleryImages();
  const totalPageCount = Math.ceil(images.length / IMAGES_PER_PAGE) || 1;
  const index = Math.max(0, Math.min(pageIndex, totalPageCount - 1));
  const start = index * IMAGES_PER_PAGE;
  const pageImages = images.slice(start, start + IMAGES_PER_PAGE).map((img) => ({ name: img.name, l: img.l, s: img.s }));
  return { pageImages, totalPageCount };
}

export { getGalleryPageData as g };
