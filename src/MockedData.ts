interface MockedData {
  question: {
    name: string;
  };
  options: {
    name: string;
    image: string;
    isCorrect: boolean;
  }[];
}

const mockedData: MockedData[] = [
  {
    question: {
      name: "Danny Duncan",
    },
    options: [
      {
        name: "Danny Duncan",
        image:
          "https://vz.cnwimg.com/wp-content/uploads/2023/06/Danny-Duncan.jpg",
        isCorrect: true,
      },
      {
        name: "Adin Ross",
        image:
          "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-03/240312-Adin-Ross-ew-1225p-99eeef.jpg",
        isCorrect: false,
      },
    ],
  },
  {
    question: {
      name: "Albert Einstein",
    },
    options: [
      {
        name: "Albert Einstein",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
        isCorrect: true,
      },
      {
        name: "Isaac Newton",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/1200px-GodfreyKneller-IsaacNewton-1689.jpg",
        isCorrect: false,
      },
    ],
  },
  {
    question: {
      name: "Elon Musk",
    },
    options: [
      {
        name: "Elon Musk",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/The_Prime_Minister%2C_Shri_Narendra_Modi_meeting_Mr._Elon_Musk_in_New_York%2C_USA_on_June_20%2C_2023_%282%29_%28cropped%29.jpg",
        isCorrect: true,
      },
      {
        name: "Bill Gates",
        image:
          "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg",
        isCorrect: false,
      },
    ],
  },
  {
    question: {
      name: "Ellen DeGeneres",
    },
    options: [
      {
        name: "Oprah Winfrey",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/oprah-winfrey-arrives-at-the-premiere-of-owns-david-makes-news-photo-1678107172.jpg",
        isCorrect: false,
      },
      {
        name: "Ellen DeGeneres",
        image:
          "https://media.cnn.com/api/v1/images/stellar/prod/210512235815-ellen-degeneres-gallery-lead.jpg?q=w_3000,c_fill",
        isCorrect: true,
      },
    ],
  },
  {
    question: {
      name: "Barack Obama",
    },
    options: [
      {
        name: "Barack Obama",
        image:
          "https://www.whitehouse.gov/wp-content/uploads/2021/01/44_barack_obama.jpg?w=1250",
        isCorrect: true,
      },
      {
        name: "Donald Trump",
        image:
          "https://d3i6fh83elv35t.cloudfront.net/static/2024/08/GettyImages-2163348239-1024x674.jpg",
        isCorrect: false,
      },
    ],
  },
  {
    question: {
      name: "Taylor Swift",
    },
    options: [
      {
        name: "Taylor Swift",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_4.png/640px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_4.png",
        isCorrect: true,
      },
      {
        name: "Ariana Grande",
        image:
          "https://www.billboard.com/wp-content/uploads/2024/03/a-Ariana-Grande-cr-Katia-Temkin-02-press-2024-billboard-1548.jpg?w=942&h=623&crop=1",
        isCorrect: false,
      },
    ],
  },
  {
    question: {
      name: "Michael Jordan",
    },
    options: [
      {
        name: "LeBron James",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
        isCorrect: true,
      },
      {
        name: "Michael Jordan",
        image: "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
        isCorrect: true,
      },
    ],
  },
  {
    question: {
      name: "Leonardo DiCaprio",
    },
    options: [
      {
        name: "Leonardo DiCaprio",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e0/Leonardo_di_Caprio_%2823531475691%29_%28cropped%29.jpg",
        isCorrect: true,
      },
      {
        name: "Brad Pitt",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/1200px-Brad_Pitt_2019_by_Glenn_Francis.jpg",
        isCorrect: false,
      },
    ],
  },
  {
    question: {
      name: "Rihanna",
    },
    options: [
      {
        name: "Beyoncé",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/b7/Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2810_of_118%29_%2852946364598%29_%28best_crop%29.jpg",
        isCorrect: false,
      },
      {
        name: "Rihanna",
        image:
          "https://parade.com/.image/t_share/MTk1NzY4MTE1MTE4NzQ1MjM2/rihanna-net-worth-rihanna-billionaire.jpg",
        isCorrect: true,
      },
    ],
  },
  {
    question: {
      name: "Cristiano Ronaldo",
    },
    options: [
      {
        name: "Cristiano Ronaldo",
        image:
          "https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg",
        isCorrect: true,
      },
      {
        name: "Lionel Messi",
        image:
          "https://cdn.britannica.com/34/212134-050-A7289400/Lionel-Messi-2018.jpg",
        isCorrect: false,
      },
    ],
  },
];

export default mockedData;
