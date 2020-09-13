import FuseUtils from '@fuse/utils';

function LabelModel(data) {
	const item = data || {};
	return {
		id: item.id || FuseUtils.generateGUID(),
		name: item.name || '',
		get handle() {
			return FuseUtils.handleize(this.name);
		}
	};
}

export default LabelModel;
