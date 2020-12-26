// To do
// 1. check if country is already selected - if so do not add to list
// 2. or be able to unselect country if a mistake made
// 3. 1 time visit or create account to follow your travels

$(document).on('click', function(){
  $('.welcome').css('visibility', 'hidden');
});

  const visitedArray = [];
  $('#vmap').vectorMap({
    map: 'world_en',
    showToolTip: true,
    backgroundColor: "#AADAFF",
    color: "black",
    onRegionClick: function(event, code, region) {
      $('#name').html(region);
      var noSpace = region.split(" ").join("");
      if (visitedArray.includes(region)){
        const index = visitedArray.indexOf(region);
        visitedArray.splice(index, 1);
        $('#totalVisited').html('Total Visited: ' + visitedArray.length);
        console.log(visitedArray);
        //remove spaces and join
        $('#' + noSpace).remove();
        return;
      } else {
        visitedArray.push(region);
        $('#list').append('<li id="' + noSpace + '">'+ region + '</li>');
        $('#totalVisited').html('Total Visited: ' + visitedArray.length);
      }
    },
    selectedColor: "#149414",
    hoverColor: "#663399",
    multiSelectRegion: true,
    enableZoom: false


  });
