import fs from "fs";
import { client } from "../src/sanityClient.js";

// 1. hae data Sanitysta
const home = await client.fetch(`*[_type == "home"][0]{
  image
}`);

// 2. rakenna URL (sama kuin Hero)
const imageUrl = home?.image
  ? `https://cdn.sanity.io/images/eblm6m06/production/${home.image.asset._ref
      .replace("image-", "")
      .replace("-jpg", ".jpg")}?w=1200&q=80&fit=max`
  : "";

// 3. tallenna tiedostoon
fs.writeFileSync(
  "./public/ssg-data.json",
  JSON.stringify({ imageUrl })
);

console.log("SSG: hero image extracted");