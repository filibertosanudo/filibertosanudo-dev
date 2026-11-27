/**
 * Screenshots and links of the projects that have them, by slug. Kept out of
 * the dictionaries so a URL is written once for both languages.
 *
 * `demoUrl` stays unset until the public demo is online: the card only shows
 * its "try the demo" button once there is somewhere for it to go.
 */
export type ProjectLinks = {
  image: string;
  codeUrl: string;
  demoUrl?: string;
};

export const projectLinks: Record<string, ProjectLinks> = {
  marea: {
    image: "/projects/marea.jpg",
    codeUrl: "https://github.com/filibertosanudo/marea-restaurant",
  },
  voltio: {
    image: "/projects/voltio.jpg",
    codeUrl: "https://github.com/filibertosanudo/voltio",
  },
};
