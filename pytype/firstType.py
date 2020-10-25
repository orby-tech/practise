from typing import Iterator, List, Iterable, TypeVar, Callable, Generator


def fib(n: int) -> Iterator[int]:
    a, b = 0, 1
    while a < n:
        yield a
        a, b = b, a + b

fib(10)
#fib("10")
l = [] #type: List[List[ float ]]

def f(id: int) -> Callable:
    return fib

val = (f(10)(10)) #type: Generator

print(next(val))
val = 1