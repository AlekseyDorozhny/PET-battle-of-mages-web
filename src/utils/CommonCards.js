const CommonCardsData = [
  //Карты волшебников
  {
    type: 'wizard',
    name: 'Змееволк позорный',
    class: 'attack',
    discription: '+2 мощи. Накрути 2 жизни. Атака: нанеси 5 урона врагу хилее тебя.',
    image: '/wisard/0405.jpg',
    points: 1,
    price: 5,
    power: 2,
    quantityInInitialDesk: 2
  },
  {
    type: 'wizard',
    name: 'Солнцеликий',
    class: 'attack',
    discription: '+2 мощи и возьму 1 карту. Атака: нанеси 10 урона выбранному врагу',
    image: '/wisard/0105.jpg',
    points: 2,
    price: 7,
    power: 2,
    quantityInInitialDesk: 1
  },
  {
    type: 'wizard',
    name: 'Бедовая принцесса',
    class: 'attack',
    discription: '+2 мощи. Атака: выбранный враг раскрывает верхнюю карту своей колоды и отхватывает столько урона, какова ее стоимость.',
    image: '/wisard/0902.jpg',
    points: 1,
    price: 3,
    power: 2,
    quantityInInitialDesk: 2
  },
  {
    type: 'wizard',
    name: 'Миша, убийца единорогов',
    class: 'none',
    discription: 'Посмотри верхнюю карту своей колоды. Возьми её или уничтожь.',
    image: '/wisard/0406.jpg',
    points: 1,
    price: 4,
    power: 0,
    quantityInInitialDesk: 2
  },
  {
    type: 'wizard',
    name: 'Карпатыч-сан',
    class: 'none',
    discription: 'Возьми на руку любое заклинание из своей стопки сброса. Если заклинаний там нет, +2 мощи.',
    image: '/wisard/0801.jpg',
    points: 1,
    price: 4,
    power: 0,
    quantityInInitialDesk: 2
  },
  {
    type: 'wizard',
    name: 'Гнойный трепанатор',
    class: 'attack',
    discription: '+2 мощи. Атака: каждый враг сбрасывает 1 карту.',
    image: '/wisard/0802.jpg',
    points: 1,
    price: 4,
    power: 2,
    quantityInInitialDesk: 2
  },
  {
    type: 'wizard',
    name: 'Билли Адиш',
    class: 'none',
    discription: '+1 мощи. Если это первая карта, которую ты сыграл во время этого хода, сбрось все карты с руки и возьми 4 карты.',
    image: '/wisard/0803.jpg',
    points: 1,
    price: 3,
    power: 1,
    quantityInInitialDesk: 2
  },
  {
    type: 'wizard',
    name: 'Абракадабрадор',
    class: 'none',
    discription: 'Возьми 1 карту. Накрути 2 жизни.',
    image: '/wisard/0804.jpg',
    points: 1,
    price: 2,
    power: 0,
    quantityInInitialDesk: 2
  },
  {
    type: 'wizard',
    name: 'Виар, колдун-виртуал',
    class: 'defense',
    discription: '+2 мощи. Защита: можешь сбросить эту карту, чтобы избежать атаки. Если сбросил, возьми 2 карты и затем сбрось одну из них.',
    image: '/wisard/0805.jpg',
    points: 1,
    price: 5,
    power: 2,
    quantityInInitialDesk: 2
  },
  {
    type: 'wizard',
    name: 'Распальцун',
    class: 'none',
    discription: '+5 мощи. -1 мощь за каждый жетон дохлого колдуна под твоим контролем.',
    image: '/wisard/0806.jpg',
    points: 3,
    price: 6,
    power: 5,
    quantityInInitialDesk: 1
  },
  {
    type: 'wizard',
    name: 'Безумная кошатница.',
    class: 'defense',
    discription: '+1 мощь. Ты и выбранный враг берете по 1 карте. Защита: можешь сбросить эту карту, чтобы избежать атаки.',
    image: '/wisard/0905.jpg',
    points: 1,
    price: 3,
    power: 1,
    quantityInInitialDesk: 2
  },
  {
    type: 'wizard',
    name: 'Сладкий котик',
    class: 'none',
    discription: 'Возьми 2 карты и затем сбрось 1 карту. Накрути столько жизней, какова стоимость сброшенной карты. Если у тебя стало 25 жизней, замешай в стопку любой жетон дохлого колдуна под твоим контролем.',
    image: '/wisard/0901.jpg',
    points: 2,
    price: 6,
    power: 0,
    quantityInInitialDesk: 1
  },
  {
    type: 'wizard',
    name: 'Надмозг',
    class: 'attack',
    discription: '+2 мощи. Атака: выбранный враг сбрасывает 1 карту со стоимостью 5 или больше. Если он этого избегает, то отхватывает 5 урона.',
    image: '/wisard/0906.jpg',
    points: 1,
    price: 5,
    power: 2,
    quantityInInitialDesk: 2
  },

]

export default CommonCardsData
