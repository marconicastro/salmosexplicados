// src/components/GoogleTagManager.tsx
'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
  }
}

// IMPORTANTE: Substitua pelo seu ID do GTM
const GTM_ID = 'GTM-XXXXXX'; 

export default function GoogleTagManager() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams ? searchParams.toString() : '')
      pageview(url)
    }
  }, [pathname, searchParams])

  if (!GTM_ID) {
    return null
  }

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f );
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
   )
}
