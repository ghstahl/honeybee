<!-- Main Content Container -->
<div id="main" class="container" ng-view></div>

<form action="/new_message" method="post">
    [[ .xsrfdata ]]
    <input type="text" name="message"/>
    <input type="submit" value="Post"/>
</form>
