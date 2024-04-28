import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/storage/my')({
  component: () => <div>Hello /storage/my!</div>
})