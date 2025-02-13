export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json({
        singers: [
          {
            name: "周杰伦",
            describe: "华语流行乐男歌手",
            url: "/images/zjl.jpg",
          },
          {
            name: "张惠妹",
            describe: "台湾歌手张惠妹",
            url: "/images/zhm.jpg",
          },
          {
            name: "林俊杰",
            describe: "新加坡歌手及音乐制作人",
            url: "/images/ljj.jpg",
          },
          {
            name: "蔡依林",
            describe: "台湾流行女歌手",
            url: "/images/cyj.jpg",
          },
          {
            name: "王力宏",
            describe: "华语流行乐男歌手及演员",
            url: "/images/wlh.jpg",
          },
          {
            name: "邓紫棋",
            describe: "香港女歌手及词曲创作人",
            url: "/images/dzq.jpg",
          },
          {
            name: "吴莫愁",
            describe: "中国大陆女歌手",
            url: "/images/wmc.jpg",
            },
          {
            name: "孙楠",
            describe: "中国大陆男歌手",
            url: "/images/sn.jpg",
          },
          {
            name: "麦田老狼",
            describe: "歌手，音乐人",
            url: "/images/mtll.jpg",
          },
          {
            name: "陈楚生",
            describe: "中国大陆男歌手",
            url: "/images/ccs.jpg",
          },
          {
            name: "杨丞琳",
            describe: "台湾女歌手及演员",
            url: "/images/yl.jpg",
          },
          {
            name: "华晨宇",
            describe: "中国大陆男歌手及音乐制作人",
            url: "/images/hcy.jpg",
          },
        ],
        disc:[
          {
            title:'春龙交响夜2024',
            singers:'罗大佑  /  春龙交响乐团',
            url: "/images/discSwiper/109951170376917434.jpg",
          },
          {
            title: "WINTER HEPTAGON",
            singers: "GOT7",
            url: "/images/discSwiper/109951170406711224.jpg",
          },
          {
            title: "Balloonerism",
            singers: "Mac Miller",
            url: "/images/discSwiper/109951170376564077.jpg",
          },
          {
            title: "量变临界点",
            singers: "华晨宇",
            url: "/images/discSwiper/109951170340533586.jpg",
          },
          {
            title: "Walkerworld 2.0",
            singers: "Alan Walker",
            url: "/images/discSwiper/109951170362572621.jpg",
          },
          {
            title: "趁记忆消失之前 Before the memories Fade [Acoustic Live Session]",
            singers: "陈珊妮",
            url: "/images/discSwiper/109951170312637354.jpg",
          },
          {
            title: "背面是我",
            singers: "丁世光",
            url: "/images/discSwiper/109951170302919617.jpg",
          },
          {
            title: "珍珠刑",
            singers: "魏如萱",
            url: "/images/discSwiper/109951170300270996.jpg",
          },
          {
            title: "赛浪20",
            singers: "海龟先生",
            url: "/images/discSwiper/109951170280967507.jpg",
          },{
            title: "Deus Ex Machina",
            singers: "珂拉琪 Collage",
            url: "/images/discSwiper/109951170261863766.jpg",
          }
          

        ],
      });

      break;
  }
}
