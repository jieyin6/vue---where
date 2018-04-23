import Mock from 'mockjs'
const data = Mock.mock('/api', {
  imgUrl: [
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1709/39/b98fdb3ee7478e02.jpg_640x200_1f6c7b01.jpg',
      id: 1
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_640x200_e1b76963.jpg',
      id: 2
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/f8/300474f00e42aa02.jpg_640x200_b4884104.jpg',
      id: 3
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1804/ee/062ec9d11886e302.jpg_640x200_5d628c64.jpg',
      id: 4
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/81/61e16fc667c0bb02.jpg_640x200_ea28d62a.jpg',
      id: 5
    }
  ],
  iconUrl: [
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      id: 1,
      desc: '景点门票'
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
      id: 2,
      desc: '必游榜单'
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
      id: 3,
      desc: '踏青赏花'
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/c1/ac058f238b9a6802.png',
      id: 4,
      desc: '一日游'
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
      id: 5,
      desc: '动植物园'
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
      id: 6,
      desc: '故宫'
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
      id: 7,
      desc: '古北水镇'
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/fa/fe1915e1d20bcc02.png',
      id: 8,
      desc: '定制游'
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
      id: 9,
      desc: '演出'
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
      id: 10,
      desc: '演出'
    },
    {
      url: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
      id: 11,
      desc: '名胜古迹'
    }
  ],
  recommend: [
    {
      url: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
      title: '世界花卉大观园',
      comment: '12345',
      num: 34,
      address: '昌平区'
    },
    {
      url: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
      title: '世界花卉大观园',
      comment: '12345',
      num: 34,
      address: '昌平区'
    },
    {
      url: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
      title: '世界花卉大观园',
      comment: '12345',
      num: 34,
      address: '昌平区'
    },
    {
      url: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
      title: '世界花卉大观园',
      comment: '12345',
      num: 34,
      address: '昌平区'
    },
    {
      url: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
      title: '世界花卉大观园',
      comment: '12345',
      num: 34,
      address: '昌平区'
    },
    {
      url: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
      title: '世界花卉大观园',
      comment: '12345',
      num: 34,
      address: '昌平区'
    },
    {
      url: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
      title: '世界花卉大观园',
      comment: '12345',
      num: 34,
      address: '昌平区'
    },
    {
      url: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
      title: '世界花卉大观园',
      comment: '12345',
      num: 34,
      address: '昌平区'
    },
    {
      url: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
      title: '世界花卉大观园',
      comment: '12345',
      num: 34,
      address: '昌平区'
    },
    {
      url: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
      title: '世界花卉大观园',
      comment: '12345',
      num: 34,
      address: '昌平区'
    }
  ],
  weekend: [
    {
      url: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
      name: '寻找北京的皇城范儿',
      desc: '数百年的宫廷庙宇，至今依旧威严霸气'
    },
    {
      url: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
      name: '寻找北京的皇城范儿',
      desc: '数百年的宫廷庙宇，至今依旧威严霸气'
    },
    {
      url: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
      name: '寻找北京的皇城范儿',
      desc: '数百年的宫廷庙宇，至今依旧威严霸气'
    },
    {
      url: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
      name: '寻找北京的皇城范儿',
      desc: '数百年的宫廷庙宇，至今依旧威严霸气'
    }
  ]
})

export default {
  data
}
