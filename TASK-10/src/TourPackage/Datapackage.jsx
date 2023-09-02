const obj = [
    {
      place: 'Chennai',
      src:'Chennai.jpg',
      arrimg:['Chennai.jpg','chennai1.jpeg','chennai2.jpeg'],
      para:'Explore the beauty of Southern India with our Chennai to Rameshwaram, Ooty, Kodaikanal, and Kumbakonam tour package. From sacred temples in Rameshwaram to the lush hills of Ooty and the cultural richness of Kumbakonam, this journey promises a diverse and memorable experience. Discover the best of South India with us!'
    },
    {
      place: 'Rameshwaram',
      src:'rameshwaram1.jpeg',
      arrimg:['Chennai.jpg','chennai1.jpeg','chennai2.jpeg'],
      para:"Commence your adventure from the spiritual haven of Rameshwaram. Explore sacred sites like the Ramanathaswamy Temple and immerse yourself in the town's rich cultural heritage. Journey onwards to the pristine hills of Ooty, the tranquil beauty of Kodaikanal, and the historical allure of Kumbakonam. Experience the diverse treasures of South India, beginning your tour from Rameshwaram!"
    },
    {
      place: 'Kodaikanal',
      src:'kodaikanal3.jpeg',
      arrimg:['Chennai.jpg','chennai1.jpeg','chennai2.jpeg'],
      para:"Begin your journey in the enchanting hill station of Kodaikanal, surrounded by lush forests and serene lakes. Explore the pristine Kodai Lake, take scenic hikes through verdant landscapes, and indulge in local delicacies. Continue your adventure to the spiritual town of Rameshwaram, the picturesque hills of Ooty, and the culturally rich Kumbakonam. Experience the diverse beauty of South India, starting from Kodaikanal!"
    },
    {
      place: 'Ooty',
      src:'Ooty.jpg',
      arrimg:['Chennai.jpg','chennai1.jpeg','chennai2.jpeg'],
      para:"Embark on your journey from the breathtaking hill station of Ooty, known as the 'Queen of Hill Stations.' Enjoy a scenic toy train ride, wander through aromatic tea gardens, and embrace the pleasant climate. Continue your adventure to the sacred town of Rameshwaram, the serene hills of Kodaikanal, and the culturally vibrant Kumbakonam. Discover the diverse wonders of South India, commencing from Ooty!"
    },
    {
      place: 'Kanyakumari',
      src:'kanyakumari1 (3).jpeg',
      arrimg:['Chennai.jpg','chennai1.jpeg','chennai2.jpeg'],
      para:"Commence your journey from the captivating coastal town of Kanyakumari, where the seas converge and spirituality thrives. Witness mesmerizing sunsets, visit the Vivekananda Rock Memorial, and soak in the unique ambiance. Continue your exploration to the historic Rameshwaram, the lush hills of Ooty, and the culturally rich Kumbakonam. Discover the enchanting diversity of South India, beginning your tour from Kanyakumari!"
    },
    {
      place: 'Kumbakonam',
      src:'Kumbakonam.jpg',
      arrimg:['Chennai.jpg','chennai1.jpeg','chennai2.jpeg'],
      para:"Embark on your journey from the culturally rich town of Kumbakonam, steeped in ancient traditions and temples. Explore the historical marvels, witness traditional rituals, and savor the flavors of South Indian cuisine. Continue your adventure to the serene hills of Ooty, the sacred town of Rameshwaram, and the picturesque beauty of Kodaikanal. Experience the diverse treasures of South India, commencing from Kumbakonam!"
    },
    {
      place: 'Madurai',
      src:'Madurai.jfif',
      arrimg:['Chennai.jpg','chennai1.jpeg','chennai2.jpeg'],
      para:"Start your adventure in the ancient city of Madurai, where history and culture blend seamlessly. Explore the iconic Meenakshi Amman Temple, savor delectable street food, and immerse yourself in the vibrant local culture. Continue your journey to the tranquil hills of Ooty, the spiritual town of Rameshwaram, and the picturesque Kodaikanal. Discover the diverse wonders of South India, commencing from Madurai!"
    },
    {
      place: 'Yercaud',
      src:'Yercaud.jpg',
      arrimg:['Chennai.jpg','chennai1.jpeg','chennai2.jpeg'],
      para:"Commence your journey from the serene hill station of Yercaud, nestled amidst lush greenery and cool climates. Enjoy a peaceful boat ride on Yercaud Lake, hike through scenic forests, and rejuvenate amidst nature's beauty. Continue your adventure to the sacred town of Rameshwaram, the captivating hills of Ooty, and the culturally rich Kodaikanal. Explore the diverse wonders of South India, beginning from Yercaud!"
    },
    {
      place: 'Theni',
      src:'Theni.jpg',
      arrimg:['Chennai.jpg','chennai1.jpeg','chennai2.jpeg'],
      para:"Embark on your journey from the picturesque town of Theni, surrounded by the majestic Western Ghats. Explore lush tea estates, trek through dense forests, and witness stunning waterfalls. Continue your adventure to the sacred town of Rameshwaram, the scenic hills of Ooty, and the culturally rich Kodaikanal. Discover the diverse beauty of South India, commencing from Theni!"
    },
    {
      place: 'Hogenakkal',
      src:'hogenakkal1 (2).jpeg',
      arrimg:['Chennai.jpg','chennai1.jpeg','chennai2.jpeg'],
      para:"Begin your adventure from the mesmerizing Hogenakkal Falls, known as the 'Niagara of India.' Experience thrilling coracle rides, marvel at the roaring waterfalls, and savor local fish delicacies. Continue your exploration to the serene hills of Ooty, the sacred town of Rameshwaram, and the culturally rich Kodaikanal. Discover the diverse wonders of South India, commencing from Hogenakkal!"
    }
  ]

