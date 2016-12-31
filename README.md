# wp-rest-api-reference
A WordPress REST API Reference managing plugin.

## Installing.
Add this plugin to your WordPress install. This plugin requires version 4.7 or higher. [If you need help manually installing a plugin check out this great guide.](https://codex.wordpress.org/Managing_Plugins#Manual_Plugin_Installation) You will need Node.js with NPM installed locally on your system. Open your command line shell.
Navigate to the directory where you installed the plugin. Run the following commands:

```
npm install
npm run build
```

While working on the reference you can alternatively run `npm run watch` to have the distribution rebuild when files are changed.

## Using.
Once the plugin is active navigate to `mydomain.com/rest-reference`. You will see your REST API reference graphically represented. Currently there is no CSS styling really other than what is loaded by the theme in the `wp_head()` call.

## Contributing.
wp-rest-api-reference is [hosted here on GitHub.](https://github.com/BE-Webdesign/wp-rest-api-reference) Test coverage is handled in Tape.js. Tests should follow the formatting already setup. There is an expected value and an actual value; test to make sure the actual value matches the expected. The PHP side of things currently does not have any tests. The PHP side only bootstraps the plugin using functionality that core unit tests.

The wp-rest-api-reference is written primarily in JavaScript. It uses React/Redux at the UI layer, ad hoc JavaScript at the Application level, and PHP for bootstrapping the browser from WordPress. Each layer can be replaced by something else in case that is decided to be the road forward in the future.

## Roadmap.
Each item in the list below will continually evolve and share overlap with other items, however the general project direction will follow these items.

-Build basic architecture. ( Redux/React UI, Presenter Layer to talk to UI and application, Application layer written purely in JavaScript without a framework. Persistence Layer will eventually need to talk to WordPress and be handled by WordPress. This for the most part is done. )
-Build UI. ( Figure out the best way to display this data. Ideally, it would be cool to have this somehow render in the active theme. )
-Build Application Layer persistence APIs. ( These will become the interfaces for saving data. Their implementation will be fleshed out in the next step. )
-Build Persistence Layer. ( Figure out whether this data will be stored in WordPress somehow or potentially somewhere else. )
