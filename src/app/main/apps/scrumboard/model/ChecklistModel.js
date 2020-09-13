import FuseUtils from '@fuse/utils';

class ChecklistModel {
	constructor(data) {
		const item = data || {};

		this.id = item.id || FuseUtils.generateGUID();
		this.name = item.name || '';
		this.checkItems = item.checkItems || [];
	}
}

export default ChecklistModel;
