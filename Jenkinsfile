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
        withCredentials(bindings: [usernamePassword(credentialsId: 'acr', passwordVariable: 'pass', usernameVariable: 'user')]) {
          sh '''docker login ${registry} --username $user --password $pass
docker tag webapp:$BUILD_NUMBER ${registry}:$BUILD_TAG
docker push ${registry}:$BUILD_TAG'''
        }

      }
    }
  }
  environment {
    registry = 'demo2sdfasdfasdf.azurecr.io/webapp'
  }
}