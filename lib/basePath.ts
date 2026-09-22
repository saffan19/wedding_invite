// GitHub Pages serves this site under /wedding_invite (a project page, not a
// custom domain), so every hardcoded absolute asset path needs that prefix
// in production. Locally (`next dev`/`next build` without GITHUB_PAGES set)
// this stays empty so nothing changes for normal development.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
