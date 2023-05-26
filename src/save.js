import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save({ className: 'uncommon-careers-animated-gallery' }) }>
			<InnerBlocks.Content /> 
		</div>
	);
}