const city1=[
  [
    {
      place: 'Rameshwaram',
      src:'rameshwaram1.jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.11,000 /-',
      time:'10-12 Hours (570km)'
    },
    {
      place: 'Kodaikanal',
      src:'kodaikanal3.jpeg',
      days:'3 Days/2 Night',
      amt:'Rs.20,000 /-',
      time:'9-11 Hours (500km)'
    },
    {
      place: 'Ooty',
      src:'Ooty.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.23,000 /-',
      time:'10-12 Hours (560km)'
    }
  ],
  [
    {
      place: 'Kanyakumari',
      src:'kanyakumari1 (3).jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.13,000 /-',
      time:'12-14 Hours (700km)'
    },
    {
      place: 'Kumbakonam',
      src:'Kumbakonam.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.7,999 /-',
      time:'4-5 Hours (280km)'
    },
    {
      place: 'Madurai',
      src:'Madurai.jfif',
      days:'3 Days/2 Night',
      amt:'Rs.11,000 /-',
      time:'8-9 Hours (450km)'
    }
  ],
  [
    {
      place: 'Yercaud',
      src:'Yercaud.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.9,000 /-',
      time:'6-7 Hours (370km)'
    },
    {
      place: 'Theni',
      src:'Theni.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.11,000 /-',
      time:'8-10 Hours (500km)'
    },
    {
      place: 'Hogenakkal',
      src:'hogenakkal1 (2).jpeg',
      days:'3 Days/2 Night',
      amt:'10,000/-',
      time:'6-7 Hours (320km)'
    }
  ]
]
const city2=[
  [
    {
      place: 'Chennai',
      src:'Chennai.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.11,000 /-',
      time:'10-12 Hours (570km)'
    },
    {
      place: 'Kodaikanal',
      src:'kodaikanal3.jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.20,000 /-',
      time:'5-6 Hours (260km)'
    },
    {
      place: 'Ooty',
      src:'Ooty.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.23,000 /-',
      time:'8-9 Hours (430km)'
    }
  ],
  [
    {
      place: 'Kanyakumari',
      src:'kanyakumari1 (3).jpeg',
      days:'3 Days/2 Night',
      amt:'Rs.13,000 /-',
      time:'6-7 Hours (320km)'
    },
    {
      place: 'Kumbakonam',
      src:'Kumbakonam.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.5,999 /-',
      time:'3-4 Hours (170km)'
    },
    {
      place: 'Madurai',
      src:'Madurai.jfif',
      days:'4 Days/3 Night',
      amt:'Rs.10,000 /-',
      time:'8 Hr 16 Min (456km)'
    }
  ],
  [
    {
      place: 'Yercaud',
      src:'Yercaud.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.8,000 /-',
      time:'7 Hr 13 Min (366km)'
    },
    {
      place: 'Theni',
      src:'Theni.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.7,000 /-',
      time:'4-5 Hours (190km)'
    },
    {
      place: 'Hogenakkal',
      src:'hogenakkal1 (2).jpeg',
      days:'4 Days/3 Night',
      amt:'9,000/-',
      time:'6-7 Hours (320km)'
    }
  ]
]
const city3=[
  [
    {
      place: 'Chennai',
      src:'Chennai.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.20,000 /-',
      time:'9-11 Hours (500km)'
    },
    {
      place: 'Rameshwaram',
      src:'rameshwaram1.jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.20,000 /-',
      time:'5-6 Hours (260km)'
    },
    {
      place: 'Ooty',
      src:'Ooty.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.23,000 /-',
      time:'10-12 Hours (555km)'
    }
  ],
  [
    {
      place: 'Kanyakumari',
      src:'kanyakumari1 (3).jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.13,000 /-',
      time:'9-11 Hours (420km)'
    },
    {
      place: 'Kumbakonam',
      src:'Kumbakonam.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.6,999 /-',
      time:'8=10 Hours (390km)'
    },
    {
      place: 'Madurai',
      src:'Madurai.jfif',
      days:'2 Days/1 Night',
      amt:'Rs.10,000 /-',
      time:'3-4 Hours (180km)'
    }
  ],
  [
    {
      place: 'Yercaud',
      src:'Yercaud.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.8,000 /-',
      time:'6-7 Hours (275km)'
    },
    {
      place: 'Theni',
      src:'Theni.jpg',
      days:'2 Days/1 Night',
      amt:'Rs.8,000 /-',
      time:'2-3 Hours (115km)'
    },
    {
      place: 'Hogenakkal',
      src:'hogenakkal1 (2).jpeg',
      days:'3 Days/2 Night',
      amt:'10,000/-',
      time:'7-8 Hours (345km)'
    }
  ]
]
const city4=[
  [
    {
      place: 'Chennai',
      src:'Chennai.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.23,000 /-',
      time:'10-12 Hours (560km)'
    },
    {
      place: 'Kodaikanal',
      src:'kodaikanal3.jpeg',
      days:'3 Days/2 Night',
      amt:'Rs.20,000 /-',
      time:'7-9 Hours (315km)'
    },
    {
      place: 'Rameshwaram',
      src:'rameshwaram1.jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.23,000 /-',
      time:'10-12 Hours (510km)'
    }
  ],
  [
    {
      place: 'Kanyakumari',
      src:'kanyakumari1 (3).jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.13,000 /-',
      time:'11-13 Hours (495km)'
    },
    {
      place: 'Kumbakonam',
      src:'Kumbakonam.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.5,999 /-',
      time:'8-10 Hours (350km)'
    },
    {
      place: 'Madurai',
      src:'Madurai.jfif',
      days:'3 Days/2 Night',
      amt:'Rs.10,000 /-',
      time:'7-9 Hours (345km)'
    }
  ],
  [
    {
      place: 'Yercaud',
      src:'Yercaud.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.8,000 /-',
      time:'7-9 Hours (366km)'
    },
    {
      place: 'Theni',
      src:'Theni.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.8,000 /-',
      time:'6-8 Hours (285km)'
    },
    {
      place: 'Hogenakkal',
      src:'hogenakkal1 (2).jpeg',
      days:'3 Days/2 Night',
      amt:'10,000/-',
      time:'7-9 Hours (345km)'
    }
  ]
]
const city5=[
  [
    {
      place: 'Chennai',
      src:'Chennai.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.13,000 /-',
      time:'12-14 Hours (700km)'
    },
    {
      place: 'Kodaikanal',
      src:'kodaikanal3.jpeg',
      days:'3 Days/2 Night',
      amt:'Rs.20,000 /-',
      time:'7-9 Hours (650km)'
    },
    {
      place: 'Ooty',
      src:'Ooty.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.23,000 /-',
      time:'11-13 Hours (650km)'
    }
  ],
  [
    {
      place: 'Rameshwaram',
      src:'rameshwaram1.jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.13,000 /-',
      time:'11 Hr 50 Min (705km)'
    },
    {
      place: 'Kumbakonam',
      src:'Kumbakonam.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.5,999 /-',
      time:'8-10 Hours (400km)'
    },
    {
      place: 'Madurai',
      src:'Madurai.jfif',
      days:'3 Days/2 Night',
      amt:'Rs.10,000 /-',
      time:'5-6 Hours (270km)'
    }
  ],
  [
    {
      place: 'Yercaud',
      src:'Yercaud.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.11,000 /-',
      time:'12-14 Hours (700km)'
    },
    {
      place: 'Theni',
      src:'Theni.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.8,000 /-',
      time:'6-7 Hours (325km)'
    },
    {
      place: 'Hogenakkal',
      src:'hogenakkal1 (2).jpeg',
      days:'4 Days/3 Night',
      amt:'10,000/-',
      time:'9-11 Hours (512km)'
    }
  ]
]
const city6=[
  [
    {
      place: 'Chennai',
      src:'Chennai.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.7,999 /-',
      time:'4-5 Hours (280km)'
    },
    {
      place: 'Kodaikanal',
      src:'kodaikanal3.jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.20,000 /-',
      time:'7-8 Hours (340km)'
    },
    {
      place: 'Ooty',
      src:'Ooty.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.23,000 /-',
      time:'7-9 Hours (370km)'
    }
  ],
  [
    {
      place: 'Kanyakumari',
      src:'kanyakumari1 (3).jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.13,000 /-',
      time:'9-11 Hours (470km)'
    },
    {
      place: 'Rameshwaram',
      src:'rameshwaram1.jpeg',
      days:'3 Days/2 Night',
      amt:'Rs.5,999 /-',
      time:'6-8 Hours (320km)'
    },
    {
      place: 'Madurai',
      src:'Madurai.jfif',
      days:'3 Days/2 Night',
      amt:'Rs.10,000 /-',
      time:'5-6 Hours (250km)'
    }
  ],
  [
    {
      place: 'Yercaud',
      src:'Yercaud.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.8,000 /-',
      time:'6-7 Hours (310km)'
    },
    {
      place: 'Theni',
      src:'Theni.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.8,000 /-',
      time:'5-6 Hours (270km)'
    },
    {
      place: 'Hogenakkal',
      src:'hogenakkal1 (2).jpeg',
      days:'3 Days/2 Night',
      amt:'10,000/-',
      time:'5-6 Hours (250km)'
    }
  ]
]
const city7=[
  [
    {
      place: 'Chennai',
      src:'Chennai.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.11,000 /-',
      time:'8-9 Hours (450km)'
    },
    {
      place: 'Kodaikanal',
      src:'kodaikanal3.jpeg',
      days:'3 Days/2 Night',
      amt:'Rs.20,000 /-',
      time:'3-4 Hours (150km)'
    },
    {
      place: 'Ooty',
      src:'Ooty.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.23,000 /-',
      time:'6-8 Hours (325km)'
    }
  ],
  [
    {
      place: 'Kanyakumari',
      src:'kanyakumari1 (3).jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.13,000 /-',
      time:'5-6 Hours (265km)'
    },
    {
      place: 'Kumbakonam',
      src:'Kumbakonam.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.5,999 /-',
      time:'4-5 Hours (190km)'
    },
    {
      place: 'Rameshwaram',
      src:'rameshwaram1.jpeg',
      days:'3 Days/2 Night',
      amt:'Rs.10,000 /-',
      time:'3-4 Hours (197km)'
    }
  ],
  [
    {
      place: 'Yercaud',
      src:'Yercaud.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.8,000 /-',
      time:'6-8 Hours (320km)'
    },
    {
      place: 'Theni',
      src:'Theni.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.8,000 /-',
      time:'2-3 Hours (95km)'
    },
    {
      place: 'Hogenakkal',
      src:'hogenakkal1 (2).jpeg',
      days:'4 Days/3 Night',
      amt:'10,000/-',
      time:'6-8 Hours (325km)'
    }
  ]
]
const city8=[
  [
    {
      place: 'Chennai',
      src:'Chennai.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.9,000 /-',
      time:'6-7 Hours (370km)'
    },
    {
      place: 'Kodaikanal',
      src:'kodaikanal3.jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.20,000 /-',
      time:'8-9 Hours (380km)'
    },
    {
      place: 'Ooty',
      src:'Ooty.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.23,000 /-',
      time:'6-7 Hours (270km)'
    }
  ],
  [
    {
      place: 'Kanyakumari',
      src:'kanyakumari1 (3).jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.13,000 /-',
      time:'11 -13 Hours (580km)'
    },
    {
      place: 'Kumbakonam',
      src:'Kumbakonam.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.5,999 /-',
      time:'6-7 Hours (270km)'
    },
    {
      place: 'Madurai',
      src:'Madurai.jfif',
      days:'4 Days/3 Night',
      amt:'Rs.10,000 /-',
      time:'6-7 Hours (290km)'
    }
  ],
  [
    {
      place: 'Rameshwaram',
      src:'rameshwaram1.jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.8,000 /-',
      time:'8-10 Hours (400km)'
    },
    {
      place: 'Theni',
      src:'Theni.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.8,000 /-',
      time:'5-6 Hours (240km)'
    },
    {
      place: 'Hogenakkal',
      src:'hogenakkal1 (2).jpeg',
      days:'4 Days/3 Night',
      amt:'10,000/-',
      time:'7-8 Hours (310km)'
    }
  ]
]
const city9=[
  [
    {
      place: 'Chennai',
      src:'Chennai.jpg',
      days:'4 Days/3 Night',
      amt:'Rs.15,000 /-',
      time:'9-11 Hours (510km)'
    },
    {
      place: 'Kodaikanal',
      src:'kodaikanal3.jpeg',
      days:'3 Days/2 Night',
      amt:'Rs.20,000 /-',
      time:'2-3 Hours (120km)'
    },
    {
      place: 'Ooty',
      src:'Ooty.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.23,000 /-',
      time:'6-7 Hours (290km)'
    }
  ],
  [
    {
      place: 'Kanyakumari',
      src:'kanyakumari1 (3).jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.13,000 /-',
      time:'6-7 Hours (310km)'
    },
    {
      place: 'Kumbakonam',
      src:'Kumbakonam.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.5,999 /-',
      time:'4-5 Hours (200km)'
    },
    {
      place: 'Madurai',
      src:'Madurai.jfif',
      days:'3 Days/2 Night',
      amt:'Rs.10,000 /-',
      time:'2-3 Hours (90km)'
    }
  ],
  [
    {
      place: 'Yercaud',
      src:'Yercaud.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.8,000 /-',
      time:'6-7 Hours (290km)'
    },
    {
      place: 'Rameshwaram',
      src:'rameshwaram1.jpeg',
      days:'3 Days/2 Night',
      amt:'Rs.8,000 /-',
      time:'5-6 Hours (280km)'
    },
    {
      place: 'Hogenakkal',
      src:'hogenakkal1 (2).jpeg',
      days:'4 Days/3 Night',
      amt:'10,000/-',
      time:'7-8 Hours (345km)'
    }
  ]
]
const city10=[
  [
    {
      place: 'Chennai',
      src:'Chennai.jpg',
      days:'3 Days/2 Night',
      amt:'10,000/-',
      time:'6-7 Hours (320km)'
    },
    {
      place: 'Kodaikanal',
      src:'kodaikanal3.jpeg',
      days:'3 Days/2 Night',
      amt:'10,000/-',
      time:'7-8 Hours (345km)'
    },
    {
      place: 'Ooty',
      src:'Ooty.jpg',
      days:'3 Days/2 Night',
      amt:'10,000/-',
      time:'7-9 Hours (345km)'
    }
  ],
  [
    {
      place: 'Kanyakumari',
      src:'kanyakumari1 (3).jpeg',
      days:'4 Days/3 Night',
      amt:'Rs.13,000 /-',
      time:'9-11 Hours (490km)'
    },
    {
      place: 'Kumbakonam',
      src:'Kumbakonam.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.5,999 /-',
      time:'5-6 Hours (260km)'
    },
    {
      place: 'Madurai',
      src:'Madurai.jfif',
      days:'4 Days/3 Night',
      amt:'Rs.10,000 /-',
      time:'6-7 Hours (300km)'
    }
  ],
  [
    {
      place: 'Yercaud',
      src:'Yercaud.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.8,000 /-',
      time:'5-6 Hours (260km)'
    },
    {
      place: 'Theni',
      src:'Theni.jpg',
      days:'3 Days/2 Night',
      amt:'Rs.8,000 /-',
      time:'4-5 Hours (230km)'
    },
    {
      place: 'Rameshwaram',
      src:'rameshwaram1.jpeg',
      days:'4 Days/3 Night',
      amt:'10,000/-',
      time:'8-10 Hours (390km)'
    }
  ]
]
export {obj,city1,city2,city3,city4,city5,city6,city7,city8,city9,city10};