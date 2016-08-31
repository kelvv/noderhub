import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View ,
  Image ,
  WebView
} from 'react-native';
import { bindActionCreators } from 'redux'
import * as appActions from './actions/appActions'
import { connect } from 'react-redux'
import HomeView from './containers/view/HomeView'
import WorkView from './containers/view/WorkView'
import MeView from './containers/view/MeView'
import Icon from 'react-native-vector-icons/Ionicons'
import TabNavigator from 'react-native-tab-navigator'

var HTMLView = require('react-native-htmlview')



class noderhub extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        const {  selectedTab ,setSelectedTab } = this.props;
        var htmlContent = '<div class=\"markdown-text\"><p>JSConf China 2016 已近在眼前，在年初在进行了一项调查后我们最终选择了期望值最高的南京市。在纠结NanJS 还是 NingJS 许久之后我们最终选了多数人都认同的 NingJS 。宁是古代南京的简称，但是也许会有人以为我们在宁波举办了宁JS，其实我们是在古城南京举办我们第5届 JavaScript 中国开发者大会。</p>\n<h3>讲师</h3>\n<p>今年我们邀请了国内外共约20位讲师给大家带来高质量的技术分享。\n<img src=\"https://dn-cnode.qbox.me/FrdW0OfdYdZL7UzG92daE3ffGXEu\" alt=\"Screen Shot 2016-08-24 at 2.45.24 PM.png\"></p>\n<h3>小伙伴们</h3>\n<p>今年将有超过800位小伙伴们与我们一起参加这次的宁JS大会，其中还包括从台湾、香港、欧洲、美洲等地不远千里来参加我们活动的小伙伴们。\n<img src=\"//dn-cnode.qbox.me/FjlRbpNuRrBN7zF8T8Xt2naoO5Et\" alt=\"WechatIMG4.jpeg\"></p>\n<h3>赞助商们</h3>\n<p>我们也特别感谢一直以来支持我们的赞助商们。\n<img src=\"https://dn-cnode.qbox.me/FiZFkozca_FTeIvjzOAHSGA27-_p\" alt=\"ecd4aebe-6a4c-11e6-98a7-838d07414538.png\"></p>\n<h3>场地</h3>\n<p>今年的场地我们选择了南京市最高的建筑 南京洲际酒店，大家乘坐地铁1号线在鼓楼站下车步行5分钟即可到达。\n今年我们也和洲际酒店合作，给大家谈下了一个比较优惠的协议价格，可以关注我们微信号回复 酒店 查看详情。\n<img src=\"//dn-cnode.qbox.me/Fn7jVw7FuatA7Nsr6eSx-ImPok4B\" alt=\"640\"></p>\n<h3>出行</h3>\n<p>而且今年我们也很高兴能和Uber 中国 达成合作给大家带来出行上的便利。\n<img src=\"//dn-cnode.qbox.me/FotrFbpGYrZawkvocyhJxNqq8Ws0\" alt=\"NingJS-uber.png\">\n可关注我们微信号回复关键字“<strong>uber</strong>”获取优惠码。</p>\n<h3>直播</h3>\n<p>从去年深JS 开始我们主办方就已经有想法对大会进行现场直播，希望能够让因为有事而无法到达现场的朋友们也能有机会参与 JSConf 中国中来。同时我们也希望我们的大会能够让更多人带来收获。\n届时大家可以在我们的官网 <a href=\"http://2016.jsconf.cn/#/live?_k=4px8q4\">http://2016.jsconf.cn/#/live?_k=4px8q4</a>  观看直播。\n<img src=\"//dn-cnode.qbox.me/FuTk-655vK9urL3AUf3EvIUKsffN\" alt=\"Pasted image at 2016_08_25 12_10 AM.png\">\n<em>本次的直播要感谢 UCloud 提供的流媒体视频支持、Adieu 同学的设备支持、reactChina 的域名支持。</em></p>\n<h3>After Party</h3>\n<p>:) 很同学都非常期待我们的 After Party 活动。按照以往的惯例我们都会在周六结束一整天的分享后有一个大型的 After Party 活动，大家可以认识你周围的人，聊聊技术和人生，亦或者和我们的讲师进行面对面的交流，也许困扰你许久的问题就会得到结局。今年的 After Party 活动将会在南京 Beer Hero 举办，届时每一位参会者都将获得一杯免费的500ML生啤，无限量的薯条、鸡翅和水果，同时我们还为大家争取到了更多优惠：当晚所有生啤买一送一，瓶装啤酒85折。活动将从当天晚上 8 点开始一直持续到凌晨2点。\n<img src=\"//dn-cnode.qbox.me/FqgkFtF2YDtqT5_XNzNKFFb3olkd\" alt=\"Screen Shot 2016-08-26 at 2.35.40 PM.png\">\n<em>入场券为实体券，该图片不能作为有效入场券</em></p>\n<h3>互动</h3>\n<p>关注我们的官方微信公众账号或者微博账号（<a href=\"/user/jsconfchina\">@jsconfchina</a>）带上＃jsconfchina2016＃或者＃ningjs＃的标签发表你的看法。\n由于我们的官方微信群已经到达 500 人上限，所以大家可以在以下平台和我们互动：\n加入我们的官方Slack <a href=\"https://jsconfcn.slack.com\">https://jsconfcn.slack.com</a> , 可以使用 <a href=\"https://shenjs.herokuapp.com\">https://shenjs.herokuapp.com</a>  自动邀请注册\n微信 2 群\n<img src=\"//dn-cnode.qbox.me/Fi_XdpK3hZesK89Qkgi18VDHVZJ5\" alt=\"640\"></p>\n<p>更多大会信息，可以访问我们的 <a href=\"http://2016.jsconf.cn\">官方网站</a> 查询。\n如果你有任何疑问欢迎给我们留言或发信 <a href=\"mailto:support@jsconf.cn\">support@jsconf.cn</a>。</p>\n<p>也可以关注我们的微信公众号 JSConf_China 来接收本次大会的最新消息。</p>\n</div>'


        return (
            
        /*<WebView
                source={{url:'https://cnodejs.org/topic/57c39145100afbbc0dcc544d'}}
            />*/
        <TabNavigator>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="发现"
                renderIcon={() => <Icon name={ 'ios-home' } size={25} color={'gray'}/>}
                renderSelectedIcon={() => <Icon name={ 'ios-home' } size={25} color={'#4E78E7'}/>}
                badgeText=""
                onPress={() => setSelectedTab('home')}>
                <HomeView/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'work'}
                title="招聘"
                renderIcon={() => <Icon name={ 'ios-man' } size={25} color={'gray'}/>}
                renderSelectedIcon={() => <Icon name={ 'ios-man' } size={25} color={'#4E78E7'}/>}
                badgeText=""
                onPress={() => setSelectedTab('work')}>
                <WorkView/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'me'}
                title="我的"
                renderIcon={() => <Icon name={ 'ios-person' } size={25} color={'gray'}/>}
                renderSelectedIcon={() => <Icon name={ 'ios-person' } size={25} color={'#4E78E7'}/>}
                badgeText=""
                onPress={() => setSelectedTab('me')}>
                <MeView/>
            </TabNavigator.Item>
        </TabNavigator>
        );
  }
}

var styles = StyleSheet.create({
  con:{
      margin :10
  },
  h1 : {
      fontSize :32,
      fontWeight :'bold'
  },
  h2 : {
      fontSize :26,
      fontWeight :'bold'
  }
})

export default connect(
  state => ({
    selectedTab : state.app.selectedTab
  }),
  dispatch => ({
    setSelectedTab: (name) => dispatch(appActions.setSelectedTab(name))
  })
)(noderhub);