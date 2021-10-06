class FollowToggle {

    constructor(el) {
        this.userId = el.dataset.userId;
        this.initialFollowState = el.dataset.initialFollowState;
        this.el = $(el);
    }
}

module.exports = FollowToggle;
