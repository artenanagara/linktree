/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead } from '../astro.b37d138e.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const links = [
    {
      name: "Case Study",
      url: "https://medium.com/@artenanagara"
    }
  ];
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/artenanagara",
      image: "https://cdn.simpleicons.org/instagram/white"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/artenanagara_",
      image: "https://cdn.simpleicons.org/twitter/white"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@artenanagara",
      image: "https://cdn.simpleicons.org/tiktok/white"
    },
    {
      name: "Github",
      url: "https://github.com/artenanagara",
      image: "https://cdn.simpleicons.org/github/white"
    }
  ];
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>Artena Nagara</title>
  ${renderHead($$result)}</head>
  <body class="bg-gradient-to-b from-indigo-100 bg-indigo-500">
    <main class="max-w-sm w-screen min-h-screen mx-auto shadow-lg py-20 px-5 flex flex-col items-stretch justify-center">
      <div class="kotak rounded-lg w-[160px] min-h-[160px] h-[160px] self-center">
        <img class="w-full h-full rounded-full" src=".https://lh3.googleusercontent.com/pw/AMWts8AwByQdJVDIQecWp8VZo2UkxdZ5p3apeXKt4lD1lBpMZKBm2rz3NbkcXhAw3SbLSQUWHWvYpTTKQdrCLasCuyOeLAYvaG_AW6oyBMgL5oCzdBk8Lm9qKQBVoRPQn4orFPhjsYiwGIATl2ND-kJy8buf=s1070-no?authuser=0g" alt="Artena">
      </div>

      <div class="flex text-indigo-50 flex-col items-center mt-8">
        <h1 class="text-2xl font-semibold">Artena Nagara</h1>
        <p>UI Designer</p>
      </div>

      <ul class="mt-10 space-y-3">
        ${links.map((link) => renderTemplate`<li class="hover:-translate-y-1 transition duration-150 hover:shadow">
              <a${addAttribute(link.url, "href")}>
                <div class="kotak font-semibold text-lg text-white text-center tracking-wide rounded-lg w-full bg-indigo-700 hover:bg-indigo-800 duration-150 px-10 py-6">
                  ${link.name}
                </div>
              </a>
            </li>`)}
      </ul>

      <ul class="flex mt-10 justify-center space-x-4">
        ${socialLinks.map((link) => renderTemplate`<li class="hover:-translate-y-1 duration-100">
              <a${addAttribute(link.url, "href")}>
                <div class="rounded-full w-[60px] h-[60px] bg-indigo-900 border-2 border-indigo-700 p-4 hover:bg-indigo-800 duration-100">
                  <img${addAttribute(link.image, "src")} alt="">
                </div>
              </a>
            </li>`)}
      </ul>
    </main>
  </body>
</html>`;
}, "/Volumes/Data/Portfolio/linktree/src/pages/index.astro");

const $$file = "/Volumes/Data/Portfolio/linktree/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
