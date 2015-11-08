angular.module('app.controllers', [])
  
.controller('accountCtrl', function($scope) {
    

})
   
.controller('redditCtrl', function($scope) {
    // comment
    
    /*$scope.posts = [
        {title: 'LF5M must have 365 Gjallarhorn and HM emblem', name: 'elitistTroll', score: '9001'},
        {title: 'Trials of Osiris...more like Trials of Lag-switchers', name: 'Taniks_has_no_house', score: '541'},
        {title: 'Xbox One Dashboard, who has the new update?', name: 'gamer4life', score: '476'},
        {title: 'I wish Pickachu was real...', name: 'TheRealAshKetchum', score: '150'},
        {title: 'Any good websites to learn AngularJS?', name: 'CLU', score: '1823'},
        {title: 'Ionic framework tutorials', name: 'ionicFTW', score: '384'},
        {title: 'Best Skyrim Mods', name: 'dovahkiin', score: '5007'},
        {title: 'Learn to write Games for Android', name: 'longLiveDroid', score: '3709'},
        {title: 'Don\'t lie to your kids about Santa', name: 'Wrex', score: '71'},
        {title: 'Why gaming consoles are still relevant', name: 'Variks', score: '7803'},
        {title: 'Destiny won\'t have free DLC', name: 'Truth', score: '39'},
        {title: 'Pros and Cons of Public Transportation', name: 'Sierra117', score: '365'},
        {title: 'Hackathon ideas?', name: 'gx200df', score: '24'},
        {title: '1.21 Gigawatts, is it possible?', name: '88mph', score: '2015'},
        {title: 'Web Development for Beginners', name: 'Web_Builder', score: '404'}
    ];*/
    
    $scope.populateList = function() {
        var redditData;
    $.getJSON('http://www.reddit.com/r/AskReddit/.json',          function(tempData){
        console.log(tempData);
        redditData = tempData;
        console.log(redditData.data.children[0].data.author);
        console.log(redditData.data.children.length);
        $scope.posts = [];
        console.log(redditData.data.children.length);
        for(var i = 0; i < redditData.data.children.length; i++) {
            temp = {};
            temp['title'] = redditData.data.children[i].data.title;
            temp['name'] = redditData.data.children[i].data.author;
            temp['score'] = redditData.data.children[i].data.score;
            $scope.posts.push(temp);
        }
        });
    
    }
    $scope.populateList();
})
      
.controller('logInToReddit(Optional)Ctrl', function($scope) {

})
   
.controller('makeARedditAccountCtrl', function($scope) {

})
   
.controller('welcomeToRedditViewer!Ctrl', function($scope) {

})
 