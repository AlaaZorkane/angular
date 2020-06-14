import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  title: "Should you use Angular?",
  description:
    "A website that helps you decide whether to use Angular in your next project or not, backed by facts and science, definitely not a shitpost.",
  canonical: "https://angular.alaazorkane.me/",
  openGraph: {
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
