var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var LEFT_ARROW_SELECTOR = '[data-image-role="left_arrow"]';
var RIGHT_ARROW_SELECTOR = '[data-image-role="right_arrow"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
    }

    function imageFromThumb(thumbnail) {
        'use strict';
        return thumbnail.getAttribute('data-image-url');
    }

    function titleFromThumb(thumbnail) {
        'use strict';
        return thumbnail.getAttribute('data-image-title');
    }

    function setDetailsFromThumb(thumbnail) {
        'use strict';
        setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
    }

    function addThumbClickHandler(thumb){
        'use strict';
        thumb.addEventListener('click', function (event) {
            event.preventDefault();
            setDetailsFromThumb(thumb);
            showDetails();
        });
    }

    function getThumbnailsArray() {
        'use strict';
        var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
        var thumbnailArray = [].slice.call(thumbnails);
        return thumbnailArray;
    }

    function hideDetail(){
        'use strict';
        document.body.classList.add(HIDDEN_DETAIL_CLASS);
    }

    function showDetails(){
        'use strict';
        var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
        document.body.classList.remove(HIDDEN_DETAIL_CLASS);
        frame.classList.add(TINY_EFFECT_CLASS);
        setTimeout(function(){
            frame.classList.remove(TINY_EFFECT_CLASS);
        }, 50);
    }

    function addKeyPressHandler() {
        'use strict';
        document.body.addEventListener('keyup', function (event) {
        event.preventDefault();
        console.log(event.keyCode);
        if(event.keyCode === ESC_KEY){
            hideDetail();
        }
        });
    }

    function getLeftArrow(){
        'use strict';
        var leftArrow = document.querySelector(LEFT_ARROW_SELECTOR);
        return leftArrow;
    }

    function addArrowHandler(arrow, thumbs){
        'use strict';
        arrow.addEventListener('click', function (event) {
            event.preventDefault();
            setDetailsFromThumb(thumbs[0]);
            showDetails();
        });
    }

    function initializeEvents() {
        'use strict';
        var thumbnails = getThumbnailsArray();
        thumbnails.forEach(addThumbClickHandler);

        var leftArrow = getLeftArrow();
        addArrowHandler(leftArrow, thumbnails);
        addKeyPressHandler();
    }

    initializeEvents();

