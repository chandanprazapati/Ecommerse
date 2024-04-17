import React from 'react';
import ReactDOM from 'react-dom/client';
import footerdata from './Footerdata';
import { useParams } from 'react-router'

export default function Footer() {
    var { id } = useParams()
    var df = footerdata.find((element) => element.id == id)
    return (
        <footer>
            <div className="container">
                <nav>@copyright2022  FOOTER</nav>
                <ul>
                    <li>
                        {footerdata.map((df) => (
                            <img src={df.image} />
                        ))}
                    </li>
                    <li>
                        {footerdata.map((df) => (
                            <img src={df.images} />
                        ))}
                    </li>
                    <li>
                        {footerdata.map((df) => (
                            <img className="mb-2" src={df.imagess} />
                        ))}
                    </li>
                </ul>
            </div>
        </footer>
    )
}