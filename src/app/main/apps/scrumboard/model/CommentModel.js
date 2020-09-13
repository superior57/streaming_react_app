import FuseUtils from '@fuse/utils';
import moment from 'moment';

class CommentModel {
	constructor(data) {
		const item = data || {};

		this.id = item.id || FuseUtils.generateGUID();
		this.type = 'comment';
		this.idMember = item.idMember || null;
		this.message = item.message || '';
		this.time = item.time || moment().format(moment.HTML5_FMT.DATE);
	}
}

export default CommentModel;
