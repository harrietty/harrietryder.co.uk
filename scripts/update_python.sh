#!/bin/bash

mkdir ./software
cd ./software
wget https://www.python.org/ftp/python/2.7.9/Python-2.7.9.tgz

# Now we are going to unpack the tar and install python
tar -xvf Python-2.7.9.tgz
cd Python-2.7.9
./configure
make
sudo make install
python --version
sudo apt-get install libffi-dev libssl-dev