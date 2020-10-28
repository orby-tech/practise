#include <iostream>               // подключаем заголовочный файл iostream
using namespace std;

class Students {
    public:
        std::string name;
        std::int16_t age;

        void set_name( std::string new_name ) {
            name = new_name;
        }
        string get_name( ) {
            return name;
        }
};

int main()                          // определяем функцию main
{            
    Students student;
    std::string name;

    std::cout << "Last name: ";
    getline(std::cin, name);
    student.set_name(name);
    std::cout << student.get_name();
                          
    std::cout << "Hello World!";
    return 0;                       // выходим из функции
}        