pipeline {

  agent any        // where the pipeline runs

 tools {

        nodejs 'NodeJS'

    }

  stages {

    stage('Build') {

      steps {

       // bat 'npm install'

       // bat 'npx playwright test'

        bat 'npm install'

        bat 'npx playwright test '

      }

    }

  }

}




