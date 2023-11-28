CI Setup for a python project

Linting - This helps to analyse code in order to check for potential errors. Pycodestyle is a recommended tool to check if python code conforms to standard style. Linting also makes sure the code is easy to read.

Testing - Running tests automatically, with every change committed, is a great way to catch bugs. A failing test automatically causes the build to fail. It will draw your attention to the problems revealed by testing, and the failed build will make you fix the bug you introduced. Tests don’t guarantee that your code is free of bugs, but it does guard against a lot of careless changes. Pytest is great tool for unit testing.

Building - building code means taking the raw source code, and everything necessary for its execution, and translating it into a format that computers can run directly. Python is an interpreted language, so its “build” mainly revolves around test execution rather than compilation.

Continuous Integration - CircleCI is a good external continuous integration service which offers three hosting options: cloud, server and self-hosted runners. The choice for this project is cloud based, this is because CircleCI will manage the setup, infrastructure, security, and maintenance of the project. After all the setup is done, the final step of a CI pipeline is to create a deployable artifact. An artifact represents a finished, packaged unit of work that is ready to be deployed to users or included in complex products. A step should be added in CircleCI to package the library and store that artifact where other processes can pick it up. 

Continuous deployment - once the code is tested and built into a deployable artifact, it is then deployed to production, and the live application is updated with your changes.