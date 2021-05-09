export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6097a1415a992201ee6b5a4f",
                  title: "Sanity Studio",
                  name: "lotif-sanity-gatsby-blog-studio",
                  apiId: "6af746bd-a38c-4c93-80bd-1eab0199b033",
                },
                {
                  buildHookId: "6097a1413958773369e2d52f",
                  title: "Blog Website",
                  name: "lotif-sanity-gatsby-blog",
                  apiId: "8200570e-b829-450c-89de-18b7c0e99c7e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rob-seward/lotif-sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://lotif-sanity-gatsby-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
