# EasyQuest
EasyQuest is an open source project with the objective of creating an tool for helping Moodle users to create new questions in an easy and more intuitive way.

## Features
EasyQuest is in its early development stage but this are some features that we plan on delivering:
* Create/edit questions
* Multiple choice questions
* True/false questions
* Descritive questions
* Text formating
* Question feedback
* Export in XML Moodle format


## How to run
The main tool for the development of this project is the React framework, and you have two ways of running it:
### Docker and VSCode (recommended)
Running the project with Docker VSCode devcontainers is the recommended way because with it you don't need to worry about installing any dependencies in your SO or about having conflict with different versions for different projects and you can assure that the code is running in a controlled and ideal environment. [Click here](https://code.visualstudio.com/docs/remote/containers) to learn more about Visual Studio Code Containers.

Follow this steps to run the project in a Docker container:
* Install [Docker](https://docs.docker.com/get-docker/)
    * You can learn how to install docker in their official website, Docker is available for Linux, Windows and macOS.
    * In case you are running Linux, pay attention to the [Linux postinstall](https://docs.docker.com/engine/install/linux-postinstall/) instructions.
* Install [VSCode](https://code.visualstudio.com/download) and the [Remote Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
* Clone this repository in your machine and open the directory with VSCode.

When you open the repository folder with VSCode, you will be suggested to open the repository inside a Docker container, so you just need to click 'Reopen in Container' in the pop up message. You can do the same by pressiong 'Ctrl + Shift + P', type 'reopen in container' and then click the 'Remote-Containers: Reopen in Container' action. At the first time it can take csme time to build the container.
After building the container you can just install the project dependencies by running `yarn` in the VSCode terminal and when it's finished you can run the project with the command `yarn start`.

### Running in your SO
You can also install the dependencies in your own machine. In this case you just neeed to:
* Install [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable).
* Clone this repository.
* Run `yarn` in your terminal at the repository folder to install the dependencies.
* Now run `yarn start` in your terminal at the repository folder to run the project.
