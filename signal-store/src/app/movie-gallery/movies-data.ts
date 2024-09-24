export type movie = {
  title: string;
  year: number;
  cast: Array<string>;
  genres: Array<string>;
  href: string;
  extract: string;
  thumbnail: string;
  thumbnail_width: number;
  thumbnail_height: number;
};
export const movies: movie[] = [
  {
    title: 'The Grudge',
    year: 2020,
    cast: [
      'Andrea Riseborough',
      'Demián Bichir',
      'John Cho',
      'Betty Gilpin',
      'Lin Shaye',
      'Jacki Weaver',
    ],
    genres: ['Horror', 'Supernatural'],
    href: 'The_Grudge_(2020_film)',
    extract:
      'The Grudge is a 2020 American psychological supernatural horror film',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg',
    thumbnail_width: 220,
    thumbnail_height: 326,
  },
  {
    title: 'Parasite',
    year: 2019,
    cast: [
      'Song Kang-ho',
      'Lee Sun-kyun',
      'Cho Yeo-jeong',
      'Choi Woo-shik',
      'Park So-dam',
    ],
    genres: ['Thriller', 'Drama'],
    href: 'Parasite_(2019_film)',
    extract:
      'Parasite is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho.',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png',
    thumbnail_width: 220,
    thumbnail_height: 326,
  },
  {
    title: 'Joker',
    year: 2019,
    cast: [
      'Joaquin Phoenix',
      'Robert De Niro',
      'Zazie Beetz',
      'Frances Conroy',
      'Brett Cullen',
    ],
    genres: ['Crime', 'Drama'],
    href: 'Joker_(2019_film)',
    extract:
      'Joker is a 2019 American psychological thriller film directed by Todd Phillips.',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg',
    thumbnail_width: 220,
    thumbnail_height: 326,
  },
  {
    title: '1917',
    year: 2019,
    cast: [
      'George MacKay',
      'Dean-Charles Chapman',
      'Mark Strong',
      'Andrew Scott',
      'Richard Madden',
    ],
    genres: ['War', 'Drama'],
    href: '1917_(2019_film)',
    extract: '1917 is a 2019 British war film directed by Sam Mendes.',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/en/a/a2/1917_%282019%29_Film_Poster.jpeg',
    thumbnail_width: 220,
    thumbnail_height: 326,
  },
  {
    title: 'Ford v Ferrari',
    year: 2019,
    cast: [
      'Matt Damon',
      'Christian Bale',
      'Jon Bernthal',
      'Caitriona Balfe',
      'Tracy Letts',
    ],
    genres: ['Sport', 'Drama'],
    href: 'Ford_v_Ferrari',
    extract:
      'Ford v Ferrari is a 2019 American sports drama film directed by James Mangold.',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/en/3/34/Ford_v._Ferrari_%282019%29_poster.jpg',
    thumbnail_width: 220,
    thumbnail_height: 326,
  },
  {
    title: 'Once Upon a Time in Hollywood',
    year: 2019,
    cast: [
      'Leonardo DiCaprio',
      'Brad Pitt',
      'Margot Robbie',
      'Emile Hirsch',
      'Margaret Qualley',
    ],
    genres: ['Comedy', 'Drama'],
    href: 'Once_Upon_a_Time_in_Hollywood',
    extract:
      'Once Upon a Time in Hollywood is a 2019 comedy-drama film written and directed by Quentin Tarantino.',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/en/8/8a/Once_Upon_a_Time_in_Hollywood_poster.png',
    thumbnail_width: 220,
    thumbnail_height: 326,
  },
];
