import { tooltip } from '../../ui/client/components/tooltip';
import {Template} from "meteor/templating";
import {Tracker} from "meteor/tracker";
import {Meteor} from "meteor/meteor";

Template.main.onCreated(function() {
    tooltip.init();
});

Template.main.onRendered(function() {
    $('#initial-page-loading').remove();

    return Tracker.autorun(function() {
        const Show_Setup_Wizard = settings.get('Show_Setup_Wizard');

        if ((!userId && Show_Setup_Wizard === 'pending') || (userId && hasRole(userId, 'admin') && Show_Setup_Wizard === 'in_progress')) {
            FlowRouter.go('setup-wizard');
        }
        if (getUserPreference(userId, 'hideUsernames')) {
            $(document.body).on('mouseleave', 'button.thumb', function() {
                return tooltip.hide();
            });
            return $(document.body).on('mouseenter', 'button.thumb', function(e) {
                const avatarElem = $(e.currentTarget);
                const username = avatarElem.attr('data-username');
                if (username) {
                    e.stopPropagation();
                    return tooltip.showElement($('<span>').text(username), avatarElem);
                }
            });
        }
        $(document.body).off('mouseenter', 'button.thumb');
        return $(document.body).off('mouseleave', 'button.thumb');
    });
});
