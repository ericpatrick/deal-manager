# Deal Manager

Project intended for testing with Angular. This includes basic and advanced concepts of Angular, such as lazy load, Observables, custom form controls and services.

## prerequisites

Nodejs: 18+
Angular: 16.x

## Installation and running locally

To install project dependencies, run the following command:

`npm install`

After that, just run the command `npx ng serve` to compile and run the server. The project will run at [http://localhost:4200](http://localhost:4200).

## Project structure

The project folder structure, in general, follows the standard already established by Angular. However, an addition was made to this structure in order to make the project more organized. Inside the `app` folder we have subfolders that refer to Angular modules. The `shared` module, in specific, is the module responsible for gathering artifacts that are common to the entire application. Within each module we have the `components`, `models` and `services` folders. The `components` folder contains the components of the respective module, just as `services` contains the services and `models` contains the application domain models and auxilar models used inside components.

## Generating artifacts

To generate project artifacts in development mode, run the `npx ng build` command. The execution result will be in the `dist` folder in the project root. This can be served by the web server of your choice.

To compile the project in production mode, simply add the `--prod` parameter to the `npx ng build` command.

## Improvement points
- Perform unit tests on components
