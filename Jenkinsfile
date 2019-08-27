pipeline {
  agent any
    stages {
  stage('Deploy app to development') {
      when {
          branch 'Development'
      }
      stage('Docker build') {
        steps {
          sh 'docker build -t webapp:$BUILD_NUMBER .'
        }
      }
      stage('Docker push') {
        steps {
          withCredentials(bindings: [usernamePassword(credentialsId: 'acr', passwordVariable: 'pass', usernameVariable: 'user')]) {
            sh '''docker login ${registry}:dev --username $user --password $pass
  docker tag webapp:$BUILD_NUMBER ${registry}:dev
  docker push ${registry}:dev'''
          }

        }
    }
  }
  stage('Deploy app to master') {
      when {
          branch 'master'
      }
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
    }
  environment {
    registry = 'youracrname.azurecr.io/webapp'
  }
}
