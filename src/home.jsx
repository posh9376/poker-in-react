import './assets/backround.jpg'
import './style.css'
function Home() {
    return (
        
        <div id='home' style={{backgroundImage: "url(https://wallpapercat.com/w/full/f/9/8/1142807-2880x1800-desktop-hd-poker-wallpaper-photo.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh',margin: '0px',padding: '0px',border:'0px'}}>
            <h1 style={{color:'red',
                textAlign: 'center',
                fontSize: '100px',
                fontWeight: 'bold',
                margin: '0px',
                padding: '0px',
                letterSpacing: '10px',
                opacity: '0.2'
            }}  >POKER</h1>
        </div>
    )
}

export default Home