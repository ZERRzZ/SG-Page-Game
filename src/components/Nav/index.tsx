import { Breadcrumb } from 'antd'
import { Link, useLocation } from 'react-router-dom'

import './index.css'
import IconFont from '../IconFont'
import { useEffect } from 'react'

export default function Nav() {

  const location = useLocation()

  useEffect(() => {
    console.log(location.pathname.split('/'))
  }, [location])

  return (
    <Breadcrumb
      itemRender={route => <Link to={route.href || ''}>{route.title}</Link>}
      items={[
        {
          href: '/',
          title: <IconFont type='icon-home' />
        },
        {
          href: '',
          title: (
            <>
              <span>Application List</span>
            </>
          ),
        },
        {
          title: 'Application',
        },
      ]}
    />
  )

}