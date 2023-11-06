import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: "6dk2vcpd",
  dataset: "production",
  title: "Next Sanity",
  apiVersion: "2021-10-21",
  basepath: "/admin",
  plugins: [
    deskTool({
      name: "admin",
      title: "Admin",
    }),
  ],
  schema: { types: schemas },
});

export default config;
