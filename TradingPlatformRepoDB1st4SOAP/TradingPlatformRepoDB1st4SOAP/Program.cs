using Pocos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradingPlatformRepoDB1st4SOAP
{
    class Program
    {
        static void Main(string[] args)
        {
            TradingPlatformEntities context = new TradingPlatformEntities();

            foreach (var broker in context.brokers)
            {
                Console.WriteLine("Id: {0}, Name: {1} {2}", broker.broker_id, broker.first_name, broker.last_name);
                Console.ReadLine();
            }

        }
    }
}
