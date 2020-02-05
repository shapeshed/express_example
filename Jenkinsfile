pipeline {
  agent {
    docker {
      image 'node:8-alpine'
      args 'Args: -p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      environment {
        Build = ''
      }
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

  }
  environment {
    Start = ''
  }
}