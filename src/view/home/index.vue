<template>
  <div
    id="content"
    class="animsition"
    style="animation-duration: 1.5s; opacity: 1"
  >
    <div id="top" class="navbar-fixed navbar-transparent navbar-no shadow-down">
      <div class="container">
        <div class="logo">
          <a href="" class="current"
            ><img src="../../assets/images/logo.svg" width="270" height="92"
          /></a>
        </div>
        <div class="hamburgerBox">
          <div class="hamburger hamburger--vortex-r">
            <div class="hamburger-box"><div class="hamburger-inner"></div></div>
          </div>
        </div>
        <nav class="menuItem">
          <div class="whiteSpace">
            <ul id="menu_list">
              <li><a href="" class="current">首页</a></li>
              <li>
                <a href="#/channel">服务支持</a>
              </li>
              <li>
                <a href="#/about">走进五粮液</a
                >
              </li>
              <li>
                <a href="#/news">新闻资讯</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="topHeight"></div>
    <div class="flexslider" id="banner">
      <ul class="slides">
        <li
          class="flex-active-slide"
          style="
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 1;
            display: block;
            z-index: 2;
          "
        >
          <a><img
              class="slide"
              src="../../assets/images/inba20251201.jpg"
              draggable="false"
          /></a>
        </li>
        <li
          class=""
          style="
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 0;
            display: block;
            z-index: 1;
          "
        >
          <a><img
              class="slide"
              src="../../assets/images/inba20251017-1.jpg"
              draggable="false"
          /></a>
        </li>
        <li
          class=""
          style="
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 0;
            display: block;
            z-index: 1;
          "
        >
          <a><img
              class="slide"
              src="../../assets/images/inba20251017-2.jpg"
              draggable="false"
          /></a>
        </li>
        <li
          class=""
          style="
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 0;
            display: block;
            z-index: 1;
          "
        >
          <a><img
              class="slide"
              src="../../assets/images/inba20251016.jpg"
              draggable="false"
          /></a>
        </li>
        <li
          class=""
          style="
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 0;
            display: block;
            z-index: 1;
          "
        >
          <a><img
              class="slide"
              src="../../assets/images/inba20250930.jpg"
              draggable="false"
          /></a>
        </li>
        <li
          class=""
          style="
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 0;
            display: block;
            z-index: 1;
          "
        >
          <a><img
              class="slide"
              src="../../assets/images/inba20250924.jpg"
              draggable="false"
          /></a>
        </li>
        <li
          class=""
          style="
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 0;
            display: block;
            z-index: 1;
          "
        >
          <a><img
              class="slide"
              src="../../assets/images/inba20250902.jpg"
              draggable="false"
          /></a>
        </li>
        <li
          class=""
          style="
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 0;
            display: block;
            z-index: 1;
          "
        >
          <a><img
              class="slide"
              src="../../assets/images/inba20250826.jpg"
              draggable="false"
          /></a>
        </li>
        <li
          class=""
          style="
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 0;
            display: block;
            z-index: 1;
          "
        >
          <a><img
              class="slide"
              src="../../assets/images/inba20250819.jpg"
              draggable="false"
          /></a>
        </li>
        <li
          class=""
          style="
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 0;
            display: block;
            z-index: 1;
          "
        >
          <a><img
              class="slide"
              src="../../assets/images/inba20250708.jpg"
              draggable="false"
          /></a>
        </li>
        <li
          class=""
          style="
            width: 100%;
            float: left;
            margin-right: -100%;
            position: relative;
            opacity: 0;
            display: block;
            z-index: 1;
          "
        >
          <a><img
              class="slide"
              src="../../assets/images/inba2021122402.jpg"
              draggable="false"
          /></a>
        </li>
      </ul>
      <div class="blackbg bannerprop">
        <div class="openDown">
          <p>点击向下滚动页面</p>
          <div class="Img chevron">
            <img src="../../assets/images/pageDown.svg" draggable="false" />
          </div>
        </div>
      </div>
      <ol class="flex-control-nav flex-control-paging is-visible">
        <li><a class="flex-active">1</a></li>
        <li><a class="">2</a></li>
        <li><a class="">3</a></li>
        <li><a class="">4</a></li>
        <li><a class="">5</a></li>
        <li><a class="">6</a></li>
        <li><a class="">7</a></li>
        <li><a class="">8</a></li>
        <li><a class="">9</a></li>
        <li><a class="">10</a></li>
        <li><a class="">11</a></li>
      </ol>
      <ul class="flex-direction-nav" id="navbarbtn">
        <li><a class="flex-prev"></a></li>
        <li><a class="flex-next"></a></li>
      </ul>
    </div>

    <div id="mainCon">
      <div class="subNews">
        <div class="mainContainer">
          <div class="title">
            <img
              src="../../assets/images/titleIcol1.jpg"
              width="90"
              height="27"
            /><span>新闻资讯</span
            ><img
              src="../../assets/images/titleIcol2.jpg"
              width="90"
              height="27"
            />
          </div>

          <div class="con">
            <div class="mainPart">
              <div class="picNews">
                <div class="flexslider_news" id="rollNew">
                  <ul class="slides">
                    <li
                      class="flex-active-slide"
                      style="
                        width: 100%;
                        float: left;
                        margin-right: -100%;
                        position: relative;
                        opacity: 1;
                        display: block;
                        z-index: 2;
                      "
                    >
                      <a>
                        <img
                          src="../../assets/images/b20250125.jpg"
                          alt="五粮液集团（股份）公司2024年度工作总结大会专题报道"
                          draggable="false"
                        />
                        <div class="txt">
                          <p>
                            五粮液集团（股份）公司2024年度工作总结大会专题报道
                          </p>
                        </div>
                      </a>
                    </li>
                    <li
                      class=""
                      style="
                        width: 100%;
                        float: left;
                        margin-right: -100%;
                        position: relative;
                        opacity: 0;
                        display: block;
                        z-index: 1;
                      "
                    >
                      <a><img
                          src="../../assets/images/b20241218.jpg"
                          alt="五粮液第二十八届12·18共商共建共享大会专题报道"
                          draggable="false"
                        />
                        <div class="txt">
                          <p>五粮液第二十八届12·18共商共建共享大会专题报道</p>
                        </div>
                      </a>
                    </li>
                    <li
                      class=""
                      style="
                        width: 100%;
                        float: left;
                        margin-right: -100%;
                        position: relative;
                        opacity: 0;
                        display: block;
                        z-index: 1;
                      "
                    >
                      <a>
                        <img
                          src="../../assets/images/b20240418.jpg"
                          alt="2024 APEC工商领导人峰会专题报道"
                          draggable="false"
                        />
                        <div class="txt">
                          <p>2024 APEC工商领导人峰会专题报道</p>
                        </div></a
                      >
                    </li>
                    <li
                      class=""
                      style="
                        width: 100%;
                        float: left;
                        margin-right: -100%;
                        position: relative;
                        opacity: 0;
                        display: block;
                        z-index: 1;
                      "
                    >
                      <a><img
                          src="../../assets/images/b20240427.jpg"
                          alt="五粮液和美全球行专题报道"
                          draggable="false"
                        />
                        <div class="txt">
                          <p>五粮液和美全球行专题报道</p>
                        </div></a
                      >
                    </li>
                    <li
                      class=""
                      style="
                        width: 100%;
                        float: left;
                        margin-right: -100%;
                        position: relative;
                        opacity: 0;
                        display: block;
                        z-index: 1;
                      "
                    >
                      <a><img
                          src="../../assets/images/b20240209.jpg"
                          alt="五粮液集团公司2023年度工作总结大会专题报道"
                          draggable="false"
                        />
                        <div class="txt">
                          <p>五粮液集团公司2023年度工作总结大会专题报道</p>
                        </div></a
                      >
                    </li>
                  </ul>
                  <ol class="flex-control-nav flex-control-paging is-visible">
                    <li><a class="flex-active">1</a></li>
                    <li><a class="">2</a></li>
                    <li><a class="">3</a></li>
                    <li><a class="">4</a></li>
                    <li><a class="">5</a></li>
                  </ol>
                  <ul class="flex-direction-nav" id="navbarbtn">
                    <li><a class="flex-prev"></a></li>
                    <li><a class="flex-next"></a></li>
                  </ul>
                </div>
                <ul class="smallPic">
                  <li>
                    <a><img
                        src="../../assets/images/b20241028-2.jpg"
                        alt="五粮液荣获中国上市公司健康指数百强第一"
                      />
                      <div class="txt">
                        <p>五粮液荣获中国上市公司健康指数百强第一</p>
                      </div></a
                    >
                  </li>
                  <li>
                    <a><img
                        src="../../assets/images/b20241028-1.jpg"
                        alt="曾从钦董事长论何以名酒：世界名酒的五重价值底蕴"
                      />
                      <div class="txt">
                        <p>曾从钦董事长论何以名酒：世界名酒的五重价值底蕴</p>
                      </div></a
                    >
                  </li>
                </ul>
              </div>
              <div class="textNews">
                <ul class="newTxt">
                  <li class="first">
                    <a>十年知遇 盛启未来 五粮液×京东品酒会在三亚召开</a
                    >
                  </li>
                  <li>
                    <a>2025年五粮液统战专题培训班在重庆社会主义学院成功举办</a
                    >
                  </li>
                  <li>
                    <a>五粮液质量创新双丰收：斩获ICQCC金奖与轻工行业多项荣誉</a
                    >
                  </li>
                  <li>
                    <a>五粮液知识产权保护专项工作组专题会议召开</a
                    >
                  </li>
                  <li>
                    <a>产能跃居全球第一！环球绝缘子公司数智化生产示范线点火成功</a
                    >
                  </li>
                  <li class="first">
                    <a>以爱为媒 共赴和美
                      西湖情玫瑰婚典组委会到访五粮液共话合作新篇</a
                    >
                  </li>
                  <li>
                    <a>五粮液受邀参加第四届链博会四川推介会
                      助力全球供应链建设</a
                    >
                  </li>
                  <li>
                    <a>蝉联行业榜首 五粮液亮相2025年《财富》中国500强峰会</a
                    >
                  </li>
                  <li>
                    <a>全国白酒标准化技术委员会浓香型白酒分委会三届二次全体委员大会举行</a
                    >
                  </li>
                  <li>
                    <a>【喜报】普什联动公司荣获两项权威认证再添“联动质造”新动能</a
                    >
                  </li>
                  <li class="first">
                    <a>八载进博同行 五粮液持续焕新白酒文化创新表达</a
                    >
                  </li>
                  <li>
                    <a>五粮液2025年优秀党务工作者培训班在厦门大学圆满结业</a
                    >
                  </li>
                  <li>
                    <a>五粮液CURA项目荣获德国红点奖 用创新诠释年轻化表达</a
                    >
                  </li>
                  <li>
                    <a>五粮液连续11年荣获深交所信息披露考评A级评级</a
                    >
                  </li>
                  <li>
                    <a>八载携手再续华章 潘基文率队到访五粮液集团
                      共话和美繁荣未来</a
                    >
                  </li>
                </ul>
              </div>
              <div class="clearfix"></div>
            </div>
            <div
              class="mobNews project"
              style="perspective: 1000px; transform-style: preserve-3d"
            >
              <div
                class="Img project__card"
                style="
                  perspective: 1000px;
                  transform-style: preserve-3d;
                  transform: rotateX(0deg) rotateY(0deg);
                "
              >
                <img src="../../assets/images/newRight.jpg" />
                <div
                  class="shine"
                  style="
                    position: absolute;
                    inset: 0px;
                    z-index: 9;
                    background: linear-gradient(
                      226.019deg,
                      rgba(255, 255, 255, 0.12) 0%,
                      rgba(255, 255, 255, 0) 30%
                    );
                  "
                ></div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>

          <div class="bigimg">
            <a><img src="../../assets/images/sbanner.jpg" /></a>
          </div>

          <div class="title">
            <img
              src="../../assets/images/titleIcol1.jpg"
              width="90"
              height="27"
            /><span>五粮影视视频</span
            ><img
              src="../../assets/images/titleIcol2.jpg"
              width="90"
              height="27"
            />
          </div>

          <div class="con">
            <ul class="mediaPic">
              <li>
                <a class="cd-popup-trigger1"
                  ><div class="Img">
                    <img src="../../assets/images/nv001.jpg" />
                    <div class="colorBg"></div>
                  </div>
                  <p>五粮液品牌宣传片</p></a
                >
              </li>
              <li>
                <a class="cd-popup-trigger2"
                  ><div class="Img">
                    <img src="../../assets/images/nv002.jpg" />
                    <div class="colorBg"></div>
                  </div>
                  <p>《杯酒千年》</p></a
                >
              </li>
              <li>
                <a class="cd-popup-trigger3"
                  ><div class="Img">
                    <img src="../../assets/images/nv003.jpg" />
                    <div class="colorBg"></div>
                  </div>
                  <p>《大国浓香和美五粮》</p></a
                >
              </li>
              <li>
                <a class="cd-popup-trigger4"
                  ><div class="Img">
                    <img src="../../assets/images/nv004.jpg" />
                    <div class="colorBg"></div>
                  </div>
                  <p>五粮液集团之歌《商战》</p></a
                >
              </li>
              <div class="clearfix"></div>
            </ul>
          </div>
        </div>
      </div>

      <div class="shopCon">
        <img src="../../assets/images/shoping.jpg" />
        <div
          class="whiteBg code--left aos-init aos-animate"
          aos="flip-left"
          id="whiteBg"
          aos-once="true"
          aos-delay="100"
        >
          <h4>专卖店查询</h4>
          <p>查找您附近专卖店,为提供方便快捷的服务。</p>
          <div class="more">
            <a>了解详情</a
            >
          </div>
          <div
            class="btn aos-init aos-animate"
            aos="fade-up"
            aos-easing="ease"
            aos-delay="400"
            aos-once="true"
          >
            <a>专卖店申请</a
            >
          </div>
        </div>
      </div>

      <div class="subPro mainContainer">
        <div class="title">
          <img
            src="../../assets/images/titleIcol1.jpg"
            width="90"
            height="27"
          /><span>五粮精品</span
          ><img
            src="../../assets/images/titleIcol2.jpg"
            width="90"
            height="27"
          />
        </div>
        <div class="con">
          <div class="mainPro">
            <ul class="proPic">
              <li class="w1">
                <a><div class="proCon">
                    <div class="border_top"></div>
                    <div class="border_left"></div>
                    <div class="border_bottom"></div>
                    <div class="border_right"></div>
                    <div class="Img">
                      <img src="../../assets/images/03.jpg" />
                    </div>
                    <p>第八代五粮液</p>
                  </div></a
                >
              </li>
              <li class="w1">
                <a><div class="proCon">
                    <div class="border_top"></div>
                    <div class="border_left"></div>
                    <div class="border_bottom"></div>
                    <div class="border_right"></div>
                    <div class="Img">
                      <img src="../../assets/images/02.jpg" />
                    </div>
                    <p>经典五粮液</p>
                  </div></a
                >
              </li>
              <li class="w1">
                <a><div class="proCon">
                    <div class="border_top"></div>
                    <div class="border_left"></div>
                    <div class="border_bottom"></div>
                    <div class="border_right"></div>
                    <div class="Img">
                      <img src="../../assets/images/01.jpg" />
                    </div>
                    <p>五粮液缘定晶生-戒指款</p>
                  </div></a
                >
              </li>
              <li class="w1 hide">
                <div class="proCon">
                  <div class="border_top"></div>
                  <div class="border_left"></div>
                  <div class="border_bottom"></div>
                  <div class="border_right"></div>
                  <div class="Img">
                    <img src="../../assets/images/06.jpg" />
                  </div>
                  <p>新时代国运昌</p>
                </div>
              </li>
            </ul>
            <ul class="proPic">
              <li class="w2">
                <a
                  ><div class="proCon">
                    <div class="border_top"></div>
                    <div class="border_left"></div>
                    <div class="border_bottom"></div>
                    <div class="border_right"></div>
                    <div class="Img">
                      <img src="../../assets/images/05.jpg" />
                      <p>501五粮液·清池酿造</p>
                    </div>
                  </div></a
                >
              </li>
              <li class="w2">
                <a
                  ><div class="proCon">
                    <div class="border_top"></div>
                    <div class="border_left"></div>
                    <div class="border_bottom"></div>
                    <div class="border_right"></div>
                    <div class="Img">
                      <img src="../../assets/images/04.jpg" />
                      <p>501五粮液·明池酿造</p>
                    </div>
                  </div></a
                >
              </li>
              <div class="clearfix"></div>
            </ul>
          </div>
          <div
            class="mobPro project"
            style="perspective: 1000px; transform-style: preserve-3d"
          >
            <a><div
                class="Img project__card"
                style="
                  perspective: 1000px;
                  transform-style: preserve-3d;
                  transform: rotateX(0deg) rotateY(0deg);
                "
              >
                <img src="../../assets/images/proRight.jpg" />
                <div
                  class="shine"
                  style="
                    position: absolute;
                    inset: 0px;
                    z-index: 9;
                    background: linear-gradient(
                      207.468deg,
                      rgba(255, 255, 255, 0.047) 0%,
                      rgba(255, 255, 255, 0) 30%
                    );
                  "
                ></div></div
            ></a>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>

    <div class="bottomBg body-border-top" id="newBottomHtml">
      <div class="mainContainer">
        <div class="bottomPart1">
          <ul class="menu">
            <li>
              <a>产品中心</a>
              <ul>
                <li>
                  <a>五粮液</a
                  >
                </li>
                <li><a>纪念酒</a></li>
                <li>
                  <a>系列酒</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a>五粮服务</a
              >
              <ul>
                <li>
                  <a>投诉建议
                  </a>
                </li>
                <li>
                  <a>售后服务</a
                  >
                </li>
                <li>
                  <a>用户反馈</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a>经销商</a
              >
              <ul>
                <li>
                  <a>经销商查询
                  </a>
                </li>
                <li>
                  <a>申请成为经销商</a
                  >
                </li>
              </ul>
            </li>
            <div class="clearfix"></div>
          </ul>
          <div class="linkCon">
            <p>友情链接</p>
            <ul>
              <li>
                <a>五粮浓香</a
                >
              </li>
              <li>
                <a>文化旅游</a>
              </li>
              <li>
                <a>普什集团</a>
              </li>
              <li>
                <a>安吉物流集团</a
                >
              </li>
              <li>
                <a>环球集团</a
                >
              </li>
              <li>
                <a>圣山莫林实业集团</a
                >
              </li>
              <li>
                <a>海大橡胶集团</a
                >
              </li>
              <li>
                <a>保健酒有限公司</a
                >
              </li>
              <li>
                <a>生态酿酒有限公司</a
                >
              </li>
              <li>
                <a>精美公司</a>
              </li>
              <li>
                <a>白酒金三角全产业链服务平台</a
                >
              </li>
              <div class="clearfix"></div>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="copy body-border-top">
          <span> © </span>2025<span>五粮液公司版权所有</span
          ><a><span>蜀ICP备10204898号</span></a
          ><span>川公网安备51150202000113号</span
          ><img src="../../assets/images/gslogo.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { loadCSSFiles, unloadCSS } from "../../utils/cssLoader";

