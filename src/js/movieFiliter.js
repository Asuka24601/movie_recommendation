import {checkFullSpan} from '@/js/tool.js'

class MovieFilter {
  constructor() {
    if (!MovieFilter.instance) {
      this.catergory = [];
      this.form = Object;
      this.drawerFiliterOpen = false;
      this.ctx = null;
      MovieFilter.instance = this;
    }
    return MovieFilter.instance;
  }

  get_catergory() {
    return this.catergory;
  }

  get_form() {
    return this.form;
  }

  get_drawerFiliterOpen() {
    return this.drawerFiliterOpen;
  }

  add_catergory(item) {
    if (typeof item !== 'string') {
      return
    }
    this.catergory.push(item)
  }

  remove_catergory(item) {
    if (typeof item !== 'string' || this.catergory.findIndex((word) => word === item) === -1) {
      return
    }
    this.catergory = this.catergory.filter((word) => word !== item)
  }

  change_drawerFiliterOpen() {
    // console.log('change_drawerFiliterOpen')
    this.drawerFiliterOpen = !this.drawerFiliterOpen;
    if (this.drawerFiliterOpen === false)
      this.ctx.handleClose()
  }

  set_form(form) {
    this.form = form;
    this.set_category((()=>{
      const arr = Object.entries(form)
      let ans = []
      arr.forEach(e=> {
        if (typeof e[1] !== 'object'|null) {
          if (!checkFullSpan(e[1]))
          ans.push(e[0]+':'+e[1].trim())
        }
        else if (e[0].startsWith('rating')) {
          ans.push(e[0]+':'+e[1][0].toString()+'-'+e[1][1].toString())
        }
        else {
          if (!e[0].endsWith('Date'))
          e[1].forEach(k=> {
            if(!checkFullSpan(k))
            ans.push(e[0]+':'+k.trim())
          })
          else if(e[1]!==null) {
            const y = e[1].getFullYear();
            const m = e[1].getMonth();
            const d = e[1].getDate();
            ans.push(e[0]+':'+y+'-'+m+'-'+d)
          }
        }
      })
      return ans
    })())
  }

  set_category(category) {
    this.catergory = category;
  }

  set_ctx(ctx) {
    console.log(ctx)
    this.ctx = ctx;
  }

  clean_catergory() {
    this.catergory = [];
  }

  clean_form() {
    this.form = Object;
  }

  clean_all() {
    this.clean_catergory()
    this.clean_form()
  }

  get_data(offset, limit) {
    const myData = this.get_Data_from_backend(offset, limit)
    return myData;
  }

  get_Data_from_backend_count() {
    return 30;
  }

