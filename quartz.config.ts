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
					light: "#eff1f5",       // Base (Latte)
					lightgray: "#e6e9ef",   // Surface0
					gray: "#bcc0cc",        // Surface1
					darkgray: "#4c4f69",    // Text
					dark: "#dce0e8",        // Crust
					secondary: "#1e66f5",   // Blue
					tertiary: "#179287",    // Teal
					highlight: "rgba(30, 102, 245, 0.15)", // Blue with opacity
					textHighlight: "#df8e1e88",            // Yellow with opacity
				},
				darkMode: {
					light: "#1e1e2e",       // Base (Mocha)
					lightgray: "#313244",   // Surface0
					gray: "#45475a",        // Surface1
					darkgray: "#cdd6f4",    // Text
					dark: "#11111b",        // Crust
					secondary: "#89b4fa",   // Blue
					tertiary: "#94e2d5",    // Teal
					highlight: "rgba(137, 180, 250, 0.15)", // Blue with opacity
					textHighlight: "#f9e2af88",             // Yellow with opacity
				},
			}
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
