pipeline {
  agent any
  stages {
    stage('Docker build') {
      steps {
        sh 'docker build -t webapp:$BUILD_NUMBER .'
      }
    }
    stage('Docker push') {
      steps {
        sh '''docker login ${registry} --username $user --password $pass
docker tag webapp:$BUILD_NUMBER ${registry}
docker push ${registry}'''
      }
    }
  }
  environment {
    registryCredential = 'acr'
    registry = 'demo2sdfasdfasdf.azurecr.io/webapp'
  }
}