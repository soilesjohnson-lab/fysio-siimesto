import fs from "fs";

const data = JSON.parse(
  fs.readFileSync("./public/ssg-data.json")
);

let html = fs.readFileSync("./dist/index.html", "utf-8");

// lisää preload HEADiin
const preloadTag = `
<link rel="preload" as="image" href="${data.imageUrl}">
`;

html = html.replace("</head>", `${preloadTag}</head>`);

fs.writeFileSync("./dist/index.html", html);

console.log("✔ preload injected correctly");