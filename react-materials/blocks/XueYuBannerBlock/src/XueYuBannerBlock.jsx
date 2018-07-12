// 滚动宣传版面 
// 大图1080*350px
// 小图300*130px
import React, { Component } from 'react';
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"

export default class XueYuBannerBlock extends Component {

  state = {
    bigImgs: [
      { name: "神明的一天世界", src: "http://key.visualarts.gr.jp/common/banner/pict_lb10th_banner.jpg" },
      { name: "旧手表", src: "http://o99hhtmyi.bkt.clouddn.com/gamersky_06origin_11_2017252035511%20%282%29.jpg" },
      { name: "旧手表", src: "http://o99hhtmyi.bkt.clouddn.com/gamersky_06origin_11_2017252035511%20%282%29.jpg" }
    ]
  }

  componentDidMount() {

    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      touchRatio: 0.2,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
  }

  render() {
    const { bigImgs } = this.state;

    var bigSwiperItem=[],smallSwiperItem =[]
    bigImgs.forEach(e => {
      bigSwiperItem.push(< div className="swiper-slide"><img src={e.src} style={styles.bigImgSize}/></div>)
      smallSwiperItem.push(< div className="swiper-slide"> <img src={e.src} style={styles.smallImgSize} /></div >)
    })
    return (
      <div className="landing-intro-banner swiper-container" style={{ height: '480px' }}>
        <div>
          <div className="gallery-top">
            <div className="swiper-wrapper">
              {bigSwiperItem}
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          <div className="gallery-thumbs">
            <div className="swiper-wrapper">
              {smallSwiperItem}
            </div>
          </div>
        </div>
      </div >
    );
  }
}

const styles={
  bigImgSize:{
    height:"350px",
    width:"1080px"
  },
  smallImgSize:{
    height:"130px",
    width:"300px",
  }
}
