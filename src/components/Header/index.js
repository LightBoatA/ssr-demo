import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <ul className="menu">
                <li><Link to="/">首页</Link></li>
                <li><Link to="/news">新闻</Link></li>
            </ul>
        </div>
    );
}

export default Header;
