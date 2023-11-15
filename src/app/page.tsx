import { redirect, RedirectType } from 'next/navigation'

const Home = () => redirect('/GEN/1', RedirectType.replace)

export default Home
