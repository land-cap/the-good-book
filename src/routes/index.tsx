import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div >
      I am home page.
            <Link to="/read/$book/$chapter" params={{ book: 'gen', chapter: '1' }}>
        Read Genesis 1
      </Link>
    </div>
  )
}
