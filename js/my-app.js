// Initialize your app
var myApp = new Framework7({
    pushState: true,
    swipePanel: 'left',
    // ... other parameters
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    domCache: true //enable inline pages
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

//my js code start
//my js code start
//my js code start
//my js code start
//my js code start
//my js code start

var ytkey = 'AIzaSyAVJ-9ZOW-Sj8jJVL5-ICDqJp0RVJ7dSB4';


$.get(
        "https://www.googleapis.com/youtube/v3/videos",{
        part : 'snippet,contentDetails,statistics',
        maxResults : 20,
        type : 'video',
        chart : 'mostPopular',
        
        key: ytkey},
    
    
    
        function(data) {
            var results;
            $.each( data.items, function( i, item ) {

//http://www.accessify.com/tools-and-wizards/developer-tools/html-javascript-convertor/
    var result="";
result += "   <li>";
result += "     <a href=\"#about\" class=\"item-link item-content\">";
result += "       <div class=\"item-media\"><img src=\"https:\/\/img.youtube.com\/vi\/"  + item.id + "\/1.jpg\" width=\"90\"><\/div>";
result += "       <div class=\"item-inner\">";
result += "         <div class=\"item-title-row\">";
result += "           <div class=\"item-title\">" + item.snippet.title + "<\/div>";
result += "           <div class=\"item-after\">"+ YTDurationToSeconds(item.contentDetails.duration) +"<\/div>";
result += "         <\/div>";
result += "         <div class=\"item-subtitle\">by " + item.snippet.channelTitle + "<\/div>";
result += "         <div class=\"item-text\">view:"+ nFormatter(item.statistics.viewCount) + " <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i> " + nFormatter(item.statistics.likeCount) + "<\/div>";
result += "       <\/div>";
result += "    <\/a>";
result += "   <\/li>";            
             

    $('#results').append(result);            
    });       
});




//bellow the code is for converting video duration or lenght from iso formate to h:min:sec
            function YTDurationToSeconds(duration) {
                var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)

                var hours = ((parseInt(match[1]) || 0) !== 0)?parseInt(match[1])+":":"";
                var minutes = ((parseInt(match[2]) || 0) !== 0)?parseInt(match[2])+":":"";
                var seconds = ((parseInt(match[3]) || 0) !== 0)?parseInt(match[3]):"00";
                var total = hours + minutes + seconds;
                return total;
            }

//bellow is the code for converting big numbers into G or M or K forms. ex: 1000000 become 1M.
function nFormatter(viewCount,likeCount) {
     if (viewCount >= 1000000000) {
        return (viewCount / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
     }
     if (viewCount >= 1000000) {
        return (viewCount / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
     }
     if (viewCount >= 1000) {
        return (viewCount / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
     }
     return viewCount;
}

















