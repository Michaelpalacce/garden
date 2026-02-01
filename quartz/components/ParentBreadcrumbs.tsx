import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { classNames } from "../util/lang"
import { resolveRelative, simplifySlug, FullSlug, SimpleSlug } from "../util/path"
import style from "./styles/breadcrumbs.scss"

interface ParentBreadcrumbsOptions {
  spacerSymbol?: string
  rootName?: string
  resolveFrontmatterTitle?: boolean
  frontmatterProp?: string
}

const defaultOptions: ParentBreadcrumbsOptions = {
  spacerSymbol: "❯",
  rootName: "Home",
  resolveFrontmatterTitle: true,
  frontmatterProp: "parent",
}

export default ((opts?: ParentBreadcrumbsOptions) => {
  const options = { ...defaultOptions, ...opts }
  const parentKey = options.frontmatterProp

  const ParentBreadcrumbs: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const parseWikiLink = (content: string): string => {
      if (!content) return ""
      let clean = content.trim().replace(/^["']|["']$/g, "")
      clean = clean.replace(/^\[\[|\]\]$/g, "")
      return clean.split("|")[0]
    }

    const findFile = (name: string) => {
      const targetSlug = simplifySlug(name as FullSlug)
      return allFiles.find((f: QuartzPluginData) => {
        const fSlug = simplifySlug(f.slug!)
        return (
          fSlug === targetSlug ||
          fSlug.normalize() == targetSlug.normalize() ||
          f.frontmatter?.title === name
        )
      })
    }

    type BreadcrumbNode = { displayName: string; path: string }
    const crumbs: Array<BreadcrumbNode[]> = []

    let current = fileData
    const visited = new Set<string>()
    if (current.slug) visited.add(current.slug)

    while (current && current.frontmatter?.[parentKey!]) {
      const rawParent = current.frontmatter[parentKey!]
      const parentList = Array.isArray(rawParent) ? rawParent : [rawParent]

      const currentLevelNodes: BreadcrumbNode[] = []
      let nextParent: QuartzPluginData | undefined = undefined

      for (const p of parentList) {
        const linkStr = parseWikiLink(p as string)
        const parentFile = findFile(linkStr)

        if (parentFile && parentFile.slug) {
          currentLevelNodes.push({
            displayName: options.resolveFrontmatterTitle
              ? (parentFile.frontmatter?.title ?? parentFile.slug)
              : parentFile.slug,
            path: resolveRelative(fileData.slug!, parentFile.slug!),
          })

          if (!nextParent && !visited.has(parentFile.slug)) {
            nextParent = parentFile
          }
        }
      }

      if (currentLevelNodes.length > 0) {
        crumbs.push(currentLevelNodes)
      }

      if (nextParent) {
        visited.add(nextParent.slug!)
        current = nextParent
      } else {
        break
      }
    }

    if (current.slug !== "index") {
      crumbs.push([
        {
          displayName: options.rootName!,
          path: resolveRelative(fileData.slug!, "index" as SimpleSlug),
        },
      ])
    }

    crumbs.reverse()

    if (crumbs.length === 0 && fileData.slug === "index") {
      return <></>
    }

    return (
      <nav class={classNames(displayClass, "breadcrumb-container")} aria-label="breadcrumbs">
        {crumbs.map((crumbLevel, levelIndex) => (
          <div class="breadcrumb-element">
            {crumbLevel.map((node, nodeIndex) => (
              <>
                <a href={node.path}>{node.displayName}</a>
                {nodeIndex < crumbLevel.length - 1 && <span style={{ opacity: 0.5 }}> / </span>}
              </>
            ))}
            {levelIndex !== crumbs.length && <p>{options.spacerSymbol}</p>}
          </div>
        ))}
        <div class="breadcrumb-element">
          <p>{fileData.frontmatter?.title}</p>
        </div>
      </nav>
    )
  }

  ParentBreadcrumbs.css = style
  return ParentBreadcrumbs
}) satisfies QuartzComponentConstructor
