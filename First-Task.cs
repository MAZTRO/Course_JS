using System;

namespace boom
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter your User data, and then press Enter.");
            Console.WriteLine("#_________________________________________#\n");

            // Declaring the variables
            Console.Write("Your Name: ");
            var yourName = Console.ReadLine();
            string yourLastname;
            Double age;

            Console.Write("Your Last Name: ");
            yourLastname = Console.ReadLine();
            Console.Write("Your Age: ");
            age = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("\n-----------------------------------\n");

            // Print that the program does
            Console.WriteLine("Hello {0} {1} welcome to C# Code", yourName, yourLastname);
            Console.WriteLine("You are {0} years old", age);
        }
    }
}
