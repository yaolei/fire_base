import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
        <div>
        <Link href="/">
           <a> Back to home </a>
        </Link>
        {'   '}Next{'  '}
        <Link href="/send" as="/send">
           <a> send Datas </a>
        </Link>
        {'   '}admin{'  '}
        <Link href="/admin" as="/admin">
           <a> Go to Admin page </a>
        </Link>
        </div>
        )
}
export default Post