// 动态加载 CSS（只在当前页面生效）
const componentId = 'home-page';
// 使用 import.meta.url 来获取正确的路径
const cssFiles = [
  new URL("../../assets/css/menu.css", import.meta.url).href,
  new URL("../../assets/css/main.css", import.meta.url).href,
  new URL("../../assets/css/bottom.css", import.meta.url).href,
  new URL("../../assets/css/banner.css", import.meta.url).href,
  new URL("../../assets/css/aos.css", import.meta.url).href,
  new URL("../../assets/css/index.css", import.meta.url).href
];

// 轮播相关变量
let currentSlide = ref(0); // 当前显示的slide索引（从0开始，分页器显示为1、2、3...）
let autoPlayTimer = null;
const slideInterval = 3000; // 自动播放间隔（毫秒）

// rollNew轮播相关变量
let currentRollNewSlide = ref(0);
let rollNewAutoPlayTimer = null;
const rollNewSlideInterval = 3000; // 自动播放间隔（毫秒）

// 初始化轮播
onMounted(() => {
  // 加载当前页面的 CSS
  loadCSSFiles(cssFiles, componentId);
  
  initBanner();
  initRollNew();
  initScrollHide();
});

// 页面卸载时移除当前页面的 CSS
onBeforeUnmount(() => {
  unloadCSS(componentId);
});

