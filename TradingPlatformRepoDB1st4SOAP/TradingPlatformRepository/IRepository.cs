using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradingPlatformRepository
{
    interface IRepository<T>
    {
        void CreateAddNewRow(T entity);
        List<T> ReadGetAllRows();
        T ReadGetRowById(int id);

        void UpdateRow(T entity);

        // Overloading
        void DeleteRow(T entity);
        void DeleteRow(int id);
    }
}
