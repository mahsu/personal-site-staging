import util from 'util';
import path from 'path';
import fs from 'fs';
import exif from 'exiftool';

const listGalleryImages = () => {
  const GALLERY_IMG_PATH = "/gallery/img";
  return fs.readdirSync("src/assets/portfolio", { withFileTypes: true }).filter((file) => !file.isDirectory()).map((file) => {
    const basename = file.name.replace(/\.jpg$/i, "");
    return {
      name: file.name,
      l: `${GALLERY_IMG_PATH}/${basename}.l.jpg`,
      s: `${GALLERY_IMG_PATH}/${basename}.s.jpg`,
      absoluteFilePath: path.join(file.parentPath, file.name)
    };
  });
};
const generateImageMetadata = async (image) => {
  const exiftool = util.promisify(exif.metadata);
  const readFile = util.promisify(fs.readFile);
  const data = await readFile(image.absoluteFilePath);
  const metadata = await exiftool(data);
  const imageMetadata = {
    title: metadata?.title,
    copyright: metadata?.copyright,
    location: metadata?.location,
    city: metadata?.city,
    state: metadata?.state,
    country: metadata?.country,
    src: image.l
  };
  return imageMetadata;
};

export { generateImageMetadata as g, listGalleryImages as l };
