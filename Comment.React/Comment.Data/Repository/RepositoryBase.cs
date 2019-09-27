using Comment.React.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Comment.React.Repository
{
    public interface IRepository<T> where T : class
    {
        // Marks an entity as new
        T Add(T entity);

        // Marks an entity as modified
        void Update(T entity);

        // Marks an entity to be removed
        T Delete(int id);

        // Get an entity by int id
        T GetById(int id);

        T GetSingleByCondition(Expression<Func<T, bool>> expression);

        IEnumerable<T> GetAll();

        IEnumerable<T> GetMulti(Func<T, bool> predicate);
        void SaveChange();
    }

    public class RepositoryBase<T> : IRepository<T> where T : class
    {
        #region Properties

        protected CommentDbContext _dataContext;
        protected readonly DbSet<T> dbSet;
        public RepositoryBase(CommentDbContext dataContext)
        {
            _dataContext = dataContext;
            dbSet = _dataContext.Set<T>();
        }

        #endregion Properties

        #region Implementation

        public virtual T Add(T entity)
        {
            return dbSet.Add(entity).Entity;
        }

        public virtual void Update(T entity)
        {
            dbSet.Attach(entity);
            _dataContext.Entry(entity).State = EntityState.Modified;
        }

        public virtual T Delete(int id)
        {
            var entity = dbSet.Find(id);
            return dbSet.Remove(entity).Entity;
        }


        public virtual T GetById(int id)
        {
            return dbSet.Find(id);
        }

        public IEnumerable<T> GetAll()
        {
            return _dataContext.Set<T>().AsQueryable();
        }

        public T GetSingleByCondition(Expression<Func<T, bool>> expression)
        {
            return _dataContext.Set<T>().FirstOrDefault(expression);
        }

        public virtual IEnumerable<T> GetMulti(Func<T, bool> predicate)
        {
            return _dataContext.Set<T>().Where<T>(predicate).AsQueryable<T>();
        }

        public void SaveChange()
        {
            _dataContext.SaveChanges();
        }

        #endregion Implementation
    }
}