function initBanner() {
  const banner = document.getElementById('banner');
  if (!banner) return;

  const slides = banner.querySelectorAll('.slides li');
  const pagination = banner.querySelectorAll('.flex-control-nav a');
  const prevBtn = banner.querySelector('.flex-prev');
  const nextBtn = banner.querySelector('.flex-next');
  const directionNav = banner.querySelector('.flex-direction-nav');

  if (slides.length === 0) return;

  // 初始化：从第一个slide开始（索引0，分页器显示为1）
  currentSlide.value = 0;
  updateSlide(slides, pagination, 0);

  // 分页器点击事件
  pagination.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      goToSlide(index, slides, pagination);
    });
  });

  // 上一张按钮
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide(slides, pagination);
    });
  }

  // 下一张按钮
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide(slides, pagination);
    });
  }

  // hover显示箭头
  if (banner && directionNav) {
    banner.addEventListener('mouseenter', () => {
      directionNav.classList.add('show');
    });
    banner.addEventListener('mouseleave', () => {
      directionNav.classList.remove('show');
    });
  }

  // 自动播放
  startAutoPlay(slides, pagination);
}

// 更新slide显示
function updateSlide(slides, pagination, index) {
  // 先设置z-index，确保新slide在上层
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.zIndex = '2';
    } else {
      slide.style.zIndex = '1';
    }
  });

  // 使用requestAnimationFrame确保过渡效果流畅
  requestAnimationFrame(() => {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('flex-active-slide');
        slide.style.opacity = '1';
      } else {
        slide.classList.remove('flex-active-slide');
        slide.style.opacity = '0';
      }
    });
  });

  // 更新分页器
  pagination.forEach((item, i) => {
    if (i === index) {
      item.classList.add('flex-active');
    } else {
      item.classList.remove('flex-active');
    }
  });

  currentSlide.value = index;
}

