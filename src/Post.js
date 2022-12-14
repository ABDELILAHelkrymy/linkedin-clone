import { Avatar } from '@mui/material'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import React , {forwardRef} from 'react'
import InputOption from './InputOption'
import './Post.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Post = forwardRef (({name, photoUrl, description, message}, ref) => {

  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color="#666571" />
            <InputOption Icon={ShareOutlinedIcon} title="Share" color="#666571" />
            <InputOption Icon={SendOutlinedIcon} title="Send" color="#666571" />
        </div>
    </div>
  )
})


export default Post