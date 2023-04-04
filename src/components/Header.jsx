import Youtube from './youtube.png';
import '../css/header.css';

function Header(){
    return <div className="header">
        <img src={Youtube} alt="Youtube.png" width={50} height={50}/>
        <h1>Youtube Search</h1>
    </div>
}

export default Header;