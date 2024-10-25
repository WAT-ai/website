import { useEffect } from "react";

const BlogRedirect = () => {
  useEffect(() => {
    window.location.replace("https://wataiteam.substack.com/");
    // This preserves the entry in browser history
  }, []);

  return null;
};

export default BlogRedirect;
