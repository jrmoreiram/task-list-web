using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using TaskListWebAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaskListWebAPI.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    [ApiController]
    public class TaskListController : ControllerBase
    {
        private readonly TaskContext _context;

        public TaskListController(TaskContext context)
        {
            _context = context;

            if (_context.Tasks.Count() == 0)
            {
                // Create a new Task if collection is empty,
                // which means you can't delete all Tasks.
                _context.Tasks.Add(new Tasks
                {
                    Title = "Tarefa 1",
                    Description = "Tarefa teste 1",
                    Status = true,
                    CreationDate = DateTime.Now.ToUniversalTime()
                         .ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'Z'")
                });

                _context.SaveChanges();
            }
        }

        [HttpGet]
        [EnableCors("MyPolicy")]
        public ActionResult<List<Tasks>> GetAll()
        {
            return _context.Tasks.ToList();
        }

        [HttpGet("{id}", Name = "GetTasks")]
        [EnableCors("MyPolicy")]
        public ActionResult<Tasks> GetById(long id)
        {
            var task = _context.Tasks.Find(id);
            if (task == null)
            {
                return NotFound();
            }
            return task;
        }

        [HttpPost]
        [EnableCors("MyPolicy")]
        public IActionResult Create(Tasks task)
        {
            _context.Tasks.Add(task);
            _context.SaveChanges();

            return CreatedAtRoute("GetTasks", new { id = task.Id }, task);
        }

        [HttpPut("{id}")]
        [EnableCors("MyPolicy")]
        public IActionResult Update(long id, Tasks task)
        {
            var tasks = _context.Tasks.Find(id);
            if (tasks == null)
            {
                return NotFound();
            }

            tasks.Status = task.Status;
            tasks.Title = task.Title;

            _context.Tasks.Update(tasks);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        [EnableCors("MyPolicy")]
        public IActionResult Delete(long id)
        {
            var task = _context.Tasks.Find(id);
            if (task == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(task);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
