import FuseUtils from '@fuse/utils';

class ChecklistItemModel {
	constructor(data) {
		const item = data || {};

		this.id = item.id || FuseUtils.generateGUID();
		this.name = item.name || '';
		this.checked = item.checked || false;
	}
}

export default ChecklistItemModel;
