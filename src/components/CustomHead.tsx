import { type FC } from "react"

const CustomHead: FC = () => (
  <>
    <link rel="icon" href="/favicon.ico" />
    <meta charSet="utf-8" />
    <meta name="description" content="MSD example app" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </>
)

export default CustomHead
