(function() {
    var current = $("#profile");
    while (!current.is("body")) {
        current.siblings().hide();
        current = current.parent();
    }

    // remove top margin (where page header stuff used to be)
    $("#body").attr("style", "margin-top: 0px");
    // hide connection counter
    $(".member-connections").hide();
    // hide recommended
    $("#recommended-sections").hide()
    // hide so & github
    $(".media-wrapper").first().hide()

    // hide groups
    $("#groups-container").hide();
    // fill width of page
    $("#profile").css("width", "100%");
    // hide overview in heading
    $(".profile-overview-content > table").hide();
    // hide following
    $("#following-container").hide()
    // hide connections
    $("#connections").hide()
    // profile actions
    $(".profile-actions").hide()
    // hide portfolio
    $(".media-wrapper").hide()
    // hide portfolio-add buttons
    $(".treasury-cta").hide()
    // hide buttons
    $(".add-promo-button").hide()

    // hide volunteering
    $("#background-volunteering").hide()
    // hide advice for contacting
    $('#contact-comments').hide()
    // hide personal details
    $('#personal-info').hide()

    // education: hide Add Grade
    $("div[data-trk='prof-edit-edu-grade-inline_cta']").hide()
    // education: hide Add Description
    $("div[data-trk='prof-edit-edu-description-inline_cta']").hide()

    // append contact info to headline
    // fixme hardcoded contact details!
    $("#headline .title").append("<br>mail@mkn8rd.org<br>Skype: aspect_mkn8rd");

    // insert style tag with custom styles
    $('head').append('<style type="text/css">' +
        ' #background .background-content h3 { text-transform: uppercase; font-weight: bold; letter-spacing: 1px; } ' +
        ' #background-experience > div { page-break-inside: avoid; } ' +
        ' </style>');
})();
