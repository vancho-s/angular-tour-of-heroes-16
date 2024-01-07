# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Add prettier plugin:
https://github.com/prettier/eslint-plugin-prettier

## Migrate to jest:
https://jestjs.io/docs/getting-started
https://medium.com/edataconsulting/how-to-switch-from-karma-to-jest-using-angular-7335588ffdf0

## Run Json Server
npm install --save-dev json-server
npm run json


## Run Sonar
https://docs.sonarsource.com/sonarcloud/enriching/test-coverage/javascript-typescript-test-coverage/
https://docs.sonarsource.com/sonarqube/latest/project-administration/analysis-scope/
https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/branches/branch-analysis/
https://docs.sonarsource.com/sonarcloud/enriching/branch-analysis-setup/

npm install -g @angular/cli
export SONAR_TOKEN=token

export http_proxy=http://go2web.dguv.de:3128/
export https_proxy=$http_proxy
export ftp_proxy=$http_proxy
export rsync_proxy=$http_proxy
export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"

Sonar Proxy configs:
-DproxySet=true \
-Dhttps.proxyHost=go2web.dguv.de \
-Dhttps.proxyPort=3128 \

mvn clean verify org.sonarsource.scanner.maven:sonar-maven-plugin:sonar \
-Dsonar.host.url=https://sonarcloud.io \
-Dsonar.organization=vancho-s \
-Dsonar.projectKey=vancho-s_angular-tour-of-heroes-16 \
-Dsonar.sourceEncoding=UTF-8 \
-Dsonar.sources=. \
-Dsonar.javascript.lcov.reportPaths=./coverage/lcov.info \
-Dsonar.test.inclusions=src/**/*.spec.ts \
-Dsonar.exclusions=scripts/**/*.js \
-Dsonar.qualitygate.wait=true \
-Dsonar.branch.name=dev-feature
-Dsonar.branch.target=dev \
