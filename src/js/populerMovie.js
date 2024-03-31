class PopulerMovie {
  constructor() {
    if (!PopulerMovie.instance) {
      PopulerMovie.instance = this;
    }
    return PopulerMovie.instance;
  }

  get_data() {
    const myData = this.get_Data_from_backend()
    return myData;
  }

  get_Data_from_backend_count() {
    return 10;
  }

  get_Data_from_backend() {
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
    const _data = myData.data.data.slice();
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

const PM = new PopulerMovie;

export default PM;