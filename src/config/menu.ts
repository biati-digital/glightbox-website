import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  guidesNav: [
    {
      title: "Guides",
      items: [
        {
          title: "Upgrade from V3",
          href: "/guides/upgrade-from-v3",
          description: "Learn how to upgrade from the previous version of the library."
        },
        {
          title: "Integration",
          href: "/guides/integrations",
          description: "Learn how to integrate the library in multiple frameworks and CMS's."
        },
        {
          title: "Adjusting the interface",
          href: "/docs/getting-started",
          description: "Modify the interface using the library options and CSS variables"
        },
        {
          title: "Adding dynamicc slides",
          href: "/login",
          description: "Learn how to add dynamic slides using native fetch, axios or ajax.",
          disabled: true
        },
        {
          title: "Execute custom slide scripts",
          href: "/#dashboard",
          description: "How to properly execute custom scripts inside a specific slide",
          disabled: true
        },
        {
          title: "Custom animations",
          href: "/#examples/ecommerce",
          description:
            "Create your own open and slide animations",
          disabled: true
        }
      ],
    },
  ],
  infosNav: [
    {
      title: "Get Help",
      items: [
        {
          title: "Having trouble?",
          href: "https://github.com/biati-digital/glightbox/discussions",
          description: "Use the discussions section to ask questions and get help.",
          external: true
        },
        {
          title: "Found a bug?",
          href: "https://github.com/biati-digital/glightbox/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=",
          description: "Create a new issue on GitHub."
        },
        {
          title: "Do you have an idea for a plugin?",
          href: "/",
          description: "Submit a feature request on GitHub.",
          external: true
        },
      ],
    },
  ],
  links: [
    {
      title: "Report issues",
      href: "https://github.com/biati-digital/glightbox/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=",
      external: true
    }
  ]
};
