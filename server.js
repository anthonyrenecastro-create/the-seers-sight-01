require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'the-singularity-point-store',
    printful: {
      configured: Boolean(process.env.PRINTFUL_API_KEY),
      storeId: process.env.PRINTFUL_STORE_ID || null,
      webhookSecretConfigured: Boolean(process.env.PRINTFUL_WEBHOOK_SECRET)
    }
  });
});

app.post('/api/printful/webhook', (req, res) => {
  const signature = req.headers['x-printful-signature'];
  const secret = process.env.PRINTFUL_WEBHOOK_SECRET;

  if (secret && signature !== secret) {
    return res.status(401).json({ ok: false, error: 'Invalid Printful signature' });
  }

  const payload = req.body || {};
  console.log('Printful webhook received:', JSON.stringify(payload, null, 2));
  return res.status(200).json({ ok: true, received: true });
});

app.get('/api/printful/products', async (req, res) => {
  if (!process.env.PRINTFUL_API_KEY) {
    return res.status(400).json({
      ok: false,
      error: 'PRINTFUL_API_KEY is not configured.'
    });
  }

  try {
    const response = await fetch('https://api.printful.com/store/products', {
      headers: {
        Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ ok: false, error: data });
    }

    res.json({ ok: true, products: data.result || [] });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
