// miniprogram/pages/login/login.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: wx.getStorageSync('userInfo') || {}
  },
  onGetUserInfo(e) {
    wx.showToast({
      title: '登陆中...',
      icon: 'loading',
      duration: 10000
    })
    let userInfo = e.detail.userInfo;
    // call login function to get user's openid
    wx.cloud.callFunction({
      name: "login",
      complete: res=> {
        // console.log(res)
        userInfo.openid = res.result.openid;
        this.setData({
          userInfo
        })
        // save to local storage
        wx.setStorageSync('userInfo', userInfo);
        wx.hideToast({
          complete: (res) => {
            wx.switchTab({
              url: '/pages/index/index',
            })
          },
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (this.data.userInfo.openid) {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})