pipeline {
    agent any
    tools {
        maven "maven-3.6.2"
        jdk "jdk8"
    }
    triggers {
        pollSCM "H/15 * * * *"
    }
    parameters {
        booleanParam(
                name: "RELEASE",
                description: "Build a release from current commit.",
                defaultValue: false)
    }
    stages {

        stage("CI Build") {
            when {
                allOf {
                    not {
                        expression { params.RELEASE }
                    }
                    not {
                        branch "development"
                    }
                    not {
                        branch "master"
                    }
                }
            }
            steps {
                withMaven(maven: 'maven-3.6.2') {
                    sh "mvn -B clean package"
                }
            }
        }

        stage("Build & Deploy snapshot") {
            when {
                allOf {
                    not {
                        expression { params.RELEASE }
                    }
                    anyOf {
                        branch "development"
                        branch "master"
                    }
                }
            }
            steps {
                withMaven(maven: 'maven-3.6.2') {
                    sh "mvn -B clean deploy"
                }
            }
        }

        stage("Release") {
            when {
                allOf {
                    branch "master"
                    expression { params.RELEASE }
                }
            }
            steps {
                withMaven(maven: 'maven-3.6.2') {
                    sh "mvn -B clean release:clean"
                    sh "mvn -B clean release:prepare"
                    sh "mvn -B clean release:perform"
                }
            }
        }

    }

    post {
        always {
            emailext (
                    from: "Jenkins <jenkins@altron.com>",
                    body: "Check the console output at ${env.BUILD_URL} to view the results.",
                    recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
                    subject: "Jenkins Build ${currentBuild.currentResult}: Job ${env.JOB_NAME}",
                    attachmentsPattern: "README.md"
            )
            deleteDir()
        }
    }

}