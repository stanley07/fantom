import '../styles/globals.css';
import Link from 'next/link';

 
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='border-b p-6'>
        <p className='text-4xl font-bold'>NFT Metaverse Marketplace</p>
        <div className='flex mt-4'>
          <Link href='/' passHref>
            <div className='mr-6 text-pink-500 cursor-pointer'>Home</div>
          </Link>
          <Link href='/create-item' passHref>
            <div className='mr-6 text-pink-500 cursor-pointer'>Sell Digital Asset</div>
          </Link>
          <Link href='/my-assets' passHref>
            <div className='mr-6 text-pink-500 cursor-pointer'>My Digital Assets</div>
          </Link>
          <Link href='/creator-dashboard' passHref>
            <div className='mr-6 text-pink-500 cursor-pointer'>Creator Dashboard</div>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
   )
}

export default MyApp
