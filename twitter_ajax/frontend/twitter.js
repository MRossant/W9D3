const FollowToggle = require("./follow_toggle.js");

$(() => {
    const $followBtn = $('.follow-toggle');
    $followBtn.each((index) => {
        let followToggle = new FollowToggle(this);
        console.log(followToggle);
    })
})