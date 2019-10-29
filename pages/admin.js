import LoginForm from '../components/login/LoginForm'
import Link from 'next/link'
class admin extends React.Component {

    state = {
        title: ""
    }

    changeTitle = (val)=> {
        this.setState ({
            title: val.target.value
        })
    }

    render () {
        const {title} = this.state;
        return (
            <div>
                <Link href="/">
                    <a> Back to home </a>
                </Link>
                <input value={this.state.title} onChange={this.changeTitle.bind(this)}></input>
                <LoginForm title={title} />
            </div>
        )
    }
}

export default admin;



// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import LoginForm from '../components/login/LoginForm'
// const Admin = () => {
//   const router = useRouter()
//   const { slug } = router.query
//   return (
//         <div>
//         <Link href="/">
//            <a> Back to home </a>
//         </Link>
//         <LoginForm />
//         </div>
//         )
// }
// export default Admin
