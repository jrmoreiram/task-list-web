using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TaskListWebAPI.Models;

namespace TaskListWebAPI
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            //Configuration a CORS policy at application startup.
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            services.AddDbContext<TaskContext>(opt =>
                opt.UseInMemoryDatabase("TaskList"));
            services.AddMvc()
                    .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseCors("MyPolicy");
            app.UseMvc();
        }
    }
}
