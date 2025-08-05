pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin:$PATH"
        imagename = "anusha1473/my-diary-frontend"
        registryCredential = 'docker'
        dockerImage = ''
        DOCKERHUB_CREDENTIALS= credentials('docker') 
    }
    stages {
        stage('Checkout') {
            steps {
              checkout scmGit(branches: [[name: '*/profile']], extensions: [], userRemoteConfigs: [[credentialsId: 'my_diary_backend', url: 'https://github.com/AnushaUppuu/my-diary-frontend.git']])
            }
        }
        stage('Building image') {
          steps{
           script {
             dockerImage = docker.build imagename
           }
          }
        }
        stage('Install dependencies') {
            steps {
               sh 'npm install'
            }
        }
        stage('Test') {
            steps {
               sh 'npm test'
            }
        }
          stage('Build') {
            steps {
               sh 'CI=false npm run build'
            }
        }
       
    }
}    