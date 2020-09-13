import FuseUtils from '@fuse/utils';

class LabelModel {
	constructor(data) {
		const label = data || {};

		this.id = label.id || FuseUtils.generateGUID();
		this.name = label.name || '';
		this.class = label.class || 'bg-blue text-white';
	}
}

export default LabelModel;
