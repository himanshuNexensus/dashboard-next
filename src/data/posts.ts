import { Post } from '@/types/posts';

const posts: Post[] = [
  {
    id: '1',
    title: 'The Rise of Artificial Intelligence',
    body: 'Artificial Intelligence (AI) is revolutionizing various industries...',
    author: 'John Doe',
    date: '2024-05-01',
    comments: [
      { id: '1', text: 'Great introduction!', username: 'Jane' },
      {
        id: '2',
        text: 'Looking forward to more posts on this topic.',
        username: 'Alex',
      },
    ],
  },
  {
    id: '2',
    title: 'Quantum Computing: A New Era of Computing',
    body: 'Quantum computing holds the potential to solve problems...',
    author: 'Emily Smith',
    date: '2024-04-28',
    comments: [
      { id: '1', text: 'Fascinating read!', username: 'Mark' },
      {
        id: '2',
        text: 'I have some questions about quantum algorithms.',
        username: 'Sarah',
      },
    ],
  },
  {
    id: '3',
    title: 'Blockchain: Transforming Industries',
    body: 'Blockchain technology is disrupting traditional industries...',
    author: 'David Johnson',
    date: '2024-05-03',
    comments: [
      { id: '1', text: 'Blockchain has immense potential!', username: 'Lucy' },
      {
        id: '2',
        text: "I'm curious about its scalability.",
        username: 'Michael',
      },
    ],
  },
  {
    id: '4',
    title: 'The Future of Augmented Reality',
    body: 'Augmented Reality (AR) is changing the way we interact...',
    author: 'Sophia Williams',
    date: '2024-05-05',
    comments: [
      { id: '1', text: 'AR applications are amazing!', username: 'Grace' },
      {
        id: '2',
        text: "Can't wait to see AR integrated into everyday life.",
        username: 'Jack',
      },
    ],
  },
  {
    id: '5',
    title: 'The Internet of Things (IoT): Connecting Everything',
    body: 'The Internet of Things (IoT) is creating interconnected...',
    author: 'Andrew Brown',
    date: '2024-05-08',
    comments: [
      {
        id: '1',
        text: 'IoT has huge potential for smart homes.',
        username: 'Olivia',
      },
      {
        id: '2',
        text: 'Security concerns need to be addressed.',
        username: 'William',
      },
    ],
  },
  {
    id: '6',
    title: '5G Technology: The Next Generation of Connectivity',
    body: '5G technology promises faster speeds and lower latency...',
    author: 'Emma Davis',
    date: '2024-05-10',
    comments: [
      {
        id: '1',
        text: 'Excited for the possibilities with 5G.',
        username: 'Sophie',
      },
      {
        id: '2',
        text: 'Hope it improves rural connectivity too.',
        username: 'Ethan',
      },
    ],
  },
  {
    id: '7',
    title: 'Cybersecurity in the Digital Age',
    body: 'As technology advances, cybersecurity becomes...',
    author: 'Michael Johnson',
    date: '2024-05-12',
    comments: [
      {
        id: '1',
        text: 'Cybersecurity is crucial for protecting data.',
        username: 'Ava',
      },
      { id: '2', text: 'Continuous monitoring is key.', username: 'Noah' },
    ],
  },
  {
    id: '8',
    title: 'Artificial Neural Networks: Mimicking the Brain',
    body: 'Artificial Neural Networks (ANNs) are inspired by the...',
    author: 'Isabella White',
    date: '2024-05-15',
    comments: [
      {
        id: '1',
        text: 'ANNs have applications in various fields.',
        username: 'Liam',
      },
      {
        id: '2',
        text: 'Training them requires a lot of data.',
        username: 'Mia',
      },
    ],
  },
  {
    id: '9',
    title: 'Cloud Computing: Enabling Scalable Solutions',
    body: 'Cloud computing provides on-demand access to computing...',
    author: 'James Taylor',
    date: '2024-05-18',
    comments: [
      {
        id: '1',
        text: 'Cloud computing has transformed IT.',
        username: 'Harper',
      },
      {
        id: '2',
        text: 'Concerned about data privacy in the cloud.',
        username: 'Logan',
      },
    ],
  },
  {
    id: '10',
    title: 'Machine Learning: Powering Intelligent Systems',
    body: 'Machine Learning (ML) algorithms enable computers...',
    author: 'Ava Johnson',
    date: '2024-05-20',
    comments: [
      { id: '1', text: 'ML is reshaping industries.', username: 'Emma' },
      {
        id: '2',
        text: "I'm interested in reinforcement learning.",
        username: 'Daniel',
      },
    ],
  },
  {
    id: '12',
    title: 'The Future of Quantum Computing',
    body: 'Quantum computing promises to revolutionize problem-solving and data processing...',
    author: 'Alice Smith',
    date: '2024-06-01',
    comments: [
      { id: '1', text: 'This is fascinating!', username: 'Mike' },
      { id: '2', text: 'Can you explain more about its applications?', username: 'Linda' },
    ],
  },
  {
    id: '13',
    title: 'Exploring Blockchain Technology',
    body: 'Blockchain technology extends beyond cryptocurrencies, offering new solutions for secure transactions...',
    author: 'Bob Johnson',
    date: '2024-06-15',
    comments: [
      { id: '1', text: 'Very informative!', username: 'Sara' },
      { id: '2', text: 'How does it compare to traditional databases?', username: 'Tom' },
    ],
  },
  {
    id: '14',
    title: 'The Impact of 5G on Connectivity',
    body: '5G technology is set to enhance connectivity and speed, transforming how we interact with the digital world...',
    author: 'Emily Davis',
    date: '2024-07-01',
    comments: [
      { id: '1', text: 'Excited for the changes!', username: 'Anna' },
      { id: '2', text: 'What are the potential drawbacks?', username: 'Sam' },
    ],
  },
  {
    id: '15',
    title: 'Advancements in Renewable Energy',
    body: 'Renewable energy sources are becoming more efficient and widespread, driving global sustainability efforts...',
    author: 'Michael Lee',
    date: '2024-07-15',
    comments: [
      { id: '1', text: 'Great to see progress in this field!', username: 'Lara' },
      { id: '2', text: 'How do these advancements affect energy costs?', username: 'James' },
    ],
  },
  {
    id: '16',
    title: 'Understanding Augmented Reality',
    body: 'Augmented Reality (AR) is enhancing our experiences by blending digital content with the real world...',
    author: 'Sophia Martinez',
    date: '2024-08-01',
    comments: [
      { id: '1', text: 'AR has so many potential applications!', username: 'Ella' },
      { id: '2', text: 'What industries are adopting AR the fastest?', username: 'Oliver' },
    ],
  },
  {
    id: '17',
    title: 'The Evolution of Digital Marketing',
    body: 'Digital marketing strategies continue to evolve with new technologies and consumer behavior trends...',
    author: 'David Wilson',
    date: '2024-08-15',
    comments: [
      { id: '1', text: 'Useful insights on digital trends.', username: 'Noah' },
      { id: '2', text: 'Can you provide more details on SEO techniques?', username: 'Mia' },
    ],
  },
  {
    id: '18',
    title: 'Cybersecurity Threats in the Modern Age',
    body: 'As technology advances, so do the methods of cyber attacks, making cybersecurity a critical field...',
    author: 'Olivia Brown',
    date: '2024-09-01',
    comments: [
      { id: '1', text: 'Very relevant topic in today’s world.', username: 'Liam' },
      { id: '2', text: 'What are the best practices for protecting data?', username: 'Sophia' },
    ],
  },
  {
    id: '19',
    title: 'The Role of AI in Healthcare',
    body: 'Artificial Intelligence is making significant strides in healthcare, from diagnostics to personalized treatment...',
    author: 'James Clark',
    date: '2024-09-15',
    comments: [
      { id: '1', text: 'AI’s potential in healthcare is incredible!', username: 'Charlotte' },
      { id: '2', text: 'What are the challenges in integrating AI into healthcare?', username: 'Benjamin' },
    ],
  },
  {
    id: '20',
    title: 'Trends in E-commerce for 2024',
    body: 'E-commerce continues to evolve with new trends, including personalization, automation, and innovative payment solutions...',
    author: 'Isabella Lee',
    date: '2024-10-01',
    comments: [
      { id: '1', text: 'Looking forward to these trends!', username: 'Lucas' },
      { id: '2', text: 'How will these trends impact small businesses?', username: 'Ava' },
    ],
  },
  {
    id: '21',
    title: 'The Importance of Data Privacy',
    body: 'Data privacy remains a crucial issue as data breaches become more common, emphasizing the need for robust security measures...',
    author: 'Ethan Turner',
    date: '2024-10-15',
    comments: [
      { id: '1', text: 'Timely and important discussion.', username: 'Zoe' },
      { id: '2', text: 'What steps can individuals take to protect their data?', username: 'Henry' },
    ],
  },
  {
    id: '22',
    title: 'The Role of Technology in Education',
    body: 'Technology is reshaping education by providing new learning tools and platforms that enhance the educational experience...',
    author: 'Ava Harris',
    date: '2024-11-01',
    comments: [
      { id: '1', text: 'Technology in education is a game-changer!', username: 'Ethan' },
      { id: '2', text: 'What are some effective tech tools for teachers?', username: 'Ella' },
    ],
  },
  {
    id: '23',
    title: 'The Impact of Artificial Intelligence on Healthcare',
    body: 'Artificial intelligence is transforming healthcare by improving diagnostics, personalizing treatment plans, and optimizing hospital operations...',
    author: 'Liam Smith',
    date: '2024-11-02',
    comments: [
      { id: '1', text: 'AI is revolutionizing patient care!', username: 'Sophia' },
      { id: '2', text: 'What are the ethical concerns of AI in healthcare?', username: 'Mason' },
    ],
  },
  {
    id: '24',
    title: 'Sustainable Living: Practical Tips for Reducing Your Carbon Footprint',
    body: 'Living sustainably involves making conscious choices to reduce your impact on the environment. Simple changes in daily habits can lead to significant reductions in carbon emissions...',
    author: 'Isabella Johnson',
    date: '2024-11-03',
    comments: [
      { id: '1', text: 'Great tips! I’m starting to implement these changes.', username: 'Olivia' },
      { id: '2', text: 'How can we make sustainable living more accessible?', username: 'Jackson' },
    ],
  },
  {
    id: '25',
    title: 'The Evolution of Social Media Marketing',
    body: 'Social media marketing has evolved from simple posts to complex strategies involving data analytics, influencer partnerships, and targeted advertising...',
    author: 'Noah Brown',
    date: '2024-11-04',
    comments: [
      { id: '1', text: 'Social media trends are changing so fast!', username: 'Ava' },
      { id: '2', text: 'What are the best practices for social media campaigns?', username: 'Lucas' },
    ],
  },
  {
    id: '26',
    title: 'The Future of Remote Work: Trends and Predictions',
    body: 'Remote work is here to stay, with advancements in technology making it easier than ever to work from anywhere. What does the future hold for remote work environments and policies?',
    author: 'Mia Williams',
    date: '2024-11-05',
    comments: [
      { id: '1', text: 'Remote work offers so much flexibility!', username: 'Ethan' },
      { id: '2', text: 'What are the challenges of managing remote teams?', username: 'Emily' },
    ],
  },
  {
    id: '27',
    title: 'Exploring the Wonders of Space Travel',
    body: 'Space travel has fascinated humanity for decades. With recent advancements, space tourism and exploration are becoming more attainable...',
    author: 'William Taylor',
    date: '2024-11-06',
    comments: [
      { id: '1', text: 'Space travel is incredible to think about!', username: 'James' },
      { id: '2', text: 'What are the risks involved in space tourism?', username: 'Aiden' },
    ],
  },
  {
    id: '28',
    title: 'The Benefits of a Plant-Based Diet',
    body: 'A plant-based diet can offer numerous health benefits, including improved cardiovascular health and better digestion. Learn how to transition to a plant-based lifestyle...',
    author: 'Charlotte Davis',
    date: '2024-11-07',
    comments: [
      { id: '1', text: 'I’ve been considering a plant-based diet for a while now.', username: 'Ella' },
      { id: '2', text: 'What are some good plant-based recipes?', username: 'Mia' },
    ],
  },
  {
    id: '29',
    title: 'The Role of Renewable Energy in Combating Climate Change',
    body: 'Renewable energy sources such as wind, solar, and hydropower are critical in reducing greenhouse gas emissions and combating climate change...',
    author: 'Benjamin Wilson',
    date: '2024-11-08',
    comments: [
      { id: '1', text: 'Renewable energy is essential for a sustainable future.', username: 'Sophia' },
      { id: '2', text: 'How can we increase the adoption of renewable energy?', username: 'Daniel' },
    ],
  },
  {
    id: '30',
    title: 'The Rise of E-Sports: What’s Next for Competitive Gaming?',
    body: 'E-sports have rapidly grown in popularity, with major tournaments and professional players gaining global recognition. What are the future trends in competitive gaming?',
    author: 'Amelia Martinez',
    date: '2024-11-09',
    comments: [
      { id: '1', text: 'E-sports are becoming more mainstream!', username: 'Jacob' },
      { id: '2', text: 'What are the key skills needed for a career in e-sports?', username: 'Harper' },
    ],
  },
  {
    id: '31',
    title: 'The Importance of Mental Health Awareness',
    body: 'Mental health awareness is crucial for reducing stigma and providing support to those in need. Learn about the importance of mental health and ways to promote awareness...',
    author: 'Ethan Anderson',
    date: '2024-11-10',
    comments: [
      { id: '1', text: 'Mental health should be a priority for everyone.', username: 'Lucas' },
      { id: '2', text: 'How can we better support mental health initiatives?', username: 'Isabella' },
    ],
  },
  {
    id: '32',
    title: 'Advancements in Quantum Computing',
    body: 'Quantum computing is a cutting-edge field that promises to revolutionize technology by solving complex problems beyond the reach of classical computers...',
    author: 'Grace Thomas',
    date: '2024-11-11',
    comments: [
      { id: '1', text: 'Quantum computing is fascinating but still complex.', username: 'Mason' },
      { id: '2', text: 'What are the practical applications of quantum computing?', username: 'Olivia' },
    ],
  },
  {
    id: '33',
    title: 'The Evolution of Digital Privacy Laws',
    body: 'Digital privacy laws are evolving to address new challenges in protecting personal information online. Discover how these laws are changing and what it means for individuals and businesses...',
    author: 'Oliver Lee',
    date: '2024-11-12',
    comments: [
      { id: '1', text: 'Digital privacy is more important than ever.', username: 'Emily' },
      { id: '2', text: 'How can individuals protect their digital privacy?', username: 'Noah' },
    ],
  },
  {
    id: '34',
    title: 'The Significance of Early Childhood Education',
    body: 'Early childhood education lays the foundation for lifelong learning and development. Explore the benefits and approaches to effective early education...',
    author: 'Ella Harris',
    date: '2024-11-13',
    comments: [
      { id: '1', text: 'Early education is key to a child’s development.', username: 'Jackson' },
      { id: '2', text: 'What are some effective early childhood education strategies?', username: 'Aiden' },
    ],
  },
  {
    id: '35',
    title: 'Understanding Cryptocurrency and Blockchain Technology',
    body: 'Cryptocurrency and blockchain technology are reshaping financial systems and digital transactions. Learn about their fundamentals and potential impacts on the economy...',
    author: 'Jacob Clark',
    date: '2024-11-14',
    comments: [
      { id: '1', text: 'Cryptocurrency is a game-changer in finance.', username: 'Harper' },
      { id: '2', text: 'What are the risks associated with blockchain technology?', username: 'Liam' },
    ],
  },
  {
    id: '36',
    title: 'The Influence of Pop Culture on Modern Society',
    body: 'Pop culture shapes and reflects societal values, trends, and behaviors. Discover how modern media and entertainment influence our lives and culture...',
    author: 'Aiden Wright',
    date: '2024-11-15',
    comments: [
      { id: '1', text: 'Pop culture has a huge impact on our daily lives.', username: 'Mia' },
      { id: '2', text: 'How does pop culture influence societal norms?', username: 'Sophia' },
    ],
  },
  {
    id: '37',
    title: 'The Role of Genetics in Personalized Medicine',
    body: 'Personalized medicine leverages genetic information to tailor treatments to individual patients. Explore how genetics are changing the landscape of medical care...',
    author: 'Chloe Johnson',
    date: '2024-11-16',
    comments: [
      { id: '1', text: 'Personalized medicine is the future of healthcare.', username: 'Olivia' },
      { id: '2', text: 'What are the ethical implications of genetic testing?', username: 'Ethan' },
    ],
  },
  {
    id: '39',
    title: 'The Benefits of Meditation and Mindfulness',
    body: 'Meditation and mindfulness practices can lead to improved mental health, increased focus, and reduced stress. Discover techniques and benefits of incorporating these practices into your daily routine...',
    author: 'Lily Roberts',
    date: '2024-11-18',
    comments: [
      { id: '1', text: 'Meditation has been a game-changer for my stress levels.', username: 'Lucas' },
      { id: '2', text: 'What are some beginner-friendly mindfulness exercises?', username: 'Ella' },
    ],
  },
  {
    id: '40',
    title: 'The Impact of Climate Change on Biodiversity',
    body: 'Climate change is affecting ecosystems and species worldwide, leading to shifts in biodiversity and habitat loss. Learn about the implications and strategies for conservation...',
    author: 'Ethan Baker',
    date: '2024-11-19',
    comments: [
      { id: '1', text: 'Climate change is having a significant impact on wildlife.', username: 'Ava' },
      { id: '2', text: 'What can we do to protect endangered species?', username: 'Mason' },
    ],
  },
  {
    id: '41',
    title: 'The Future of Autonomous Vehicles',
    body: 'Autonomous vehicles promise to revolutionize transportation with advances in technology. Explore the potential benefits, challenges, and future trends of self-driving cars...',
    author: 'James Wilson',
    date: '2024-11-20',
    comments: [
      { id: '1', text: 'Autonomous vehicles could make roads safer.', username: 'Olivia' },
      { id: '2', text: 'What are the current limitations of self-driving technology?', username: 'Emily' },
    ],
  },
  {
    id: '42',
    title: 'The Evolution of Online Education',
    body: 'Online education has grown rapidly, offering flexible learning opportunities and access to a wide range of subjects. Discover how online learning platforms are shaping the future of education...',
    author: 'Michael Davis',
    date: '2024-11-21',
    comments: [
      { id: '1', text: 'Online education has made learning more accessible.', username: 'Jackson' },
      { id: '2', text: 'What are the best platforms for online courses?', username: 'Mia' },
    ],
  },
  {
    id: '43',
    title: 'The Role of Data Analytics in Business Decision-Making',
    body: 'Data analytics provides valuable insights that help businesses make informed decisions, optimize operations, and improve customer experiences. Learn about the role and impact of data in modern business...',
    author: 'Aiden Thomas',
    date: '2024-11-22',
    comments: [
      { id: '1', text: 'Data analytics is crucial for business growth.', username: 'Sophia' },
      { id: '2', text: 'What are some key metrics to focus on for data analysis?', username: 'Liam' },
    ],
  },
  {
    id: '44',
    title: 'Exploring Innovations in Renewable Energy Technologies',
    body: 'Renewable energy technologies are evolving with new innovations that improve efficiency and reduce costs. Explore the latest advancements in solar, wind, and other renewable energy sources...',
    author: 'Charlotte Lee',
    date: '2024-11-23',
    comments: [
      { id: '1', text: 'Innovations in renewable energy are exciting.', username: 'Harper' },
      { id: '2', text: 'What are the most promising new technologies in this field?', username: 'Ella' },
    ],
  },
  {
    id: '45',
    title: 'The Rise of Digital Nomadism',
    body: 'Digital nomadism allows people to work remotely while traveling the world. Learn about the lifestyle, benefits, and challenges of becoming a digital nomad...',
    author: 'Benjamin Young',
    date: '2024-11-24',
    comments: [
      { id: '1', text: 'Being a digital nomad sounds amazing!', username: 'Olivia' },
      { id: '2', text: 'What are the best destinations for digital nomads?', username: 'Mason' },
    ],
  },
  {
    id: '46',
    title: 'The Importance of Cybersecurity in the Digital Age',
    body: 'With increasing digital threats, cybersecurity has become crucial for protecting sensitive information and maintaining privacy. Discover key strategies and best practices for cybersecurity...',
    author: 'Amelia Garcia',
    date: '2024-11-25',
    comments: [
      { id: '1', text: 'Cybersecurity is vital for online safety.', username: 'Aiden' },
      { id: '2', text: 'What are the latest trends in cybersecurity?', username: 'Emily' },
    ],
  },
  {
    id: '47',
    title: 'The Benefits of Learning a Second Language',
    body: 'Learning a second language offers cognitive, cultural, and career benefits. Explore the advantages and strategies for becoming bilingual or multilingual...',
    author: 'Oliver Martinez',
    date: '2024-11-26',
    comments: [
      { id: '1', text: 'Being bilingual has opened many doors for me.', username: 'Lucas' },
      { id: '2', text: 'What are the best methods for learning a new language?', username: 'Ava' },
    ],
  },
  {
    id: '48',
    title: 'The Growing Trend of Eco-Friendly Fashion',
    body: 'Eco-friendly fashion focuses on sustainability and ethical practices in the clothing industry. Discover the impact of this trend and how to make environmentally conscious fashion choices...',
    author: 'Grace Robinson',
    date: '2024-11-27',
    comments: [
      { id: '1', text: 'Eco-friendly fashion is becoming more popular.', username: 'Isabella' },
      { id: '2', text: 'What are some brands that prioritize sustainability?', username: 'Mia' },
    ],
  },
  {
    id: '49',
    title: 'The Impact of 5G Technology on Communication',
    body: '5G technology promises faster internet speeds and improved connectivity. Explore how 5G will impact communication, smart devices, and other technologies...',
    author: 'Daniel Green',
    date: '2024-11-28',
    comments: [
      { id: '1', text: '5G will change the way we connect.', username: 'Ethan' },
      { id: '2', text: 'What are the potential drawbacks of 5G technology?', username: 'Sophia' },
    ],
  },
  {
    id: '50',
    title: 'The Role of Artificial Intelligence in Art and Creativity',
    body: 'Artificial intelligence is making its mark on the art world, from generating new artworks to assisting artists in their creative processes. Explore how AI is influencing art and creativity...',
    author: 'Liam Harris',
    date: '2024-11-29',
    comments: [
      { id: '1', text: 'AI-generated art is fascinating!', username: 'Emily' },
      { id: '2', text: 'How does AI collaborate with human artists?', username: 'Ava' },
    ],
  },
  {
    id: '51',
    title: 'The Future of Electric Vehicles',
    body: 'Electric vehicles (EVs) are rapidly evolving with advancements in battery technology and charging infrastructure. Discover the future trends and challenges in the EV industry...',
    author: 'Olivia Moore',
    date: '2024-11-30',
    comments: [
      { id: '1', text: 'Electric vehicles are becoming more practical.', username: 'Mason' },
      { id: '2', text: 'What are the biggest hurdles for EV adoption?', username: 'Jackson' },
    ],
  },
  {
    id: '52',
    title: 'The Significance of Early Detection in Disease Prevention',
    body: 'Early detection of diseases can significantly improve treatment outcomes and increase survival rates. Learn about the importance of screening and preventive measures...',
    author: 'Noah Martinez',
    date: '2024-12-01',
    comments: [
      { id: '1', text: 'Early detection is crucial for many health conditions.', username: 'Liam' },
      { id: '2', text: 'What are the most effective screening methods?', username: 'Sophia' },
    ],
  },
  {
    id: '53',
    title: 'The Evolution of Music Streaming Services',
    body: 'Music streaming services have transformed how we access and enjoy music. Explore the evolution of these platforms and their impact on the music industry...',
    author: 'Aiden Wilson',
    date: '2024-12-02',
    comments: [
      { id: '1', text: 'Streaming has changed how we discover new music.', username: 'Harper' },
      { id: '2', text: 'What are the next big trends in music streaming?', username: 'Ella' },
    ],
  },
  {
    id: '54',
    title: 'The Benefits of Sustainable Agriculture',
    body: 'Sustainable agriculture focuses on farming practices that are environmentally friendly, socially responsible, and economically viable. Learn about its benefits and how it supports food security...',
    author: 'Charlotte Green',
    date: '2024-12-03',
    comments: [
      { id: '1', text: 'Sustainable agriculture is essential for a healthy planet.', username: 'Mia' },
      { id: '2', text: 'What are some examples of sustainable farming practices?', username: 'Daniel' },
    ],
  },
  {
    id: '55',
    title: 'The Impact of 3D Printing on Manufacturing',
    body: '3D printing is revolutionizing manufacturing by enabling rapid prototyping, customization, and on-demand production. Discover how this technology is transforming various industries...',
    author: 'James Robinson',
    date: '2024-12-04',
    comments: [
      { id: '1', text: '3D printing is changing the way products are made.', username: 'Aiden' },
      { id: '2', text: 'What are the limitations of 3D printing technology?', username: 'Emily' },
    ],
  },
  {
    id: '56',
    title: 'The Importance of Digital Literacy in the Modern World',
    body: 'Digital literacy is crucial for navigating the modern world, from using technology effectively to understanding online security. Explore the significance and ways to improve digital literacy...',
    author: 'Isabella Adams',
    date: '2024-12-05',
    comments: [
      { id: '1', text: 'Digital literacy is essential for everyone today.', username: 'Liam' },
      { id: '2', text: 'What are some resources for improving digital skills?', username: 'Harper' },
    ],
  },
  {
    id: '57',
    title: 'The Rise of Virtual Reality in Entertainment',
    body: 'Virtual reality is offering new dimensions in entertainment, from immersive gaming experiences to virtual concerts. Explore the potential and current applications of VR in the entertainment industry...',
    author: 'Ethan Harris',
    date: '2024-12-06',
    comments: [
      { id: '1', text: 'VR is making entertainment more immersive than ever.', username: 'Ava' },
      { id: '2', text: 'What are the future possibilities for VR technology?', username: 'Mason' },
    ],
  },
  {
    id: '58',
    title: 'The Role of Nutrition in Preventing Chronic Diseases',
    body: 'Proper nutrition plays a key role in preventing chronic diseases such as diabetes, heart disease, and obesity. Learn about the best dietary practices for maintaining long-term health...',
    author: 'Grace Anderson',
    date: '2024-12-07',
    comments: [
      { id: '1', text: 'Good nutrition is vital for disease prevention.', username: 'Emily' },
      { id: '2', text: 'What are the top foods for a healthy diet?', username: 'Sophia' },
    ],
  },
  {
    id: '59',
    title: 'The Influence of Technology on Modern Art',
    body: 'Technology has a significant impact on modern art, from digital creations to interactive installations. Explore how technological advancements are shaping artistic expression...',
    author: 'Oliver White',
    date: '2024-12-08',
    comments: [
      { id: '1', text: 'Technology is expanding the boundaries of art.', username: 'Ella' },
      { id: '2', text: 'What are some notable examples of tech-driven art?', username: 'Liam' },
    ],
  },
  {
    id: '60',
    title: 'The Future of Food Technology and Innovation',
    body: 'Food technology is evolving with innovations such as lab-grown meat, automated kitchens, and new preservation methods. Discover how these advancements are changing the food industry...',
    author: 'Chloe Harris',
    date: '2024-12-09',
    comments: [
      { id: '1', text: 'Food technology is advancing rapidly.', username: 'Isabella' },
      { id: '2', text: 'What are the benefits of lab-grown meat?', username: 'Jackson' },
    ],
  }

  
];

export default posts;