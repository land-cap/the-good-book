import { redirect, RedirectType } from 'next/navigation'

const Home = () => redirect('/mat/1', RedirectType.replace)

export default Home
