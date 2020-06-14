import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  title: "Should you use Angular?",
  description:
    "A website that helps you decide whether to use Angular in your next project or not, backed by facts and science, sponsored by carrot farmers.",
  canonical: "https://angular.alaazorkane.me/",
  openGraph: {
    title: "Should you use Angular in your next project?",
    description:
      "A website that helps you decide whether to use Angular in your next project or not, backed by facts and science, sponsored by carrot farmers.",
    type: "website",
    locale: "en_EN",
    url: "https://angular.alaazorkane.me/",
    site_name: "Angular",
    images: [
      {
        url: "https://angular.alaazorkane.me/assets/thumbnail.png",
        alt: "Angular Carrot Farmer",
      },
    ],
  },
  twitter: {
    handle: "@AlaaZork",
    site: "@AlaaZork",
    cardType: "summary_large_image",
  },
};

export default SEO;
