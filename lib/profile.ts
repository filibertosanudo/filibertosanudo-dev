export const profile = {
  name: "Filiberto Sañudo",
  initials: "FS",
  handle: "filibertosanudo.dev",
  available: true,
  // Single source of truth for the contact address — override via the
  // CONTACT_EMAIL env var once a custom domain inbox exists.
  email: process.env.CONTACT_EMAIL ?? "filibertosanudo@gmail.com",
  cvHref: "/cv.pdf",
  githubUrl: "https://github.com/filibertosanudo",
  linkedinUrl: "https://www.linkedin.com/in/filiberto-sa%C3%B1udo-369982241/",
};
