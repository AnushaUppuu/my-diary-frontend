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
        stage('Push to Docker Hub') {         
           steps{                            
	         sh ' docker login -u anusha1473 -p Xing@1473' 
             echo 'Login Completed '  
             sh 'docker push anusha1473/my-diary-frontend'                
	        echo 'Push completed'            
           }           
        }
       
       
    }
}    