  get_Data_from_backend(offset, limit) {
    JSON.stringify(this.form)
    //backend work
    //...
    const myData = {
      code: 200,
      message: 'success',
      result: {
        data: [
          {
            movie_id: 90,
            title: '肖申克的救赎',
            director: '弗兰克·德拉邦特',
            releaseDate: '1994-09-10',
            rating: 4.9,
            category: ['剧情', '犯罪'],
            duration: 142,
            description: '一场谋杀案使银行家安迪（蒂姆•罗宾斯 Tim Robbins 饰）蒙冤入狱，谋杀妻子及其情人的指控将囚禁他终生。在肖申克监狱的首次现身就让监狱“大哥”瑞德（摩根•弗里曼 Morgan Freeman 饰）对他另眼相看。瑞德帮助他搞到一把石锤和一幅女明星海报，两人渐成患难 之交。很快，安迪在监狱里大显其才，担当监狱图书管理员，并利用自己的金融知识帮助监狱官避税，引起了典狱长的注意，被招致麾下帮助典狱长洗黑钱。偶然一次，他得知一名新入狱的小偷能够作证帮他洗脱谋杀罪。燃起一丝希望的安迪找到了典狱长，希望他能帮自己翻案。阴险伪善的狱长假装答应安迪，背后却派人杀死小偷，让他唯一能合法出狱的希望泯灭。沮丧的安迪并没有绝望，在一个电闪雷鸣的风雨夜，一场暗藏几十年的越狱计划让他自我救赎，重获自由！老朋友瑞德在他的鼓舞和帮助下，也勇敢地奔向自由。',
            actors: [' 蒂姆·罗宾斯', '摩根·弗里曼', '鲍勃·冈顿', '威廉姆·赛德'],
            poster_url: 'https://img2.imgtp.com/2024/04/01/uOVmkjUU.jpg'
          }, {
            movie_id: 92,
            title: '教父',
            director: '弗朗西斯·福特·科波拉',
            releaseDate: '1972-03-15',
            rating: 4.9,
            category: ['剧情', '犯罪'],
            duration: 175,
            description: '40年代的美国，“教父”维托·柯里昂（马龙·白兰度 饰）是黑手党柯里昂家族的首领，带领家族从事非法的勾当，但同时他也是许多弱小平民的保护神，深得人们爱戴。因为拒绝了毒枭索洛索的毒品交易要求，柯里昂家族和纽约其他几个黑手党家族的矛盾激化。圣诞前夕，索洛索劫持了“教父”的参谋汤姆，并派人暗杀“教父”；因为内奸的出卖，“教父”的大儿子逊尼被仇家杀害；小儿子麦克（阿尔·帕西诺 饰）也被卷了进来，失去爱妻。黑手党家族之间的矛盾越来越白热化。年老的“教父”面对丧子之痛怎样统领全局？黑手党之间的仇杀如何落幕？谁是家族的内奸？谁又能够成为新一代的“教父”？',
            actors: ['马龙·白兰度', '阿尔·帕西诺', '詹姆斯·肯恩'],
            poster_url: 'https://img2.imgtp.com/2024/04/01/0LCI1hys.jpg'
          }, {
            movie_id: 93,
            title: '蝙蝠侠：黑暗骑士',
            director: '克里斯托弗·诺兰',
            releaseDate: '2008-07-14',
            rating: 4.9,
            category: ['剧情', '动作', '科幻'],
            duration: 152,
            description: '从亲眼目睹父母被人杀死的阴影中走出来的“蝙蝠侠”，经历了成长之后，已经不再是那个桀骜不的孤单英雄了。在警官吉姆·戈登和检查官哈维·登特的通力帮助下，“蝙蝠侠”无后顾之忧地继续满世界的奔波，与日益增长起来的犯罪威胁做着永无休止的争斗，而他所在的高谭市，也是进展最为明显的地方，犯罪率以一种惊人的速度持续下降着，毕竟对方是能够上天入地的“蝙蝠侠”，不借两个胆子谁还敢造次呢？不过像高谭这种科技与污秽并存的城市，平静是不可能维持太久的，果不其然，新一轮的混乱很快就席卷了整个城市，人们再一被被恐慌所笼罩着，而声称愿意为这一切负责的，自然就是所有混乱的源头以及支配者--“小丑”了。',
            actors: ['克里斯蒂安·贝尔', '希斯·莱杰 ', '阿伦·伊克哈特'],
            poster_url: 'https://img2.imgtp.com/2024/04/01/rN90gPeX.jpg'
          }, {
            movie_id: 4,
            title: 'movie4',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 5,
            title: 'movie5',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 6,
            title: 'movie6',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 7,
            title: 'movie7',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 8,
            title: 'movie8',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 9,
            title: 'movie9',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 10,
            title: 'movie10',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 1,
            title: 'movie1',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: 120,
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://img2.baidu.com/it/u=502971036,3526872190&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888'
          }, {
            movie_id: 2,
            title: 'movie2',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 3,
            title: 'movie3',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 4,
            title: 'movie4',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 5,
            title: 'movie5',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 6,
            title: 'movie6',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 7,
            title: 'movie7',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 8,
            title: 'movie8',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 9,
            title: 'movie9',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 10,
            title: 'movie10',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 1,
            title: 'movie1',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: 120,
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://img2.baidu.com/it/u=502971036,3526872190&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888'
          }, {
            movie_id: 2,
            title: 'movie2',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 3,
            title: 'movie3',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 4,
            title: 'movie4',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 5,
            title: 'movie5',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 6,
            title: 'movie6',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 7,
            title: 'movie7',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 8,
            title: 'movie8',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 9,
            title: 'movie9',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          }, {
            movie_id: 10,
            title: 'movie30',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: '120',
            description: 'description1',
            actors: ['star1', 'star2'],
            poster_url: 'https://m.media-amazon.com/images/M/MV5BNmQ3ZjVlZG…XkEyXkFqcGdeQXVyNTk4MTA5OTg@._V1_FMjpg_UX450_.jpg'
          },
        ],
        total: 30
      }
    }
    const _data = myData.result.data.slice(offset, offset+limit);
    return {
      code: 200,
      message: 'myData.message',
      result: {
        data: _data,
        total: _data.length
      }
    };
  }
}

const MF = new MovieFilter;

export default MF;