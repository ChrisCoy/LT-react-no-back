// https://github.com/koopla/NodeServices

using Microsoft.AspNetCore.NodeServices;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddNodeServices();

var app = builder.Build();

app.MapGet("/static-page", async (INodeServices nodeServices) => {
    var html = await nodeServices.InvokeAsync<string>("./NodeApp/dist/GenerateStaticPage", "Ola do c#");
    return Results.Content(html, "text/html");
});

app.MapGet("/pdf", async (INodeServices nodeServices) => {
    var pdf = await nodeServices.InvokeAsync<Stream>("./NodeApp/dist/GeneratePdf");
    return Results.File(pdf, "application/pdf");
});

app.MapGet("/email", async (INodeServices nodeServices) => {
    var html = await nodeServices.InvokeAsync<string>("./NodeApp/dist/GenerateEmail");
    return Results.Content(html, "text/html");
});

app.MapGet("/", () => {
    var html = "<a href='/static-page'>static-page</a><br>" +
    "<a href='/pdf'>pdf</a><br>" +
    "<a href='/email'>email</a>";

    return Results.Content(html, "text/html");
});

app.Run();