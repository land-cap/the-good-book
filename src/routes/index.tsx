import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div >
      I am home page.
      <Link to="/read/gen/1">Read Genesis 1</Link>
    </div>
  )
}
