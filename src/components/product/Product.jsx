import './product.css'
import gitHub from '../../img/github.png'
import Link from '../../img/link.png'
import Fade from 'react-reveal/Slide';

export default function Product ({img, link, name, repo, desc, tech}) {
    return (
        <Fade bottom cascade>
        <div className="card">
        <div className='p'>
            <div className='p-browser'>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
            </div>
            <a href={link} target="blank">
                <img src={img} alt="" className='p-img' />
            </a>
        </div>
        <div className='text'>
            <p className='p-name'>{name}</p>
            <div className="p-links">
            <a href={link} target="blank"><img src={Link} alt=""/></a>
            <a href={repo} target="blank"><img src={gitHub} alt=""/></a>
            </div>
            <p className="p-desc">{desc}</p>
            <b className="p-tech" >{tech}</b>
        </div>
        </div>
        </Fade>
    )
}
