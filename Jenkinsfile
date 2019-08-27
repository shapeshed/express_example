pipeline {
  agent any
  stages {
    stage('Build') {
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
    registry = 'demo2sdfasdfasdf.azurecr.io/webapp'
  }
}