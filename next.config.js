module.exports = {
    reactStrictMode: true,
    images: {
        domains: [],
    },
    // only route files with .page or .api naming convention, allows colocating of tests and other supporting files within /pages
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js", "api.ts", "api.js"],
    // set the the html lang attr
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};
