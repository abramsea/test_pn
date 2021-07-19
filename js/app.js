const app = new Vue({
	el: '#cart',
	data: {
		apartments: {
			id1: {
				id: 1,
				type: 'apartment',
				price: 7733300,
				status: 'entity',
				complex: 'Чистое небо',
				queue: 'корпус 10, III кв. 2022 г.',
				location: 'Лен. область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
				floor: 7,
				square: 234.38,
				number: 'кв. 62',
				rooms: '1 комн. кв.',
				added: '21/11/2020',
				image: './images/apartment.jpg',
				shown: true
			},
			id2: {
				id: 2,
				type: 'apartment',
				price: 7733300,
				status: 'person',
				complex: 'Зеленый квартал на Пулковских высотах',
				queue: 'корпус 10, III кв. 2022 г.',
				location: 'Комендантский пр., уч. 1 Каменка',
				floor: 7,
				square: 234.38,
				number: 'кв. 62',
				rooms: '1 комн. кв.',
				added: '21/11/2020',
				image: './images/apartment.jpg',
				shown: true
			},
			id3: {
				id: 3,
				type: 'parking',
				price: 800300,
				status: 'booked',
				complex: 'Зеленый квартал на Пулковских высотах',
				queue: 'корпус 10, III кв. 2022 г.',
				location: 'Лен. область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
				square: 15,
				number: '№ 7-10-2 (ПИБ №68)',
				added: '21/11/2020',
				image: './images/apartment.jpg',
				shown: true
			},
			id4: {
				id: 4,
				type: 'parking',
				price: 800300,
				status: 'sold',
				complex: 'Зеленый квартал на Пулковских высотах',
				queue: 'корпус 10, III кв. 2022 г.',
				location: 'Лен. область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1',
				square: 15,
				number: '№ 7-10-2 (ПИБ №68)',
				added: '21/11/2020',
				image: './images/apartment.jpg',
				shown: true
			}
		}
	}
})

const spaceNumber = ( num ) => {
	if ( num > 999 )
	{
		num += '';

		num = num
			.split( '' )
			.reverse()
			.join( '' )
			.replace( /\d{3}/g, '$& ' )
			.split( '' ).reverse().join( '' )
			.replace( /^ /, '' );
	}

	return num;
};

const prices = document.querySelectorAll( 'span.card__price' );

if ( prices.length )
{
	prices.forEach( ( price ) => price.textContent = spaceNumber( parseInt( price.textContent )));
}


const cardsList = document.querySelector( 'ul.cards' );
const cards = cardsList.querySelectorAll( 'li' );

const initCheckboxset = () => {
	const checkboxsets = document.querySelectorAll( 'div.checkboxset' );

	if ( checkboxsets.length )
	{
		checkboxsets.forEach( ( set ) => {
			set.addEventListener( 'click', () => set.classList.toggle( 'active' ));
		});
	}
}

const initCleanBtn = () => {
	const cleanBtn = document.querySelector( 'button.button_type_clean' );

	const clean = () => {
		cards.forEach( ( card ) => card.remove() );
	}

	cleanBtn.addEventListener( 'click', clean ); 
}

const initAllBtn = () => {
	const allBtn = document.querySelector( 'label[for="all"]' );
	let allChecked = false;

	const checkAll = () => {

		if ( !allChecked ) {
			cards.forEach( ( card ) => {
				card.querySelector( 'input[type="checkbox"]' ).checked = true; 
				allChecked = true;
			});
		}
		else
		{
			cards.forEach( ( card ) => {
				card.querySelector( 'input[type="checkbox"]' ).checked = false;
				allChecked = false;
			});
		}

	}

	allBtn.addEventListener( 'click', checkAll ); 
}

const initRemoveBtn = () => {
	const removeBtn = document.querySelector( 'button.button_type_remove' );

	const removeCheckedCards = () => {
		const checkedInputs = document.querySelectorAll( 'li.card > input[type="checkbox"]:checked' )

		checkedInputs.forEach( ( input ) => {
			input.closest( 'li.card' ).remove();
		});
	}

	removeBtn.addEventListener( 'click', removeCheckedCards ); 
}

initCheckboxset();
initCleanBtn();
initAllBtn();
initRemoveBtn();
