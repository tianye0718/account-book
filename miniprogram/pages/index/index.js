//index.js
const app = getApp()

Page({
  data: {
    userInfo: wx.getStorageSync('userInfo') || {},
    period_summary: {
      income: 1500,
      outcome: 1803.23
    }
  },

  onLoad: function() {
    
  },

})
