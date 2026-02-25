import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, d as renderHead, e as renderSlot } from './astro/server-HtdsE5wA.js';
import 'kleur/colors';
import { $ as $$Seo, a as $$Nav } from './Seo-Dp4VxUKn.js';
/* empty css                          */
/* empty css                          */

const $$Astro = createAstro("https://matthewhsu.me");
const $$ContentLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContentLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-scuu7fyy> <head><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "data-astro-cid-scuu7fyy": true })}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-scuu7fyy> <div class="layout" data-astro-cid-scuu7fyy> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-scuu7fyy": true })} <div class="content" data-astro-cid-scuu7fyy> <header data-astro-cid-scuu7fyy> <h1 class="page-title" data-astro-cid-scuu7fyy>${title}</h1> </header> <main data-astro-cid-scuu7fyy> ${renderSlot($$result, $$slots["default"])} </main> <footer data-astro-cid-scuu7fyy>
© ${(/* @__PURE__ */ new Date()).getFullYear()} Matthew Hsu
</footer> </div> </div> </body></html>`;
}, "/Users/matthewhsu/co/personal-site/src/layouts/ContentLayout.astro", void 0);

export { $$ContentLayout as $ };
