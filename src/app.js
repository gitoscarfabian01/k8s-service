const express = require('express');
const app = express();
const SERVICE_VERSION = process.env.SERVICE_VERSION || '1.0.0';

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', version: SERVICE_VERSION });
});

app.get('/ready', (req, res) => {
  res.status(200).json({ ready: true });
});

app.get('/api/items', (req, res) => {
  res.json([
    { id: 1, name: 'Item A', description: 'First item' },
    { id: 2, name: 'Item B', description: 'Second item' },
    { id: 3, name: 'Item C', description: 'Third item' },
  ]);
});

app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const items = [
    { id: 1, name: 'Item A', description: 'First item' },
    { id: 2, name: 'Item B', description: 'Second item' },
    { id: 3, name: 'Item C', description: 'Third item' },
  ];
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

module.exports = app;
