/**
 * The external dependencies.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, setStatic } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from '../../../../../htmlburger/carbon-fields/assets/js/fields/components/field';
import withStore from '../../../../../htmlburger/carbon-fields/assets/js/fields/decorators/with-store';
import withSetup from '../../../../../htmlburger/carbon-fields/assets/js/fields/decorators/with-setup';

/**
 * Render a display input field.
 *
 * @param  {Object}        props
 * @param  {String}        props.name
 * @param  {Object}        props.field
 * @param  {Function}      props.handleChange
 * @return {React.Element}
 */
export const DisplayField = ({
	name,
	field,
	handleChange
}) => {
	return <Field field={field}>
		<p>
			{field.value}
		</p>
		
	</Field>;
}

/**
 * Validate the props.
 *
 * @type {Object}
 */
DisplayField.propTypes = {
	name: PropTypes.string,
	field: PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.string,
		
	}),
	handleChange: PropTypes.func,
};

/**
 * The enhancer.
 *
 * @type {Function}
 */
export const enhance = compose(
	/**
	 * Connect to the Redux store.
	 */
	withStore(),

	/**
	 * Attach the setup hooks.
	 */
	withSetup(),

	/**
	 * The handlers passed to the component.
	 */
	withHandlers({
		handleChange: ({ field, setFieldValue }) => ({ target: { value } }) => setFieldValue(field.id, value),
	})
);

export default setStatic('type', [
	'display',
])(enhance(DisplayField));

