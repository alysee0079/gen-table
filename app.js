const OSS = require('ali-oss')
const axios = require('axios')
const { genTable } = require('./utils/genTableWithCanvas')

const url = 'https://testjpos-api.jhongnet.com/goods/setting/common/ali-token'
const token = 'b0b2759e918c27005df0ced9ceeaeedd806186dc'

// 生成表格
genTable()

axios
  .get(url, {
    headers: {
      'user-token': token,
    },
  })
  .then(({ data }) => {
    if (data.code === 200) {
      const client = new OSS({
        region: 'oss-cn-hongkong',
        accessKeyId: data.data.AccessKeyId,
        accessKeySecret: data.data.AccessKeySecret,
        stsToken: data.data.SecurityToken,
        bucket: 'os-img-like',
      })
      client.put('out1.png', 'image/out.png').then(res => {
        console.log(res.url)
      })
    }
  })
