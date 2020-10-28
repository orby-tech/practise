cc=g++

all: hello

hello: helloWorld.o
	$(cc) -o hello helloWorld.cpp

helloWorld.o: helloWorld.cpp
	$(cc) -c helloWorld.cpp


clean:
	rm -rf *.o hello