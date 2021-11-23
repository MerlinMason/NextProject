module.exports = {
    reactStrictMode: true,
    images: {
        domains: [],
    },
    // only route files with .page naming convention, allows colocating of tests and other supporting files
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
    // set the the html lang attr
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};
