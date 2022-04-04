# SETUP WITH PARCEL

Steps to setup a project with [Parcel](https://parceljs.org).

## Setup a project (git)

Init a git project on [GitHub](https://github.com/) and clone it locally.

`git clone https://github.com/poboxjDeveloper/100DAYSOFCODE.git`

## Init a yarn (berry) project

Install the latest yarn version (currently 3.2.0) into the project.

- Info on [devdocs](https://devdocs.io/yarn~berry/getting-started/install)

- Tutorial on [yarn 3 installation](https://javascript.plainenglish.io/getting-started-with-yarn-3-and-typescript-125e7b537e6c)

- Official documentation on [installing latest yarn version](https://yarnpkg.com/getting-started/install).

**yarn classic need to be installed on the pc to be able to install version 3**

`yarn set version stable`

Init a yarn project

## Add parcel

Install Version 2 of parcel:

`yarn add --dev parcel`

Start creating files.

`ni index.html`

Read the documentation

- using typescript -> [see migration](https://parceljs.org/getting-started/migration/)

  - `yarn add @parcel/config-default @parcel/transformer-typescript-tsc --dev`
  - create a `.parcelrc` file to change the transpilation of typescript

  ```json
  {
    "extends": "@parcel/config-default",
    "transformers": {
      "*.{ts,tsx}": ["@parcel/transformer-typescript-tsc"]
    }
  }
  ```
