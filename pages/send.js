import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
const Send = props => {
  return (
        <div>
            <Link href="/">
            <a> Back to home </a>
            </Link>
            <ul>
            {props.shows.map(show => (
              <li key={show.id}>
                <Link href="/" as={`${show.id}`}>
                  <a>{show.name} and password : {show.password}</a>
                </Link>
              </li>
            ))}
          </ul>

        </div>
        )
}

Send.getInitialProps = async function() {
  const res = await fetch('/send')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data}`)
  return {
    shows: data.data
  }
}

export default Send
