import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Login from '../views/Login/index.jsx'
import Layout from '../views/Layout/index.jsx'
import Home from '../views/Home/index.jsx'
import Category from '../views/Category/index.jsx'
import SubCategory from '../views/SubCategory/index.jsx'
import Detail from '../views/Detail/index.jsx'
import CartList from '../views/CartList/index.jsx'
import CheckOut from '../views/CheckOut/index.jsx'
import Pay from '../views/Pay/index.jsx'
import Member from '../views/Member/index.jsx'
import MemberInfo from '../views/Member/MemberInfo/index.jsx'
import MemberOrder from '../views/Member/MemberOrder/index.jsx'

// 创建路由配置
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/category/:id',
          element: <Category />
        },
        {
          path: 'category/sub/:id',
          element: <SubCategory />
        },
        {
          path: '/detail/:id',
          element: <Detail />
        },
                {
          path: '/cartlist',
          element: <CartList/>
        },
        {
          path: '/checkout',
          element: <CheckOut/>
        },
        {
          path: '/pay',
          element: <Pay/>
        },
        {
          path: '/member',
          element: <Member/>,
          children: [
            {
              path: 'user',
              element: <MemberInfo/>
            },
            {
              path: 'order',
              element: <MemberOrder/>
            }
          ]
        }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  
], {
  // 配置滚动行为  
  scrollRestoration: 'manual'
})

export default router