FROM    centos:centos6

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
RUN     yum install -y epel-release
# Install Node.js and npm
RUN     yum install -y nodejs npm

# Install app dependencies
COPY . /src
RUN cd /src && npm install

EXPOSE  8080
CMD ["node", "/src/index.js"]
