export const scrollToTop = (behavior = "smooth") => {
  const scrollBehavior = typeof behavior === "string" ? behavior : "smooth";
  window.scrollTo({ top: 0, left: 0, behavior: scrollBehavior });
};
