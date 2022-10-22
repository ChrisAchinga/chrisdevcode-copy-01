import MetaTags from './MetaTags'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({
  children,
  pageTitle,
  pageDescription,
  pageURL,
  pageImage,
}) => {
  return (
    <>
      <MetaTags
        pageImage={pageImage}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageURL={pageURL}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout