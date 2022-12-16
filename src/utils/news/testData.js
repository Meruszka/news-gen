const testData = [
  {
    source: {
      id: 'engadget',
      name: 'Engadget'
    },
    author: 'Billy Steele',
    title: "Spotify's 2022 Wrapped is a music-focused personality test",
    description:
      "It's that time of year again. Streaming services are eager to tell you which artists, songs and albums you listened to the most in 2022. While a few have already rolled out their bits of annual nostalgia, Spotify's 2022 installment of Wrapped debuts today. Th…",
    url: 'https://www.engadget.com/spotify-wrapped-2022-130037719.html',
    urlToImage:
      'https://s.yimg.com/os/creatr-uploaded-images/2022-11/ba8ad7d0-701c-11ed-bc7f-7a91987c5278',
    publishedAt: '2022-11-30T13:00:37Z',
    content:
      "It's that time of year again. Streaming services are eager to tell you which artists, songs and albums you listened to the most in 2022. While a few have already rolled out their bits of annual nosta… [+2088 chars]"
  },
  {
    source: {
      id: null,
      name: 'Lifehacker.com'
    },
    author: 'Lindsey Ellefson',
    title: 'You Can Test a Couch’s Stain Resistance Before You Even Buy It',
    description:
      'If you’ve ever been furniture shopping, you might know that you can take samples of upholstery fabric you’re considering home with you before you make a final decision on whether to buy. Much like you would with paint samples from a hardware store, these swat…',
    url: 'https://lifehacker.com/you-can-test-a-couch-s-stain-resistance-before-you-even-1849828050',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/56396c02e9245543a104c239f5ca0c50.jpg',
    publishedAt: '2022-11-28T21:30:00Z',
    content:
      'If youve ever been furniture shopping, you might know that you can take samples of upholstery fabric youre considering home with youbefore you make a final decision on whether to buy. Much like you w… [+1619 chars]'
  },
  {
    source: {
      id: 'engadget',
      name: 'Engadget'
    },
    author: 'Jon Fingas',
    title:
      'Facebook failed to stop test ads from threatening midterm election workers',
    description:
      "Meta's election integrity efforts on Facebook may not have been as robust as claimed. Researchers at New York University's Cybersecurity for Democracy and the watchdog Global Witness have revealed that Facebook's automatic moderation system approved 15 out of…",
    url: 'https://www.engadget.com/facebook-failed-test-of-ads-threatening-election-workers-215001463.html',
    urlToImage:
      'https://s.yimg.com/os/creatr-uploaded-images/2022-12/f7716b80-71b8-11ed-bf7c-f78c3abe1409',
    publishedAt: '2022-12-01T21:50:01Z',
    content:
      "Meta's election integrity efforts on Facebook may not have been as robust as claimed. Researchers at New York University's Cybersecurity for Democracy and the watchdog Global Witness have revealed th… [+1738 chars]"
  },
  {
    source: {
      id: 'the-verge',
      name: 'The Verge'
    },
    author: 'Sheena Vasani',
    title:
      'Comcast’s symmetrical multi-gigabit internet test is a preview of next year’s ‘10G’ rollout',
    description:
      'Comcast successfully tested symmetrical multi-gigabit speeds on its live network in Philadelphia. The company plans on rolling out “10G” DOCSIS 4.0 services to customers in the second half of 2023.',
    url: 'https://www.theverge.com/2022/12/12/23505779/comcast-multi-gigabit-10g-docsis-40-cable-fiber-isp',
    urlToImage:
      'https://cdn.vox-cdn.com/thumbor/s8U3lY9Gkd_7vZxqZFq2DNxia_E=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/11369881/acastro_180525_1777_comcast_0002.jpg',
    publishedAt: '2022-12-12T23:29:40Z',
    content:
      'Comcasts symmetrical multi-gigabit internet test is a preview of next years 10G rollout\r\nComcasts symmetrical multi-gigabit internet test is a preview of next years 10G rollout\r\n / Comcast says 10G-e… [+3078 chars]'
  },
  {
    source: {
      id: 'the-verge',
      name: 'The Verge'
    },
    author: 'Jess Weatherbed',
    title: 'Verizon will now let you test drive its 5G network for free',
    description:
      'Verizon has introduced a new early access program that allows potential customers to try out its nationwide Ultra Wideband 5G network on compatible phones for 30 days.',
    url: 'https://www.theverge.com/2022/11/18/23466363/verizon-5g-test-drive-trial-esim-free',
    urlToImage:
      'https://cdn.vox-cdn.com/thumbor/eqH_gBdLCHjJc1Vfy2u3oTNmpIc=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23988706/acastro_STK066_02.jpg',
    publishedAt: '2022-11-18T18:23:55Z',
    content:
      'Verizon will now let you test drive its 5G network for free\r\nVerizon will now let you test drive its 5G network for free\r\n / The program makes use of eSIM flexibility, providing 30 days of access to … [+1588 chars]'
  },
  {
    source: {
      id: null,
      name: 'Lifehacker.com'
    },
    author: 'Jake Peterson',
    title: 'Every Samsung Phone Has a Hidden Chihuahua for Some Reason',
    description:
      'I’m not trying to bullshit you. If you have a Samsung Galaxy—virtually any one of them—then you have a hidden chihuahua on your phone. You would never stumble upon it, which is why you’ve likely never seen nor known about it, but it’s there, lurking, ready to…',
    url: 'https://lifehacker.com/every-samsung-phone-has-a-hidden-chihuahua-for-some-rea-1849812864',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c2c0725a5bd599444d67d2c1a29ce721.jpg',
    publishedAt: '2022-11-22T19:30:00Z',
    content:
      'Im not trying to bullshit you. If you have a Samsung Galaxyvirtually any one of themthen you have a hidden chihuahua on your phone. You would never stumble upon it, which is why youve likely never se… [+2037 chars]'
  },
  {
    source: {
      id: 'the-verge',
      name: 'The Verge'
    },
    author: 'Umar Shakir',
    title:
      'Google is beta testing digital state ID cards in its Android Wallet app',
    description:
      'Android users now have the option to add a Maryland state ID to Google Wallet, if enrolled in a beta test group. It follows Apple’s iPhone digital ID feature that started rolling out this year.',
    url: 'https://www.theverge.com/2022/12/15/23510774/google-digital-state-id-cards-android-13-wallet-app-maryland',
    urlToImage:
      'https://cdn.vox-cdn.com/thumbor/ie95Jy4G844XeaK8Ik8uxSy9nXM=/0x0:2000x1125/1200x628/filters:focal(1000x563:1001x564)/cdn.vox-cdn.com/uploads/chorus_asset/file/24293397/lcimg_ec86a102_6fdb_4e68_ac33_c3474a2f1bbd.jpg',
    publishedAt: '2022-12-15T20:46:33Z',
    content:
      'Google is beta testing digital state ID cards in its Android Wallet app\r\nGoogle is beta testing digital state ID cards in its Android Wallet app\r\n / Android users with Maryland state IDs can now add … [+2242 chars]'
  },
  {
    source: {
      id: 'engadget',
      name: 'Engadget'
    },
    author: 'Kris Holt',
    title:
      'Cadillac says its new electric race car is almost ready for 24 Hours of Daytona',
    description:
      'Cadillac Racing says its first electric\r\n race car is almost ready for the 24 Hours of Daytona event in January after passing critical testing and development milestones. Since July, the V-LMDh has gone through nearly 12,000 miles (19,000 km) of on-track test…',
    url: 'https://www.engadget.com/cadillac-racing-electric-car-24-hours-daytona-competition-210402542.html',
    urlToImage:
      'https://s.yimg.com/os/creatr-uploaded-images/2022-12/401a8910-71ba-11ed-8fff-5ac303a9ad56',
    publishedAt: '2022-12-01T21:04:02Z',
    content:
      'Cadillac Racing says its first electric\r\n race car is almost ready for the 24 Hours of Daytona event in January after passing critical testing and development milestones. Since July, the V-LMDh has g… [+1122 chars]'
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com'
    },
    author: 'Thomas Germain',
    title:
      "Apple Says Your iPhone's Usage Data is Anonymous, but New Tests Say That's Not True",
    description:
      'A new test of how Apple gathers usage data from iPhones has found that the company collects personally identifiable information while explicitly promising not to. Read more...',
    url: 'https://gizmodo.com/apple-iphone-privacy-dsid-analytics-personal-data-test-1849807619',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c37a50d6f96ffab8b17a6837820ea96d.jpg',
    publishedAt: '2022-11-21T15:47:00Z',
    content:
      'A new test of how Apple gathers usage data from iPhones has found that the company collects personally identifiable information while explicitly promising not to. \r\nThe privacy policy governing Apple… [+5433 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title: 'Take Five: Black Friday test - Reuters.com',
    description:
      'The most important day for U.S. retailers is here and questions are rife on whether king dollar is set to lose its crown.',
    url: 'https://www.reuters.com/business/take-five/global-markets-themes-graphic-2022-11-18/',
    urlToImage:
      'https://www.reuters.com/resizer/qFP9Bzc3_uCam7RIykfk1RUfvp8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BYL7ESQPMFMSNNVJSVCYKYTPH4.jpg',
    publishedAt: '2022-11-18T09:05:00Z',
    content:
      '(Reuters) - The most important day for U.S. retailers is here and questions are rife on whether king dollar is set to lose its crown.\r\nGlobal purchasing managers data will shine a light on the health… [+4577 chars]'
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'https://www.facebook.com/bbcnews',
    title: "North Korea's leader Kim reveals his daughter in rare appearance",
    description:
      "North Korea's leader stood hand-in-hand with the girl during a ballistic missile test on Friday.",
    url: 'https://www.bbc.co.uk/news/world-asia-63685497',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/ED75/production/_127698706_2bfc93c84f11f25d1219b4d4b936d4385db0b4eb0_0_4252_28164252x2816.jpg',
    publishedAt: '2022-11-19T04:32:10Z',
    content:
      "North Korea's leader Kim Jong-un has appeared with his young daughter in public for the first time, confirming long-rumoured reports of her existence.\r\nThe girl, believed to be named Kim Chu-ae, join… [+2108 chars]"
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: null,
    title: 'Using artificial intelligence to spot breast cancer',
    description:
      'An Indian company has developed a cheap, non-invasive test for breast cancer that uses thermal imaging and AI.',
    url: 'https://www.bbc.co.uk/news/av/stories-63755128',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/770D/production/_127777403_p0djqfvy.jpg',
    publishedAt: '2022-11-26T00:13:52Z',
    content:
      'Breast cancer is an increasing problem in low and middle-income countries, but screening programmes for early detection are rare. \r\nA company in India has developed a cheap, non-invasive test that us… [+432 chars]'
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'https://www.facebook.com/bbcnews',
    title: 'Missing daughter reunited with family after 51 years',
    description:
      "A DNA test and an ancestry website have helped end a family's agonising search for answers.",
    url: 'https://www.bbc.co.uk/news/world-us-canada-63797314',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/13D8B/production/_127819218_highsmithfamily.jpg',
    publishedAt: '2022-11-29T15:43:34Z',
    content:
      'A DNA test has reunited a Texas woman with her long-lost family and ended a mystery that lasted over 50 years. \r\nMelissa Highsmith, 53, was abducted by a babysitter from her home in Fort Worth in 197… [+2846 chars]'
  },
  {
    source: {
      id: 'wired',
      name: 'Wired'
    },
    author: 'Scott Gilbertson',
    title: "Benchmade Three-Piece Chef's Knife Set Review: Light and Sharp",
    description:
      "The pocketknife brand takes on the kitchen with this surprisingly excellent chef's knife set.",
    url: 'https://www.wired.com/review/benchmade-three-piece-chef-knife-set/',
    urlToImage:
      'https://media.wired.com/photos/6372b5f58cea9c334692604b/191:100/w_1280,c_limit/Benchmade-3-Piece-Knife-Set-Gear.jpg',
    publishedAt: '2022-11-15T14:00:00Z',
    content:
      'A good knife is more than a tool; its an extension of your hand. When the Benchmade set arrived, I immediately grabbed the utility knife (which is what I would call a petty knife), and about 10 minut… [+3249 chars]'
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: null,
    title:
      'Pakistan v England: Rawalpindi win fully vindicates Ben Stokes & Brendon McCullum',
    description:
      "If there were any lingering doubts, England's first-Test win against Pakistan fully vindicates the philosophy of Ben Stokes and Brendon McCullum, writes Stephan Shemilt",
    url: 'https://www.bbc.co.uk/sport/cricket/63856468',
    urlToImage:
      'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5F27/production/_127895342_gettyimages-1245378599.jpg',
    publishedAt: '2022-12-05T16:58:44Z',
    content:
      "Jack Leach trapped Naseem Shah lbw to leave Pakistan 268 all out and seal England's win\r\nAdmit it. You had doubts, didn't you?\r\nMaybe they came when England were 141 all out in the first Test against… [+5956 chars]"
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'https://www.facebook.com/bbcnews',
    title:
      'Theranos: Silicon Valley holds breath for Elizabeth Holmes sentencing',
    description:
      'The case is seen as a test. Does corporate fraud in tech end with a slap on the wrist, or prison time?',
    url: 'https://www.bbc.co.uk/news/technology-63672103',
    urlToImage:
      'https://ichef.bbci.co.uk/news/1024/branded_news/36DF/production/_127674041_069a282d8493172f4312763a3cdb6b864e99d8310_588_5472_30781000x563.jpg',
    publishedAt: '2022-11-18T13:32:51Z',
    content:
      "Theranos founder Elizabeth Holmes was found guilty of defrauding investors 10 months ago. \r\nHer company was once valued at $9bn (£7.5bn). It's now a byword for corporate fraud. \r\nHolmes, 38, claimed … [+3711 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title: 'Skipper Montoya back for Argentina test against Scotland - Reuters',
    description:
      'Julian Montoya returns to captain Argentina in one of four changes for their last test of the year as they take on Scotland at Murrayfield in the third match of their November tour of Britain.',
    url: 'https://www.reuters.com/lifestyle/sports/skipper-montoya-back-argentina-test-against-scotland-2022-11-17/',
    urlToImage:
      'https://www.reuters.com/resizer/If5T3i4xeI9rNZ2z93oPNNZ_jdA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OQP7HUS7PFO4FHZLECGQSNQRDY.jpg',
    publishedAt: '2022-11-17T13:38:00Z',
    content:
      'Nov 17 (Reuters) - Julian Montoya returns to captain Argentina in one of four changes for their last test of the year as they take on Scotland at Murrayfield in the third match of their November tour… [+1539 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: 'Josh Smith',
    title:
      "North Korea's Kim reveals daughter at ballistic missile test - Reuters.com",
    description:
      "North Korean leader Kim Jong Un revealed his daughter to the world for the first time on Saturday in striking photos showing the pair hand-in-hand inspecting the launch of the nuclear-armed country's largest ballistic missile the day before.",
    url: 'https://www.reuters.com/article/northkorea-missiles-kimjongun-daughter-idUSKBN2S8222',
    urlToImage:
      'https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800',
    publishedAt: '2022-11-18T23:04:00Z',
    content:
      'SEOUL (Reuters) - North Korean leader Kim Jong Un revealed his daughter to the world for the first time on Saturday in striking photos showing the pair hand-in-hand inspecting the launch of the nucle… [+2718 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title: "Mexico's Ochoa in high spirits ahead of Messi test - Reuters.com",
    description:
      'Mexico goalkeeper Guillermo Ochoa says he feels very motivated ahead of Saturday\'s World Cup match against Argentina, when he will come up against the "magic" of Lionel Messi.',
    url: 'https://www.reuters.com/lifestyle/sports/mexicos-ochoa-high-spirits-ahead-messi-test-2022-11-24/',
    urlToImage:
      'https://www.reuters.com/resizer/SdseTD5r02pQGejRqAm4-LetcUc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H77C3THTFFJ5PL6CFUDYXKDF4Y.jpg',
    publishedAt: '2022-11-24T19:43:00Z',
    content:
      'Nov 24 (Reuters) - Mexico goalkeeper Guillermo Ochoa says he feels very motivated ahead of Saturday\'s World Cup match against Argentina, when he will come up against the "magic" of Lionel Messi.\r\nOch… [+1242 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title: 'England beat Pakistan by 74 runs in Rawalpindi test - Reuters',
    description:
      'England beat Pakistan by 74 runs in the opening test in Rawalpindi in fading light on Monday, to take a 1-0 lead in the three-match series.',
    url: 'https://www.reuters.com/lifestyle/sports/england-beat-pakistan-by-74-runs-rawalpindi-test-2022-12-05/',
    urlToImage:
      'https://www.reuters.com/resizer/23HKOU2nOzB6cFkH4PU7ojMFiIY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HR2OCR4325I4PJYSFOLXHG24RM.jpg',
    publishedAt: '2022-12-05T12:00:00Z',
    content:
      'RAWALPINDI, Pakistan, Dec 5 (Reuters) - England beat Pakistan by 74 runs in the opening test in Rawalpindi in fading light on Monday, to take a 1-0 lead in the three-match series.\r\nEngland amassed 65… [+572 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title: "England's 'Bazball' faces first away test in Pakistan - Reuters",
    description:
      "England's first test tour of Pakistan in 17 years will also be the first chance to see how their 'Bazball' brand of cricket fares away from home, and they signalled their attacking intent by picking Liam Livingstone for the opening match in Rawalpindi.",
    url: 'https://www.reuters.com/lifestyle/sports/englands-bazball-faces-first-away-test-pakistan-2022-11-30/',
    urlToImage:
      'https://www.reuters.com/resizer/_LFPS-krxoLAGN0EaIYwQRMgQLo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SWNS6F22SJOO3H3BY5NBNC3P64.jpg',
    publishedAt: '2022-11-30T06:41:00Z',
    content:
      "Nov 30 (Reuters) - England's first test tour of Pakistan in 17 years will also be the first chance to see how their 'Bazball' brand of cricket fares away from home, and they signalled their attacking… [+2133 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'India captain Rohit to miss first test against Bangladesh - Reuters',
    description:
      'India captain Rohit Sharma has been ruled out of the first of two tests this month against Bangladesh, the board of control for Cricket in India (BCCI) said on Sunday.',
    url: 'https://www.reuters.com/lifestyle/sports/india-captain-rohit-miss-first-test-against-bangladesh-2022-12-12/',
    urlToImage:
      'https://www.reuters.com/resizer/6_j1lgfiHu_zHSaySpu8gK82PuU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FOELD7H7AVNMTIYK5BIXOKEFZI.jpg',
    publishedAt: '2022-12-12T01:56:00Z',
    content:
      'Dec 11 (Reuters) - India captain Rohit Sharma has been ruled out of the first of two tests this month against Bangladesh, the board of control for Cricket in India (BCCI) said on Sunday.\r\nRohit did n… [+899 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      "North Korea's Kim reveals daughter at ballistic missile test - Reuters.com",
    description:
      'North Korean leader Kim Jong Un revealed his daughter to the world for the first time on Saturday in striking photos showing the pair hand-in-hand <a href="/world/asia-pacific/north-koreas-kim-says-launch-new-icbm-calls-more-strategic-weapons-kcna-2022-11-18/…',
    url: 'https://www.reuters.com/world/asia-pacific/north-koreas-kim-reveals-daughter-ballistic-missile-test-2022-11-18/',
    urlToImage:
      'https://www.reuters.com/resizer/5PtuzcZIFOpYDggAVKMX0NM2NQI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BHQICOTMB5FUZMQTOCN63JSQPA.JPG',
    publishedAt: '2022-11-18T23:04:00Z',
    content:
      'SEOUL, Nov 19 (Reuters) - North Korean leader Kim Jong Un revealed his daughter to the world for the first time on Saturday in striking photos showing the pair hand-in-hand inspecting the launch of t… [+2853 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title: 'Joseph rings the changes for Japan in French test - Reuters.com',
    description:
      "Japan coach Jamie Joseph has rung the changes for his side's final autumn international against France in Toulouse on Saturday, selecting a virtually new backline that includes flyhalf Seungsin Lee and scrumhalf Naoto Saito.",
    url: 'https://www.reuters.com/lifestyle/sports/joseph-rings-changes-japan-french-test-2022-11-18/',
    urlToImage:
      'https://www.reuters.com/resizer/H1v0uNOZPU1UK3nmBddA3DMqyNw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VGPDIKNUMZK3ZDJI4QOE475VA4.jpg',
    publishedAt: '2022-11-18T14:11:00Z',
    content:
      "Nov 18 (Reuters) - Japan coach Jamie Joseph has rung the changes for his side's final autumn international against France in Toulouse on Saturday, selecting a virtually new backline that includes fly… [+2092 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Poland face tricky test against confident Saudi Arabia - Reuters.com',
    description:
      'Contrasting moods will accompany Poland and Saudi Arabia into their World Cup Group C clash on Saturday, with all the pressure on the Poles after they started with a disappointing goalless draw while the Saudis shocked Argentina.',
    url: 'https://www.reuters.com/lifestyle/sports/poland-face-tricky-test-against-confident-saudi-arabia-2022-11-24/',
    urlToImage:
      'https://www.reuters.com/resizer/VXkNKbAfvQhqU-WrBYyHJWYAJ5s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AOBV4EH7WJP6TH7FR52GYQGGLA.jpg',
    publishedAt: '2022-11-24T14:19:00Z',
    content:
      'DOHA, Nov 24 (Reuters) - Contrasting moods will accompany Poland and Saudi Arabia into their World Cup Group C clash on Saturday, with all the pressure on the Poles after they started with a disappoi… [+1702 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      "Nigeria's Tinubu says presidential vote to test democratic gains - Reuters",
    description:
      'Ruling party presidential candidate <a href="/world/africa/tinubu-ex-governor-lagos-pole-position-nigerian-presidency-2022-06-08/">Bola Tinubu</a> said on Monday Nigeria\'s February election would be a significant step in consolidating democratic gains at a ti…',
    url: 'https://www.reuters.com/world/nigerias-tinubu-says-presidential-vote-test-democratic-gains-2022-12-05/',
    urlToImage:
      'https://www.reuters.com/resizer/oVpGhWcXgZ3kY1El3fKWaanRWyc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2MB5NYDCPFPFDD2XKYHYT457VY.jpg',
    publishedAt: '2022-12-05T16:06:00Z',
    content:
      "LAGOS, Dec 5 (Reuters) - Ruling party presidential candidate Bola Tinubu said on Monday Nigeria's February election would be a significant step in consolidating democratic gains at a time when some o… [+2081 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title: "'Terrifying' Brazil near full-strength for Croatia test - Reuters",
    description:
      'Croatia coach Zlatko Dalic described their World Cup quarter-final opponents Brazil as "terrifying" after the five-times champions thrashed South Korea <a href="/lifestyle/sports/imperious-brazil-smash-koreans-4-1-reach-quarters-2022-12-05/">4-1</a> to send a…',
    url: 'https://www.reuters.com/lifestyle/sports/terrifying-brazil-near-full-strength-croatia-test-2022-12-07/',
    urlToImage:
      'https://www.reuters.com/resizer/hurU1C5vSTeYMIMeH-JYbZKj-jE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NYMCCJQB3RLU7CMZK5HHF6F5CM.jpg',
    publishedAt: '2022-12-07T10:41:00Z',
    content:
      'DOHA, Dec 7 (Reuters) - Croatia coach Zlatko Dalic described their World Cup quarter-final opponents Brazil as "terrifying" after the five-times champions thrashed South Korea 4-1 to send a clear mes… [+2428 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Cricket-White-ball juggernaut England redefining test cricket too - Reuters',
    description:
      'England won the T20 World Cup in Australia to firmly establish themselves as the best white-ball team of the era and set out to revolutionise test cricket with an equally bold approach to the longest format of the game.',
    url: 'https://www.reuters.com/lifestyle/sports/cricket-white-ball-juggernaut-england-redefining-test-cricket-too-2022-12-15/',
    urlToImage:
      'https://www.reuters.com/resizer/b2SFc_FjT2uhfk4K4Jv3t2niGV4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/542H5CEWGNJYZOCYFLKP2OEBGU.jpg',
    publishedAt: '2022-12-15T02:08:00Z',
    content:
      'NEW DELHI, Dec 15 (Reuters) - England won the T20 World Cup in Australia to firmly establish themselves as the best white-ball team of the era and set out to revolutionise test cricket with an equall… [+3512 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title: 'Kuldeep, Siraj put India on top in Chittagong test - Reuters',
    description:
      'Spinner Kuldeep Yadav and seamer Mohammed Siraj wreaked havoc with the ball sharing seven Bangladesh wickets between them to put India in the box seat in the opening test in Chittagong on Thursday.',
    url: 'https://www.reuters.com/lifestyle/sports/kuldeep-siraj-put-india-top-chittagong-test-2022-12-15/',
    urlToImage:
      'https://www.reuters.com/resizer/ZJ75utQGFePo42TjwtqH0-cAXfM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HZI2RZ64QJL4BCQWGGLFHBF5QA.jpg',
    publishedAt: '2022-12-15T11:16:00Z',
    content:
      'Dec 15 (Reuters) - Spinner Kuldeep Yadav and seamer Mohammed Siraj wreaked havoc with the ball sharing seven Bangladesh wickets between them to put India in the box seat in the opening test in Chitta… [+2082 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Verna Yu',
    title: 'China’s Covid fatalities test commitment to relaxing restrictions',
    description:
      'Rapidly rising cases and three deaths in Beijing push back hopes of an end to strict quarantine rules and snap lockdownsChina’s first Covid-19 fatalities in six months and a sharp rise in reported cases are testing the government’s recent commitment to ease r…',
    url: 'https://www.theguardian.com/world/2022/nov/21/chinas-covid-fatalities-test-commitment-to-relaxing-restrictions',
    urlToImage:
      'https://i.guim.co.uk/img/media/331b63b18ce3e9581ef78e9240f26bab8259569d/0_121_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=869fd2dc0c07275b4e42181f58e6a0cf',
    publishedAt: '2022-11-21T16:32:39Z',
    content:
      'Chinas first Covid-19 fatalities in six months and a sharp rise in reported cases are testing the governments recent commitment to ease restrictions of its stringent Covid curbs.\r\nBeijing reported th… [+3843 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Tanya Aldred',
    title: 'Pakistan v England: first men’s cricket Test, day one – live',
    description:
      '<ul><li>Over-by-over updates from Rawalpindi (5am UK time)</li><li>Get in touch! Email Tanya or tweet her @tjaldred</li></ul>England: Zak Crawley, Ben Duckett, Ollie Pope (wicketkeepr), Joe Root, Harry Brook, Ben Stokes (captain), Will Jacks, Liam Livingstone…',
    url: 'https://www.theguardian.com/sport/live/2022/dec/01/pakistan-v-england-first-mens-cricket-test-day-one-live',
    urlToImage:
      'https://i.guim.co.uk/img/media/38af94d1c51313eaccea42ac6f938cb02601fdfb/0_704_7212_4328/master/7212.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=6a6d6695cd0b6c31b267212953c31903',
    publishedAt: '2022-12-01T04:38:53Z',
    content:
      'Show key events onlyPlease turn on JavaScript to use this feature\r\nTime to put the kettle on, while Jos Buttler, Kumar Sangakkara and Ian Ward discuss the Test with a heavily-decorated Christmas tree… [+3392 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Tanya Aldred (now) and Daniel Harris (later)',
    title: 'Pakistan v England: first Test, day two – live',
    description:
      '<ul><li>The Spin: sign up to receive our free weekly newsletter</li><li>And feel free to mail Tanya or tweet her about the cricket</li></ul>“Will you have eggs with your chips madam?” Yes please, plus mayonnaise, caviar, chocolate cake and trifle. And while I…',
    url: 'https://www.theguardian.com/sport/live/2022/dec/02/pakistan-v-england-first-test-day-two-live-cricket',
    urlToImage:
      'https://i.guim.co.uk/img/media/710b52c808d05db09a90c98c72aa491aed6de091/0_102_3430_2058/master/3430.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=49f8575f4c83f26357df7c414211d67c',
    publishedAt: '2022-12-02T04:39:29Z',
    content:
      'On Sky, theyve just run highlights of the last day of Old Trafford 2001, followed by highlights of yesterday. Crazy days.\r\nJust to recap yesterdays numbers:\r\nMost runs scored on the first day of a Te… [+1282 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Tanya Aldred (now) and Daniel Harris (later)',
    title: 'Pakistan v England: second Test, day one – live',
    description:
      '<ul><li>Updates from the first day’s play in Multan</li><li>Get in touch: you can contact Tanya by email or Twitter</li></ul>There’s a touch of fog in the air but they start on time!Pakistan: Imam-ul-Haq, Abdullah Shafique, Babar Azam (capt), Saud Shakeel, Mo…',
    url: 'https://www.theguardian.com/sport/live/2022/dec/09/pakistan-v-england-second-test-day-one-live',
    urlToImage:
      'https://i.guim.co.uk/img/media/7af709f63687005224c915f1e3cb812f976a5f32/0_109_6016_3610/master/6016.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=aa992e8d38fce1032d620c69a2f88465',
    publishedAt: '2022-12-09T05:00:27Z',
    content:
      'Show key events onlyPlease turn on JavaScript to use this feature\r\n2nd over: England 6-0 (Crawley 0, Duckett 5) Duckett tickles Mohammad Ali behind and picks up a squeeze of a boundary. Some smart fi… [+2861 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Guardian sport',
    title: 'Kane Williamson stands down as New Zealand Test cricket captain',
    description:
      '<ul><li>Tim Southee installed as new skipper for tour of Pakistan</li><li>Williamson to remain in Black Caps team as specialist Test batter </li></ul>Kane Williamson has stepped down as captain of New Zealand’s Test team with Tim Southee to replace the 32-yea…',
    url: 'https://www.theguardian.com/sport/2022/dec/15/kane-williamson-stands-down-as-new-zealand-test-cricket-captain',
    urlToImage:
      'https://i.guim.co.uk/img/media/6410d01cd6188872f3a9ecb402d46dfaa33cbbe5/0_53_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=99084f3d40a64c380e373e06f89351ad',
    publishedAt: '2022-12-14T22:39:15Z',
    content:
      'Kane Williamson has stepped down as captain of New Zealands Test team with Tim Southee to replace the 32-year-old in a move that brings to an end a hugely successful stint in charge of the Black Caps… [+2214 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Tanya Aldred (now) and Tim de Lisle (later)',
    title: 'Pakistan v England: second Test day two – live',
    description:
      '<ul><li>Updates from the second day’s play in Multan</li><li>Get in touch: contact Tanya by email or on Twitter</li></ul>29th over: Pakistan 107-2(Shakeel 32 Babar 63) There’s a haze to the Multan air but Jimmy Anderson has the ball regardless. Oh my tired ey…',
    url: 'https://www.theguardian.com/sport/live/2022/dec/10/pakistan-v-england-second-test-day-two-live',
    urlToImage:
      'https://i.guim.co.uk/img/media/9be8502f61e3b61b8ed36c3fd09ba69b6a1d8f5d/0_103_2892_1735/master/2892.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=de237429faab69618fff9f13a428a452',
    publishedAt: '2022-12-10T04:50:28Z',
    content:
      '32nd over: Pakistan 133-2 (Shakeel 47, Babar 71) Andersons over starts with a mix-up between Shakeel and Babar, Babar sends Shakeel back and, if Crawley had hit the stumps from square leg, Shakeel wo… [+1631 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Daniel Gallan (now) and James Wallace (later)',
    title: 'Pakistan v England: second Test, day three – live',
    description:
      '<ul><li>Updates from the third day of play in Multan</li><li>Get in touch: contact Daniel by email or on Twitter</li></ul>51st over: England 208-5 (Brook 74, Stokes 22) There’s a surprise. It’s not spin from both ends with Mohammad Ali bowling the second over…',
    url: 'https://www.theguardian.com/sport/live/2022/dec/11/pakistan-v-england-second-test-day-three-live',
    urlToImage:
      'https://i.guim.co.uk/img/media/9c7ed725e730272aa48494c2e937b50e57dfdb19/0_69_5070_3042/master/5070.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=1905f22751c008580e64b922fcbb9d7d',
    publishedAt: '2022-12-11T04:53:32Z',
    content:
      'Show key events onlyPlease turn on JavaScript to use this feature\r\n54th over: England 227-5 (Brook 84, Stokes 30) Thats the shot of the morning as Brook skips down the track, meets Abrars flighted ba… [+3857 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Gerard Meagher',
    title: 'England must harness momentum from rescue act into Springboks test',
    description:
      'Eddie Jones will hope for Marcus Smith to trust his instinct which sparked England’s late comeback against New ZealandAlways leave them wanting more. For a fixture that comes around every four years or so, the anticipation for the next instalment of England v…',
    url: 'https://www.theguardian.com/sport/2022/nov/20/england-must-harness-momentum-from-rescue-act-into-springboks-test',
    urlToImage:
      'https://i.guim.co.uk/img/media/27c0501affa491569827a7f0f100ebad25cb0a45/0_30_2824_1694/master/2824.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1a4719eb817057ba923b78036daa7beb',
    publishedAt: '2022-11-20T18:00:32Z',
    content:
      'Always leave them wanting more. For a fixture that comes around every four years or so, the anticipation for the next instalment of England versus New Zealand is already palpable. Marcus Smiths decis… [+5134 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'James Wallace',
    title: 'Pakistan v England: first Test, day four – live',
    description:
      '<ul><li>Play resumes at Rawalpindi Cricket Stadium at 5am GMT</li><li>Selling the Hundred would require offer of ‘a few billion’</li><li>Share your thoughts with James via email or on Twitter</li></ul>Now, the first thing to mention is that I’ve been caught o…',
    url: 'https://www.theguardian.com/sport/live/2022/dec/04/pakistan-v-england-first-test-day-four-live',
    urlToImage:
      'https://i.guim.co.uk/img/media/566fe5795a03c06e6fb0d405b528d0ae45eddabf/0_0_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=ebaffac05f866d309be64a107789d8f6',
    publishedAt: '2022-12-04T05:05:38Z',
    content:
      'Show key events onlyPlease turn on JavaScript to use this feature\r\n144 over: Pakistan 542-7 (Salman 45, Mahmood 5) Stokes and Jacks have another middle of the over chinwag, Salman plays a pre-emptive… [+2757 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Tanya Aldred (now) and James Wallace (later)',
    title: 'Pakistan v England: first Test, day five – live',
    description:
      '<ul><li>Play resumes at Rawalpindi Cricket Stadium at 5am GMT</li><li>Share your thoughts with Tanya via email or on Twitter</li></ul>22nd over: Pakistan 84-2 (Shakeel 24, Imam ul Haq 47) Some movement you say? Jimmy Anderson prepares, immaculate in white. Fo…',
    url: 'https://www.theguardian.com/sport/live/2022/dec/05/pakistan-v-england-first-test-day-five-live-score-updates',
    urlToImage:
      'https://i.guim.co.uk/img/media/b52a1137fb7bafdc403f5f2faf2b5ae2733d7447/17_228_3304_1983/master/3304.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=0ec7f49b1660754397d8598012c90816',
    publishedAt: '2022-12-05T04:54:35Z',
    content:
      'Show key events onlyPlease turn on JavaScript to use this feature\r\n28th over: Pakistan 90-3 (Shakeel 29, Rizwan 0) target 343 Pakistan have ground to rather a halt here after Imams departure and in f… [+4036 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Jasper Jolly',
    title: 'Rolls-Royce and easyJet test aircraft engine running on hydrogen',
    description:
      'Firm says trial is ‘major step’ towards proving hydrogen could be zero-carbon aviation fuel of the futureRolls-Royce has said it has run an aircraft engine on hydrogen in what is thought to be a world first for the aviation industry, which is considering usin…',
    url: 'https://www.theguardian.com/business/2022/nov/28/rolls-royce-easyjet-test-aero-engine-hydrogen',
    urlToImage:
      'https://i.guim.co.uk/img/media/dd1c4cab256b0d0f8ff8e0ad25e47c98df831c22/0_310_8000_4801/master/8000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1ce201c2e1fbdb7b3c7ca974f9a43ca6',
    publishedAt: '2022-11-28T10:31:02Z',
    content:
      'Rolls-Royce has said it has run an aircraft engine on hydrogen in what is thought to be a world first for the aviation industry, which is considering using the fuel to decarbonise air travel.\r\nThe FT… [+3256 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Linda Geddes Science correspondent',
    title: '‘Surprisingly tasty’: putting Neanderthal cooking to the test',
    description:
      'Evidence has been found of complex cooking by Neanderthals. Our writer finds out how their meals might have tastedPity the Neanderthal chef. With only rudimentary cooking implements – a hot rock, some scraps of animal skin, perhaps a favoured prodding stick, …',
    url: 'https://www.theguardian.com/science/2022/nov/26/surprisingly-tasty-putting-neanderthal-cooking-to-the-test-recipe',
    urlToImage:
      'https://i.guim.co.uk/img/media/93282362bb710ffd73accc5c22e329a9ffb3de41/0_390_8256_4954/master/8256.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4278fa48e9d5368b920783d49f437f72',
    publishedAt: '2022-11-26T07:00:21Z',
    content:
      'Pity the Neanderthal chef. With only rudimentary cooking implements a hot rock, some scraps of animal skin, perhaps a favoured prodding stick, plus stones for pounding, cutting, scraping and grinding… [+5996 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Taha Hashim (now) and Tim de Lisle (later)',
    title: 'Pakistan v England: first Test day three – live',
    description:
      '<ul><li>Updates from the third day’s play in Rawalpindi</li><li>Get in touch: contact Taha by email or on Twitter</li></ul>Right then, let’s go! Joe Root has the ball. “It looks exactly the same.” Athers is on Sky to give us a morning update on the pitch – it…',
    url: 'https://www.theguardian.com/sport/live/2022/dec/03/pakistan-v-england-first-test-day-three-live',
    urlToImage:
      'https://i.guim.co.uk/img/media/70d9b7b2ae9bee0c8d114fda04a4bbf02120925a/0_42_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=bf383e52a163294711c4d4497690f32b',
    publishedAt: '2022-12-03T04:46:54Z',
    content:
      'Show key events onlyPlease turn on JavaScript to use this feature\r\n57th over: Pakistan 197-0 (Shafique 101, Imam 94) Imam continues to play the waiting game against Leach. Shafique, by the way, is pl… [+2369 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Rob Smyth (now) and Daniel Harris (later)',
    title: 'Pakistan v England: second Test, fourth day – live',
    description:
      '<ul><li>Over-by-over coverage as Pakistan chase 355 runs to win</li><li>Any thoughts? Feel free to email Rob</li></ul>Hello and welcome to live coverage of the fourth and final day of the second Test between Pakistan and England. It’s a simple race to the fin…',
    url: 'https://www.theguardian.com/sport/live/2022/dec/12/pakistan-v-england-second-test-fourth-day-live',
    urlToImage:
      'https://i.guim.co.uk/img/media/aa22034ad03d5b33952d976391ddacb054b70ca6/143_0_4201_2522/master/4201.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=31767051cd9fb6f12bee4521499cf66b',
    publishedAt: '2022-12-12T04:13:04Z',
    content:
      'Hello and welcome to live coverage of the fourth and final day of the second Test between Pakistan and England. Its a simple race to the finish line: Pakistan need 157 runs to square the series, Engl… [+71 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'PA Media',
    title: 'Rehan Ahmed to become England’s youngest ever men’s Test debutant',
    description:
      '<ul><li>Ben Stokes names 18-year-old spinner in side for third Test</li><li>Pakistan batter Azhar Ali to retire from international cricket</li></ul>Teenage leg-spinner Rehan Ahmed will become England’s youngest men’s Test cricketer when he takes to the field …',
    url: 'https://www.theguardian.com/sport/2022/dec/16/rehan-ahmed-to-become-england-youngest-ever-mens-test-debutant-cricket-azhar-ali',
    urlToImage:
      'https://i.guim.co.uk/img/media/6e6315cb8a97569762ff9ae9695233f69bbaacde/0_106_4822_2894/master/4822.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c135de49ade42443175b6db0b458b485',
    publishedAt: '2022-12-16T09:24:38Z',
    content:
      'As one international career comes to an end in Karachi, another dawns, with Pakistans Azhar Ali announcing the series finale will be his final appearance, if selected, and England confirming a much-a… [+3503 chars]'
  },
  {
    source: {
      id: 'cnn',
      name: 'CNN'
    },
    author: 'By Tom Page, CNN',
    title: 'Airbus reveals plans for hydrogen fuel cell aircraft',
    description:
      'Airbus has announced it is developing a hydrogen-powered fuel cell engine -- and that it plans to test it on the largest commercial airplane ever to take to the skies.',
    url: 'https://www.cnn.com/travel/article/airbus-fuel-cell-engine-rolls-royce-easyjet-engine-c2e-spc-intl/index.html',
    urlToImage:
      'https://cdn.cnn.com/cnnnext/dam/assets/221130161350-airbus-zeroe-fuel-cell-engine-demonstrator-super-tease.jpg',
    publishedAt: '2022-12-01T11:33:04Z',
    content:
      '(CNN) Airbus has announced it is developing a hydrogen-powered fuel cell engine -- and that it plans to test it on the largest commercial airplane ever to take to the skies. \r\nThe French aviation gia… [+3553 chars]'
  },
  {
    source: {
      id: 'engadget',
      name: 'Engadget'
    },
    author: 'Kris Holt',
    title:
      'DeepMind created an AI tool that can help generate rough film and stage scripts',
    description:
      'Have you ever thought up an idea for a movie or play that you just know will be a smash hit, but haven\'t gotten around to writing the script? Alphabet\'s DeepMind has built an AI tool that can help get you started. Dramatron\r\n is a so-called "co-writing" tool …',
    url: 'https://www.engadget.com/deepmind-ai-tool-film-theater-scripts-dramatron-212328597.html',
    urlToImage:
      'https://s.yimg.com/os/creatr-uploaded-images/2022-12/ed82e680-7802-11ed-a59f-bc23be79c645',
    publishedAt: '2022-12-09T21:23:28Z',
    content:
      "Have you ever thought up an idea for a movie or play that you just know will be a smash hit, but haven't gotten around to writing the script? Alphabet's DeepMind has built an AI tool that can help ge… [+2439 chars]"
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com'
    },
    author: 'Ed Cara',
    title: 'An Experimental HIV Vaccine Shows Promise in Early Human Trial',
    description:
      'An experimental HIV vaccine appears to have passed its first test in humans. In a newly released study, the vaccine candidate produced the sort of immune response that scientists had been hoping for in 97% of recipients. Importantly, the vaccine also seemed t…',
    url: 'https://gizmodo.com/experimental-hiv-vaccine-promising-early-human-trial-1849848941',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9a1a3ba6089d3dc3d715ba03e13b96e6.jpg',
    publishedAt: '2022-12-02T22:10:00Z',
    content:
      'An experimental HIV vaccine appears to have passed its first test in humans. In a newly released study, the vaccine candidate produced the sort of immune response that scientists had been hoping for … [+3381 chars]'
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com'
    },
    author: 'George Dvorsky',
    title: "Thrilling Photos of NASA's SLS Megarocket Launch to the Moon",
    description:
      'The most anticipated launch of the year has finally happened, so it gives us great pleasure to show you some of the more memorable moments from this historic event. NASA’s most powerful rocket ever, Space Launch System, has passed its biggest test yet. Read m…',
    url: 'https://gizmodo.com/sls-rocket-launch-photos-nasa-artemis-1-1849791662',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2df54194e91ca2cfac366b19edfc129b.jpg',
    publishedAt: '2022-11-16T21:30:00Z',
    content:
      'The most anticipated launch of the year has finally happened, so it gives us great pleasure to show you some of the more memorable moments from this historic event. NASAs most powerful rocket ever, S… [+302 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      "ABA votes to end law schools' LSAT requirement, but not until 2025 - Reuters",
    description:
      'The arm of the American Bar Association that accredits U.S. law schools on Friday voted to eliminate the longstanding requirement that schools use the Law School Admission Test or other standardized test when admitting students.',
    url: 'https://www.reuters.com/legal/legalindustry/aba-votes-end-law-schools-lsat-requirement-not-until-2025-2022-11-18/',
    urlToImage:
      'https://www.reuters.com/resizer/v5ZSbByyxhRN4fBjTBNk1xrt-iw=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LR23M7L2OBPXTIZAXHAIKGHTIM.jpg',
    publishedAt: '2022-11-18T21:28:00Z',
    content:
      '(Reuters) - The arm of the American Bar Association that accredits U.S. law schools on Friday voted to eliminate the longstanding requirement that schools use the Law School Admission Test or other s… [+3157 chars]'
  },
  {
    source: {
      id: null,
      name: "CP24 Toronto's Breaking News"
    },
    author: 'Kerrisa Wilson',
    title: "Test emergency alert sent to Ontarians' devices Wednesday - CP24",
    description:
      "<ol><li>Test emergency alert sent to Ontarians' devices Wednesday  CP24\r\n</li><li>Alert Ready System Test Taking Place This Morning  VOCM\r\n</li><li>Alert Ready test alert to sound in Ontario and Quebec Wednesday afternoon  CTV News Ottawa\r\n</li><li>Canada tes…",
    url: 'https://www.cp24.com/news/test-emergency-alert-sent-to-ontarians-devices-wednesday-1.6155322',
    urlToImage:
      'https://www.cp24.com/polopoly_fs/1.6153928.1668538504!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
    publishedAt: '2022-11-16T15:23:48Z',
    content:
      'Ontarians received a test emergency alert on their wireless devices Wednesday afternoon.\r\nAn Alert Ready test was conducted across most provinces and territories today, with the alert sent at 12:55 p… [+874 chars]'
  },
  {
    source: {
      id: null,
      name: 'Lifehacker.com'
    },
    author: 'Elizabeth Yuko',
    title: 'Maybe Dogs Are Allergic to You, Have You Ever Thought of That?',
    description:
      'Anyone who lives with allergies knows how deeply unpleasant they can be, knocking you out with a range of symptoms affecting you from head-to-toe. Dogs feel our pain, too, and can be allergic to a number of the same things we are. Read more...',
    url: 'https://lifehacker.com/maybe-dogs-are-allergic-to-you-have-you-ever-thought-o-1849842681',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/53d20d70cf358a6216f4f808e307a874.jpg',
    publishedAt: '2022-12-04T16:00:00Z',
    content:
      'Anyone who lives with allergies knows how deeply unpleasant they can be, knocking you out with a range of symptoms affecting you from head-to-toe. Dogs feel our pain, too, and can be allergic to a nu… [+2988 chars]'
  },
  {
    source: {
      id: null,
      name: 'Edmonton Journal'
    },
    author: 'Nancy Lapid, Reuters',
    title:
      'Researchers test mRNA technology for universal flu vaccine - Edmonton Journal',
    description:
      '<ol><li>Researchers test mRNA technology for universal flu vaccine  Edmonton Journal\r\n</li><li>New mRNA vaccine targeting all known flu strains shows early promise  CBC News\r\n</li><li>mRNA vaccine tech could lead to universal flu shot  CTV News\r\n</li><li>New …',
    url: 'https://edmontonjournal.com/health/researchers-test-mrna-technology-for-universal-flu-vaccine',
    urlToImage:
      'https://smartcdn.gprod.postmedia.digital/calgarysun/wp-content/uploads/2022/11/1017-flu-vaccine-scaled-e1669318011607.jpg?quality=100&strip=all',
    publishedAt: '2022-11-25T03:00:31Z',
    content:
      'Reviews and recommendations are unbiased and products are independently selected. Postmedia may earn an affiliate commission from purchases made through links on this page.Article content\r\nAn experim… [+3205 chars]'
  },
  {
    source: {
      id: null,
      name: 'VOCM'
    },
    author: 'Allison King',
    title: 'Alert Ready System Test Taking Place This Morning - VOCM',
    description:
      '<ol><li>Alert Ready System Test Taking Place This Morning  VOCM\r\n</li><li>Alert Ready test alert to sound in Ontario and Quebec Wednesday afternoon  CTV News Ottawa\r\n</li><li>B.C. testing Alert Ready system on Wednesday afternoon  CBC.ca\r\n</li><li>Canada is t…',
    url: 'https://vocm.com/2022/11/16/alert-ready-system-test-taking-place-this-morning-2/',
    urlToImage:
      'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/900/files/2021/02/cell-phone.jpg',
    publishedAt: '2022-11-16T09:08:00Z',
    content:
      'A test of the public alert system is coming later this morning.\r\nProvincial and territorial emergency management organizations will be issuing public text messages through Alert Ready throughout the … [+117 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Rowena Mason Whitehall editor',
    title:
      'Officials slow to act on contact-tracing warnings, UK Covid inquiry told',
    description:
      'Leaked evidence shows trail of missed opportunities to improve test-and-trace regime in early days of pandemicPublic health leaders were slow to act on repeated warnings over Christmas 2020 that contact tracing and isolation should be triggered immediately af…',
    url: 'https://www.theguardian.com/uk-news/2022/nov/30/officials-slow-to-act-on-contact-tracing-warnings-uk-covid-inquiry-told',
    urlToImage:
      'https://i.guim.co.uk/img/media/456a85f823c5c6ee03018b91dc9f4fb31f74e2e8/0_303_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f58e360f48741080f6e64cdf7315eeff',
    publishedAt: '2022-11-30T18:08:55Z',
    content:
      'Public health leaders were slow to act on repeated warnings over Christmas 2020 that contact tracing and isolation should be triggered immediately after a positive lateral flow test result, leaked ev… [+8638 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'PA Media and Reuters',
    title:
      'Abrar Ahmed takes seven on debut as Pakistan battle back against England',
    description:
      '<ul><li>Second Test, day one: England 281; Pakistan 107-2</li><li>Half-centuries for Pope and Duckett but day belongs to spinner </li></ul>Pakistan’s Abrar Ahmed bagged seven wickets in a dream Test debut as Pakistan’s spinners kept England’s aggression in ch…',
    url: 'https://www.theguardian.com/sport/2022/dec/09/abrar-ahmed-debut-pakistan-england-second-test-day-one-match-report',
    urlToImage:
      'https://i.guim.co.uk/img/media/9c1b679fbf7b925bbb76f9a73ae2a79cb874b26b/269_71_3392_2035/master/3392.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=01113133ba5fb42514d16ee851676c58',
    publishedAt: '2022-12-09T12:29:15Z',
    content:
      'Pakistans Abrar Ahmed bagged seven wickets in a dream Test debut as Pakistans spinners kept Englands aggression in check on the first day of the second Test in Multan.\r\nThe Pakistan mystery spinner, … [+1854 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Analysis: U.S. House Republican farm bill approach may test Biden hunger, climate goals - Reuters',
    description:
      "U.S. President Joe Biden's pledges to slash emissions from farming and to end American hunger by 2030 may be harder to realize now that Republicans flipped the House of Representatives with a thin majority.",
    url: 'https://www.reuters.com/world/us/us-house-republican-farm-bill-approach-may-test-biden-hunger-climate-goals-2022-11-18/',
    urlToImage:
      'https://www.reuters.com/resizer/YaVK6KB2f4DjOwNxcAxscbDODBo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ML3C4MSQ6RJIDALD6SYNLDX564.jpg',
    publishedAt: '2022-11-18T12:05:00Z',
    content:
      "WASHINGTON, Nov 18, (Reuters) - U.S. President Joe Biden's pledges to slash emissions from farming and to end American hunger by 2030 may be harder to realize now that Republicans flipped the House o… [+5175 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Dark horses Denmark face tricky Tunisia test in World Cup opener - Reuters',
    description:
      "Denmark go into their opening World Cup game against a tricky Tunisia side on Tuesday in the unusual position of being among Europe's dark horses, in with an outside chance of winning the tournament if they can get everything right in Qatar.",
    url: 'https://www.reuters.com/lifestyle/sports/dark-horses-denmark-face-tricky-tunisia-test-world-cup-opener-2022-11-20/',
    urlToImage:
      'https://www.reuters.com/resizer/PCILP96MeK5sxLxF7qdk9znrO4s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KWBV2HGHOZMPXMOSDZYGHONRRE.jpg',
    publishedAt: '2022-11-20T09:46:00Z',
    content:
      "DOHA, Nov 20 (Reuters) - Denmark go into their opening World Cup game against a tricky Tunisia side on Tuesday in the unusual position of being among Europe's dark horses, in with an outside chance o… [+2230 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Verizon appeal will be early test of corporate strategy to combat mass arbitration - Reuters',
    description:
      'Corporations worried about the prospect of mass consumer arbitration should be paying close attention to Verizon Wireless Inc’s <a href="https://tmsnrt.rs/3EUX56s" target="_blank">new case</a> at the 9th U.S. Circuit Court of Appeals.',
    url: 'https://www.reuters.com/legal/government/verizon-appeal-will-be-early-test-corporate-strategy-combat-mass-arbitration-2022-11-22/',
    urlToImage:
      'https://www.reuters.com/resizer/Di3DLHVQDtUKNVy1kjxLLcBozPI=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/64MHLPCKPFKODGL5NXKZAL64LM.jpg',
    publishedAt: '2022-11-22T21:33:00Z',
    content:
      '(Reuters) - Corporations worried about the prospect of mass consumer arbitration should be paying close attention to Verizon Wireless Incs new case at the 9th U.S. Circuit Court of Appeals.\r\nVerizon … [+6174 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Beijing no longer requires COVID test results to enter supermarkets, buildings - Reuters',
    description:
      "China's capital Beijing no longer requires people that enter supermarkets and commercial buildings to show negative COVID-19 tests on their mobile phones, the city government said in a statement on Tuesday.",
    url: 'https://www.reuters.com/world/china/beijing-no-longer-requires-covid-test-results-enter-supermarkets-buildings-2022-12-06/',
    urlToImage:
      'https://www.reuters.com/resizer/6HR7zXLaHMi_KhZFL0Kxc_bkWbs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IIZXHSJFINPRPEWLE2RYCNTGC4.jpg',
    publishedAt: '2022-12-06T01:28:00Z',
    content:
      "BEIJING, Dec 6 (Reuters) - China's capital Beijing no longer requires people that enter supermarkets and commercial buildings to show negative COVID-19 tests on their mobile phones, the city governme… [+322 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Winter warmer? Dutch homeowners put hydrogen heating to the test - Reuters',
    description:
      'Hydrogen, hailed by some as the clean fuel of the future, is being put the test on a domestic scale in a trial by a dozen homes in the eastern Dutch town of Lochem.',
    url: 'https://www.reuters.com/business/sustainable-business/winter-warmer-dutch-homeowners-put-hydrogen-heating-test-2022-12-01/',
    urlToImage:
      'https://www.reuters.com/resizer/84pSi12wMzles25mU7J7zLLzHJw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F3B7KOCYLZNKTCRX63J6Q2EF3U.jpg',
    publishedAt: '2022-12-01T16:24:00Z',
    content:
      'AMSTERDAM, Dec 1 (Reuters) - Hydrogen, hailed by some as the clean fuel of the future, is being put the test on a domestic scale in a trial by a dozen homes in the eastern Dutch town of Lochem.\r\nUsin… [+1818 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'India to go on the offensive against Bangladesh in test series opener - Reuters',
    description:
      "After starting their tour of Bangladesh with defeat in a one-day international series, India's stand-in captain KL Rahul said they will come out swinging in the opening test match against the hosts beginning in Chattogram on Wednesday.",
    url: 'https://www.reuters.com/lifestyle/sports/india-go-offensive-against-bangladesh-test-series-opener-2022-12-13/',
    urlToImage:
      'https://www.reuters.com/resizer/SgQ4RBjdkZ5MRl7Yy35zEepdU4s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IU4AUNWDU5OC3OZFXPBGBIDMSQ.jpg',
    publishedAt: '2022-12-13T04:24:00Z',
    content:
      "Dec 13 (Reuters) - After starting their tour of Bangladesh with defeat in a one-day international series, India's stand-in captain KL Rahul said they will come out swinging in the opening test match … [+2134 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Beijing Capital Airport drops negative COVID test requirement from Tuesday - Reuters',
    description:
      'The Beijing Capital International Airport no longer requires a negative COVID-19 test result for entry to terminals, starting from Tuesday, state media said.',
    url: 'https://www.reuters.com/world/china/beijing-capital-airport-drops-negative-covid-test-requirement-tuesday-2022-12-06/',
    urlToImage:
      'https://www.reuters.com/resizer/WIDeyZFWgvHNVzPz-fA5A1XEDVk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7CWLFKOCRFMQXKYN73VLNTKPPQ.jpg',
    publishedAt: '2022-12-06T04:45:00Z',
    content:
      'BEIJING, Dec 6 (Reuters) - The Beijing Capital International Airport no longer requires a negative COVID-19 test result for entry to terminals, starting from Tuesday, state media said.\r\nEntrants do n… [+254 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      "China's COVID scare sparks run on flu medicines, test kits as far away as Australia - Reuters",
    description:
      'The rising alarm over COVID-19 spreading in China was felt in pharmacies in Hong Kong, Macau, and in some neighbourhoods in Australia, as people hunted for fever medicines and virus test kits to send to family and friends on the mainland.',
    url: 'https://www.reuters.com/world/china/chinas-covid-scare-sparks-run-flu-medicines-test-kits-far-away-australia-2022-12-15/',
    urlToImage:
      'https://www.reuters.com/resizer/DIamhcYHJk0fMZcQnhfI7a00WnE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CNPKCVDCE5M3LDE6ZIMN3MAODU.jpg',
    publishedAt: '2022-12-15T08:28:00Z',
    content:
      'SYDNEY/BEIJING, Dec 15 (Reuters) - The rising alarm over COVID-19 spreading in China was felt in pharmacies in Hong Kong, Macau, and in some neighbourhoods in Australia, as people hunted for fever me… [+2626 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Guardant Heath DNA blood test detects 83% of colorectal cancers in ... - Reuters',
    description:
      'Guardant Health Inc <a href="https://www.reuters.com/companies/GH.O" target="_blank">(GH.O)</a> on Thursday said a pivotal trial of its DNA blood test showed that it detected 83% of colorectal cancers and 13% of advanced adenomas, a cancer precursor, when mea…',
    url: 'https://www.reuters.com/business/healthcare-pharmaceuticals/guardant-heath-dna-blood-test-detects-83-colorectal-cancers-trial-2022-12-15/',
    urlToImage:
      'https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=124',
    publishedAt: '2022-12-15T21:09:00Z',
    content:
      'Dec 15 (Reuters) - Guardant Health Inc (GH.O) on Thursday said a pivotal trial of its DNA blood test showed that it detected 83% of colorectal cancers and 13% of advanced adenomas, a cancer precursor… [+1934 chars]'
  },
  {
    source: {
      id: 'engadget',
      name: 'Engadget'
    },
    author: 'Steve Dent',
    title:
      "WhatsApp's latest feature makes it easier to send messages to yourself",
    description:
      'WhatsApp has introduced a new feature that lets you send messages to yourself like reminders and shopping lists, parent Meta has confirmed with TechCrunch. Called "Message Yourself," the feature was first spotted by WaBetaInfo several weeks ago as part of a b…',
    url: 'https://www.engadget.com/whatsapp-now-lets-you-send-messages-to-yourself-124010198.html',
    urlToImage:
      'https://s.yimg.com/os/creatr-uploaded-images/2021-04/4e65a730-97bd-11eb-affa-1652ad303305',
    publishedAt: '2022-11-28T12:40:10Z',
    content:
      'WhatsApp has introduced a new feature that lets you send messages to yourself like reminders and shopping lists, parent Meta has confirmed with TechCrunch. Called "Message Yourself," the feature was … [+1048 chars]'
  },
  {
    source: {
      id: 'engadget',
      name: 'Engadget'
    },
    author: 'Igor Bonifacic',
    title:
      'US Army starts testing a modified version of Canoo’s electric pickup truck',
    description:
      'Earlier this year, electric vehicle startup Canoo warned it was running low on cash\r\n. Since then, the company’s prospects have taken a turn for the better. Over the span of two days in July, Canoo announced separate agreements to provide Walmart with 4,500 E…',
    url: 'https://www.engadget.com/canoo-light-tactical-vehicle-215645513.html',
    urlToImage:
      'https://s.yimg.com/os/creatr-uploaded-images/2022-12/5834ead0-741d-11ed-b4fe-0462097a1527',
    publishedAt: '2022-12-04T21:56:45Z',
    content:
      'Earlier this year, electric vehicle startup Canoo warned it was running low on cash\r\n. Since then, the companys prospects have taken a turn for the better. Over the span of two days in July, Canoo an… [+1299 chars]'
  },
  {
    source: {
      id: 'engadget',
      name: 'Engadget'
    },
    author: 'Mariella Moon',
    title: 'TikTok is testing full screen horizontal videos',
    description:
      "TikToksaid last year that it reached one billion monthly active users worldwide, so whatever it's doing is clearly working. That hasn't stopped the ByteDance-owned company from testing and introducing new features, though, including those that put it in direc…",
    url: 'https://www.engadget.com/tiktok-testing-full-screen-horizontal-videos-112019255.html',
    urlToImage:
      'https://s.yimg.com/os/creatr-images/2020-02/2f6fe710-4ddf-11ea-b3ff-ca9d067be64b',
    publishedAt: '2022-12-14T11:20:19Z',
    content:
      "TikToksaid last year that it reached one billion monthly active users worldwide, so whatever it's doing is clearly working. That hasn't stopped the ByteDance-owned company from testing and introducin… [+1333 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      "Many law schools won't abandon LSAT even if they can, test-prep survey finds - Reuters",
    description:
      'A new survey suggests that a significant number of law schools will continue to use the Law School Admission Test even if the American Bar Association, which accredits them, no longer requires it.',
    url: 'https://www.reuters.com/legal/legalindustry/many-law-schools-wont-abandon-lsat-even-if-they-can-test-prep-survey-finds-2022-11-15/',
    urlToImage:
      'https://www.reuters.com/resizer/_k6WbQg2BonIt2LImm6HT5mtvas=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6BY76QGF4JKO3FIXLPSTU2FDWQ.jpg',
    publishedAt: '2022-11-15T21:27:00Z',
    content:
      '(Reuters) - A new survey suggests that a significant number of law schools will continue to use the Law School Admission Test even if the American Bar Association, which accredits them, no longer req… [+2043 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Boks make six changes to starting line-up for England test - Reuters',
    description:
      'South Africa have made six changes for their final autumn series fixture against England at Twickenham on Saturday, in part forced as the match is being played outside the international window and several players have rejoined their clubs.',
    url: 'https://www.reuters.com/lifestyle/sports/boks-make-six-changes-starting-line-up-england-test-2022-11-22/',
    urlToImage:
      'https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=120',
    publishedAt: '2022-11-22T12:26:00Z',
    content:
      'LONDON, Nov 22 (Reuters) - South Africa have made six changes for their final autumn series fixture against England at Twickenham on Saturday, in part forced as the match is being played outside the … [+2454 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'South Korea anti-ballistic missile system destroys target in test -reports - Reuters',
    description:
      "A new South Korean anti-ballistic missile system conducted its first successful intercept this month, media reports said on Tuesday, the country's latest step in boosting its defences against North Korean missiles.",
    url: 'https://www.reuters.com/world/asia-pacific/south-korea-anti-ballistic-missile-system-destroys-target-test-reports-2022-11-22/',
    urlToImage:
      'https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=120',
    publishedAt: '2022-11-22T05:54:01Z',
    content:
      "SEOUL, Nov 22 (Reuters) - A new South Korean anti-ballistic missile system conducted its first successful intercept this month, media reports said on Tuesday, the country's latest step in boosting it… [+1737 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Tokyo prosecutors search Dentsu, suspect bid-rigging on Olympics test events -media - Reuters.com',
    description:
      'Tokyo prosecutors searched advertising agency Dentsu <a href="https://www.reuters.com/companies/4324.T" target="_blank">(4324.T)</a> and other firms in connection with possible bid-rigging for Tokyo Olympics test events, public broadcaster NHK and other domes…',
    url: 'https://www.reuters.com/business/media-telecom/tokyo-prosecutors-search-dentsu-suspect-bid-rigging-olympics-test-events-media-2022-11-25/',
    urlToImage:
      'https://www.reuters.com/resizer/9CHUDXcX5w5FQZq71R0eRyxG5uY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/22YZVIVXSJKKRCHCD4JWUOZNII.jpg',
    publishedAt: '2022-11-25T02:14:00Z',
    content:
      'TOKYO, Nov 25 (Reuters) - Tokyo prosecutors searched advertising agency Dentsu (4324.T) and other firms in connection with possible bid-rigging for Tokyo Olympics test events, public broadcaster NHK … [+876 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      "China's healthcare system put to the test as COVID curbs fade - Reuters",
    description:
      "When Li tested positive for COVID-19 on Tuesday in Baoding in northern China, he braced for a five-day quarantine at a makeshift local hospital as part of the country's strict pandemic controls.",
    url: 'https://www.reuters.com/world/china/chinas-healthcare-system-put-test-covid-curbs-fade-2022-12-10/',
    urlToImage:
      'https://www.reuters.com/resizer/mWrCbKJ503EptkqmHHJ9jYgKuG0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NCX4JCSCVNJATJF4IC6WXZATKI.jpg',
    publishedAt: '2022-12-10T23:03:00Z',
    content:
      'BAODING, China, Dec 11 (Reuters) - When Li tested positive for COVID-19 on Tuesday in Baoding in northern China, he braced for a five-day quarantine at a makeshift local hospital as part of the count… [+4321 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      "Explainer: Britain's insurers become test case for post-Brexit 'unshackling' - Reuters.com",
    description:
      'The British government and the Bank of England are reforming insurers\' capital rules, seen as a post-Brexit test of UK willingness to <a href="/world/uk/britain-scrap-banker-bonuses-keep-city-competitive-2022-09-23/">"unshackle"</a> the City of London after l…',
    url: 'https://www.reuters.com/business/finance/britains-insurers-become-test-case-post-brexit-unshackling-2022-11-16/',
    urlToImage:
      'https://www.reuters.com/resizer/rPkrk8XG0xCPrLV8tkUIy8TBOb0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WXM4IB62MNJO7HTGGYMAVWZQ4Q.jpg',
    publishedAt: '2022-11-16T14:31:00Z',
    content:
      'LONDON, Nov 16 (Reuters) - The British government and the Bank of England are reforming insurers\' capital rules, seen as a post-Brexit test of UK willingness to "unshackle" the City of London after l… [+4906 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Ricciardo returns to Red Bull as F1 test and third driver - Reuters',
    description:
      "Australian Daniel Ricciardo will be Red Bull's test and third driver next season, the Formula One world champion said on Wednesday.",
    url: 'https://www.reuters.com/lifestyle/sports/ricciardo-returns-red-bull-f1-test-third-driver-2022-11-23/',
    urlToImage:
      'https://www.reuters.com/resizer/ldlHvgJODdUN3EvwPtB3RiLmwWs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MJAEFNTRY5KOZFRCCHOBIZHA7Y.jpg',
    publishedAt: '2022-11-23T13:29:00Z',
    content:
      "LONDON, Nov 23 (Reuters) - Australian Daniel Ricciardo will be Red Bull's test and third driver next season, the Formula One world champion said on Wednesday.\r\nRicciardo raced for Red Bull from 2014 … [+963 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      "Uruguay's Rochet says speedy World Cup balls put keepers to the test - Reuters",
    description:
      'Goalkeepers are facing an ever tougher task at World Cup tournaments as the balls travel increasingly fast in flight and the new model being used in Qatar is no exception, Uruguayan goalkeeper Sergio Rochet said on Sunday.',
    url: 'https://www.reuters.com/lifestyle/sports/uruguays-rochet-says-speedy-world-cup-balls-put-keepers-test-2022-11-20/',
    urlToImage:
      'https://www.reuters.com/resizer/TJY_b_Fqv-4EmMtI664iZqoMI6A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DHUUT2YW6NMKHF6NFGXHUQHHNE.jpg',
    publishedAt: '2022-11-20T18:02:00Z',
    content:
      'DOHA, Nov 20 (Reuters) - Goalkeepers are facing an ever tougher task at World Cup tournaments as the balls travel increasingly fast in flight and the new model being used in Qatar is no exception, Ur… [+1149 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      "German pass masters will test Spain's possession game - Luis Enrique - Reuters.com",
    description:
      'Spain could be given a taste of their own medicine when they take on Germany in a potentially decisive clash at the World Cup on Sunday because both European heavyweights seek to control games by dominating possession, Spain coach Luis Enrique said.',
    url: 'https://www.reuters.com/lifestyle/sports/german-pass-masters-will-test-spains-possession-game-luis-enrique-2022-11-26/',
    urlToImage:
      'https://www.reuters.com/resizer/ngVVoUN8tkvZMbJJnR47p-YMJKU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZTC4K5G6LJN45MFNX3UERBSW6M.jpg',
    publishedAt: '2022-11-26T15:15:00Z',
    content:
      'DOHA, Nov 26 (Reuters) - Spain could be given a taste of their own medicine when they take on Germany in a potentially decisive clash at the World Cup on Sunday because both European heavyweights see… [+2147 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      "Croatia can't dwell on the past as Canada test looms large - Reuters",
    description:
      "Croatia's World Cup appearances have all resulted in group-stage exits or expectation-busting runs to the semi-finals or beyond, and while just one game into Qatar 2022 Sunday's match against Canada already has a make-or-break feel about it.",
    url: 'https://www.reuters.com/lifestyle/sports/croatia-cant-dwell-past-canada-test-looms-large-2022-11-25/',
    urlToImage:
      'https://www.reuters.com/resizer/J-9P0znrMzYSW4spO2n6_J06eQ0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YWPEBW2DU5KNNDY2EYHPU5SSVU.jpg',
    publishedAt: '2022-11-25T09:06:00Z',
    content:
      "DOHA, Nov 25 (Reuters) - Croatia's World Cup appearances have all resulted in group-stage exits or expectation-busting runs to the semi-finals or beyond, and while just one game into Qatar 2022 Sunda… [+2399 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Portugal young gun Ramos faces tough test from wily Saiss - Reuters',
    description:
      'Portugal coach Fernando Santos put his faith in Goncalo Ramos when he started him against Switzerland, and the young striker responded by scoring a hat-trick and leading them to the World Cup quarter-finals for the first time since 2006.',
    url: 'https://www.reuters.com/lifestyle/sports/portugal-young-gun-ramos-faces-tough-test-wily-saiss-2022-12-08/',
    urlToImage:
      'https://www.reuters.com/resizer/m8IDD5Ll4OcSUSwoPKD564XFO5A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2W6EKXRXPJJIRIVOEDCAKKUATE.jpg',
    publishedAt: '2022-12-08T21:24:00Z',
    content:
      'DOHA, Dec 8 (Reuters) - Portugal coach Fernando Santos put his faith in Goncalo Ramos when he started him against Switzerland, and the young striker responded by scoring a hat-trick and leading them … [+2275 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'INDIA RUPEE Rupee slips as Asian FX decline ahead of U.S. inflation test - Reuters',
    description:
      'The Indian rupee slipped against the dollar on Tuesday, mirroring the fall in Asian currencies ahead of the U.S. inflation report, while importer-led demand for the greenback weighed.',
    url: 'https://www.reuters.com/markets/currencies/india-rupee-rupee-slips-asian-fx-decline-ahead-us-inflation-test-2022-12-13/',
    urlToImage:
      'https://www.reuters.com/resizer/38YeaJWTXpQjYm3PyxyA39BRbMg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EMUQXHXFFNL5NLUF3PKE4PZWQA.jpg',
    publishedAt: '2022-12-13T10:37:00Z',
    content:
      'MUMBAI, Dec 13 (Reuters) - The Indian rupee slipped against the dollar on Tuesday, mirroring the fall in Asian currencies ahead of the U.S. inflation report, while importer-led demand for the greenba… [+1891 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Analysis: Ghana overhaul a test for $1 billion World Bank-backed debt - Reuters',
    description:
      "Ghana's debt restructuring plans are set to test a $400 million World Bank guarantee which was designed to provide extra security if the West African country failed to pay.",
    url: 'https://www.reuters.com/world/africa/ghana-overhaul-test-1-billion-world-bank-backed-debt-2022-12-02/',
    urlToImage:
      'https://www.reuters.com/resizer/uvCWsa_-MDcnNfzHJu_n21z1jBQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GRTI2FLW6NOHLPA3WNWR35DADM.jpg',
    publishedAt: '2022-12-02T06:16:00Z',
    content:
      "LONDON, Dec 2 (Reuters) - Ghana's debt restructuring plans are set to test a $400 million World Bank guarantee which was designed to provide extra security if the West African country failed to pay.\r… [+4127 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title: 'England amass 657 all out in Rawalpindi test v Pakistan - Reuters',
    description:
      'A dominant England racked up a mammoth first innings total of 657 all out on day two of the opening test against Pakistan in Rawalpindi on Friday.',
    url: 'https://www.reuters.com/lifestyle/sports/england-amass-657-all-out-rawalpindi-test-v-pakistan-2022-12-02/',
    urlToImage:
      'https://www.reuters.com/resizer/6gfeU_anmNPDXZq57TmTn-aUr2k=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HIRQWFHLRVPJNGM6K6YJICI5DQ.jpg',
    publishedAt: '2022-12-02T07:19:00Z',
    content:
      'Dec 2 (Reuters) - A dominant England racked up a mammoth first innings total of 657 all out on day two of the opening test against Pakistan in Rawalpindi on Friday.\r\nElecting to bat on a flat track, … [+1023 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      "Investors eye year-end rally as stocks pass week's first test with tame CPI - Reuters",
    description:
      'Investors grew more upbeat about a year-end U.S. stock rally after a softer-than-expected inflation report on Tuesday lifted sentiment a day ahead of a Federal Reserve decision that looms as a second major test for markets this week.',
    url: 'https://www.reuters.com/markets/us/investors-eye-year-end-rally-stocks-pass-weeks-first-test-with-tame-cpi-2022-12-13/',
    urlToImage:
      'https://www.reuters.com/resizer/ev-xXpFNvF5BEF_EQ0ogz45aPk0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6XKYX776YBLAFNUVJBZT3AGHOI.jpg',
    publishedAt: '2022-12-13T18:59:00Z',
    content:
      'NEW YORK, Dec 13 (Reuters) - Investors grew more upbeat about a year-end U.S. stock rally after a softer-than-expected inflation report on Tuesday lifted sentiment a day ahead of a Federal Reserve de… [+3942 chars]'
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Williamson steps down as NZ test captain, Southee takes over - Reuters',
    description:
      "Kane Williamson has stepped down as New Zealand test captain and has been replaced by Tim Southee, the country's cricket board (NZC) said on Thursday.",
    url: 'https://www.reuters.com/lifestyle/sports/williamson-steps-down-nz-test-captain-southee-takes-over-2022-12-15/',
    urlToImage:
      'https://www.reuters.com/resizer/fjkS7i8vm-d3FuoiEjfFcMRN4ok=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JLEPSN6G4ZJZVKCEGQAD4BZJSU.jpg',
    publishedAt: '2022-12-15T03:12:00Z',
    content:
      "Dec 15 (Reuters) - Kane Williamson has stepped down as New Zealand test captain and has been replaced by Tim Southee, the country's cricket board (NZC) said on Thursday.\r\nAfter taking charge in 2016 … [+1126 chars]"
  },
  {
    source: {
      id: 'cnn',
      name: 'CNN'
    },
    author: 'Taylor Romine',
    title:
      "Anne Heche not impaired by drugs at time of crash, coroner's report shows",
    description:
      "There were no active drugs found in actress Anne Heche's system at the time of her car crash in August, according to a Los Angeles County Medical Examiner-Coroner report released Tuesday.",
    url: 'https://www.cnn.com/2022/12/07/entertainment/anne-heche-coroner-report/index.html',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/220812150233-01-anne-heche-lead-image.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2022-12-07T20:02:00Z',
    content:
      'There were no active drugs found in actress Anne Heches system at the time of her car crash in August, according to a Los Angeles County Medical Examiner-Coroner report released Tuesday. \r\nCertain dr… [+846 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Ali Martin in Multan',
    title:
      'England can be ‘even more adventurous’ against Pakistan, says Ben Stokes',
    description:
      '<ul><li>Tourists won opening Test in thrilling fashion</li><li>Shorter days possible in second match at Multan</li></ul>Ben Stokes is prepared to get “even more adventurous” with his tactics as the England captain aims to continue pushing the limits of what i…',
    url: 'https://www.theguardian.com/sport/2022/dec/07/cricket-england-can-be-even-more-adventurous-against-pakistan-says-stokes',
    urlToImage:
      'https://i.guim.co.uk/img/media/5e39b1d630d296a5fb7f6c92dc45f817f1ea781b/0_109_3880_2328/master/3880.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8cc37733da916df8e1fbde0ecd079925',
    publishedAt: '2022-12-07T22:00:35Z',
    content:
      'Ben Stokes is prepared to get even more adventurous with his tactics as the England captain aims to continue pushing the limits of what is possible in Test cricket.\r\nSpeaking as he prepared for the s… [+2268 chars]'
  },
  {
    source: {
      id: null,
      name: 'Gizmodo.com'
    },
    author: 'Rob Bricken',
    title: "Jenna Ortega Had Covid While Filming Wednesday's Dance Scene",
    description:
      'Reviews of Netflix’s Addams Family spin-off Wednesday have been mixed, but there’s one thing everyone could agree on: Jenny Ortega’s unapologetically goofy dance scene was amazing. Unfortunately, notice I said “could”—your enthusiasm might wane upon learning …',
    url: 'https://gizmodo.com/wednesday-dance-scene-covid-jenna-ortega-netflix-1849864436',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9f71f41287145d7aef49f2ecdc1aef3a.jpg',
    publishedAt: '2022-12-07T20:05:00Z',
    content:
      'Reviews of Netflixs Addams Family spin-off Wednesday have been mixed, but theres one thing everyone could agree on: Jenny Ortegas unapologetically goofy dance scene was amazing. Unfortunately, notice… [+1880 chars]'
  },
  {
    source: {
      id: null,
      name: 'Android Central'
    },
    author: 'derrek.lee@futurenet.com (Derrek Lee)',
    title:
      "Samsung's foldable smartphone domination will be put to the test in 2023",
    description:
      'Foldables saw record shipments in Q3 2022, but the iPhone 14 may have chipped away at some of that in Q4.',
    url: 'https://www.androidcentral.com/phones/foldable-market-q4-2022-q1-2023-predictions',
    urlToImage:
      'https://cdn.mos.cms.futurecdn.net/LZ2s4U8oA5d2wSL9mF7Jta-1200-80.jpg',
    publishedAt: '2022-12-14T23:49:19Z',
    content:
      "<ul><li>Foldable phones had record shipments in Q3 2022 amid the launch of Samsung's latest Galaxy smartphones.</li><li>Foldable shipments are expected to fall in Q4, 2022 following the launch of the… [+2444 chars]"
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: null,
    title:
      'Macau relaxes COVID arrival requirements from mainland China - Reuters',
    description:
      'Macau authorities said on Thursday they will relax COVID-19 test requirements for arrivals from mainland China.',
    url: 'https://www.reuters.com/world/china/macau-relaxes-covid-arrival-requirements-mainland-china-2022-12-08/',
    urlToImage:
      'https://www.reuters.com/resizer/yNqs8RsAlJZD0QoMm-Fcw0_dim4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PEZOFRT34ZOODAZ36I32GMAY5U.jpg',
    publishedAt: '2022-12-08T10:28:00Z',
    content:
      'HONG KONG, Dec 8 (Reuters) - Macau authorities said on Thursday they will relax COVID-19 test requirements for arrivals from mainland China.\r\nThe loosening move comes one day after Chinese authoritie… [+527 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Ali Martin',
    title:
      'Rehan Ahmed set to become England’s youngest ever men’s Test cricketer',
    description:
      '<ul><li>Teenage leg-spinner added to the squad for Pakistan tour</li><li>18-year-old has impressed with England Lions in UAE</li></ul>Rehan Ahmed could become England’s youngest men’s Test cricketer after Leicestershire’s teenage leg-spinner was added to the …',
    url: 'https://www.theguardian.com/sport/2022/nov/23/rehan-ahmed-england-youngest-ever-mens-test-cricketer',
    urlToImage:
      'https://i.guim.co.uk/img/media/e568da3781827dd0aa2843f11969f447f823a57c/0_182_1135_681/master/1135.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0defb51503ea59828017f8c8afd075f4',
    publishedAt: '2022-11-23T14:19:47Z',
    content:
      'Rehan Ahmed could become Englands youngest mens Test cricketer after Leicestershires teenage leg-spinner was added to the squad for next months tour of Pakistan.\r\nIf selected during the three-match s… [+2444 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Gerard Meagher',
    title:
      'Billy Vunipola recalled as England shuffle pack for All Blacks Test',
    description:
      '<ul><li>Simmonds moves to blindside flanker as Jones tweaks back row</li><li>Itoje moves into the second row, while Nowell starts on wing</li></ul>Eddie Jones has recalled Billy Vunipola to the starting lineup for Saturday’s clash with New Zealand as one of t…',
    url: 'https://www.theguardian.com/sport/2022/nov/17/billy-vunipola-recalled-as-england-shuffle-pack-for-all-blacks-test-rugby-union',
    urlToImage:
      'https://i.guim.co.uk/img/media/473c31cac446b831970bbe8cb0484fd5871135b8/0_121_3157_1895/master/3157.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e8105a8fb8a7156fba69db03a981ab5f',
    publishedAt: '2022-11-17T11:42:20Z',
    content:
      'Eddie Jones has recalled Billy Vunipola to the starting lineup for Saturdays clash with New Zealand as one of three changes to his side. Vunipola slots in at No 8 with Sam Simmonds shifting to blinds… [+2882 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Zoe Wood',
    title:
      'Aldi’s 29p mince pie a close second to Waitrose’s winner in blind taste test',
    description:
      'Waitrose’s No 1 Brown Butter pies wowed with their ‘buttery aroma’, while Aldi’s, at half the price, scored just one point lessTucking into a mince pie is usually the first sign Christmas is on the way and with budgets under pressure this year getting your fi…',
    url: 'https://www.theguardian.com/business/2022/nov/17/aldis-29p-mince-pie-a-close-second-to-waitroses-winner-in-blind-taste-test',
    urlToImage:
      'https://i.guim.co.uk/img/media/29e4cf038b00e17a18223fe6a489f2bd95eba06f/19_4_1298_779/master/1298.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a26479fac241585227d0731cd181d9e4',
    publishedAt: '2022-11-17T00:01:33Z',
    content:
      'Tucking into a mince pie is usually the first sign Christmas is on the way and with budgets under pressure this year getting your fix doesnt have to break the bank, with a 29p pie from Aldi coming a … [+2816 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Louise Taylor in Doha',
    title:
      'Tite plots gameplan without Neymar as Brazil prepare for Switzerland test',
    description:
      'Brazil manager has already chosen his star striker’s replacement but warns against fouls that ‘target specific players’ in QatarCasemiro had a confession. “I sometimes feel sorry for our opponents,” Brazil’s Manchester United midfielder said last week. “We ha…',
    url: 'https://www.theguardian.com/football/2022/nov/27/tite-plots-gameplan-without-neymar-as-brazil-prepare-for-switzerland-test',
    urlToImage:
      'https://i.guim.co.uk/img/media/1c3eafa8354156a1674278b37b5f596774da6a15/0_182_3379_2027/master/3379.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7aee5703cf2d0461eb3e15002b334187',
    publishedAt: '2022-11-27T16:12:58Z',
    content:
      'Casemiro had a confession. I sometimes feel sorry for our opponents, Brazils Manchester United midfielder said. We have so many good players. Considering he was not boasting or exaggerating but merel… [+5440 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Ali Martin in Rawalpindi',
    title:
      'First Pakistan Test could be delayed after England squad hit with illness',
    description:
      '<ul><li>Six or seven of touring squad laid low by virus before first Test</li><li>24-hour delay to match possible with ECB monitoring situation</li></ul>England and Pakistan are in discussions over a possible delayed start to their historic Test series opener…',
    url: 'https://www.theguardian.com/sport/2022/nov/30/first-pakistan-test-could-be-delayed-after-england-squad-hit-with-illness-cricket',
    urlToImage:
      'https://i.guim.co.uk/img/media/98da28d54b971b70b6b74d400bc04f2475714f28/0_223_5194_3118/master/5194.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d12e283b9070a0e856db89edc4510f90',
    publishedAt: '2022-11-30T08:46:10Z',
    content:
      'England and Pakistan are in discussions over a possible delayed start to their historic Test series opener in Rawalpindi after six or seven of the tourists were laid low by a virus just 24 hours out … [+3085 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Geoff Lemon',
    title:
      'Australia beat West Indies by 419 runs in second Test, retain Frank Worrell Trophy 2-0',
    description:
      'The tourists offered little resistance with the bat on day four in Adelaide, managing only 77, their lowest score in AustraliaAustralia retained the Frank Worrell Trophy 2-0 in comprehensive style at Adelaide Oval, bowling out West Indies for 77 before evenin…',
    url: 'https://www.theguardian.com/sport/2022/dec/11/australia-beat-west-indies-by-419-runs-in-second-test-retain-frank-worrell-trophy-2-0',
    urlToImage:
      'https://i.guim.co.uk/img/media/6dc41945c231f54aa56b2e1616f7d4d5ad601825/0_199_5960_3576/master/5960.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=aec575caf2d930ea5e7978bccc3cd026',
    publishedAt: '2022-12-11T07:09:57Z',
    content:
      'Australia retained the Frank Worrell Trophy 2-0 in comprehensive style at Adelaide Oval, bowling out West Indies for 77 before evening had arrived on the fourth day. It was the lowest score West Indi… [+3866 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Nick Ames in Doha',
    title:
      'Vintage Croatia have long passed the consistency test but still defy belief',
    description:
      'Josip Juranovic and Borna Sosa back the old guard to keep producing for the World Cup semi-final against ArgentinaIn Ban Jelacic Square there was not a soul who cared about the Friday night temperature, which had plummeted towards freezing. A reveller removed…',
    url: 'https://www.theguardian.com/sport/2022/dec/10/vintage-croatia-have-long-passed-the-consistency-test-yet-still-defy-belief',
    urlToImage:
      'https://i.guim.co.uk/img/media/8dae069f937a0886e34d3afad716f14bd1250be3/0_19_2846_1707/master/2846.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=f19dde4668c37b6a7376ca0bee8c77a6',
    publishedAt: '2022-12-10T16:20:58Z',
    content:
      'In Ban Jelacic Square there was not a soul who cared about the Friday night temperature, which had plummeted towards freezing. A reveller removed his shirt and dived into a nearby fountain; it always… [+5851 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Sammy Gecsoyler and Nadeem Badshah',
    title:
      'Rishi Sunak faces first electoral test as Chester votes in byelection',
    description:
      'Vote was triggered by Labour MP’s resignation and is first byelection under current prime ministerThe first Westminster byelection since the resignation of Boris Johnson and Liz Truss and the financial fallout from the mini-budget takes place on Thursday.Poll…',
    url: 'https://www.theguardian.com/politics/2022/nov/30/rishi-sunak-faces-first-electoral-test-chester-votes-byelection',
    urlToImage:
      'https://i.guim.co.uk/img/media/5c5e63506900ca6f527c1a9db804fee0aa0a7a59/0_359_5410_3247/master/5410.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=08771a4ad1162eaa29bee07a778af2df',
    publishedAt: '2022-11-30T20:59:29Z',
    content:
      'The first Westminster byelection since the resignation of Boris Johnson and Liz Truss and the financial fallout from the mini-budget takes place on Thursday.\r\nPolls are set to close at 10pm in the Ci… [+2059 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Andy Bull',
    title:
      'Gilbert Jessop’s record stands test of time but England likely to surpass feat | Andy Bull',
    description:
      'Fastest Test century by Englishman set 120 years ago but hell for leather cricket by batters suggests it will finally be beatenEngland were 48 for five when Gilbert Jessop got to the middle, 215 runs behind. The pitch was tricky, soft, and pitted from where t…',
    url: 'https://www.theguardian.com/sport/blog/2022/dec/07/gilbert-jessops-record-stands-test-of-time-but-new-england-likely-to-surpass-feat',
    urlToImage:
      'https://i.guim.co.uk/img/media/31d9a601f478766fecc0ca4590b6819ab505763d/0_109_3930_2358/master/3930.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=79e3522637f81ef583d1f2eb6325cea0',
    publishedAt: '2022-12-07T17:00:29Z',
    content:
      'England were 48 for five when Gilbert Jessop got to the middle, 215 runs behind. The pitch was tricky, soft, and pitted from where they had been playing on it after the rain, and Australias spinners,… [+5383 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Felicity Cloake',
    title:
      'From gold-dusted salmon to gargantuan toffee crowns: we taste-test the best budget Christmas food',
    description:
      'Low-cost supermarkets have gone upmarket, selling fancy scallop gratins and passionfruit panna cottas at tempting prices. But are they any good?We live in a world where the main message of Christmas is “spend, spend, spend”, and where festivity has become syn…',
    url: 'https://www.theguardian.com/food/2022/dec/15/gold-salmon-fillets-sticky-toffee-crowns-taste-test-best-budget-christmas-food',
    urlToImage:
      'https://i.guim.co.uk/img/media/6124935f2ffc2a159fa394ae4e3219a0bc16efdd/0_153_5309_3186/master/5309.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=961671542f49df8dea2ccd8b037bd1bd',
    publishedAt: '2022-12-15T06:00:15Z',
    content:
      'We live in a world where the main message of Christmas is spend, spend, spend, and where festivity has become synonymous with luxury but you shouldnt have to bankrupt yourself to have a good time. He… [+7810 chars]'
  },
  {
    source: {
      id: null,
      name: 'Android Central'
    },
    author: 'tips@androidcentral.com (Nickolas Diaz)',
    title:
      'YouTube wants to bring its video queue to smartphones, and you can test it now',
    description:
      'YouTube tests bringing a familiar queue feature to Android and iOS devices. This testing phase is only open to YouTube Premium members, allowing them to add videos to a queue and rearrange the video order through the new menu.',
    url: 'https://www.androidcentral.com/apps-software/youtube-video-queue-ios-android-test',
    urlToImage:
      'https://cdn.mos.cms.futurecdn.net/fbeSpBwcSYx94g4taJRYTQ-1200-80.jpg',
    publishedAt: '2022-12-15T22:43:49Z',
    content:
      '<ul><li>YouTube begins testing a new queue feature for Android and iOS users.</li><li>Premium members can begin testing adding videos to their queue with the exclusion of YouTube Shorts.</li><li>User… [+2129 chars]'
  },
  {
    source: {
      id: null,
      name: 'The Guardian'
    },
    author: 'Emma Kemp in Doha',
    title:
      '‘It’s for the nation’: Australia’s Graham Arnold faces latest do-or-die test',
    description:
      'The Socceroos are preparing for a must-win game against Tunisia but their veteran coach has seen it all beforeGraham Arnold claims he does not read the media. It is his response, every time, to every query regarding external praise, criticism or otherwise. Bu…',
    url: 'https://www.theguardian.com/football/2022/nov/25/world-cup-qatar-2022-its-for-the-nation-australias-graham-arnold-faces-latest-do-or-die-test',
    urlToImage:
      'https://i.guim.co.uk/img/media/70af0c142d1039530bc52176ea4d9f10ffd9a632/0_120_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d2348fdc3f91640a23c281825f1d3dc6',
    publishedAt: '2022-11-25T05:00:47Z',
    content:
      'Graham Arnold claims he does not read the media. It is his response, every time, to every query regarding external praise, criticism or otherwise. But if, hypothetically, he did take a peek from time… [+4792 chars]'
  }
]

export default testData
