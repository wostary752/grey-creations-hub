import { useEffect } from "react";

type SEO = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
};

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSEO({ title, description, ogTitle, ogDescription, ogImage, noindex }: SEO) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta('meta[name="description"]', "name", "description", description);
    if (ogTitle) setMeta('meta[property="og:title"]', "property", "og:title", ogTitle);
    if (ogDescription) setMeta('meta[property="og:description"]', "property", "og:description", ogDescription);
    if (ogImage) {
      setMeta('meta[property="og:image"]', "property", "og:image", ogImage);
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
    }
    setMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex" : "index,follow");
  }, [title, description, ogTitle, ogDescription, ogImage, noindex]);
}