// 跳转到指定slide
function goToSlide(index, slides, pagination) {
  stopAutoPlay();
  updateSlide(slides, pagination, index);
  startAutoPlay(slides, pagination);
}

// 上一张
function prevSlide(slides, pagination) {
  stopAutoPlay();
  const newIndex = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1;
  updateSlide(slides, pagination, newIndex);
  startAutoPlay(slides, pagination);
}

// 下一张
function nextSlide(slides, pagination) {
  stopAutoPlay();
  const newIndex = (currentSlide.value + 1) % slides.length;
  updateSlide(slides, pagination, newIndex);
  startAutoPlay(slides, pagination);
}

// 开始自动播放
function startAutoPlay(slides, pagination) {
  stopAutoPlay();
  autoPlayTimer = setInterval(() => {
    nextSlide(slides, pagination);
  }, slideInterval);
}

// 停止自动播放
function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
}

// 初始化rollNew轮播
function initRollNew() {
  const rollNew = document.getElementById('rollNew');
  if (!rollNew) return;

  const slides = rollNew.querySelectorAll('.slides li');
  const pagination = rollNew.querySelectorAll('.flex-control-nav a');
  const prevBtn = rollNew.querySelector('.flex-prev');
  const nextBtn = rollNew.querySelector('.flex-next');
  const directionNav = rollNew.querySelector('.flex-direction-nav');

  if (slides.length === 0) return;

  // 初始化：从第一个slide开始（索引0，分页器显示为1）
  currentRollNewSlide.value = 0;
  updateRollNewSlide(slides, pagination, 0);

  // 分页器点击事件
  pagination.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      goToRollNewSlide(index, slides, pagination);
    });
  });

  // 上一张按钮
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevRollNewSlide(slides, pagination);
    });
  }

  // 下一张按钮
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextRollNewSlide(slides, pagination);
    });
  }

  // 自动播放
  startRollNewAutoPlay(slides, pagination);
}

