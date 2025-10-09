import type { Config } from "@react-router/dev/config";
import fs from "fs";
import path from "path";

export default {
  ssr: true,
  async prerender() {
    
    const contentDir = path.join(process.cwd(), "content/blog");
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));
    
    const slugs = files.map(file => `/blog/${file.replace(/\.md$/, "")}`);

    return ["/", "/blog", ...slugs];
  },
} satisfies Config;