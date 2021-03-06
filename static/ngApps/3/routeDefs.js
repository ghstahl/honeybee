define([
    'app'
], function(app) {
  app.registerProvider(
    'routeDefs',
    [
        '$stateProvider',
        '$urlRouterProvider',
        '$couchPotatoProvider',

      function (
        $stateProvider,
        $urlRouterProvider,
        $couchPotatoProvider

      ) {



        this.$get = function() {
          // this is a config-time-only provider
          // in a future sample it will expose runtime information to the app
          return {};
        };

        $urlRouterProvider
          .when('/c?id', '/contacts/:id')
          .when('', '/')
          .when('/user/:id', '/contacts/:id');

        $stateProvider
          .state('home', {
            url: '/',
            template: '<p class="lead">Welcome to the ngStates sample</p><p>Use the menu above to navigate</p>' +
              '<p>Look at <a href="#/c?id=1">Alice</a> or <a href="#/user/42">Bob</a> to see a URL with a redirect in action.<' + '/p>'
          })
          .state('contacts', {
            url: '/contacts',
            abstract: true,
                templateUrl: app.appGlobal.baseUrl +  'partials/contacts.html',
            controller: 'contactsController',
            resolve: {
              dummy: $couchPotatoProvider.resolveDependencies(['controllers/contactsController'])
            }
          })
          .state('contacts.list', {
            // parent: 'contacts',
            url: '',
            templateUrl: app.appGlobal.baseUrl + 'partials/contacts.list.html'
          })
          .state('contacts.detail', {
            // parent: 'contacts',
            url: '/{contactId}',
            resolve: {
              dummy: $couchPotatoProvider.resolveDependencies(['controllers/contactsDetailController']),
              something:
                [        '$timeout',
                function ($timeout) {
                  return $timeout(function () { return 'Asynchronously resolved data'; }, 10);
                }]
            },
            views: {
              '': {
                  templateUrl: app.appGlobal.baseUrl +  'partials/contacts.detail.html',
                controller: 'contactsDetailController'
              },              'hint@': {
                template: 'This is contacts.detail populating the view "hint@"'
              },
              'menu': {
                templateProvider:
                  [ '$stateParams',
                  function ($stateParams){
                    // This is just to demonstrate that $stateParams injection works for templateProvider
                    // $stateParams are the parameters for the new state we're transitioning to, even
                    // though the global '$stateParams' has not been updated yet.
                    return '<hr><small class="muted">Contact ID: ' + $stateParams.contactId + '</small>';
                  }]
              }
            }
          })
          .state('contacts.detail.item', {
            // parent: 'contacts.detail',
            url: '/item/:itemId',
            resolve: {
              dummy: $couchPotatoProvider.resolveDependencies(['controllers/contactsDetailItemController'])
            },
            views: {
              '': {
                  templateUrl: app.appGlobal.baseUrl +  'partials/contacts.detail.item.html',
                controller: 'contactsDetailItemController'
              },
              'hint@': {
                template: 'Overriding the view "hint@"'
              }
            }
          })
          .state('contacts.detail.item.edit', {
            resolve: {
              dummy: $couchPotatoProvider.resolveDependencies(['controllers/contactsDetailItemEditController'])
            },
            views: {
              '@contacts.detail': {
                  templateUrl: app.appGlobal.baseUrl +  'partials/contacts.detail.item.edit.html',
                controller: 'contactsDetailItemEditController'
              }
            }
          })


          .state('about2', {
            url: '/about2',
            templateProvider:
              [        '$timeout',
              function ($timeout) {
                return $timeout(function () { return 'Hello world'; }, 1000);
              }]
          })

              .state('about4', {
                url: '/about',
//                templateUrl: app.appGlobal.baseUrl +  'views/about.html',
                controller:'AboutViewController',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies([
                        'controllers/AboutViewController'
                    ]),
                    myAccountBoxNavConfig:function(dummy) { // Inject a resource named 'Gists'
                        return {};
                    }
                },
                views:{
                    view1:{
                        templateUrl: app.appGlobal.baseUrl +  'templates/view.about.1.html'
                    },
                    view2:{
                        templateUrl: app.appGlobal.baseUrl +  'templates/view.about.2.html'
                    },
                    view3:{
                        templateUrl: app.appGlobal.baseUrl +  'templates/view.about.3.html'
                    }
                }
              })


            .state('accountmanagement', {
                url: '/accountmanagement',
                controller: 'MyAccountViewController',
                templateUrl: app.appGlobal.baseUrl +  'views/accountManagement.html',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies([
                        'controllers/MyAccountViewController'
                    ]),
                    myAccountBoxNavConfig:function(dummy,MyAccountBoxNavFactory) { // Inject a resource named 'Gists'
                        return MyAccountBoxNavFactory.query().$promise;
                    }
                }
            })
            .state('billinginformation', {
                url: '/billinginformation',
                controller: 'BillingInformationViewController',
                templateUrl: app.appGlobal.baseUrl +  'views/accountInformation.html',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies([
                        'controllers/BillingInformationViewController'
                    ]),
                    accountManagementConfig:function(dummy,AccountManagementFactory) { // Inject a resource named 'Gists'
                        return AccountManagementFactory.query().$promise;
                    },
                    formId:function(dummy){
                        return "{9103f441-e98c-476b-a622-10cdc83d2288}"
                    },
                    dynTemplateFactoryConfig:function(dummy,DynTemplateFactory){
                        return DynTemplateFactory.query().$promise;
                    }
                }
            })
            .state('accountinformation2', {
                url: '/accountinformation2',
                controller: 'AccountInformationViewController',
                templateUrl: app.appGlobal.baseUrl +  'views/accountInformation.html',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies([
                        'controllers/AccountInformationViewController'
                    ]),
                    accountManagementConfig:function(dummy,AccountManagementFactory) { // Inject a resource named 'Gists'
                        return AccountManagementFactory.query().$promise;
                    },
                    formId:function(dummy){
                        return "{872c69a3-7349-48d3-9c45-6f26ddca575c}"
                    },
                    dynTemplateFactoryConfig:function(dummy,DynTemplateFactory){
                        return DynTemplateFactory.query().$promise;
                    }
                }
            })
            .state('accountinformation', {
                url: '/accountinformation',
                abstract:true,
                templateUrl: app.appGlobal.baseUrl +  'views/about.html',
                controller: 'AboutViewController',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies([
                        'controllers/AboutViewController'
                    ]),
                    accountManagementConfig:function(dummy,AccountManagementFactory) { // Inject a resource named 'Gists'
                        return AccountManagementFactory.query().$promise;
                    },
                    dynTemplateFactoryConfig:function(dummy,DynTemplateFactory){
                        return DynTemplateFactory.query().$promise;
                    }
                }
            })
            .state('accountinformation.list', {
                // parent: 'contacts',
                url: '/',
                views: {
                    "view1": {
                        templateUrl: app.appGlobal.baseUrl +  'templates/view.about.2.html',
                        controller:'AboutView2Controller',
                        resolve: {
                            dummy: $couchPotatoProvider.resolveDependencies([
                                'controllers/AboutView2Controller'
                            ]),
                            formId:function(dummy){
                                return "{dac6f51c-85e0-4950-b5bb-05aa49c9d333}"
                            }
                        }
                    },
                    "view2": {
                        templateUrl: app.appGlobal.baseUrl +  'templates/view.about.2.html',
                        controller:'AboutView2Controller',
                        resolve: {
                            dummy: $couchPotatoProvider.resolveDependencies([
                                'controllers/AboutView2Controller'
                            ]),
                            formId:function(dummy){
                                return "{06c2ce5c-d204-41bf-88aa-883b9d4365c5}"
                            }
                        }
                    },
                    "view3": {
                        templateUrl: app.appGlobal.baseUrl +  'templates/view.about.3.html',
                        controller:'AboutView3Controller',
                        resolve: {
                            dummy: $couchPotatoProvider.resolveDependencies([
                                'controllers/AboutView3Controller'
                            ])
                        }
                    }
                }
            })

            .state('about', {
                url: '/about',
                abstract:true,
                templateUrl: app.appGlobal.baseUrl +  'views/contact.html',
                controller: 'ContactViewController',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies([
                        'controllers/ContactViewController'
                    ]),
                    accountManagementConfig:function(dummy,AccountManagementFactory) { // Inject a resource named 'Gists'
                        return AccountManagementFactory.query().$promise;
                    },
                    dynTemplateFactoryConfig:function(dummy,DynTemplateFactory){
                        return DynTemplateFactory.query().$promise;
                    }
                }
            })
            .state('about.list', {
                // parent: 'contacts',
                url: '/',
                views: {
                    "viewA": {
                        templateUrl: app.appGlobal.baseUrl +  'templates/viewA.html',
//                        template: 'Left Tab, index.viewA {{test}} <h1>{{view}}</h1><h1>{{test}}</h1>',
                        controller: 'ATestViewController',
                        resolve:{
                            dummy: $couchPotatoProvider.resolveDependencies([
                                'controllers/ATestViewController'
                            ]),
                            dummy2:function(dummy){}
                        }
                    },
                    "viewB": {
                        template: 'Left Tab, index.viewB<br><a ui-sref=".list">Show List</a>' +
                            '<div ui-view="viewB.list"></div>'
                    }
                }
            })

        ;

      }
    ]
  );
});
