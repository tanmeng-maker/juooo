<template>
  <div class="index">
      <div class="home">
          <!-- 头部 -->
          <div class="header">
              <div class="address-map">
                  <i class="address-icon"></i>
                  <span class="text-single">全国</span>
              </div>
              <div class="head-search">
                  <img class="search-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MU5mdkAAAAHnRSTlMA+fES5d1bGgytwpCJIDy9p6Z+eWMpCKRv1sjGlU+Yw8sxAAAA/0lEQVQ4y+2TWXKDMBBENVrAYjHGGPD67n/MVEhiKiORcv7dX6Lr0UMLybz1D+2KQxAI8eT+wqbB8iPb7Da58QLgq9iFZbHf4Pb2M2dc1u3RgjzyeRa68vnoIkguc7rA/MtpwGcqDdApq4d7ui8WW2rPI9ozBTRG6wyD9g4wJqATKu0FvEl1Q7S1vqvm6N4QM2ANbQJ2GXAGXTsQMmCVfmOENt1c4aq9ExzNK6azWF1wCrkxDcS0c5+5BB4a/QNtmTu3Av1unVsDtcnpIeDP7iv/FAAo8nfBA3I71HMlgK03SXcXnupLU2ySphyWMLke2+9TKmZTrl27FhLNWy/oA9CZFFU7WU6aAAAAAElFTkSuQmCC" alt="我是个搜索的图标">
                  <span>搜索热门演出</span>
              </div>
              <img class="calendar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAV1BMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMiFyKOAAAAHHRSTlMAwLCQ8XftzEURZffhq0IiujHF+bWZiFV/UA/dAxNAxgAAAS1JREFUOMu9kdtyhCAQRJHIVRBF3exu+v+/MyBamsQdKnnIebCnylMF07C/wLuenek7/l15cNe2LdC1ZzogfR1/7NpzAM3wLGIDwMUmhWvOOKBpokOK1bOA1HmYf9xxzqElYPMQgZ5R9EDM2cGl7/h2zZj+OXRZLFfguIaXJQ6x9/wK338VCf5RDMsHoISpie8SK3KkxZA8ofUCKFoUydtSk+IArGkAURPLGkWsHz3WjjaymB6qVg8AZS1Vz2FmxlrhAvASwGCqPY7MCFkrPGxLG1Wp5waEvXBFiQNwTJTogVAmRYsW8Oug00BurXLdWgtZfUKFgrQX9UR2wvpc4i2wg1jEFpLRSLQ5ZsCSngXmbcFJmJeaEdO+2IIay/5wEyimG9sJd968gt8D+w2fxdEtXiJn+tgAAAAASUVORK5CYII="  alt="我是个日程图标"/>
          </div>
          <div class="hd"></div>

          <div class="container">
              <!--轮播图-->
              <div class="banner">
                  <div class="banner-swiper">
                      <van-swipe :autoplay="3000">
                          <van-swipe-item v-for="(image, index) in bannerimg" :key="index">
                              <img v-lazy="image" />
                          </van-swipe-item>
                      </van-swipe>
                  </div>
              </div>

              <!-- 分类导航 -->
              <div class="category-nav">
                  <div class="category-nav-item" v-for="item in menus" :key="item.id">
                      <a class="category-nav-label">
                          <img class="category-nav-icon" :src="item.pic" />
                          <span class="category-nav-title">{{item.name}}</span>
                      </a>
                  </div>
              </div>

              <!-- vip -->
              <div class="vip-card">
                  <a href="javascript:;" class="vip-discount-label">
                      <div class="vip-discount-title">
                          <div class="vip-discount-title-l">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAABd1BMVEUAAADvz6743L/22rz/6M/43cDpx6L/6M7w0bD43sHqx6T848ny1LTryKX33L//6M/z1rfryab017nsyqf/6M/538P+587tzKn95cv95cv/5872273uzav+5s3oxaD+5s3vz67pxqH95cr95crtzKnx0rLqx6T+5s3vzq3ryabw0bDtzKnx0rLx0rLoxJ/oxJ/95cz12bvsy6j12bv/6M/sy6jtzKrtzKruzq3oxaDoxJ/uzq3w0bDpx6Ly1LTryKX01rf/6M9HJwj95Mr017jtzKnsyqfryKX+5s3+5cz33L/227343sH12bv538P64cXy1LTuzavx0rLw0bDvz6774sfpxqBIKAnpx6KPclTix6uPclVXNxjmy7DKro+1mHyTdljw1LjlzLLfw6bYvaLNspSqi2uXeFp8XkB3WTtsTS5gQCJfPyBZOhtLKwzmzbPqy6vgxqjUuJrIqIjDpoi5noKylXaihWeegmWOcFKQcFCDY0RnSCn+eriUAAAAQXRSTlMA/g4J+hv5A/n48/Lq6uTh4eDS0s7JxrGwqI2Kh21qaVtbT0pCNzcwJBwUBfXz6uTNyMjBv7+kmHd2cGpNTCwrAhUStP0AAAG1SURBVDjLjdAHU9tAEAXgZ8uF3ktooff03hOtSXMhDoYowhjTAoQQ0nt+PLuyZOmwJPhmpNvZfXM7c7DND3XF9BqxruEkFNEePcANDV7n9EB98BjTQ4x7FreGBVujcPTrofphm469CPSJv9g0LMkrLwNt0Rb/e55ADKWClagkxzBYvNHpvieiox9S/Sa2lioXi1Qs7qRSjXF5whXH4kce70u1ecTV3krZNMk0d7jRB4y9csmVB1JscPEhw8UqrVZG4+hedP2RhXxuG0TGO+lwsDLqRn3W9Ys4kM5m9/ncqLS+2KN6tKRdZWKl9Los3kwrWjCQcUmCvub+y+KMagDa1VzVNrHvP2VxTnVdA+Y6Fhx5gzO7a0SHhQVFRxQs3lZtyENyzlhXc21xWB415W0HZDHziqYZ2CYvLFX8I3H4ecnr4iSqHtQVLHvEjG8Fr7oJeIxElsUusb/LXpERKO5EAtzHCYOvfQ2ixq2nPm6j1nxvba43CR/atWcn3NTga65TzXVGEWC2/blH+ywCPW52c80zCDHV4OQaphDqYeKtJTGBU4y+EYlRnOquBM/jDO5dvuSTOwZ3nQUiwxrMfwAAAABJRU5ErkJggg==">
                              <span>会员专享折扣</span>
                          </div>
                          <div class="vip-discount-title-r">
                              <span class="vip-discount-price">99元/年</span>
                              <span class="vip-discount-jiantou"></span>
                          </div>
                      </div>
                  </a>
                  <div class="vip-discount-swiper">
                      <div class="vip-discount-swiper-container">
                          <van-swipe :autoplay="3000">
                              <van-swipe-item v-for="(item,index) in vipdiscount" :key="index" class="van-swipe-item">
                                  <img :src="item.pic"/>
                                  <div class="discount-info">
                                      <h4>{{item.schedular_name}}</h4>
                                      <div class="discount">
                                          <span><i>{{item.min_discount}}</i>折起</span>
                                          <p>立即抢购</p>
                                      </div>
                                  </div>
                              </van-swipe-item>
                          </van-swipe>
                      </div>
                  </div>
              </div>

              <!-- 热门&巡回演出  -->
              <div class="show">
                  <!-- 热门演出 -->
                  <div class="hot-show show-label">
                      <div class="show-title">
                          <h3>热门演出</h3>
                          <div class="show-all">
                              <span>全部</span>
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==">
                          </div>
                      </div>
                      <ul>
                          <li>
                              <a href="javascript:;">
                                  <div class="show-img">
                                      <img src="https://image.juooo.com//group1/M00/03/73/rAoKmV4Fwz2AYGibAABBH49ix9g062.jpg">
                                  </div>
                                  <h3>聚橙制作|百老汇爱情音乐轻喜剧《第一次约会》中文版-广州站</h3>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:;">
                                  <div class="show-img">
                                      <img src="https://image.juooo.com//group1/M00/03/73/rAoKmV4Fwz2AYGibAABBH49ix9g062.jpg">
                                  </div>
                                  <h3>聚橙制作|百老汇爱情音乐轻喜剧《第一次约会》中文版-广州站</h3>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:;">
                                  <div class="show-img">
                                      <img src="https://image.juooo.com//group1/M00/03/73/rAoKmV4Fwz2AYGibAABBH49ix9g062.jpg">
                                  </div>
                                  <h3>聚橙制作|百老汇爱情音乐轻喜剧《第一次约会》中文版-广州站</h3>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:;">
                                  <div class="show-img">
                                      <img src="https://image.juooo.com//group1/M00/03/73/rAoKmV4Fwz2AYGibAABBH49ix9g062.jpg">
                                  </div>
                                  <h3>聚橙制作|百老汇爱情音乐轻喜剧《第一次约会》中文版-广州站</h3>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:;">
                                  <div class="show-img">
                                      <img src="https://image.juooo.com//group1/M00/03/73/rAoKmV4Fwz2AYGibAABBH49ix9g062.jpg">
                                  </div>
                                  <h3>聚橙制作|百老汇爱情音乐轻喜剧《第一次约会》中文版-广州站</h3>
                              </a>
                          </li>
                          <li>
                              <a href="javascript:;">
                                  <div class="show-img">
                                      <img src="https://image.juooo.com//group1/M00/03/73/rAoKmV4Fwz2AYGibAABBH49ix9g062.jpg">
                                  </div>
                                  <h3>聚橙制作|百老汇爱情音乐轻喜剧《第一次约会》中文版-广州站</h3>
                              </a>
                          </li>
                      </ul>
                  </div>
                  <!-- 巡回演出 -->
                  <div class="tour-show show-label">
                      <div class="show-title">
                          <h3>巡回演出</h3>
                          <div class="show-all" style="padding-right: 0rem">
                              <span>全部</span>
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==">
                          </div>
                      </div>
                      <div class="tour-show-info">
                          <div class="tour-show-img">
                              <img src="https://image.juooo.com/group1/M00/04/3E/rAoKNV59rlWAUODrAABlWN_fCvM347.jpg">
                          </div>
                          <div class="tour-show-r">
                              <div class="show-time">
                                  <p class="show-date">2020.08.13-10.03</p>
                                  <h5>聚橙制作 | 法语音乐剧《摇滚红与黑》</h5>
                                  <p class="price">
                                      <span>￥80</span><i>起</i>
                                  </p>
                              </div>
                              <div class="show-address">
                                  <div class="show-total">
                                      <i>6</i>
                                      <span>城巡演</span>
                                  </div>
                                  <div class="show-addr">
                                      <span>上海<i>|</i></span>
                                      <span>上海<i>|</i></span>
                                      <span>上海<i>|</i></span>
                                      <span>上海<i>|</i></span>
                                      <span>上海<i>|</i></span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <!-- 剧种分类  -->
              <div class="show-category">
                  <div class="show-category-box" v-for="(item,index) in showcategorys" :key="index">
                      <div class="show-category-title">
                          <h3>{{item.title}}</h3>
                          <a href="javascript:;">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==">
                          </a>
                      </div>
                      <div class="show-category-info">
                          <div class="show-category-img">
                              <img :src="item.list[0].pic">
                              <i></i>
                          </div>
                          <div class="show-category-r">
                              <p class="show-date">{{item.list[0].display_show_time.split(' ')[0]}}&nbsp;<i>{{item.list[0].week}}&nbsp;{{item.list[0].display_show_time.split(' ')[1]}}</i></p>
                              <h5>
                                  {{item.list[0].schedular_name}}
                              </h5>
                              <p class="show-address">
                                  {{item.list[0].city_name}} |
                                  {{item.list[0].venue_name}}
                              </p>
                          </div>
                      </div>
                      <ul>
                          <li v-for="v in item.list" :key="v.id">
                              <a href="javascript:;">
                                  <div class="show-img">
                                      <img :src="v.pic">
                                  </div>
                                  <h3>
                                      {{v.schedular_name}}
                                  </h3>
                                  <p class="price">
                                      <span>￥{{v.low_price}}</span><i>起</i>
                                  </p>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>

              <!-- 为你推荐  -->
              <div class="recommend">
                  <h3>为你推荐</h3>
                  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                      <ol>
                          <li v-for="item in recommendlist" :key="item.show_id">
                              <a href="javascript:;">
                                  <div class="recommend-img">
                                      <img :src="item.pic">
                                  </div>
                                  <div class="recommend-info">
                                      <div class="recommend-title">
                                          <img src="https://image.juooo.com/upload/i.png">
                                          {{item.name}}
                                      </div>
                                      <span class="recommend-date">{{item.start_show_time.split(' ')[0]}} - {{item.end_show_time.split(' ')[1]}}  </span>
                                      <p class="price">
                                          <span>￥{{item.min_price}}</span><i>起</i>
                                      </p>
                                      <div class="recommend-discount">
                                          <span>电子票</span>
                                          <span>可选座</span>
                                          <span>限时8折起</span>
                                      </div>
                                  </div>
                              </a>
                          </li>
                      </ol>
                  </van-pull-refresh>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name:"Index",
    data(){
        return{
            isLoading: false,
            bannerimg:[],
            menus:[],
            showcategorys:[],
            vipdiscount:[],
            recommendlist:[]
        }
    },
    methods: {
        getRecommendlist(){
         this.$axios.get('/api/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=1&referer_type=index&version=6.1.1&referer=2').then(res=>{
                console.log(res.data.data);
                this.recommendlist = res.data.data.list;
            })
        },
        onRefresh() {
            setTimeout(() => {
                Toast('刷新成功');
                this.isLoading = false;
            }, 1000);
        },
    },
    created() {
        //获取菜单和轮播图数据
        this.$axios.get("/api/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2").then(res=>{
            // console.log(res.data.data);
             res.data.data.slide_list.map((v)=>{
                this.bannerimg.push(v.image_url) ;
            });
            // console.log(this.bannerimg)
            this.menus =res.data.data.classify_list;
            // console.log(this.bannerlist)
        }),
        //    获取剧种分类
        this.$axios.get("/api/home/index/getFloorShow?city_id=0&version=6.1.1&referer=2").then(res=>{
            // console.log(res.data.data);
            this.showcategorys = res.data.data.slice(2,6).filter((_,k)=>k!==2)
        }),
        //   vip折扣卡
        this.$axios.get("/api/vip/index/getVipHomeSchedular?city_id=0&version=6.1.1&referer=2").then(res=>{
            // console.log(res.data.data)
            this.vipdiscount = res.data.data.discountList
        })
        //    为你推荐
        this.getRecommendlist()
    },
    mounted() {

    },
}
</script>
<style lang="scss" scoped>
    .home{
        display: flex;
        flex-direction: column;
    }
    .home .container{
        flex: 1;
        margin-bottom: 1rem;
        overflow: auto;
        .price{
            color:#ff6743;
            font-size: .26rem;
            i{
                font-size: .22rem;
                color:#999;
            }
        }
        ul{
            display: flex;
            justify-content: flex-start;
            overflow-x: auto;
            li{
                width: 2.01rem;
                display: flex;
                flex-direction: column;
                margin-right: .14rem;
                a{
                    display: block;
                    .show-img{
                        width: 2.01rem;
                        height: 2.74rem;
                        overflow: hidden;
                        margin-bottom: .2rem;
                        border: solid 1px #ebebeb;
                        border-radius: .14rem;
                        img{
                            width: 2.01rem;
                            height: 2.74rem;
                        }
                    }
                    h3{
                        width: 100%;
                        font: .26rem/.41rem '';
                        color: #232323;
                        min-height: .84rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-all;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
    }
    /*头部*/
    .header{
        height: .86rem;
        width: 100%;
        padding: 0 0.29rem;
        display: flex;
        align-items: center;
        font-size: .4rem;
        position:fixed;
        top:0;
        z-index:10;
        background: #fff;
        /*头部-定位*/
        .address-map{
            max-width: 1.16rem;
            height: 0.37rem;
            display: flex;
            align-items: center;
            justify-content: center;
            .address-icon{
                width: 0.37rem;
                height: 0.37rem;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABOFBMVEUAAAD/YUT/fD3/fD3/YUX/bUH/fD3/jDj/fTz/YkT/bUD/dz7/jTj/YEX/ZkP/cj//ez3/aEL/fjz/izj/cz//jjf/fzv/bEH/cUD/hzn/gTv/jjj/hzr/gTv/cED/YUT/dz7/gjv/gTv/izj/YEX/cED/jTj/ej3/aUL/fjz/hjn/fjz/dj//cj//akL/b0D/ej3/iDn/ZET/gTv/jTj/eT7/Z0P/gjv/bkH/dD//Y0T/hzr/eT7/ckD/aEP/izj/eD7/bUH/fD3/hjr/dj//Z0P/YUX/dD//YEX/jTj/jjj/YkT/hTr/YEX/jTj/hTr/YkT/a0H/bkH/ZEP/iDn/fjz/iTn/gTv/cED/jDj/Z0P/cj//dz7/gzv/dT7/eT3/akL/aEP/ZkP/aUL/fD3/gDz/dD//ez1zbBWgAAAAT3RSTlMAAxEMpZcH+/r49OvrypeIbVMwKyIiCvv78+fS0cnAtK2spKOgnJiOiX5gUkdCLykc+PX09PPt6+jl3d3T0MzMw7KysaidkZGPjYd0dGlWcCOHIgAAAcNJREFUOMud0tV2AjEQBuAALdpibam3SCkudXdXWFy2uLz/G3QJySRB9oL/cs53dvY/EzRTtGHf1noutb7lDWtV2JLPUCjkcqlU6q/YNXoTU5jrw1AGV+zm88aAa5Jb2SyLrtOvXy9PWLtQxpB3ddkSH/secTlwHcXJNcvIN/WbY64/cLXejV6An+AUqLg8ddWSTVhsGC9Sx65aWuOX7zN3FnLqdM6QhbpSZp453TEU9mjJidwycRmzDuAvFPEgyDNxkuRgm6nbcHFrLohrWGF2R3/QjrjYFafARvsWRgu0cJKHSeykdvMURtQdISFmvLhZacGEXnhDhOcD1660sjA5IJfr6oWzYtesZE0wuqIHifIwOnSt7CWMnuiFH3n4QFx2F0bfcOEIcw5JGrr0F3u08BJOYnQWM0uNoUsnEGQbXoxs0+JTB1cHhbFbRCwR9qR7azt+/84qKay4tIODmm32pPGFaWHFLWoQF6dRcBniFGiKIyF2eNLYSdSlf9BIAsSRxdS9o7Hcy+CgMDQW4gYHhXfRxLyNFt5DU2ITC1vR1Myzwvh7KpIVntMgVdlog1OPtVkBp56XFjj1aIKHpldws+QfBznqO/3Ch6wAAAAASUVORK5CYII=) no-repeat center/cover;
            }
            span{
                font: 700 0.28rem/.86rem '';
                min-width: .57rem;
                max-width: 1.14rem;
                color: #232323;
                margin-left: 0.08rem;
            }
        }
        /*头部-搜索*/
        .head-search{
            height: 0.55rem;
            width:4.74rem;
            display: flex;
            align-items: center;
            background: #f5f5f5 ;
            border: 1px solid #ebebeb;
            border-radius: 0.3rem;
            margin-left: 0.33rem;
            margin-right: 0.33rem;
            .search-icon{
                width: .28rem;
                height: .28rem;
                margin: 0 .17rem 0 .28rem;
            }
            span{
                font-size:.26rem;
                color: #B3B3B3;
            }
        }
        /*头部-日程*/
        .calendar{
            width:.38rem;
            height:.38rem;
        }
    }
    .hd{
        height: .86rem;
        margin-bottom: .17rem;
    }

    /*  轮播图  */
    .container .banner{
        height: 2.8rem;
        margin-bottom: .04rem;
        .banner-swiper{
            height: 2.8rem;
            width: 6.93rem;
            margin: 0 .28rem;
            border: 1px solid #EBEBEB;
            border-radius: 0.16rem;
            overflow: hidden;
                img{
                    width: 6.93rem;
                    height: 2.8rem;
                }
        }
    }

    /*    分类导航*/
    .container .category-nav{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: .6rem;
        padding: 0 .28rem;
        .category-nav-item{
            width: 20%;
            margin-top: .42rem;
            .category-nav-label{
                display: flex;
                flex-direction: column;
                align-items: center;
                .category-nav-icon{
                    height: .65rem;
                    width: .65rem;
                }
                .category-nav-title{
                    font-size: .24rem;
                    color: #666;
                    margin-top: .24rem;
                }
            }
        }
    }

    /*    VIP*/
    .container .vip-card{
        width: 6.31rem;
        height: 2.94rem;
        margin: .6rem .28rem .52rem;
        border: 1px solid rgba(213,163,112,0.5);
        border-radius: 0.08rem;
        padding: 0 0.3rem;
        background: #fffcf5;
        .vip-discount-label .vip-discount-title{
            height: .79rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #6b4218;
            border-bottom: 1px solid #f7eada;
            .vip-discount-title-l{
                display: flex;
                align-items: center;
                font-size: .22rem;
                img{
                    width: .4rem;
                    height: .36rem;
                    margin-right: .11rem;
                }
            }
            .vip-discount-title-r{
                display: flex;
                align-items: center;
                .vip-discount-price{
                    font-size: .24rem;
                }
                .vip-discount-jiantou{
                    display: block;
                    width: .09rem;
                    height: .18rem;
                    margin-left: .12rem;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAYCAMAAAAWLodmAAAASFBMVEUAAABrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhickwvFAAAAF3RSTlMAB+bVwGwT+urcybKolo6HeFtTSx8cD4lE/iYAAABOSURBVBjThdBJDsAwCAPANt33dAv//2mONrKUcBsJAaYpVjhYu52kdrOL2Vv0HIhpdRw7uz0f4r9ML/ELs0g6MQUbdDsuA6IkQlr5RLUyPzgDacl9rNIAAAAASUVORK5CYII=) no-repeat center/100%;
                }
            }
        }
        .vip-discount-swiper{
            height: 2.14rem;
            .vip-discount-swiper-container{
                height: 2.42rem;
                padding: .3rem 0 0 0;
                .van-swipe-item{
                    display: flex;
                    justify-content: flex-start;
                }
                img{
                    width: 1.11rem;
                    height: 1.50rem;
                }
                .discount-info{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    margin-left: .3rem;
                    h4{
                        font: .26rem/.4rem '';
                        color: #232323;
                    }
                    .discount{
                        font: .26rem/.47rem '';
                        display: flex;
                        justify-content: space-between;
                        span{
                            color: #999;
                            i{
                                color: #ff6743;
                                margin-right: .19rem;
                            }
                        }
                        p{
                            width: 1.48rem;
                            font: .22rem/.44rem '';
                            color: #ff6743;
                            border: solid 1px #ff6743;
                            border-radius: 0.33333rem;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }

    /*    热门&巡回演出*/
    /*两个演出公用的标题*/
    .show .show-title{
        display: flex;
        justify-content: space-between;
        color: #232323;
        h3{
            font: 700 .34rem/1.17rem '';
        }
        .show-all{
            display: flex;
            align-items: center;
            padding-right: .24rem;
            span{
                font-size: .26rem;
            }
            img{
                width: .3rem;
                height: .3rem;
                margin-left: .17rem;
            }
        }
    }

    /*热门演出*/
    .show .hot-show{
        padding: 0 0 .36rem .3rem;
    }

    /*    巡回演出*/
    .show .tour-show{
        padding: 0 .3rem .36rem;
        .tour-show-info{
            height: 2.74rem;
            border-radius: 0.16rem;
            background: #F5F5F5;
            padding: .25rem .21rem;
            display: flex;
            justify-content: flex-start;
            .tour-show-img{
                width: 2rem;
                height: 2.72rem;
                border: 1px solid #EBEBEB;
                border-radius: .13rem;
                overflow: hidden;
                img{
                    width: 2rem;
                    height: 2.72rem;
                }
            }
            .tour-show-r{
                display: flex;
                flex-direction: column;
                margin-left: .21rem;
                .show-time{
                    padding-bottom: .29rem;
                    border-bottom: 1px solid rgba(204,204,204,0.5);
                    .show-date{
                        margin-bottom: .04rem;
                        font: .2rem/.46rem '';
                        color: #999;
                    }
                    h5{
                        font:.28rem/.4rem '';
                        color: #232323;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-all;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        margin-bottom: .25rem;
                    }
                }
                .show-address{
                    display: flex;
                    padding-top: .19rem;
                    .show-total{
                        display: flex;
                        max-width: 2rem;
                        font-size: .24rem;
                        color: #999;
                        i{
                            color: #ff6743;
                            margin-right: .07rem;
                        }
                    }
                    .show-addr{
                        flex: 1;
                        margin-left: .17rem;
                        font-size: .24rem;
                        color: #666;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        i{
                            margin: 0 .06rem;
                        }
                    }
                }
            }
        }
    }

/*    剧种分类*/
    .show-category{
        display: flex;
        flex-direction: column;
        .show-category-box{
            margin-top: .24rem;
            .show-category-title{
                display: flex;
                justify-content: space-between;
                padding: 0 .33rem;
                h3{
                    font: 700 .36rem/1.13rem '';
                }
                a{
                    width: .3rem;
                    height: .3rem;
                    display: block;
                    margin-top: .35rem;
                    img{
                        width: .3rem;
                        height: .3rem;
                        vertical-align: middle;
                    }
                }
            }
            .show-category-info{
                background: rgb(164, 133, 86);
                padding: .28rem .3rem;
                margin-bottom: .32rem;
                display: flex;
                .show-category-img{
                    width: 2rem;
                    height: 2.72rem;
                    border: 1px solid #EBEBEB;
                    border-radius: .13rem;
                    overflow: hidden;
                    img{
                        width: 2rem;
                        height: 2.72rem;
                    }
                }
                .show-category-r{
                    flex: 1;
                    color: #fefefe;
                    font-size: .28rem;
                    margin-left: .27rem;
                    padding-top: .42rem;
                    .show-date{
                        i{font-size: .22rem}
                    }
                    h5{
                        line-height: .43rem;
                        margin: .26rem 0;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-all;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .show-address{font-size: .22rem}
                }
            }
            ul{
                padding-left: .31rem;
                li a p{margin-top: .11rem}
            }
        }
    }

/*    为你推荐*/
    .recommend{
        margin-top: .45rem;
        padding: 0 .3rem;
        h3{
            font: 700 .34rem/.97rem '';
            color: #232323;
        }
        ol{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            overflow: hidden;
            li{
                width: 3.41rem;
                display: flex;
                flex-direction: column;
                margin: 0 0 .12rem 0;
                border: 1px solid #ebebeb;
                border-radius: 0.16rem;
                overflow: hidden;
                a{
                    display: block;
                    .recommend-img{
                        width: 3.41rem;
                        height: 4.64rem;
                        overflow: hidden;
                        border: solid 1px #ebebeb;
                        border-radius: .14rem;
                        img{
                            width: 3.41rem;
                            height: 4.64rem;
                        }
                    }
                    .recommend-info{
                        padding: .22rem;
                        display: flex;
                        flex-direction: column;
                        .recommend-title{
                            width: 100%;
                            font: .26rem/.41rem '';
                            color: #232323;
                            min-height: .84rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            word-break: break-all;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            img{
                                width: .61rem;
                                height: .34rem;
                            }
                        }
                        .recommend-date{
                            font: .2rem/.5rem '';
                            margin-bottom: .15rem;
                        }
                        .recommend-discount{
                            margin-top: .19rem;
                            overflow: hidden;
                            span{
                                display: inline-block;
                                color: #FF6743;
                                background: #fff1ef;
                                font-size: .2rem;
                                padding: .04rem;
                                border-radius: 0.22667rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
