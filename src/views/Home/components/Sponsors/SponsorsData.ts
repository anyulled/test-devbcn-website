export interface Sponsors {
  top: Sponsor[] | null;
  premium: Sponsor[] | null;
  regular: Sponsor[] | null;
  virtual: Sponsor[] | null;
  basic: Sponsor[] | null;
  media_partners: Sponsor[] | null;
}

export interface Sponsor {
  name: string;
  website: string;
  image: string;
}

export const sponsors: Sponsors = {
  top: [
    {
      name: "GFT",
      website: "https://www.gft.com/es/es/",
      image: "images/sponsors/GFT.jpg",
    },
  ],
  premium: [
    {
      name: "Barcelona JUG",
      image: "images/sponsors/bcn-jug.png",
      website: "https://www.meetup.com/barcelonajug/",
    },
  ],
  regular: [
    {
      name: "Adaptive",
      image: "images/sponsors/adaptive.png",
      website: "https://www.weareadaptive.com/",
    },
    {
      name: "Capitol",
      image: "images/sponsors/capitole.png",
      website: "https://capitole-consulting.com/es/",
    },
    {
      name: "Allianz",
      image: "images/sponsors/allianz.png",
      website: "https://careers.allianz.com/es_ES.html",
    },
  ],
  basic: [
    {
      name: "Caixabank Tech",
      website: "https://www.peoplexperiencehub.com/caixabanktech",
      image: "images/sponsors/caixabank-tech.png",
    },
    {
      name: "Ocado Tech",
      website:
        "https://careers.ocadogroup.com/where-we-are/europe/development-centre-barcelona?utm_source=event&utm_medium=other&utm_campaign=ot_event_bcn_devbcn_website",
      image: "images/sponsors/ocado.png",
    },
  ],
  virtual: [],
  media_partners: [
    {
      name: "Kube events",
      image: "images/sponsors/kube-events.png",
      website: "https://kube.events/",
    },
    {
      name: "Kube careers",
      image: "images/sponsors/kube-career.png",
      website: "https://kube.careers//",
    },
    {
      name: "entre devs y ops",
      image: "images/sponsors/entre-devs-y-ops.svg",
      website: "https://www.entredevyops.es/",
    },
  ],
};
