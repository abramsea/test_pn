const app = new Vue({
	el: '#cart',
	data: {
		apartments: {
			id1: {
				id: 1,
				type: 'Квартира',
				price: 7733300,
				status: 'entity',
				complex: 'Чистое небо',
				queue: 'корпус 10, III кв. 2022 г.',
				location: 'Лен. область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
				floor: 7,
				square: 234.38,
				number: 'кв. 62',
				rooms: '1 комн. кв.',
				added: '21/11/2020',
				image: '/images/apartment.jpg'
			},
			id2: {
				id: 2,
				type: 'Квартира',
				price: 7733300,
				status: 'person',
				complex: 'Зеленый квартал на пулковских высотах',
				queue: 'корпус 10, III кв. 2022 г.',
				location: 'Комендантский пр., уч. 1 Каменка',
				floor: 7,
				square: 234.38,
				number: 'кв. 62',
				rooms: '1 комн. кв.',
				added: '21/11/2020',
				image: '/images/apartment.jpg'
			},
			id3: {
				id: 3,
				type: 'Паркинг',
				price: 800300,
				status: 'booked',
				complex: 'Зеленый квартал на пулковских высотах',
				queue: 'корпус 10, III кв. 2022 г.',
				location: 'Лен. область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
				square: 15,
				number: '№ 7-10-2 (ПИБ №68)',
				added: '21/11/2020',
				image: '/images/apartment.jpg'
			},
			id4: {
				id: 4,
				type: 'Паркинг',
				price: 800300,
				status: 'sold',
				complex: 'Зеленый квартал на пулковских высотах',
				queue: 'корпус 10, III кв. 2022 г.',
				location: 'Лен. область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
				square: 15,
				number: '№ 7-10-2 (ПИБ №68)',
				added: '21/11/2020',
				image: '/images/apartment.jpg'
			}
		}
	}
})