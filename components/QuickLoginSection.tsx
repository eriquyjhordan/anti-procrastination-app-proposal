export default function QuickLoginSection() {
  return (
    <div className="mt-4 max-w-96 rounded-md border bg-secondary p-4">
      <h2 className="text-lg font-medium">Quick Login</h2>
      <p className="text-sm">
        Use these credentials to access the application without creating an
        account:
      </p>
      <ul className="mb-4 mt-2">
        <li>
          Email: <code>user@example.com</code>
        </li>
        <li>
          Password: <code>123@Change</code>
        </li>
      </ul>
    </div>
  )
}
