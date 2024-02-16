import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'
export default function Navbar () {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar/>
      {/* sidebar */}
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          sreesnakar T
        </motion.span>
        <div className='socialMedia'>
          <a href=''>
            <img src='/372102050_LINKEDIN_ICON_400px.gif' alt='' />
          </a>
          <a href=''>
            <img
              src='/github-logo-git-hub-icon-on-white-background-free-vector.jpg'
              alt=''
            />
          </a>
          <a href=''>
            <img src='/codepen-logo-gifc2.gif' alt='' />
          </a>
        </div>
      </div>
    </div>
  )
}
