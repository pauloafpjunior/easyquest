# EasyQuest
EasyQuest is an open-source project with the goal of creating a tool for helping Moodle users to create new questions in an easy and more intuitive way.

## Features
EasyQuest is in its early development stage, however there are many features that we plan to deliver:
* Create/edit questions of the following types:
  * Multiple choice questions
  * True/false questions
  * Descritive questions
* Allow text formating
* Supply question feedbacks
* Export in XML Moodle format

## Use cases (in portuguese)
The following use cases are addressed by this project.
* [Create questions](requirements/create-questions-usecase.md)
* [Export questions](requirements/export-questions-usecase.md)

## How to run
The main tool for the development of this project is the [React JavaScript library](https://reactjs.org/docs/getting-started.html). Hence, there are two ways of running it:

### Docker and VSCode (recommended for Linux and macOS)
Running the project with Docker Visual Studio Code (VSCode) Container is the recommended way, because using it you do not need to worry about installing any dependencies or having conflict with different versions for different projects. In summary, your code will run in a controlled and ideal environment. [Click here](https://code.visualstudio.com/docs/remote/containers) to learn more about VSCode Containers.

Follow this steps to run the project in a Docker container:
* Install [Docker](https://docs.docker.com/get-docker/)
    * You can learn how to install Docker in their official website. Docker is available for Linux, Windows and macOS.
    * In case you are running Linux, pay attention to the [Linux postinstall](https://docs.docker.com/engine/install/linux-postinstall/) instructions.
* Install [VSCode](https://code.visualstudio.com/download) and the [Remote Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
* Clone this repository and open the directory with VSCode.

When you open the repository folder with VSCode, you will be suggested to open the repository inside a Docker container, so you just need to click 'Reopen in Container'. You can do the same by pressing 'Ctrl + Shift + P', typing 'reopen in container' and then choosing the 'Remote-Containers: Reopen in Container' action. At the first time, it can take several minutes to build the container.
After building the container, you can just install the project dependencies by running `yarn` in the VSCode terminal. After this, run the project with the command `yarn start`.

### Running in your OS  (recommended for Windows)
You can also install the dependencies in your own machine. In this case you just neeed to:
* Install [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable).
* Clone this repository.
* Run `yarn` in your terminal at the repository folder to install the dependencies.
* Run `yarn start` in your terminal at the repository folder to run the project.