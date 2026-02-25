import { existsSync, readdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const PORTFOLIO_DIR = path.resolve("src", "assets", "portfolio");
const LARGE_IMAGE_QUALITY_PARAMS = {
  maxWidthPx: 2048,
  quality: 80
};
const SMALL_IMAGE_QUALITY_PARAMS = {
  maxWidthPx: 500,
  quality: 80
};
const getPortfolioImgResponse = async (pathSegment, size) => {
  let qualityParams;
  switch (size) {
    case "large":
      qualityParams = LARGE_IMAGE_QUALITY_PARAMS;
      break;
    case "small":
      qualityParams = SMALL_IMAGE_QUALITY_PARAMS;
      break;
  }
  const filePath = path.join(PORTFOLIO_DIR, `${pathSegment}.jpg`);
  if (!existsSync(filePath)) {
    return new Response(null, { status: 404 });
  }
  const buffer = await readFile(filePath);
  const out = await sharp(buffer).resize({
    width: qualityParams.maxWidthPx,
    withoutEnlargement: true,
    fit: "inside"
  }).jpeg({ quality: qualityParams.quality, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(out), {
    headers: { "Content-Type": "image/jpeg" }
  });
};
const getPortfolioImgStaticPaths = (withExtension = false) => {
  const files = readdirSync(PORTFOLIO_DIR, { withFileTypes: true });
  return files.filter((f) => !f.isDirectory() && /\.jpg$/i.test(f.name)).map((f) => ({
    params: { path: withExtension ? f.name : f.name.replace(/\.jpg$/i, "") }
  }));
};

export { getPortfolioImgStaticPaths as a, getPortfolioImgResponse as g };
