import {Link,Outlet} from 'react-router-dom'
function Technologies(){
    return(
        <div>
            <div className='justify-content-center'>
            <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link active" to="">HTML</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="JavaScript">JavaScript</Link>
                </li>
            </ul>
            </div>
<Outlet/>
</div>
    )
}

export default Technologies;