<!-- Main Content Container
<div id="main" class="container" ng-view></div>
-->
<!-- Here is the main ui-view (unnamed) and will be populate by its immediate children's templates
         unless otherwise explicitly named views are targeted. It's also employing ng-animate. -->
<div ng-cloak ui-view class="container" ng-animate="{enter:'fade-enter'}"></div>

<hr ng-cloak>
<pre ng-cloak>
      <!-- Here's some values to keep an eye on in the sample in order to understand $state and $stateParams -->
      $state = {{$state.current.name}}
    $stateParams = {{$stateParams}}
    $state full url = {{ $state.$current.url.source }}
      <!-- $state.$current is not a public api, we are using it to
           display the full url for learning purposes-->
    </pre>