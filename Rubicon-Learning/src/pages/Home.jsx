import Header from '../components/Header'
import Meta from '../components/Meta'

const Home = () => {
  // page content
  const pageTitle = 'Home'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} />
    </div>
  )
}

export default Home