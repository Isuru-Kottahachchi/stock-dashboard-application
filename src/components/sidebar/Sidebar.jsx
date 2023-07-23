import React from 'react'
import { Link } from 'react-router-dom';
import "./sidebar.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import MarkUnreadChatAltRoundedIcon from '@mui/icons-material/MarkUnreadChatAltRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import logo from './stockz.png';



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>

                <img className='logo' src={logo} alt="Stocks Logo " />

            </div>

            <hr ></hr>

            <div className='center'>

                <ul>
                    <li>
                        <InsertChartOutlinedIcon />
                        <Link style={{ textDecoration: 'none' }} to="/"><li>Dashboard</li></Link>
                    </li>

                    <hr className="left-menue" ></hr>

                    <li>
                        <ShoppingCartOutlinedIcon />
                        <Link style={{ textDecoration: 'none' }} to="/orders"><li>Orders</li></Link>
                    </li>

                    <hr className="left-menue"></hr>

                    <li>
                        <PersonOutlineSharpIcon />
                        <Link style={{ textDecoration: 'none' }} to="/account"><li>Account</li></Link>
                    </li>

                    <hr className="left-menue"></hr>

                    <li>
                        <SettingsOutlinedIcon />
                        <Link style={{ textDecoration: 'none' }} to="/settings"><li>Settings</li></Link>
                    </li>

                    <p className='title'>Support </p>

                    <li style={{ paddingLeft: '30px' }}>
                        <MarkUnreadChatAltRoundedIcon />
                        <Link style={{ textDecoration: 'none' }} to="/chats"><li>Chat</li></Link>
                    </li>

                    <li style={{ paddingLeft: '30px' }}>
                        <QuizRoundedIcon />
                        <Link style={{ textDecoration: 'none' }} to="/faq"><li>FAQ</li></Link>
                    </li>

                </ul>

                <hr className="left-menue"></hr>

            </div>

            <button className='bottom'>Dark Mode</button>

        </div>
    )
}

export default Sidebar