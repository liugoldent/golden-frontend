import '@/styles/globals.css'
import '@/styles/AnimatedIcon.css'
import '@/styles/index.scss'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // 避免 CSS 重複添加

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
