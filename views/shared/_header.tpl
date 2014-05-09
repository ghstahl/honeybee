<div class="col-md-12 column">
    <nav class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">PingBeeGo</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="active">
                    <a href="/twentyfourtyeight/get">2048</a>
                </li>

                <!-- Here you can see ui-sref in action again. Also notice the use of $state.includes, which
                     will set the links to 'active' if, for example on the first link, 'contacts' or any of
                     its descendant states are activated. -->
                <li ng-class="{ active: $state.includes('contacts') }"><a ui-sref="contacts.list">Contacts</a></li>
                <li ng-class="{ active: $state.includes('account') }"><a ui-sref="account.list">Account</a></li>
                <li ng-class="{ active: $state.includes('about') }"><a ui-sref="about.list">About</a></li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown<strong class="caret"></strong></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#">Action</a>
                        </li>
                        <li>
                            <a href="#">Another action</a>
                        </li>
                        <li>
                            <a href="#">Something else here</a>
                        </li>
                        <li class="divider">
                        </li>
                        <li>
                            <a href="#">Separated link</a>
                        </li>
                        <li class="divider">
                        </li>
                        <li>
                            <a href="#">One more separated link</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                    <input type="text" class="form-control">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="/support/get/#/accountmanagement">Account Management</a>
                </li>

                <li>
                    <div class="btn-group navbar-btn">
                        <button class="btn btn-primary">
                            [[if .User ]]
                                [[.User.Id]]
                            [[else]]
                                Account
                            [[end]]

                            <span class="glyphicon glyphicon-user"></span>
                        </button>
                        <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle"><span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="/support/get">Support</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li>
                            [[if .User ]]
                                <a href="/auth/logout">Logout</a>
                            [[else]]
                                <a href="/auth/login">Login</a>
                            [[end]]

                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>

    </nav>
    [[if .Jumbotron]]
    <div class="jumbotron">
        <h1>
            Hello, world!
        </h1>
        <p>
            This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
        </p>
        <p>
            <a class="btn btn-primary btn-large" href="#">Learn more</a>
        </p>
    </div>
    [[end]]
</div>

