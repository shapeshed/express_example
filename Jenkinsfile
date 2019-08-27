pipeline {
  agent any
  stages {
    stage('Docker build') {
      steps {
        sh 'sudo docker build -t webapp .'
      }
    }
  }
}