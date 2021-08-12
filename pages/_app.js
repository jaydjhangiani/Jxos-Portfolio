import 'tailwindcss/tailwind.css'
import firebase from 'firebase'
import {db} from '../firebase'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
