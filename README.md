# Isolated React Bundles
**Currently in development**

This repository contains a `webpack` set up that allows to generate independent 
bundle scripts with a minimal `react` configuration.

Those bundles are intended to be used in static web pages where `react` components
can be installed as widgets. Each bundle contains at least the `react` library 
and components you create along what module you like to include.

This project arises from the need for reusing react components in static web sites.
Think those components as widgets where can be mounted whenever you like on a
web page.

## TODO
- [] Split assets images by bundle.
- [] Set up `eslint`.
- [] Extract styles from index page.