// 更新rollNew slide显示
function updateRollNewSlide(slides, pagination, index) {
  // 先设置z-index，确保新slide在上层
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.zIndex = '2';
    } else {
      slide.style.zIndex = '1';
    }
  });

  // 使用requestAnimationFrame确保过渡效果流畅
  requestAnimationFrame(() => {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('flex-active-slide');
        slide.style.opacity = '1';
      } else {
        slide.classList.remove('flex-active-slide');
        slide.style.opacity = '0';
      }
    });
  });

  // 更新分页器
  pagination.forEach((item, i) => {
    if (i === index) {
      item.classList.add('flex-active');
    } else {
      item.classList.remove('flex-active');
    }
  });

  currentRollNewSlide.value = index;
}

// 跳转到指定rollNew slide
function goToRollNewSlide(index, slides, pagination) {
  stopRollNewAutoPlay();
  updateRollNewSlide(slides, pagination, index);
  startRollNewAutoPlay(slides, pagination);
}

// 上一张rollNew
function prevRollNewSlide(slides, pagination) {
  stopRollNewAutoPlay();
  const newIndex = currentRollNewSlide.value === 0 ? slides.length - 1 : currentRollNewSlide.value - 1;
  updateRollNewSlide(slides, pagination, newIndex);
  startRollNewAutoPlay(slides, pagination);
}

