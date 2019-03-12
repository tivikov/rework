/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals document */

import EditingView from '@ckeditor/ckeditor5-engine/src/view/view';
import ViewRootEditableElement from '@ckeditor/ckeditor5-engine/src/view/rooteditableelement';
import InlineEditableUIView from '../../../src/editableui/inline/inlineeditableuiview';
import Locale from '@ckeditor/ckeditor5-utils/src/locale';

describe( 'InlineEditableUIView', () => {
	let view, editableElement, editingView, editingViewRoot, locale;

	beforeEach( () => {
		locale = new Locale( 'en' );
		editableElement = document.createElement( 'div' );

		editingView = new EditingView();
		editingViewRoot = new ViewRootEditableElement( 'div' );
		editingViewRoot._document = editingView.document;
		editingView.document.roots.add( editingViewRoot );
		view = new InlineEditableUIView( locale, editingView );
		view.name = editingViewRoot.rootName;

		view.render();
	} );

	describe( 'constructor()', () => {
		it( 'accepts locale', () => {
			expect( view.locale ).to.equal( locale );
		} );

		it( 'accepts editableElement', () => {
			view = new InlineEditableUIView( locale, editingView, editableElement );

			expect( view._editableElement ).to.equal( editableElement );
		} );

		it( 'creates view#element from template when no editableElement provided', () => {
			expect( view.template ).to.be.an( 'object' );
		} );
	} );

	describe( 'editableElement', () => {
		const ariaLabel = 'Rich Text Editor, main';

		it( 'has proper accessibility role', () => {
			expect( view.element.attributes.getNamedItem( 'role' ).value ).to.equal( 'textbox' );
		} );

		it( 'has proper ARIA label', () => {
			expect( editingViewRoot.getAttribute( 'aria-label' ) ).to.equal( ariaLabel );
		} );

		it( 'has proper class name', () => {
			expect( view.element.classList.contains( 'ck-editor__editable' ) ).to.be.true;
			expect( view.element.classList.contains( 'ck-editor__editable_inline' ) ).to.be.true;
		} );
	} );
} );
