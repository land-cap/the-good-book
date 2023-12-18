import { redirect, RedirectType } from 'next/navigation'

const Home = () => redirect('/study/1jn/1', RedirectType.replace)

export default Home
