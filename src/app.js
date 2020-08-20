const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.status(200).json(repositories);
});

app.post("/repositories", (request, response) => {

  const { title, url, techs } = request.body;

  const repository = { id: uuid(), title, url, techs, likes: 0 };

  repositories.push(repository);

  return response.status(200).json(repository);
});

app.put("/repositories/:id", validationId, (request, response) => {

  const { title, url, techs } = request.body;
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  const repository = { id, title, url, techs, likes: repositories[repositoryIndex].likes };

  repositories[repositoryIndex] = repository;

  return response.json(repositories[repositoryIndex]);
});

app.delete("/repositories/:id", validationId, (request, response) => {

  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", validationId, (request, response) => {

  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  repositories[repositoryIndex].likes++;

  return response.json(repositories[repositoryIndex]);

});

function validationId(request, response, next) {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository not found.' });
  }
  
  return next();

};
module.exports = app;
