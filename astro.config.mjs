import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes";
import react from "@astrojs/react";

function defaultLayoutPlugin() {
  return function (tree, file) {
    file.data.astro.frontmatter.layout = "./src/layouts/Layout.astro";
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [defaultLayoutPlugin],
    rehypePlugins: [
      [
        addClasses,
        {
          h1: "text-4xl font-bold",
          h2: "text-2xl font-bold",
          h3: "text-xl font-bold",
          h4: "text-lg font-bold",
          h5: "font-bold",
          h6: "font-bold",
          p: "text-xl",
          a: "text-[#3ea6ff] hover:text-[#a4d5ff] hover:underline transition-[.3s]",
        },
      ],
    ],
  },
});
