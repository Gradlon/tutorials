import {Template} from 'meteor/templating';
import {Items} from '../api/items';
import './item.html';


Template.item.events({
    'click .vote-one'(evnet) {
        Items.update(this._id, {
            $set:{'itemOne.value': this.itemOne.value + 1}
        });
    },
    'click .vote-two'(evnet) {
        Items.update(this._id, {
            $set:{'itemTwo.value': this.itemTwo.value + 1}
        });
    }
});