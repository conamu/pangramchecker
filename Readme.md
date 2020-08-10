# Pangramchecker

## What is this project about?
#### The Pangramchecker project, as it's name states, checks a given sentence input by the user for pangrams.
#### If it detects, that every character of the alphabet is in the sentence at least once, it is a pangram!
#### But if it even detects that every character of the alphabet is in the sentence exactly one time, we have a perfect pangram, which is even better!

## Simple install instructions

#### Clone this repository into any directory on your PC where you will find it.
#### I suggest the desktop f.e..
#### If you don't have Git installed or don't know what cloning is, you can also just download the zipfile and unpack it.
#### If you have Git installed, use: 
`git clone https://github.com/conamu/pangramchecker.git`

#### After cloning/downloading the files, just double click the index.html file.
#### If the browser doesn't open your file directly, try opening it like this:
#### Right click on the index.html >> Open with >> *Your browser of choice*

## Want to run it as a Docker container?
### You can!
### First, install Docker:
### On Windows:
#### Follow [this link](https://hub.docker.com/editions/community/docker-ce-desktop-windows/) and download the executable file to install docker on your machine.
### On Ubuntu:
#### Run:
```
sudo apt-get update
sudo apt-get install docker.io -y
```
#### Now you are ready to start up the container!
#### Just run:
`docker run -d -p 80:80 --name pangramchecker --restart always conamu470/pangramchecker:latest`

#### Now you should be able to type "localhost" into your browser address bar.
#### Keep in mind: If you don't run the container on your local machine, you have to use the ip address of the machine it is running on.
