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
      data: {
        data: [
          {
            movie_id: 1,
            title: 'movie1',
            director: 'director1',
            releaseDate: '2021-01-01',
            rating: 5,
            category: ['comedy', 'action'],
            duration: 120,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit obcaecati ipsa accusantium. Quia quisquam corporis doloribus ut quaerat sed cum velit facilis est asperiores, repellendus et pariatur quam sint?',
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
    const _data = myData.data.data.slice(offset, offset+limit);
    return {
      code: 200,
      message: 'myData.message',
      data: {
        data: _data,
        total: _data.length
      }
    };
  }
}

const MF = new MovieFilter;

export default MF;