// 下一张rollNew
function nextRollNewSlide(slides, pagination) {
  stopRollNewAutoPlay();
  const newIndex = (currentRollNewSlide.value + 1) % slides.length;
  updateRollNewSlide(slides, pagination, newIndex);
  startRollNewAutoPlay(slides, pagination);
}

// 开始rollNew自动播放
function startRollNewAutoPlay(slides, pagination) {
  stopRollNewAutoPlay();
  rollNewAutoPlayTimer = setInterval(() => {
    nextRollNewSlide(slides, pagination);
  }, rollNewSlideInterval);
}

// 停止rollNew自动播放
function stopRollNewAutoPlay() {
  if (rollNewAutoPlayTimer) {
    clearInterval(rollNewAutoPlayTimer);
    rollNewAutoPlayTimer = null;
  }
}

// 初始化滚动隐藏顶部导航
function initScrollHide() {
  const topElement = document.getElementById('top');
  if (!topElement) return;

  const scrollThreshold = 100; // 滚动距离阈值（像素）
  let lastScrollTop = 0;

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > scrollThreshold) {
      // 滚动超过阈值，添加is-hidden类
      topElement.classList.add('is-hidden');
    } else {
      // 滚动回到顶部附近，移除is-hidden类
      topElement.classList.remove('is-hidden');
    }
    
    lastScrollTop = scrollTop;
  }

  // 添加滚动监听
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // 初始检查
  handleScroll();
}
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
