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
docker tag webapp:$BUILD_NUMBER ${registry}
docker push ${registry}'''
        }

      }
    }
  }
  environment {
    registry = 'demo2sdfasdfasdf.azurecr.io/webapp'
  }
}