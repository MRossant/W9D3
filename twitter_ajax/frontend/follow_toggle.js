class FollowToggle {

    constructor(el) {
        this.userId = el.dataset.userId;
        this.followState = el.dataset.initialFollowState;
        this.el = $(el);
        this.render();
        this.handleClick();
    }

    render () {
        if (this.followState === "unfollowed") {
            this.el[0].innerText = "Follow!";
        }else {
            this.el[0].innerText = "Unfollow!";
        }
    }

    swapStates () {
        this.followState = (this.followState === "unfollowed") ? "followed" : "unfollowed";
    }

    handleClick () {
        this.el.on('click', (e) => {
            e.preventDefault();

            let that = this;

            let method = this.followState === "unfollowed" ? "POST" : "DELETE";

            $.ajax({
                type: method,
                url: `/users/${this.userId}/follow`,
                success () {
                    that.swapStates();
                    that.render();
                },
                dataType: "json",
            });


        });
    }

}

module.exports = FollowToggle;
