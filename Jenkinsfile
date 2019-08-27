pipeline {
  agent any
  stages {
    stage('Docker build') {
      steps {
        sh 'docker build -t webapp:$BUILD_NUMBER .'
      }
    }
  }
  environment {
    registryCredential = 'acr'
    registry = 'demo2sdfasdfasdf.azurecr.io/webapp'
  }
}