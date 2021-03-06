const { Canvas } = require('canvas')
const canvas = new Canvas()
const fs = require('fs')
const ctx = canvas.getContext('2d')

const genTable = () => {
  var data = [
    { nickName: '咸蛋的蛋2222', corpusBanker: 0, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 3138 },
    { nickName: '空有我葬', corpusBanker: 42200, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '白字清欢', corpusBanker: 17700, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '野风吹', corpusBanker: 0, corpusPlayer: 44500, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '在一起不分开', corpusBanker: 0, corpusPlayer: 5400, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '迎风偷吻你', corpusBanker: 0, corpusPlayer: 39600, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '让我认识你', corpusBanker: 7700, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '荒废诗书', corpusBanker: 0, corpusPlayer: 37838, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '还是当年颜色', corpusBanker: 0, corpusPlayer: 48688, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '百般流传', corpusBanker: 0, corpusPlayer: 16400, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '对眼错过', corpusBanker: 0, corpusPlayer: 22388, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '别笑了别闹了', corpusBanker: 46400, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '毫不挽留', corpusBanker: 0, corpusPlayer: 14200, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '风阁暖人', corpusBanker: 0, corpusPlayer: 24088, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '让你撒欢', corpusBanker: 0, corpusPlayer: 38600, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '寻梦像扑火', corpusBanker: 3300, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '我只借一程', corpusBanker: 0, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 1938 },
    { nickName: '花木予诗', corpusBanker: 0, corpusPlayer: 0, corpusTie: 1200, corpusBP: 0, corpusPP: 0 },
    { nickName: '流出', corpusBanker: 0, corpusPlayer: 9700, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '情感败北', corpusBanker: 7500, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '假性假友', corpusBanker: 33400, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
    { nickName: '三观', corpusBanker: 44500, corpusPlayer: 0, corpusTie: 0, corpusBP: 0, corpusPP: 0 },
  ]
  var summaryInfo = [
    {
      betNum: 32,
      corpusAmount: 587466,
      corpusBP: 8600,
      corpusBanker: 455366,
      corpusPP: 4200,
      corpusPlayer: 114900,
      corpusTie: 4400,
      gameNo: 15,
      resultAmount: 0,
      shoeNo: 14,
      tableID: 1,
    },
  ]

  canvas.width = 455 * 2
  canvas.height = data.length * 40 + 80
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  // canvas.style.border = '1px solid #ccc'
  var rectH = 20
  var rectW = 65
  ctx.scale(2, 2)
  ctx.lineWidth = 1
  ctx.strokeStyle = '#ccc'
  ctx.textAlign = 'center'

  ctx.fillStyle = '#000000'
  ctx.fillText('序号', 32, 15)
  ctx.fillText('用户', 97, 15)
  ctx.fillStyle = '#ff0000'
  ctx.fillText('庄', 162, 15)
  ctx.fillStyle = '#006fff'
  ctx.fillText('闲', 227, 15)
  ctx.fillStyle = '#07c160'
  ctx.fillText('和', 292, 15)
  ctx.fillStyle = '#ff0000'
  ctx.fillText('庄对', 357, 15)
  ctx.fillStyle = '#006fff'
  ctx.fillText('闲对', 422, 15)

  for (var i = 0; i < data.length; i++) {
    ctx.fillStyle = '#000000'
    ctx.fillText(i + 1, 32, rectH * i + 35)
    ctx.fillText(data[i].nickName, 97, rectH * i + 35)
    ctx.fillStyle = '#ff0000'
    ctx.fillText(data[i].corpusBanker, 162, rectH * i + 35)
    ctx.fillStyle = '#006fff'
    ctx.fillText(data[i].corpusPlayer, 227, rectH * i + 35)
    ctx.fillStyle = '#07c160'
    ctx.fillText(data[i].corpusTie, 292, rectH * i + 35)
    ctx.fillStyle = '#ff0000'
    ctx.fillText(data[i].corpusBP, 357, rectH * i + 35)
    ctx.fillStyle = '#006fff'
    ctx.fillText(data[i].corpusPP, 422, rectH * i + 35)
  }

  ctx.fillStyle = '#000000'
  ctx.fillText('合计', 32, data.length * 20 + 35)
  ctx.fillText('', 97, data.length * 20 + 35)
  ctx.fillStyle = '#ff0000'
  ctx.fillText(summaryInfo[0].corpusBanker, 162, data.length * 20 + 35)
  ctx.fillStyle = '#006fff'
  ctx.fillText(summaryInfo[0].corpusPlayer, 227, data.length * 20 + 35)
  ctx.fillStyle = '#07c160'
  ctx.fillText(summaryInfo[0].corpusTie, 292, data.length * 20 + 35)
  ctx.fillStyle = '#ff0000'
  ctx.fillText(summaryInfo[0].corpusBP, 357, data.length * 20 + 35)
  ctx.fillStyle = '#006fff'
  ctx.fillText(summaryInfo[0].corpusPP, 422, data.length * 20 + 35)

  for (var i = 0; i < data.length + 2; i++) {
    ctx.moveTo(rectW * i, 0)
    ctx.lineTo(rectW * i, canvas.height)

    ctx.moveTo(0, rectH * i)
    ctx.lineTo(canvas.width, rectH * i)
    ctx.stroke()
  }

  fs.writeFile('image/out.png', canvas.toBuffer(), err => {
    if (err) console.log(err)
  })
}

module.exports = {
  genTable,
}
