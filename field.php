<?php
use Carbon_Fields\Carbon_Fields;
use Carbon_Field_Display\Display_Field;

define( 'Carbon_Field_Display_cCheckbox\\DIR', __DIR__ );

Carbon_Fields::extend( Display_Field::class, function( $container ) {
	return new Display_Field( $container['arguments']['type'], $container['arguments']['name'], $container['arguments']['label'] );
} );