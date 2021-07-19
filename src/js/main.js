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
