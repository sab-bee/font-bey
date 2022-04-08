import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  const style = {
    borderBottom: '4px solid #2962FF',
    color: '#2962FF',
  }

  return (
    <div>
      <Link style={match ? style : undefined} to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}
