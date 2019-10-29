import Link from 'next/link'

// HomePage.getInitialProps = async ({ req, query }) => {
  // const protocol = req
  //   ? `${req.headers['x-forwarded-proto']}:`
  //   : location.protocol
  // const host = req ? req.headers['x-forwarded-host'] : location.host
  // const pageRequest = `${protocol}//${host}/api/profiles?page=${query.page ||
  //   1}&limit=${query.limit || 9}`
  // const pageRequest = `/api/profiles/`;
  // const res = await fetch(pageRequest)
  // const json = await res.json()
  // return json

  // const res = await fetch('/api/profiles');
  // const data = await res.json();
  // console.log(`Show data fetched. Count: ${data.lenght}`);
  // return json
  // return {
  //   key:'222'
  // }
// }

function Home() {
  return (
    <div>
      Click{' '}
      <Link href="/post?slug=something" as="/post/something">
        <a>here</a>
      </Link>{' '}
      to read more
        {' '}
    </div>
  )
}

export default Home