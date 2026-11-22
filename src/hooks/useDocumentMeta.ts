import { useEffect } from 'react'

// Sets the page title and meta description for the current page.
// Note: this runs in the browser. See README "SEO notes" for production caveats.
export function useDocumentMeta(title: string, description: string): void {
  useEffect(() => {
    document.title = title
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.content = description
  }, [title, description])
}
