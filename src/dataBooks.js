const data = {
  books: [
    {
      title: 'The Hundred-Page Machine Learning Book',
      auther: 'Andriy Burkov',
      slug: 'machine-Learning-book',
      category: ' Machine Learning Book ',
      pages: 160,
      price: 150,
      rating: 4,
      countInStock: 10,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9995/9781999579500.jpg',
      description:
        'Written by an expert in machine learning holding a Ph.D. in artificial intelligence and almost two decades of hands-on industry  experience in computer science, this compact book is unique in many aspects.  It can be read in only a few hours, but it offers a wealth of information without  sacrificing quality information. Readers will enjoy an easy-to-understand piece that  squeezes in a wide range of machine learning topics in a systematic way without shying away from the mathematics side of the industry.',
    },
    {
      title: 'Too Big to Ignore',
      auther: 'Viktor Mayer',
      slug: 'big-data',
      category: 'Big Data',
      price: 170,
      rating: 3.5,
      countInStock: 20,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5442/9780544227750.jpg',
      description:
        'Whether you’re skeptical about or intrigued by business uses for big data, this is the go-to big data book in which the author examines how businesses and even local governments are using big data to their advantage',
    },

    {
      title: 'Artificial Intelligence: A Guide for Thinking Humans',
      auther: 'Melanie Mitchell',
      slug: 'artificial-Intelligence',
      category: 'AI',
      pages: 336,
      price: 70,
      rating: 4.5,
      countInStock: 25,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3742/9780374257835.jpg',
      description:
        'A Guide for Thinking Humans-Throughout the book, Mitchell looks at the most urgent questions surrounding AI today: How do they work? Do we have to worry about them surpassing us? Mitchell also provides readers with a clear sense on the profound disconnect between the hype and actual achievements in AI, while interweaving stories about the science of AI and the people behind it.',
    },
    {
      title: 'Business unIntelligence',
      auther: ' Barry Devlin',
      slug: 'Business-unIntelligence',
      category: 'Data Analytics',
      pages: 437,
      price: 95,
      rating: 4,
      countInStock: 30,
      image: 'https://m.media-amazon.com/images/I/51miyLKFcBL.jpg',
      description:
        'this book provides a unique angle on big data and data analytics. Readers will get a look at the successes and issues in the field and discover things that aren’t always openly discussed within the industry, and will learn how many of the tried-and-true data practices have become outdated while gaining insight on how to stay competitive within the field.',
    },
    {
      title: 'Creating Value With Social Media Analytics',
      auther: ' Gohar F. Khan',
      slug: 'social-sedia-analytics',
      category: 'Data Analytics',
      pages: 502,
      price: 80,
      rating: 4,
      countInStock: 25,
      image:
        'https://m.media-amazon.com/images/I/41eo531HTrS._AC_SY350_QL15_.jpg',
      description:
        'This book will teach you how to apply big data analytics to a social media strategy, helping drive value and engagement. As you move into a data career, this book will help you better understand the theories, concepts, strategies, techniques and resources required to retrieve business value from social media that can be used to improve customer loyalty',
    },
    {
      title: 'Developing Analytic Talent',
      auther: 'Vincent Granville',
      slug: 'developing-analytic-talent',
      category: 'Data Scientist',
      pages: 336,
      price: 60,
      rating: 4.5,
      countInStock: 30,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41jhK57RasL._SX258_BO1,204,203,200_.jpg',
      description:
        'After reading this book, you will have an understanding of how to develop detailed analytics that can help you meet business goals. The author explores the more intricate aspects of data science, the required skills and how to acquire them. The book also explores the skills that employers are looking for and how the growing reliance on big data has furthered the demand for data professionals.',
    },
    {
      title: 'Data Science for Business',
      auther: 'Foster Provost and Tom Fawcett',
      slug: 'data-science-for-business',
      category: 'Data Analytics',
      pages: 408,
      price: 65,
      rating: 4.5,
      countInStock: 40,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4493/9781449361327.jpg',
      description:
        'This book introduces the fundamental concepts of data science while introducing readers to data-analytic thinking that can be used for extracting useful knowledge and business value from data. After reading this book, you will discover how to think data-analytically and fully acknowledge how data science methods can support business decision-making.',
    },
    {
      title: 'Deep Medicine',
      auther: 'Eric Topol',
      slug: 'deep-medicine',
      category: 'Artificial Intelligence',
      pages: 400,
      price: 115,
      rating: 4,
      countInStock: 15,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5416/9781541644632.jpg',
      description:
        'In this book, leading physician Eric Topol reveals how artificial intelligence has the potential to empower physicians and revolutionize patient care, transforming everything doctors do, from notetaking and scans/imaging to diagnosis and treatment, significantly reducing the cost of medicine and mortality rates.',
    },

    {
      title: 'The Model Thinker: What You Need to Know to Make Data Work ',
      auther: 'Scott E. Page',
      slug: 'the-model-thinker',
      category: 'models to organize the data',
      pages: 464,
      price: 75,
      rating: 4,
      countInStock: 35,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5416/9781541675711.jpg',
      description:
        'This book takes a deep dive into mathematical, statistical, and computational models – from linear regression to random walks and far beyond. Readers learn how to implement multiple models to organize data, resulting in better decision making, more accurate predictions and more consistent designs. The author also provides a toolkit for business people, learners, scientists, pollsters and bloggers to think strategically and better leverage data.',
    },

    {
      title: 'Rebooting AI',
      auther: 'Gary Marcus and Ernest Davis',
      slug: 'rebooting-ai',
      category: 'Artificial Intelligence',
      pages: 288,
      price: 70,
      rating: 4,
      countInStock: 15,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5255/9780525566045.jpg',
      description:
        'In this book, two leaders in the field offer a compelling analysis of the current state of data science while revealing the steps we must take to achieve a truly robust artificial intelligence field. Taking inspiration from the human mind, the authors explain what we need in order to advance AI to the next level while creating an AI we can trust — in our homes, our cars and our doctors’ offices',
    },
  ],
};

export default data;
