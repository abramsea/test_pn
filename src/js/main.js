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

		if ( checkedInputs.length ) 
		{
			checkedInputs.forEach( ( input ) => {
				input.closest( 'li.card' ).remove();
			});
		}
		else
		{
			alert( 'Выберите галочкой, что хотите удалить' )
		}
	}

	removeBtn.addEventListener( 'click', removeCheckedCards ); 
}

const resetFilter = () => {
	for ( let apartment in app.apartments )
	{
		app.apartments[apartment].enabled = true;
	}
};

const initFilterCheckboxes = () => {
	const filterCheckboxes = document.querySelectorAll( 'div.inner > input[type="checkbox"]' );

	filterCheckboxes.forEach( ( input ) => {

		const filter = ( value ) => {
			for ( let apartment in app.apartments )
			{
				if ( app.apartments[apartment].active === value || app.apartments[apartment].status === value )
				{
					app.apartments[apartment].enabled = true;
				}
				else
				{
					app.apartments[apartment].enabled = false;

					// add multichoose
				}
			}
		}
		
		input.addEventListener( 'change', ( evt ) => {
			if ( input.checked )
			{
				filter( evt.target.getAttribute( 'value' ));
			}
			else
			{
				resetFilter();
			}
		});
	});
}

const initSearch = () => {
	const form = document.querySelector( 'form' );
	const searchInput = form.querySelector( 'input#search' );

	const filter = () => {

		for ( let apartment in app.apartments )
		{
			const complex = app.apartments[apartment].complex;
			const queue = app.apartments[apartment].queue;
			const number = app.apartments[apartment].number;

			if ( complex.toLowerCase().match( searchInput.value.toLowerCase() ) || 
				queue.toLowerCase().match( searchInput.value.toLowerCase() ) || 
				number.toLowerCase().match( searchInput.value.toLowerCase() ))
			{
				app.apartments[apartment].enabled = true;
			}
			else
			{
				app.apartments[apartment].enabled = false;

				// add multichoose + nothing chosen
			}
		}
	}

	searchInput.addEventListener( 'keyup', filter );
	form.addEventListener( 'submit', ( evt ) => {
		evt.preventDefault();
	} );
}

const initShareBtn = () => {
	const shareBtn = document.querySelector( '.button_type_share' );

	const share = () => {
		const checkedInputs = document.querySelectorAll( 'li.card > input[type="checkbox"]:checked' );

		if ( checkedInputs.length )
		{
			let links = [];

			checkedInputs.forEach( ( input ) => {
				links.push( `Обрати внимание: ${input.closest( 'li.card' ).querySelector( '.card__type' ).getAttribute( 'data-type' )} ${input.closest( 'li.card' ).querySelector( '.card__number' ).getAttribute( 'data-number' )} в ЖК ${input.closest( 'li.card' ).querySelector( '.card__complex' ).getAttribute( 'data-complex' )} за ${input.closest( 'li.card' ).querySelector( '.card__price' ).textContent} рублей`);
			});
	
			const mailBody = links.join( ', ' );
	
			location = `mailto:someone@example.ru?subject=Гляди, что нашел!&body=${mailBody}`;
		}
		else
		{
			alert( 'Выберите галочкой, что хотите отправить' )
		}
	}

	shareBtn.addEventListener( 'click', share );
}

const initPrintBtn = () => {
	const printBtn = document.querySelector( '.button_type_pdf' );

	const print = () => {
		cards.forEach( card => card.classList.remove( 'printable' ));
		const checkedInputs = document.querySelectorAll( 'li.card > input[type="checkbox"]:checked' );

		if ( checkedInputs.length )
		{
			checkedInputs.forEach( input => input.closest( 'li.card' ).classList.add( 'printable' ));

			window.print();
		}
		else
		{
			alert( 'Выберите галочкой, что хотите сохранить' )
		}
	}

	printBtn.addEventListener( 'click', print );
}

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

const makeSpaceNumber = () => {
	for ( let apartment in app.apartments )
	{
		app.apartments[apartment].price = spaceNumber( app.apartments[apartment].price );
	}
}

makeSpaceNumber();
initCheckboxset();
initCleanBtn();
initAllBtn();
initRemoveBtn();
initFilterCheckboxes();
initSearch();
initShareBtn();
initPrintBtn();