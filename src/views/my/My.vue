<template>
  <div class="mine">
    <div class="mine-body">
      <div class="mine-info">
        <img class="mine-bg" src="../../assets/img/my/personal_bg_1.f5fc96c.png" alt="">
        <div class="mine-info-icon">
          <a href="javascript:;">
            <!--设置按钮-->
            <i class="iconfont icon-shezhi"></i>
          </a>
        </div>
        <div class="mine-info-main">
          <div class="mine-info-head">
            <div class="mine-info-main-pic">
              <img src="../../assets/img/my/my_head_pic.png" alt="logo">
            </div>
            <!--登录注册-->
            <span class="mine-info-main-login">登录 / 注册</span>
            <span class="mine-info-main-uid">请点击登录 &gt;</span>
          </div>
          <div class="main-info-label">
            <p class="main-info-label-name">普通会员</p>
          </div>
          <div class="main-info-item">
            <div class="main-info-item-1">
              <p class="main-info-item-num">0</p>
              <p class="main-info-item-desc">账户余额</p>
            </div>
            <span class="main-info-item-border"></span>
            <div class="main-info-item-2">
              <p class="main-info-item-num">0</p>
              <p class="main-info-item-desc">积分</p>
            </div>
            <span class="main-info-item-border"></span>

            <div class="main-info-item-3">
              <p class="main-info-item-num">0</p>
              <p class="main-info-item-desc">优惠券</p>
            </div>
            <span class="main-info-item-border"></span>
            <a class="main-info-item-vip">
              <p class="main-info-item-num">立即开通</p>
              <p class="main-info-item-desc">橙PLUS卡</p>
            </a>
          </div>
        </div>
        <a class="mine-vip-pic" href="#">
          <img src="../../assets/img/my/my_vip.png" alt="">
        </a>
      </div>
      <div class="mine-setting">
        <ul class="mine-setting-list">
          <li class="mine-setting-item">
            <div class="mine-setting-list-item-link">
              <img src="../../assets/img/my/icon_order.png" />
              <p class="mine-setting-list-item-link-name">
                  我的订单
              </p>
            </div>
          </li>
          <li class="mine-setting-item">
            <div class="mine-setting-list-item-link">
              <img src="../../assets/img/my/icon_ticket.png" />
              <p class="mine-setting-list-item-link-name">
                我的票夹
              </p>
            </div>
          </li>
          <li class="mine-setting-item">
            <div class="mine-setting-list-item-link">
              <img src="../../assets/img/my/icon_wallet.png" />
              <p class="mine-setting-list-item-link-name">我的卡包</p>
            </div>
          </li>
        </ul><ul class="mine-setting-list ulbottom">
          <li class="mine-setting-item">
            <div class="mine-setting-list-item-link">
              <img src="../../assets/img/my/icon_user.png" />
              <p class="mine-setting-list-item-link-name">
                  实名购票人
              </p>
            </div>
          </li>
          <li class="mine-setting-item">
            <div class="mine-setting-list-item-link">
              <img src="../../assets/img/my/icon_address.png" />
              <p class="mine-setting-list-item-link-name">
                收货地址
              </p>
            </div>
          </li>
          <li class="mine-setting-item">
            <div class="mine-setting-list-item-link">
              <img src="../../assets/img/my/icon_suggest.png" />
              <p class="mine-setting-list-item-link-name">意见反馈</p>
            </div>
          </li>
        <li class="mine-setting-item">
            <div class="mine-setting-list-item-link">
              <img src="../../assets/img/my/icon_service.png" />
              <p class="mine-setting-list-item-link-name special">客服帮助</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "My"
    }
</script>
<style lang="scss" scoped>
  body{height: 100%}
  .mine {
    width: 100%;
    height: 90%;
    background: #F5F5F5;
    .mine-body {
      .mine-bg {
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      .mine-info {
        padding-right: 0.133333rem;
        width: 100%;
        /*height: 4.3rem;*/
        .mine-info-icon {
          position: absolute;
          top: 0.4rem;
          right: 0.37rem;
          font-size: 0.4rem;

          a {
            outline: none;

            i {
              margin-left: 0.13333rem
            }
          }
        }

        .mine-info-main {
          background: #FFF;
          box-shadow: 0px 0.05333rem 0.4rem 0.02667rem rgba(35, 35, 35, 0.08);
          border-radius: 0.10667rem;
          margin: 1.15rem .32rem 0;
          position: relative;

          .mine-info-head {
            position: relative;
            /*height: 1.05rem;*/
            padding: 0 0.28rem;

            .mine-info-main-pic {
              border: 0.02667rem solid #EBEBEB;
              margin-top: -0.4rem;
              display: inline-block;
              border-radius: 50%;
              margin-right: 0.3rem;

              img {
                border: none;
                width: 1.2rem;
                height: 1.2rem;
              }
            }

            .mine-info-main-login {
              position: absolute;
              /*left:1.73rem;*/
              top: 0.25rem;
              font-size: 0.3rem;
              font-weight: bold;
            }

            .mine-info-main-uid {
              color: #999999;
              position: absolute;
              font-size: 0.24rem;
              top: 0.75rem;
            }
          }

          .main-info-label {
            height: 0.54rem;
          }

          .main-info-label-name {
            color: #b3b3b3;
            background: #f5f5f5;
            border-radius: 0.22rem 0 0 0.22rem;
            font-size: 0.26rem;
            float: right;
            padding: 0.15rem 0.23rem;
          }

          .main-info-item {
            padding: 0.36rem 0 0.15rem;
            width: 100%;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: space-around;
            .main-info-item-num{
              color: #262626;
              font-weight: bold;
              font-size: 0.3rem;
              line-height: 0.4rem;
            }
            .main-info-item-desc{
              color: #262626;
              font-size:0.24rem;
              line-height: 0.8rem;
            }

            .main-info-item-border {
              vertical-align: middle;
              background: #ebebeb;
              width: 0.01rem;
              height: 0.6rem;
            }
          }
        }
        .mine-vip-pic{
          img{
            max-width: 100%;
          }
        }
      }
      .mine-setting{
        .mine-setting-list{
          display: flex;
          /*flex-direction: column;*/
          justify-content: flex-start;
          background: #FFFFFF;
          border-radius: 0.2rem;
          margin : 0 0.2rem 0.3rem;
          align-items: center;
          .mine-setting-item{
            margin:0.22rem 0.35rem ;
            img{display: inline-block;width: 0.8rem;height: 0.8rem}
            .mine-setting-list-item-link{
                  text-align: center;
              .mine-setting-list-item-link-name{
                font-size: 0.14rem;
                line-height: 0.54rem;
              }
              .special{color:#fd684a}
            }
          }
        }
      }
    }
  }
</style>