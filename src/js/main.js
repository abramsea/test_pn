const cardsList = document.querySelector( 'ul.cards' );
const cards = cardsList.querySelectorAll( 'li' );
const prices = document.querySelectorAll( 'span.card__price' );

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

const resetFilter = () => cards.forEach( card => card.classList.add( 'valid' ));

const initFilterCheckboxes = () => {
	const filterCheckboxes = document.querySelectorAll( 'div.inner > input[type="checkbox"]' );

	filterCheckboxes.forEach( ( input ) => {

		const filter = ( value ) => {
			cards.forEach( ( card ) => {

				card.classList.remove( 'valid' );

				if ( card.querySelector( '.card__status' ).getAttribute( 'data-status' ) === value || 
					card.querySelector( '.card__status' ).getAttribute( 'data-active' ) === value )
				{
					card.classList.add( 'valid' );
				}
			});
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
		cards.forEach( ( card ) => {

			card.classList.remove( 'valid' );

			if ( card.querySelector( '.card__complex' ).textContent.toLowerCase().match( searchInput.value.toLowerCase() ) || 
				 card.querySelector( '.card__queue' ).textContent.toLowerCase().match( searchInput.value.toLowerCase() ) || 
				 card.querySelector( '.card__number' ).textContent.toLowerCase().match( searchInput.value.toLowerCase() ))
			{
				card.classList.add( 'valid' );
			}
		});
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
		const checkedInputs = document.querySelectorAll( 'li.card > input[type="checkbox"]:checked' );

		if ( checkedInputs.length )
		{
			checkedInputs.forEach( ( input ) => {
				input.closest( 'li.card' ).classList.add( 'printable' );
			});

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

if ( prices.length )
{
	prices.forEach( ( price ) => price.textContent = spaceNumber( parseInt( price.textContent )));
}

initCheckboxset();
initCleanBtn();
initAllBtn();
initRemoveBtn();
initFilterCheckboxes();
initSearch();
initShareBtn();
initPrintBtn();