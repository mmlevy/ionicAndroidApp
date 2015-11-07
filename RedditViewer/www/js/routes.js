angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.account', {
      url: '/account',
      views: {
        'tab1': {
          templateUrl: 'templates/account.html',
          controller: 'accountCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.reddit', {
      url: '/reddit',
      views: {
        'tab2': {
          templateUrl: 'templates/reddit.html',
          controller: 'redditCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('logInToReddit(Optional)', {
      url: '/page6',
      templateUrl: 'templates/logInToReddit(Optional).html',
      controller: 'logInToReddit(Optional)Ctrl'
    })
        
      
    
      
        
    .state('makeARedditAccount', {
      url: '/signUp',
      templateUrl: 'templates/makeARedditAccount.html',
      controller: 'makeARedditAccountCtrl'
    })
        
      
    
      
        
    .state('welcomeToRedditViewer!', {
      url: '/page8',
      templateUrl: 'templates/welcomeToRedditViewer!.html',
      controller: 'welcomeToRedditViewer!Ctrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page8');

});