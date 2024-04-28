import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/registration')({
  component: () => <div>Hello /registration!</div>
})