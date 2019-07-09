# Fibonacci Challenge
# Introduction
# The Fibonacci Sequence is the series of numbers: 1, 1, 2, 3, 5, 8, 13, 21, 34, ... The next number is found by adding up the two numbers before it. Example: the next number in the sequence above is 21 + 34 = 55

# The Problem Statement
# We want to write a function that takes n as an argument and prints the nth Fibonacci number in the sequence. Think of n being the step in the sequence.

# Example
# Here are some example inputs and their expected return values:

# If n = 1, output should be 1 If n = 2, output should be 1 If n > 2, output should be sum of the previous two values

# def fibonacci(n)
#   # ...
# end

# fibonacci(7)
# # => 13
# You can place your solution in the fibonacci.rb file that's provided in this repo.

# Bonus
# How could we refactor your solution to use recursion?

# def fibonacci(n)
#   arr = [1,1]
#   i = 2
#   while i < n
#     arr << arr[i - 2] + arr[i - 1]
#     i += 1
#   end
#   arr[n - 1]
# end


def fibonacci(n)
  if n <= 2
    return 1
  end
  fibonacci(n - 1) + fibonacci(n - 2)
end

fibonacci(7)
