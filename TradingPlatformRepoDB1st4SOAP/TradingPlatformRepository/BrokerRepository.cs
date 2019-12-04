using Pocos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradingPlatformRepository
{
    public class BrokerRepository : IRepository<broker>
    {
        private readonly TradingPlatformEntities context;

        public BrokerRepository()
        {
            context = new TradingPlatformEntities();
        }
        public void CreateAddNewRow(broker entity)
        {
            throw new NotImplementedException();
        }

        public void DeleteRow(broker entity)
        {
            throw new NotImplementedException();
        }

        public void DeleteRow(int id)
        {
            throw new NotImplementedException();
        }

        public virtual List<broker> ReadGetAllRows()
        {
            List<broker> allBrokers = new List<broker>();
            foreach (var broker in context.brokers)
            {
                allBrokers.Add(new broker()
                {
                    broker_id = broker.broker_id,
                    first_name = broker.first_name,
                    last_name = broker.last_name
                });
            }
            return allBrokers;
        }

        public broker ReadGetRowById(int id)
        {
            broker broker = context.brokers.Find(id);
            return broker;
        }

        public void UpdateRow(broker entity)
        {
            throw new NotImplementedException();
        }
    }
}
