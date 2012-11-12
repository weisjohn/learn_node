mkdir -p ~/src && cd ~/src
git clone git://github.com/joyent/node.git
cd node
./configure
make
make install