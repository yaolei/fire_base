import LoginForm from '../components/login/LoginForm'
import '../components/login/style.css'
import Link from 'next/link'
import 'animate.css'
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
            <div id='login-page'>
                <div>
                <h3 style={styles.loadingTitle} className='animated bounceInLeft'>载入中...</h3>
                </div>:
                <div>
                  <div id='backgroundBox' style={styles.backgroundBox}/>
                  <div className='container'>
                    <LoginForm />
                  </div>
                </div>
            </div>
        )
    }
}

const styles = {
    backgroundBox: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      // backgroundImage: 'url(https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg5.jpg?raw=true)',
      backgroundImage: 'url(https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg1.jpg?raw=true)',
      backgroundSize: '100% 100%',
      transition:'all .5s'
    },
    focus: {
      // transform: 'scale(0.7)',
      width: '20px',
      opacity: 1
    },
    loadingBox:{
      position:'fixed',
      top:'50%',
      left:'50%',
      transform:'translate(-50%,-50%)'
    },
    loadingTitle:{
      position:'fixed',
      top:'50%',
      left:'50%',
      marginLeft: -45,
      marginTop: -18,
      color:'#000',
      fontWeight:500,
      fontSize:24
    },
  }

export default admin;

