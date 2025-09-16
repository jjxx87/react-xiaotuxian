import React from 'react';
import { Carousel } from 'antd'; // 引入 Ant Design 轮播组件
import './HomeBanner.scss';
import { getBannerAPI } from '@/api/home';
import { useEffect, useState } from 'react';

// 轮播图数据（实际项目可替换为接口请求数据）


const HomeBanner = () => {
  const [bannerList, setBannerList] = useState([]);
  useEffect(() => {
    getBannerAPI().then(res => {
      console.log('轮播图数据', res);
      setBannerList(res.data.result);
    })
  }, [])
  return (
    <div className="home-banner">
      {/* Ant Design Carousel 组件，设置高度与原 Vue 轮播一致 */}
      <Carousel height={500} autoplay>
        {/* 循环渲染轮播项 */}
        {bannerList.map(banner => (
          <div key={banner.id}>
            <img 
              src={banner.imgUrl} 
              alt=''
              // 防止图片加载失败显示默认图标
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/1240x500?text=Banner+Error';
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeBanner;