import { redirect, RedirectType } from 'next/navigation'

const Home = () => redirect('/study/mat/1', RedirectType.replace)

export default Home
