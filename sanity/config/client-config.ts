import { createClient } from "next-sanity";

const config = createClient({
  projectId: "6dk2vcpd",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
});

export default config;
