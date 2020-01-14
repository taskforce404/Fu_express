Page({

  data: {
    current_index:0,
    url:""
  },

  onLoad: function (option) {

    var _this = this;
    var index;

    if(option.index){
      this.setData({
        current_index:option.index,
        url:"/FUs/" + String(option.index) + ".png"
      })
    }else{
      index = random(0,24);
      this.setData({
        current_index:index,
        url:"/FUs/" + String(index) + ".png"
      })
    };

    wx.startAccelerometer({
      success:function(){}
    });

    wx.onAccelerometerChange(function(res){
      if(res.x > 0.5||res.y > 0.5||res.z > 0.5){
        index = random(0,24)
        if(index ==_this.data.current_index){
          if(index == 24){
            _this.setData({
              current_index:index - 1,
              url:"/FUs/" + String(index - 1) + ".png"
            })
          }else{
            _this.setData({
              current_index:index + 1,
              url:"/FUs/" + String(index + 1) + ".png"
            })
          }
        }else{
          _this.setData({
            current_index:index,
            url:"/FUs/" + String(index) + ".png"
          })
        }
      }
    })
  },

  onShareAppMessage:function(res){
    return{
      title:"五福临门 扫得开心 (^▽^)",
      path:"/pages/index/index?index="+String(this.data.current_index)
    }
  }
});

function random(min,max){
  var number = Math.random();
  var length = max - min + 1;
  var result = Math.floor(number * length) + min;
  return result;
}


