const FollowToggle = require("./follow_toggle.js");

$(() => {
    const $followBtn = $('.follow-toggle');
    $followBtn.each((index, element) => {
        let followToggle = new FollowToggle(element);
    })
})