import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from './astro/server-HtdsE5wA.js';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro("https://matthewhsu.me");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  const navItems = [
    {
      name: "About",
      route: "/"
    },
    {
      name: "Gallery",
      route: "/gallery"
    }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="nav"> <ul> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute([
    "nav-item",
    currentPath == item.route ? "nav-item-active" : ""
  ].join(" "), "class")}${addAttribute(item.route, "href")}> ${item.name} </a> </li>`)} </ul> </nav>`;
}, "/Users/matthewhsu/co/personal-site/src/components/Nav.astro", void 0);

const siteMetadata = {
  title: `Matthew Hsu`,
  author: {
    name: `Matthew Hsu`,
    summary: `Software Engineer @ Samsara.`
  },
  description: `Matthew Hsu`,
  siteUrl: `https://mahsu.github.io`,
  social: {
    twitter: ``,
    github: `mahsu`,
    linkedin: `matthew-hsu-82aa1078`
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://matthewhsu.me");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Seo;
  const { title, description } = Astro2.props;
  const metaDescription = description ?? siteMetadata.description;
  const fullTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const canonicalUrl = `${siteMetadata.siteUrl}${Astro2.url.pathname}${Astro2.url.search}`;
  const metaTags = [
    {
      name: "description",
      content: metaDescription
    },
    {
      property: "og:title",
      content: fullTitle
    },
    {
      property: "og:description",
      content: metaDescription
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: canonicalUrl
    },
    {
      name: "twitter:card",
      content: "summary"
    },
    {
      name: "twitter:title",
      content: fullTitle
    },
    {
      name: "twitter:description",
      content: metaDescription
    }
  ];
  return renderTemplate`<!-- Google tag (gtag.js) -->${renderTemplate(_a || (_a = __template(['<script async src="https://www.googletagmanager.com/gtag/js?id=G-XED9479LCW"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag() {\n    dataLayer.push(arguments);\n  }\n  gtag("js", new Date());\n\n  gtag("consent", "default", {\n      ad_storage: "denied",\n      ad_user_data: "denied",\n      ad_personalization: "denied",\n      analytics_storage: "denied",\n  });\n\n  gtag("config", "G-XED9479LCW");\n</script>'])))}<title>${fullTitle}</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${metaTags.map((m) => renderTemplate`<meta${addAttribute(m.name, "name")}${addAttribute(m.property, "property")}${addAttribute(m.content, "content")}>`)}`;
}, "/Users/matthewhsu/co/personal-site/src/components/Seo.astro", void 0);

export { $$Seo as $, $$Nav as a, siteMetadata as s };
