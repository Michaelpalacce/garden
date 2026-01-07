import { QuartzConfig } from "./quartz/cfg";
import * as Plugin from "./quartz/plugins";

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
	configuration: {
		pageTitle: "Stefan Genov",
		pageTitleSuffix: "",
		enableSPA: true,
		enablePopovers: true,
		analytics: null,
		locale: "en-US",
		baseUrl: "garden.sgenov.dev",
		ignorePatterns: ["private", ".obsidian"],
		defaultDateType: "modified",
		theme: {
			fontOrigin: "googleFonts",
			cdnCaching: true,
			typography: {
				header: "Schibsted Grotesk",
				body: "Source Sans Pro",
				code: "IBM Plex Mono",
			},
			colors: {
				lightMode: {
					light: "#faf8f8",
					lightgray: "#e5e5e5",
					gray: "#b8b8b8",
					darkgray: "#4e4e4e",
					dark: "#2b2b2b",
					secondary: "#284b63",
					tertiary: "#84a59d",
					highlight: "rgba(143, 159, 169, 0.15)",
					textHighlight: "#fff23688",
				},
				darkMode: {
					light: "#1e1e2e", // Background
					lightgray: "#b4befe", // Borders
					gray: "#cba6f7", // Search
					darkgray: "#a6adc8", // Text
					dark: "#9399b2", // Sidebar Links
					secondary: "#cba6f7", // Bold Links
					tertiary: "#cba6f7", // Selected Sidebar
					highlight: "#1e1e2e", // links
					textHighlight: "#ffffff", // no clue
				},
			},
		},
	},
	plugins: {
		transformers: [
			Plugin.FrontMatter(),
			Plugin.CreatedModifiedDate({
				priority: ["frontmatter", "git", "filesystem"],
			}),
			Plugin.SyntaxHighlighting({
				theme: {
					light: "github-light",
					dark: "github-dark",
				},
				keepBackground: false,
			}),
			Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
			Plugin.GitHubFlavoredMarkdown(),
			Plugin.TableOfContents(),
			Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
			Plugin.Description(),
			Plugin.Latex({ renderEngine: "katex" }),
		],
		filters: [Plugin.RemoveDrafts()],
		emitters: [
			Plugin.AliasRedirects(),
			Plugin.ComponentResources(),
			Plugin.ContentPage(),
			Plugin.FolderPage(),
			Plugin.TagPage(),
			Plugin.ContentIndex({
				enableSiteMap: true,
				enableRSS: true,
			}),
			Plugin.Assets(),
			Plugin.Static(),
			Plugin.Favicon(),
			Plugin.NotFoundPage(),
			// Comment out CustomOgImages to speed up build time
			Plugin.CustomOgImages(),
		],
	},
};

export default config;
