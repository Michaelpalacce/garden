import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/michaelpalacce/quartz",
      "sgenov.dev": "https://sgenov.dev",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ParentBreadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.PageProperties(),
    Component.Spacer(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Explorer({
      folderDefaultState: "collapsed",
    }),
  ],
  right: [
    Component.Graph(),
    Component.Backlinks(),
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "Michaelpalacce/garden",
        // from data-repo-id
        repoId: "R_kgDOQ1g8lQ",
        // from data-category
        category: "Announcements",
        // from data-category-id
        categoryId: "DIC_kwDOQ1g8lc4C0xPD",
        // from data-lang
        lang: "en",
      },
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
