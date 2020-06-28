import '../App.css'
import '../icon.config'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
    return  (
        <Layout>
            <Component {...pageProps} />
            <style jsx global>{`
                  @font-face {
                    font-family: 'Notable-Regular';
                    src: url('/fonts/Notable-Regular.ttf');
                  }
                  @font-face {
                    font-family: 'Lato-Regular';
                    src: url('/fonts/Lato-Regular.ttf');
                  }
                  @font-face {
                    font-family: 'Lato-Light';
                    src: url('/fonts/Lato-Light.ttf');
                    font-weight: 300;
                  }
                `}</style>
        </Layout>
    )
}

export default MyApp