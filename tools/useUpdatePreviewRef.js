import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import { apiEndpoint } from "./../sm.json"; // import the endpoint name
const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(apiEndpoint)[1] //Regex to get repo ID

export default function useUpdatePreviewRef(preview, documentId) {
  const router = useRouter()
  useEffect(() => {
    if (router.isPreview) {
      const rawPreviewCookie = Cookies.get('io.prismic.preview')
      if (rawPreviewCookie) {
        const previewCookie = JSON.parse(rawPreviewCookie)
        const previewCookieObject = previewCookie[`${prismicRepoName}.prismic.io`]
        const previewCookieRef = previewCookieObject && previewCookieObject.preview
          ? previewCookieObject.preview
          : null
        if (previewCookieRef && preview.ref !== previewCookieRef) {
          return router.push(`/api/preview?token=${previewCookieRef}&documentId=${documentId}`)
        }
      } else {
        return router.push('/api/exit-preview')
      }
    }
    return undefined
  }, [])
}