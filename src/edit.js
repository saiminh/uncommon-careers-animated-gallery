import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({ className: 'uncommon-careers-animated-gallery-editorview' }) }>
      <div className='label'>
        Career Animation
      </div>
			<InnerBlocks 
        allowedBlocks={['core/gallery']}
        template={[
          ['core/gallery', {
            className: 'uncommon-careers-animated-gallery__gallery',
            columns: 6
          }]
        ]}
      />
		</div>
	);
}
